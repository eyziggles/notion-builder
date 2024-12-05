import Image from "next/image";

export const Heroes = () => {
  return (
    <div className="flex flex-col items-center justify-center max-w-5xl">
      <div className="flex items-center">
        <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
          <Image 
            src="/Landingpage-transp.png"
            alt="Landingpage-puzzle"
            fill
            className="object-contain dark:hidden"
          />
          <Image 
            src="/Landingpage-dark.png"
            alt="Landingpage-puzzle"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
        <div className="relative hidden md:block h-[400px] w-[400px] mt-4">
          <Image 
            src="/Acutedoctor.svg"
            alt="Doctor"
            fill
            className="object-contain dark:hidden"
          />
          <Image 
            src="/Acutedoctor-dark.png"
            alt="Doctor"
            fill
            className="object-contain hidden dark:block"
          />
        </div>
      </div>
    </div>  );
}
