// scripts/convert-to-webp.ts
import fs from "fs";
import path from "path";
import sharp from "sharp";

const inputDir = path.join(process.cwd(), "public", "images", "main");
const outputDir = path.join(inputDir, "webp");

// Crear carpeta de salida si no existe
if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir);
}

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();
  const validExtensions = [".jpg", ".jpeg", ".png"];

  if (validExtensions.includes(ext)) {
    const filePath = path.join(inputDir, file);
    const outputFileName = file.replace(ext, ".webp");
    const outputPath = path.join(outputDir, outputFileName);

    sharp(filePath)
      .webp({ quality: 80 })
      .toFile(outputPath)
      .then(() => {
        console.log(`✅ Converted: ${file} → webp/${outputFileName}`);
      })
      .catch((err) => {
        console.error(`❌ Error converting ${file}:`, err);
      });
  }
});
