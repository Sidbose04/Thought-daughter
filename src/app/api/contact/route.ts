import { NextResponse } from "next/server";

interface ContactEntry {
  name: string;
  email: string;
  subject?: string;
  message: string;
  createdAt: string;
}

const contactStore: ContactEntry[] = [];

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, subject = "General Inquiry", message } = body;

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Please complete all fields (name, email, and message)." },
        { status: 400 }
      );
    }

    if (!email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    const newContact: ContactEntry = {
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject.trim(),
      message: message.trim(),
      createdAt: new Date().toISOString(),
    };

    contactStore.push(newContact);
    console.log(`[Contact] New inquiry from ${newContact.name} (${newContact.email})`);

    return NextResponse.json(
      {
        success: true,
        message: "Thank you for reaching out. We treat every note with patience and devotion.",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("[Contact API Error]:", error);
    return NextResponse.json(
      { error: "Could not send note at this time. Please try again later." },
      { status: 500 }
    );
  }
}
