import { PrismaClient } from "@prisma/client";
//taking the global object & add to prismaclient
const globalForPrisma = global as unknown as {
    prisma:PrismaClient | undefined
}
//singleton
export const prisma=globalForPrisma.prisma??new PrismaClient({log:['query'],})
//if not in production then take in global
if(process.env.NODE_ENV!=='production') globalForPrisma.
prisma=prisma