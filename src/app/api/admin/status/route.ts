import { NextResponse } from "next/server";
import { updateEnquiryStatus } from "@/lib/storage";

export async function POST(request: Request) {
  try {
    const { id, status, notes } = await request.json();

    if (!id || !status) {
      return NextResponse.json({ success: false, error: "Missing id or status" }, { status: 400 });
    }

    const updated = updateEnquiryStatus(id, status, notes);
    if (!updated) {
      return NextResponse.json({ success: false, error: "Enquiry not found" }, { status: 404 });
    }

    return NextResponse.json({ success: true, message: "Status updated successfully" });
  } catch (e) {
    return NextResponse.json({ success: false, error: "Error updating status" }, { status: 500 });
  }
}
