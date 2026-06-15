const fs = require('fs');
const src = "C:\\Users\\Nisanth\\.gemini\\antigravity-ide\\brain\\43698983-387e-4479-b3ba-e631d2a0ff9e\\media__1781519634143.png";
const dest = "d:\\Projects\\Portfolio\\src\\assets\\octanet certificate.png";

try {
  fs.copyFileSync(src, dest);
  console.log("Success");
} catch (e) {
  console.error("Error copying file:", e);
}
