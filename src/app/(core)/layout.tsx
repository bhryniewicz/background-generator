import { Navbar } from "@/components/layouts/navbar";

export default function GeneratePageLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="grid grid-rows-[auto_1fr] grid-cols-12 bg-[#161616] relative z-10 min-h-screen w-full px-4 lg:px-16 xl:px-32 overflow-hidden">
      <Navbar />
      {children}
    </div>
  );
}
