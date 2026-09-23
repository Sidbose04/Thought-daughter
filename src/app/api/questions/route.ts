import { NextResponse } from "next/server";
import { QUESTION_CARDS } from "@/data/questions";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const category = searchParams.get("category");
  const random = searchParams.get("random") === "true";

  let filtered = [...QUESTION_CARDS];

  if (category) {
    filtered = filtered.filter(
      (q) => q.category.toLowerCase() === category.toLowerCase()
    );
  }

  if (random) {
    filtered = filtered.sort(() => Math.random() - 0.5);
  }

  return NextResponse.json({
    success: true,
    total: filtered.length,
    data: filtered,
  });
}
