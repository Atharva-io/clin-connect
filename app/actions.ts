"use server"

import { PrismaClient } from "@prisma/client"
import { revalidatePath } from "next/cache"
import { auth } from "@clerk/nextjs/server"

const prisma = new PrismaClient()

export async function verifyExpert(expertId: string) {
    const { userId } = await auth();
    // In real app, check if user is admin
    if (!userId) {
        throw new Error("Unauthorized");
    }

    await prisma.expertProfile.update({
        where: { id: expertId },
        data: { isVerified: true }
    })

    revalidatePath("/admin")
}
