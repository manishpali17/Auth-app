import { db } from "@/lib/db";
import { unstable_noStore as noStore } from "next/cache";

export const getVerificationTokenByToken = async (token: string) => {
  try {
    noStore();
    const verificationToken = await db.verificationToken.findUnique({
      where: { token },
    });

    return verificationToken;
  } catch {
    return null;
  }
};

export const getVerificationTokenByEmail = async (email: string) => {
  noStore();
  try {
    const verificationToken = await db.verificationToken.findFirst({
      where: { email },
    });

    return verificationToken;
  } catch {
    return null;
  }
};
