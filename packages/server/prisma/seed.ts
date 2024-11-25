import { PrismaClient } from "@prisma/client";
import { drivers } from "./drivers";

const prisma = new PrismaClient();

async function seedDrivers() {
	for (const driver of drivers) {
		await prisma.driver.create({ data: driver });
	}

	console.log("Drivers seeded successfully!");
}

seedDrivers()
	.catch((error) => {
		console.error("Error seeding drivers:", error);
	})
	.finally(async () => {
		await prisma.$disconnect();
	});

