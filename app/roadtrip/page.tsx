"use client";
import { useState } from "react";
import dynamic from "next/dynamic";
import Hero from "@/components/roadtrip/Hero";
import GrainOverlay from "@/components/roadtrip/GrainOverlay";

const CompassCursor = dynamic(() => import("@/components/roadtrip/CompassCursor"), { ssr: false });
const LoadingCurtain = dynamic(() => import("@/components/roadtrip/LoadingCurtain"), { ssr: false });

export default function RoadtripPage() {
  const [curtainDone, setCurtainDone] = useState(false);

  return (
    <main className="bg-[#1a1a1a] min-h-screen cursor-none">
      <GrainOverlay />
      <CompassCursor />
      {!curtainDone && <LoadingCurtain onDone={() => setCurtainDone(true)} />}
      <Hero />
    </main>
  );
}
