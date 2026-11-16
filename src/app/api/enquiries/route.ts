import { NextResponse } from "next/server";
import { getEnquiries, saveEnquiry } from "@/lib/storage";

export async function GET(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const type = searchParams.get("type");
    let items = getEnquiries();
    if (type) {
      items = items.filter((i) => i.type === type);
    }
    return NextResponse.json({ success: true, count: items.length, data: items });
  } catch (error) {
    return NextResponse.json(
      { success: false, error: "Failed to fetch enquiries" },
      { status: 500 }
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { fullName, email, phone, service, organization, budget, description, type } = body;

    if (!fullName || !email || !phone || !service) {
      return NextResponse.json(
        { success: false, error: "Please provide all required fields (Name, Email, Phone, Service)." },
        { status: 400 }
      );
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const saved = saveEnquiry({
      fullName: fullName.trim(),
      organization: organization ? organization.trim() : "Individual / Practice",
      email: email.trim().toLowerCase(),
      phone: phone.trim(),
      service: service.trim(),
      budget: budget || "Not specified",
      description: description ? description.trim() : "General consultation requested.",
      type: type || "enquiry",
    });

    return NextResponse.json({
      success: true,
      message: "Enquiry received successfully. Our healthcare solutions team will contact you within 24 business hours.",
      enquiryId: saved.id,
      data: saved,
    });
  } catch (error) {
    console.error("API error in enquiries POST:", error);
    return NextResponse.json(
      { success: false, error: "Internal server error occurred while processing your request." },
      { status: 500 }
    );
  }
}
