import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default defineEventHandler(async (event) =>{
  let priducts = await prisma.products.findMany()
  return priducts
})