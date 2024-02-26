import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export const getTwoFactorTokenByToken = async (token: string) => {
  noStore();
  try {
    const twoFactorToken = await db.twoFactorToken.findUnique({
      where: { token },
    });

    return twoFactorToken;
  } catch {
    return null;
  } 
};

export const getTwoFactorTokenByEmail = async (email: string) => {
  noStore();
  try {
    const twoFactorToken = await db.twoFactorToken.findFirst({
      where: { email },
    });

    return twoFactorToken;
  } catch {
    return null;
  }
};
