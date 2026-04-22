import {
  addDeliveryEntry,
  updateMonthlyPayment,
} from "../../lib/googleSheets";

export default async function handler(req, res) {
  try {
    const {
      customerId,
      name,
      area,
      visited,
      status,
      note,
    } = req.body;

    const today =
      new Date().toLocaleDateString("en-GB");

    await addDeliveryEntry([
      today,
      customerId,
      name,
      area,
      visited ? "YES" : "NO",
      status || "PENDING",
      note || "",
    ]);

    if (status === "DELIVERED") {
      const cans = req.body.cans || 0;
      const amount = req.body.amount || 0;

      if (cans > 0) {
        await updateMonthlyPayment(
          customerId,
          name,
          cans,
          amount
        );
      }
    }

    res.status(200).json({
      success: true,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      success: false,
    });
  }
}
