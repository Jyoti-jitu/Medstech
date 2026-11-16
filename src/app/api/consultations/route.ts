import { NextResponse } from "next/server";
import { saveEnquiry } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, organization, service, scheduledDate, scheduledTime, notes, type } = body;

    if (!fullName || !email || !phone) {
      return NextResponse.json(
        { success: false, error: "Please fill in all contact details." },
        { status: 400 }
      );
    }

    const saved = saveEnquiry({
      fullName: fullName.trim(),
      organization: organization ? organization.trim() : "Direct Booking",
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: service || "General HealthTech Consultation",
      budget: "Complimentary Consultation",
      description: notes ? notes.trim() : `Scheduled session for ${scheduledDate || "flexible date"} at ${scheduledTime || "flexible time"}.`,
      type: type || "consultation",
      scheduledDate,
      scheduledTime,
      notes: `Booked via website modal: ${scheduledDate || ""} ${scheduledTime || ""}`,
    });

    return NextResponse.json({
      success: true,
      message: "Consultation booked successfully! A calendar invitation and confirmation will be sent shortly.",
      bookingId: saved.id,
      data: saved,
    });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Unable to schedule consultation at this time." },
      { status: 500 }
    );
  }
}
