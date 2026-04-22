import { google } from "googleapis";

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

// READ CUSTOMER MASTER

export async function getSheetData() {
  const response = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Customer Master!A:H",
  });

  return response.data.values || [];
}

// WRITE DAILY DELIVERY ENTRY

export async function addDeliveryEntry(rowData) {
  const today = rowData[0];
  const customerId = rowData[1];

  const existing = await sheets.spreadsheets.values.get({
    spreadsheetId: process.env.GOOGLE_SHEET_ID,
    range: "Daily Delivery!A:G",
  });

  const rows = existing.data.values || [];

  let rowIndex = -1;

  rows.forEach((row, index) => {
    if (row[0] === today && row[1] === customerId) {
      rowIndex = index + 1;
    }
  });

  if (rowIndex !== -1) {
    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Daily Delivery!A${rowIndex}:G${rowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });
  } else {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Daily Delivery!A:G",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [rowData],
      },
    });
  }
}

export async function updateMonthlyPayment(
  customerId,
  name,
  cans,
  amount
) {
  const sheets = google.sheets({
    version: "v4",
    auth,
  });

  const today = new Date();

  const monthKey = today.toLocaleString("en-GB", {
    month: "short",
    year: "numeric",
  });

  const response =
    await sheets.spreadsheets.values.get({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Monthly Payments!A:E",
    });

  const rows = response.data.values || [];

  let existingRowIndex = -1;

  rows.forEach((row, index) => {
    if (row[0] === monthKey && row[1] === customerId) {
      existingRowIndex = index + 1;
    }
  });

  if (existingRowIndex !== -1) {
    const currentCans = Number(
      rows[existingRowIndex - 1][3] || 0
    );
    const currentAmount = Number(
      rows[existingRowIndex - 1][4] || 0
    );

    await sheets.spreadsheets.values.update({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: `Monthly Payments!D${existingRowIndex}:E${existingRowIndex}`,
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[currentCans + cans, currentAmount + amount]],
      },
    });
  } else {
    await sheets.spreadsheets.values.append({
      spreadsheetId: process.env.GOOGLE_SHEET_ID,
      range: "Monthly Payments!A:E",
      valueInputOption: "USER_ENTERED",
      requestBody: {
        values: [[monthKey, customerId, name, cans, amount]],
      },
    });
  }
}
