import Image from "next/image";
import { cn } from "@/lib/utils";

export const Logo = () => {
  return (
    <div className="hidden md:flex items-center gap-x-2">
      <Image
        src="/Acutely-Logo.png"
        height={60}
        width={60}
        alt="Acutely-Logo"
        className="dark:hidden"
      />
      <Image
        src="/Acutely-Dark.svg"
        height={60}
        width={60}
        alt="Acutely-Logo"
        className="hidden dark:block"
      />
      <div>
        <p className="font-semibold">Acutely</p>
      </div>
    </div>
  );
}