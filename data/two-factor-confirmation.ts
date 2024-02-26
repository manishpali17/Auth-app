import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export const getTwoFactorConfirmationByUserId = async (userId: string) => {
  noStore();
  try {
    const twoFactorConfirmation = await db.twoFactorConfirmation.findUnique({
      where: { userId },
    });

    return twoFactorConfirmation;
  } catch {
    return null;
  }
};
