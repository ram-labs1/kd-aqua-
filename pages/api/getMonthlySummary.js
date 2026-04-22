import { google } from "googleapis";

export default async function handler(req, res) {
  try {
    const { customerId } = req.query;

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const sheets = google.sheets({
      version: "v4",
      auth,
    });

    const response = await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Monthly Payments!A:E",
    });

    const rows = response.data.values || [];

    const currentMonth = new Date().toLocaleString("en-GB", {
      month: "short",
      year: "numeric",
    });

    const customerRow = rows.find(
      (row) => row[0] === currentMonth && row[1] === customerId
    );

    if (!customerRow) {
      return res.status(200).json({
        success: true,
        cans: 0,
        amount: 0,
      });
    }

    res.status(200).json({
      success: true,
      cans: Number(customerRow[3]),
      amount: Number(customerRow[4]),
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false });
  }
}