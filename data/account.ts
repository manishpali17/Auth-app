import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export const getAccountByUserId = async (userId: string) => {
  noStore();
  try {
    const account = await db.account.findFirst({
      where: { userId },
    });

    return account;
  } catch {
    return null;
  }
};
