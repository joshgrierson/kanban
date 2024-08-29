import { DEV_MODE } from "@/constants";
import { PrismaClient } from "@prisma/client";

const globalForPrisma = globalThis as unknown as { dbClient: PrismaClient };

export const dbClient = globalForPrisma.dbClient || new PrismaClient();

if (DEV_MODE) globalForPrisma.dbClient = dbClient;
