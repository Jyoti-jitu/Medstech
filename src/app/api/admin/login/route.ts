import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { username, password } = await request.json();

    // Default admin credentials
    if (
      (username === "admin@medstech.in" || username === "admin@medtech.com" || username === "admin") &&
      (password === "medstech2026" || password === "medtech2026")
    ) {
      const response = NextResponse.json({
        success: true,
        message: "Authentication successful",
        user: { name: "MedsTech Administrator", role: "SuperAdmin" },
      });

      // Set cookie for session
      response.cookies.set("medstech_admin_session", "authenticated_session_token", {
        httpOnly: true,
        path: "/",
        maxAge: 60 * 60 * 24, // 24 hours
        sameSite: "lax",
      });

      return response;
    }

    return NextResponse.json(
      { success: false, error: "Invalid username or password. Default demo: admin@medstech.in / medstech2026" },
      { status: 401 }
    );
  } catch (e) {
    return NextResponse.json({ success: false, error: "Authentication error" }, { status: 500 });
  }
}
