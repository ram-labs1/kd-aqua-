import { getSheetData } from "../../lib/googleSheets";

export default async function handler(req, res) {
  try {
    const data = await getSheetData();

    res.status(200).json({
      success: true,
      data,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      success: false,
      data: [],
    });
  }
}