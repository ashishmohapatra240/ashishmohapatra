import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About - Ashish Mohapatra",
  description:
    "Get to know me where most times, I'm not lying. Learn about my journey, skills, and passion for tech.",
};

export default function AboutLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
