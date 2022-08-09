import { PrismaClient } from "@prisma/client";
import { runInThisContext } from "vm";
const prisma = new PrismaClient();

async function main() {
  // const user = await prisma.user.create({
  //   data: {
  //     name: "Lucky",
  //     email: "lucky@gmail.com",
  //     age: 20,
  //     userPreferences: {
  //       create: {
  //         emailUpdates: true,
  //       },
  //     },
  //   },
  //   select: {
  //     name: true,
  //     userPreferences: { select: { emailUpdates: true } },
  //   },
  // });
  // const users = await prisma.user.createMany({
  //   data: [
  //     {
  //       name: "Lucky",
  //       email: "lucky@gmail.com",
  //       age: 20,
  //     },
  //     {
  //       name: "Valenoirs",
  //       email: "valenoirs@gmail.com",
  //       age: 21,
  //     },
  //   ],
  // });
  // const user = await prisma.user.findUnique({
  //   where: {
  //     email: "valenoirs@gmail.com",
  //     // name : "Valenoirs" will throw an error cause name's not unique. use findFirst() instead.
  //   },
  //   select: {
  //     name: true,
  //   },
  // });
  // const user = await prisma.user.findFirst({
  //   where: {
  //     name: "Valenoirs",
  //   },
  //   select: {
  //     age: true,
  //   },
  // });
  // const users = await prisma.user.findMany({
  //   where: {
  //     // name: "Lucky",
  //     // name: { equals: "Lucky" },
  //     // name: { not: "Lucky" },
  //     // name: { in: ["Valenoirs", "Valentino"] },
  //     // name: { notIn: ["Valenoirs", "Valentino"] },
  //     // age: { gt: 21 }, // lt
  //     // email: { contains: "lucky3" }, // startsWith || endsWith
  //     // userPreferences: {
  //     //   emailUpdates: true,
  //     // },
  //     // *For Array
  //     // writtenPosts: {
  //     //   every: {
  //     //     // none || some
  //     //   },
  //     // },
  //     name: "Lucky",
  //   },
  //   // distinct: ["name", "age"],
  //   // orderBy: {
  //   //   age: "asc",
  //   // },
  //   // take: 2,
  //   // skip: 1,
  // });
  // console.log(users);
}

main()
  .catch((error) => {
    console.error("prisma-error", error);
  })
  .finally(async () => {
    await prisma.$disconnect;
  });
