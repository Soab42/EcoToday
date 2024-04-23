import LocationDetector from "@/components/LocationDetector";
import Image from "next/image";
import { Suspense } from "react";

export default function Home() {
  return (
    <Suspense>
      <LocationDetector />
    </Suspense>
  );
}
