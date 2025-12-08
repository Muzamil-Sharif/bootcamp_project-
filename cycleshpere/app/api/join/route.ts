import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();

        // SImulate processing delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Here you would typically save to a database or send an email
        // For now, valid logging the data
        console.log("Membership form submitted:", body);

        return NextResponse.json(
            { message: "Application submitted successfully!" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Error submitting membership form:", error);
        return NextResponse.json(
            { message: "Failed to submit application." },
            { status: 500 }
        );
    }
}
