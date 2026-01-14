import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
    console.log('Seeding...')

    // Clean up existing data (optional, be careful in prod)
    // await prisma.request.deleteMany({});
    // await prisma.expertProfile.deleteMany({});
    // await prisma.founderProfile.deleteMany({});
    // await prisma.user.deleteMany({});

    // Note: users are usually linked to Clerk, so we might need real Clerk IDs if testing auth flow fully.
    // For now we mock the clerkId.

    // 1. Create Experts
    const expert1 = await prisma.user.create({
        data: {
            clerkId: "mock_expert_1",
            email: "expert1@example.com",
            role: "EXPERT",
            expertProfile: {
                create: {
                    name: "Dr. Sarah Chen",
                    specialty: "Cardiology",
                    subSpecialty: "Interventional",
                    bio: "Chief of Cardiology at City Hospital with 15 years experience.",
                    hourlyRate: 200,
                    isVerified: true,
                    location: "New York, NY",
                    clinics: {
                        create: {
                            name: "City Heart Center",
                            location: "Manhattan, NY"
                        }
                    }
                }
            }
        }
    })

    const expert2 = await prisma.user.create({
        data: {
            clerkId: "mock_expert_2",
            email: "expert2@example.com",
            role: "EXPERT",
            expertProfile: {
                create: {
                    name: "Dr. Mark Wilson",
                    specialty: "Oncology",
                    subSpecialty: "Clinical Trials",
                    bio: "Leading oncologist focusing on immunotherapy trials.",
                    hourlyRate: 250,
                    isVerified: true,
                    location: "Boston, MA",
                }
            }
        }
    })

    // 2. Create Founder
    const founder1 = await prisma.user.create({
        data: {
            clerkId: "mock_founder_1",
            email: "founder@example.com",
            role: "FOUNDER",
            founderProfile: {
                create: {
                    companyName: "MediTech AI",
                    stage: "Seed",
                    description: "AI-powered diagnostics for early cancer detection.",
                    needs: "Looking for clinical partners for validation studies.",
                    location: "San Francisco, CA"
                }
            }
        }
    })

    console.log('Seeding finished.')
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
