import { Heading } from "./_components/heading";
import { Heroes } from "./_components/heroes";
import { Footer } from "./_components/footer";

const MarketingPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="flex flex-col items-center justify-start text-center gap-y-8 px-6 pb-10 pt-20 flex-1">
        <Heading />
        <Heroes />
      </div>
      <Footer />
    </div>
  );
}

export default MarketingPage;