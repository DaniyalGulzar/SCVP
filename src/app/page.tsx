"use client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import HomePage from "@/components/Home";

export default function Home() {
  const router = useRouter();
  const { data: session } = useSession();

  // useEffect(() => {
  //   if (!session) {
  //     router.push("/");
  //   }
  // }, [session, router]);

  return (
    <>
      <HomePage />
    </>
  );
}
