import { PrismaClient } from "@prisma/client"
import { string } from "zod";

const prisma = new PrismaClient();

async function main() {
    const inputEntries = await prisma.inputEntries.create({
        data: {
            title: 'My first Entry',
            body: 'I have COVID'
        }
    })
    console.log(inputEntries);
}

main()
    .catch(e => {
        console.error(e.message)
        }
    )
    .finally(async () => {
            await prisma.$disconnect()
        }
    )