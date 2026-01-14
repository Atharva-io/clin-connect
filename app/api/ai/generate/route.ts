import { NextResponse } from "next/server";
import { auth } from "@clerk/nextjs/server";
import OpenAI from "openai";

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: Request) {
    try {
        const { userId } = await auth();

        if (!userId) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { prompt } = await req.json();

        if (!prompt) {
            return new NextResponse("Prompt required", { status: 400 });
        }

        // Check if API key is configured (for demo purposes)
        if (!process.env.OPENAI_API_KEY) {
            // Mock response if no key
            return NextResponse.json({
                content: "I am a helpful assistant. I noticed you didn't provide an OpenAI API key in your .env file, so I am just simulating a response. Here is a drafted message: 'Dear Dr. Chen, we would love to get your feedback on our new cardiac device...'"
            });
        }

        const response = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [
                {
                    role: "system",
                    content: "You are an expert networking assistant helping healthcare founders write professional, concise introduction requests to busy clinicians. Keep it under 100 words. Focus on value proposition and clear ask."
                },
                {
                    role: "user",
                    content: `Help me draft a message to an expert based on this context: ${prompt}`
                }
            ]
        });

        return NextResponse.json(response.choices[0].message);
    } catch (error) {
        console.log("[AI_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
