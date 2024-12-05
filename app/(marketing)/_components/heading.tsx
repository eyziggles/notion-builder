"use client";

import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Heading = () => {
  return (
    <div className="max-w-3xl space-y-4 text-center">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Clinical Tools For Critical Decisions
        <br />
        Welcome to <span className="underline">Acutely</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text-2xl font-medium">Acutely is your clinical workspace where critical decisions are made </h3>
      <Button>
        Get Started <ArrowRight className="h-4 w-4 ml-2" />
      </Button>
    </div>
  );
}
