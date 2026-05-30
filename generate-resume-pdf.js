import fs from 'fs';

const streamText = `BT
/F1 22 Tf
50 720 Td
(PRUTHVI SURATI) Tj
/F1 14 Tf
0 -35 Td
(Full Stack Developer Resume) Tj
/F1 11 Tf
0 -45 Td
(Thank you for visiting my portfolio!) Tj
0 -25 Td
(This is a template/placeholder PDF generated for the resume download feature.) Tj
0 -35 Td
(HOW TO REPLACE THIS FILE:) Tj
0 -20 Td
(1. Save your actual resume as a PDF file named "resume.pdf".) Tj
0 -20 Td
(2. Replace the file at public/resume.pdf in your project folder.) Tj
0 -20 Td
(3. Re-deploy or build your portfolio to apply the changes.) Tj
ET`;

const objectsData = [
  // 1: Catalog
  `<< /Type /Catalog /Pages 2 0 R >>`,
  // 2: Pages
  `<< /Type /Pages /Kids [3 0 R] /Count 1 >>`,
  // 3: Page
  `<< /Type /Page
   /Parent 2 0 R
   /Resources << /Font << /F1 4 0 R >> >>
   /MediaBox [0 0 612 792]
   /Contents 5 0 R
>>`,
  // 4: Font Helvetica
  `<< /Type /Font
   /Subtype /Type1
   /BaseFont /Helvetica
>>`,
  // 5: Stream
  `<< /Length ${streamText.length} >>
stream
${streamText}
endstream`
];

let pdf = "%PDF-1.4\n";
const offsets = [];

objectsData.forEach((objContent, index) => {
  const id = index + 1;
  offsets[id] = pdf.length;
  pdf += `${id} 0 obj\n${objContent}\nendobj\n`;
});

const xrefOffset = pdf.length;
pdf += "xref\n";
pdf += `0 ${objectsData.length + 1}\n`;
pdf += "0000000000 65535 f \n";

for (let i = 1; i <= objectsData.length; i++) {
  const offsetStr = String(offsets[i]).padStart(10, '0');
  pdf += `${offsetStr} 00000 n \n`;
}

pdf += "trailer\n";
pdf += `<< /Size ${objectsData.length + 1} /Root 1 0 R >>\n`;
pdf += "startxref\n";
pdf += `${xrefOffset}\n`;
pdf += "%%EOF\n";

fs.writeFileSync('e:/portfolio1/public/resume.pdf', pdf, 'utf-8');
console.log('Successfully generated public/resume.pdf');
