"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || (function () {
    var ownKeys = function(o) {
        ownKeys = Object.getOwnPropertyNames || function (o) {
            var ar = [];
            for (var k in o) if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
            return ar;
        };
        return ownKeys(o);
    };
    return function (mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k = ownKeys(mod), i = 0; i < k.length; i++) if (k[i] !== "default") __createBinding(result, mod, k[i]);
        __setModuleDefault(result, mod);
        return result;
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
const google_spreadsheet_1 = require("google-spreadsheet");
const google_auth_library_1 = require("google-auth-library");
const dotenv = __importStar(require("dotenv"));
// Load environment variables
dotenv.config();
// Load environment variables
const sheetId = process.env.GOOGLE_SHEET_ID;
const serviceAccountEmail = process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL;
const privateKey = process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, "\n");
async function testGoogleSheet() {
    try {
        // Authenticate using JWT
        const auth = new google_auth_library_1.JWT({
            email: serviceAccountEmail,
            key: privateKey,
            scopes: ["https://www.googleapis.com/auth/spreadsheets"]
        });
        // Initialize Google Sheets API with authentication
        const doc = new google_spreadsheet_1.GoogleSpreadsheet(sheetId, auth);
        await doc.loadInfo(); // Load sheet details
        console.log(`✅ Connected to Google Sheet: ${doc.title}`);
    }
    catch (error) {
        console.error("❌ Google Sheets API Error:", error);
    }
}
// Run the function
testGoogleSheet();
