import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2024-12-18.acacia", // Use latest API version or what matches the SDK
    typescript: true,
});

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if (!userId || !user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const { priceId } = await req.json();

        // For specific plans, you would map internal names to Stripe Price IDs here
        // For this demo, we'll assume priceId is passed or we default to a test price
        // In a real app, define these in .env or a config

        const settingsUrl = process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000";

        const session = await stripe.checkout.sessions.create({
            mode: "subscription",
            payment_method_types: ["card"],
            billing_address_collection: "auto",
            customer_email: user.emailAddresses[0].emailAddress,
            line_items: [
                {
                    price_data: {
                        currency: "usd",
                        product_data: {
                            name: "ClinConnect Growth Plan",
                            description: "Unlimited requests & AI Copilot"
                        },
                        unit_amount: 4900, // $49.00
                        recurring: {
                            interval: "month"
                        }
                    },
                    quantity: 1,
                },
            ],
            metadata: {
                userId,
            },
            success_url: `${settingsUrl}/dashboard?success=true`,
            cancel_url: `${settingsUrl}/pricing?canceled=true`,
        });

        return NextResponse.json({ url: session.url });
    } catch (error) {
        console.log("[STRIPE_ERROR]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
