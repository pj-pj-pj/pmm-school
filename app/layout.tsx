import type React from "react";
import type { Metadata } from "next";
import ClientLayout from "./ClientLayout";

export const metadata: Metadata = {
  title: "PMM School - Launch Your Product Marketing Career",
  description:
    "Master product marketing from A to Z, ace your interviews, and accelerate your career with PMM School.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <ClientLayout>{children}</ClientLayout>;
}
