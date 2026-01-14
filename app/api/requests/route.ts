import { NextResponse } from "next/server";
import { auth, currentUser } from "@clerk/nextjs/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function POST(req: Request) {
    try {
        const { userId } = await auth();
        const user = await currentUser();

        if (!userId || !user) {
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const body = await req.json();
        const { expertId, title, message } = body;

        if (!expertId || !title || !message) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        // 1. Find or Create Founder Profile for the current user
        // In a real app, we would force them to complete onboarding first.
        // Here we lazy-create one if missing for demo speed.
        let founderProfile = await prisma.founderProfile.findUnique({
            where: { userId } // Note: Schema uses UUID user.id, but here we only have Clerk ID from auth().
            // We need to resolve Clerk ID to internal User ID first.
        });

        // Resolve internal User
        let dbUser = await prisma.user.findUnique({
            where: { clerkId: userId }
        });

        if (!dbUser) {
            // Auto-create user record if not exists (should be done in webhook ideally)
            dbUser = await prisma.user.create({
                data: {
                    clerkId: userId,
                    email: user.emailAddresses[0].emailAddress,
                    role: "FOUNDER"
                }
            });
        }

        if (!founderProfile) {
            founderProfile = await prisma.founderProfile.create({
                data: {
                    userId: dbUser.id,
                    companyName: "My Startup (Placeholder)",
                    stage: "Idea",
                    description: "Auto-generated profile",
                    needs: "Looking for experts"
                }
            });
        }

        // 2. Find Expert (expertId passed from client is effectively the User ID or Profile ID?)
        // In our UI, we passed `params.id` which is the ID of the Expert Profile or User? 
        // Let's assume params.id in UI corresponds to ExpertProfile.id for now.

        // 3. Create Request
        const request = await prisma.request.create({
            data: {
                founderId: founderProfile.id,
                expertId: expertId,
                title,
                message,
                messages: {
                    create: {
                        senderId: dbUser.id,
                        content: message
                    }
                }
            }
        });

        return NextResponse.json(request);
    } catch (error) {
        console.log("[REQUESTS_POST]", error);
        return new NextResponse("Internal Error", { status: 500 });
    }
}
