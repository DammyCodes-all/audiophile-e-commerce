import { NextRequest, NextResponse } from "next/server";
import { sendOrderMail } from "@/lib/mailer";

export async function POST(request: NextRequest) {
  try {
    const orderData = await request.json();
    
    await sendOrderMail(orderData);
    
    return NextResponse.json(
      { success: true, message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json(
      { success: false, message: "Failed to send email" },
      { status: 500 }
    );
  }
}
