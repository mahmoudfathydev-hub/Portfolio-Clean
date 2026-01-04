const fs = require("fs");
const path = require("path");

const rootDir = path.join(__dirname, "src");

function checkCase(dir) {
    const items = fs.readdirSync(dir);
    items.forEach(item => {
        const fullPath = path.join(dir, item);
        const stat = fs.statSync(fullPath);
        if (stat.isDirectory()) {
            checkCase(fullPath);
        } else {
            // اطبع الملفات اللي اسمها فيه حرف كبير
            if (item !== item.toLowerCase()) {
                console.log("File/Mkdir with uppercase:", fullPath);
            }
        }
    });
}

checkCase(rootDir);
