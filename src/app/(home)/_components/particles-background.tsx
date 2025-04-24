"use client";

import { loadFull } from "tsparticles";
import { useCallback } from "react";
import { Engine } from "tsparticles-engine";
import Particles from "react-tsparticles";
import { svgToBase64 } from "@/utils/svgToBase64";
import type { IOptions, RecursivePartial } from "tsparticles-engine";

const paletteSvg = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#9900FF" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13.5" cy="6.5" r=".5" fill="#ffffff"/><circle cx="17.5" cy="10.5" r=".5" fill="#ffffff"/><circle cx="8.5" cy="7.5" r=".5" fill="#ffffff"/><circle cx="6.5" cy="12.5" r=".5" fill="#ffffff"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>`;

export const options: RecursivePartial<IOptions> = {
  background: {
    color: {
      value: "#161616",
    },
  },
  particles: {
    number: {
      value: 50,
      density: {
        enable: true,
        area: 800,
      },
    },
    shape: {
      type: "image",
      image: {
        src: svgToBase64(paletteSvg),
        width: 20,
        height: 20,
      },
    },
    opacity: {
      value: 0.4,
    },
    size: {
      value: 30,
      random: {
        enable: true,
        minimumValue: 5,
      },
    },
    links: {
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
      outModes: {
        default: "out",
      },
    },
  },
  interactivity: {
    events: {
      onHover: {
        enable: false,
        mode: "repulse",
      },
      onClick: {
        enable: true,
        mode: "push",
      },
      resize: true,
    },
    modes: {
      repulse: {
        distance: 100,
        duration: 0.4,
      },
      push: {
        quantity: 4,
      },
    },
  },
  detectRetina: true,
};

export const ParticlesBackground = () => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      className="absolute inset-0 -z-10 h-[300vh]"
      options={options}
    />
  );
};
