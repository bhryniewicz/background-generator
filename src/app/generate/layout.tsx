import { Navbar } from "@/components/Navbar";

export default function GeneratePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#140021] grid grid-cols-12 h-screen w-full px-32 py-12">
      <Navbar />
      {children}
    </div>
  );
}
