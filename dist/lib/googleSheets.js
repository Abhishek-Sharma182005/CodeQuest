"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connectGoogleSheet = connectGoogleSheet;
const google_spreadsheet_1 = require("google-spreadsheet");
const google_auth_library_1 = require("google-auth-library");
const dotenv_1 = __importDefault(require("dotenv"));
// Load environment variables
dotenv_1.default.config();
const sheetId = process.env.GOOGLE_SHEET_ID;
const auth = new google_auth_library_1.GoogleAuth({
    credentials: {
        client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    },
    scopes: ["https://www.googleapis.com/auth/spreadsheets"],
});
// Initialize Google Sheets API
const doc = new google_spreadsheet_1.GoogleSpreadsheet(sheetId, auth);
async function connectGoogleSheet() {
    try {
        await doc.loadInfo(); // Loads document properties and worksheets
        console.log(`Connected to Google Sheet: ${doc.title}`);
    }
    catch (error) {
        console.error("Google Sheets API Error:", error);
    }
}
