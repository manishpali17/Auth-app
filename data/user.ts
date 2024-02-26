import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export const getUserByEmail = async (email: string) => {
  try {
    noStore();
    const user = await db.user.findUnique({ where: { email } });

    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  noStore();
  try {
    const user = await db.user.findUnique({ where: { id } });

    return user;
  } catch {
    return null;
  }
};
