import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

// Components
import Social from "@/components/Social";

function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col items-center justify-between xl:flex-row xl:pt-8 xl:pb-24">
          {/* Text */}
          <div className="text-center xl:text-left">
            <span className="text-xl">Frontend developer</span>
            <h1 className="h1 mb-6">
              Hello, I'm <br />
              <span className="text-accent">Delvik</span>
            </h1>
            <p className="mb-9 max-w-[500px] text-white/80">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Debitis
              cum eaque voluptatum alias aliquid? Quo nihil tempora quis impedit
              pariatur?
            </p>
            <div className="flex flex-col items-center gap-8 xl:flex-row">
              <Button
                variant="outline"
                size="lg"
                className="border-accent text-accent flex cursor-pointer items-center gap-2 uppercase"
              >
                <span>Download CV</span>
                <FiDownload className="text-xl" />
              </Button>
              <div className="mb-8 xl:mb-0">
                <Social
                  containerStyles="flex gap-6"
                  iconStyles="w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-base hover:bg-accent hover:text-primary hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* Photo */}
          <div>photo</div>
        </div>
      </div>
    </section>
  );
}

export default Home;
