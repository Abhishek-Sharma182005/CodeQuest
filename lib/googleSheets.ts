import { GoogleSpreadsheet } from "google-spreadsheet";
import { GoogleAuth } from "google-auth-library";
import dotenv from "dotenv";

// Load environment variables
dotenv.config();

const sheetId = process.env.GOOGLE_SHEET_ID!;
const auth = new GoogleAuth({
  credentials: {
    client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL!,
    private_key: process.env.GOOGLE_PRIVATE_KEY!.replace(/\\n/g, "\n"),
  },
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

// Initialize Google Sheets API
const doc = new GoogleSpreadsheet(sheetId, auth);

export async function connectGoogleSheet() {
  try {
    await doc.loadInfo(); // Loads document properties and worksheets
    console.log(`Connected to Google Sheet: ${doc.title}`);
  } catch (error) {
    console.error("Google Sheets API Error:", error);
  }
}
