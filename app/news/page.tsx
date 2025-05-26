import { options } from "@/app/api/auth/[...nextauth]/option";
import { getServerSession } from "next-auth/next";
import { redirect } from "next/navigation";
import NewsClient from "./NewsClient";

export default async function NewsPage() {
  const session = await getServerSession(options);
  if (!session) {
    redirect("api/auth/signin?callbackUrl=/news");
  }
  return <NewsClient />;
}
