"use client";

import { Navbar } from "@/components/Navbar";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import React, { useCallback } from "react";
import { Engine } from "tsparticles-engine";

const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10"
      options={{
        background: {
          color: {
            value: "#161616",
          },
        },
        particles: {
          number: {
            value: 80,
            density: {
              enable: true,
              value_area: 800,
            },
          },
          color: {
            value: "#ffffff",
          },
          shape: {
            type: "circle",
            stroke: {
              width: 1,
              color: "#9900FF",
            },
          },
          opacity: {
            value: 0.3,
          },
          size: {
            value: 2,
            random: true,
          },
          line_linked: {
            enable: true,
            distance: 150,
            color: "#ffffff",
            opacity: 0.2,
            width: 1,
          },
          move: {
            enable: true,
            speed: 0.3,
            direction: "none",
            out_mode: "out",
          },
        },
        interactivity: {
          events: {
            onhover: { enable: false },
            onclick: { enable: false },
            resize: true,
          },
        },
        retina_detect: true,
      }}
    />
  );
};

export default function HomePageLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="relative ">
      <ParticlesBackground />

      <div className="grid grid-cols-12 relative z-10 h-screen w-full px-32 overflow-hidden">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
