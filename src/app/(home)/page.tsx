"use client";

import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="col-start-1 col-end-6 container mx-auto text-white flex-grow-1">
      <div className="flex flex-col gap-10 self-center">
        <h1 className="text-6xl font-joti_one">
          Make{" "}
          <span className="text-[#9900FF] uppercase">Awesome Background</span>{" "}
          on your own!
        </h1>
        <p className="text-sm font-light">
          orem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus id
          ornare nulla, in euismod urna. Pellentesque id ligula enim. Nullam
          quis est iaculis, sodales lectus viverra, ornare ligula. Maecenas ac
          arcu volutpat, vehicula dui sed, consequat eros.
        </p>
        <Button className="flex items-center max-w-[300px] px-16 py-6 bg-transparent border border-gray-500">
          Get&apos;s started
          <ChevronRight />
        </Button>
      </div>
    </div>
  );
}
