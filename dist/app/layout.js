"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.metadata = void 0;
exports.default = RootLayout;
require("./globals.css");
const google_1 = require("next/font/google");
const inter = (0, google_1.Inter)({ subsets: ['latin'] });
exports.metadata = {
    title: 'CodeQuest',
    description: 'By Abhishek Sharma',
    verification: {
        google: "eT97O8rV5cJiUo09J-B6BLiGJW4S9vr485NXFnOYL2Q",
    },
};
function RootLayout({ children, }) {
    return (<html lang="en">
      <body className={inter.className}>{children}</body>
    </html>);
}
