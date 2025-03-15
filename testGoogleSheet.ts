import { GoogleSpreadsheet } from "google-spreadsheet";
import { JWT } from "google-auth-library";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables

const sheetId = process.env.GOOGLE_SHEET_ID!;
const clientEmail = process.env.GOOGLE_CLIENT_EMAIL!;
const privateKey = process.env.GOOGLE_PRIVATE_KEY!;

// Ensure private key has proper formatting
const formattedPrivateKey = privateKey.replace(/\\n/g, "\n");

const auth = new JWT({
  email: clientEmail,
  key: formattedPrivateKey,
  scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});

const doc = new GoogleSpreadsheet(sheetId, auth);

async function testGoogleSheet() {
  try {
    await doc.loadInfo();
    console.log(`✅ Connected to Google Sheet: ${doc.title}`);
  } catch (error) {
    console.error("❌ Google Sheets API Error:", error);
  }
}

testGoogleSheet();
