import { NextResponse } from "next/server";
import fs from "fs";
import path from "path";

export async function GET() {
  const filePath = path.join(
    process.cwd(),
    "assets",
    "CV",
    "CV_Mochammad Al Mizan Ya Hafidl_UB.pdf"
  );

  try {
    const fileBuffer = fs.readFileSync(filePath);
    return new NextResponse(fileBuffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition":
          'attachment; filename="CV_Mochammad Al Mizan Ya Hafidl_UB.pdf"',
      },
    });
  } catch {
    return new NextResponse("CV file not found", { status: 404 });
  }
}

