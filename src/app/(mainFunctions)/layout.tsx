import { Navbar } from "@/components/Navbar";

export default function GeneratePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[10vh_1fr] grid-cols-12 bg-[#161616] relative z-10 min-h-screen w-full px-32 overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
