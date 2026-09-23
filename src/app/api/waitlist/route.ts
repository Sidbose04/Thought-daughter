import { NextResponse } from "next/server";

// In-memory waitlist storage (can be swapped or integrated with PostgreSQL, Supabase, Resend, or Airtable)
interface WaitlistEntry {
  email: string;
  source?: string;
  createdAt: string;
}

const waitlistStore: WaitlistEntry[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, source = "website" } = body;

    if (!email || typeof email !== "string" || !email.includes("@")) {
      return NextResponse.json(
        { error: "A valid email address is required to join the sanctuary." },
        { status: 400 }
      );
    }

    const normalizedEmail = email.trim().toLowerCase();

    // Check if already subscribed
    const existing = waitlistStore.find((item) => item.email === normalizedEmail);
    if (existing) {
      return NextResponse.json(
        {
          success: true,
          message: "You are already on the reservation list for the first printing.",
          entry: existing,
        },
        { status: 200 }
      );
    }

    const newEntry: WaitlistEntry = {
      email: normalizedEmail,
      source,
      createdAt: new Date().toISOString(),
    };

    waitlistStore.push(newEntry);
    console.log(`[Waitlist] New reservation: ${normalizedEmail}`);

    return NextResponse.json(
      {
        success: true,
        message: "Your sanctuary has been reserved. We will write to you before the edition releases.",
        entry: newEntry,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Waitlist API Error]:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again." },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json({
    totalReservations: waitlistStore.length,
    status: "Edition 01: Private Waitlist Open",
  });
}
