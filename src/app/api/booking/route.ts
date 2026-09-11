import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { userId, destinationId, travelDate } = body;

    if (!userId || !destinationId || !travelDate) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // 1. Check if user exists and has enough credits
    const user = await prisma.user.findUnique({ where: { id: userId } });
    if (!user) return NextResponse.json({ error: "User not found" }, { status: 404 });

    const destination = await prisma.destination.findUnique({ where: { id: destinationId } });
    if (!destination) return NextResponse.json({ error: "Destination not found" }, { status: 404 });

    if (user.credits < destination.price) {
      return NextResponse.json({ error: "Insufficient Galactic Credits" }, { status: 400 });
    }

    // 2. Create booking
    const booking = await prisma.booking.create({
      data: {
        userId,
        destinationId,
        travelDate: new Date(travelDate),
        status: "CONFIRMED"
      }
    });

    // 3. Deduct credits
    await prisma.user.update({
      where: { id: userId },
      data: { credits: { decrement: destination.price } }
    });

    // 4. Log transaction
    await prisma.transaction.create({
      data: {
        userId,
        amount: destination.price,
        type: "WITHDRAWAL"
      }
    });

    return NextResponse.json({ success: true, bookingId: booking.id });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const userId = searchParams.get("userId");

  if (!userId) return NextResponse.json({ error: "User ID required" }, { status: 400 });

  const bookings = await prisma.booking.findMany({
    where: { userId },
    include: { destination: true },
    orderBy: { travelDate: 'asc' }
  });

  return NextResponse.json(bookings);
}
