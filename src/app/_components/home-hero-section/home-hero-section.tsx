import Image from "next/image";
import { Button } from "../button/button";

const HomeHeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern mt-5 xl:mt-20 xl:bg-left">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl dark:text-info xl:text-2xl">
            خوش آمدید به ...
          </h3>
          <h1 className="text-3xl font-black gradient lg:text-5xl xl:text-5xl">
            مسیر سعود به قله های برنامه نویسی
          </h1>
          <p>هرجای مسیر برنامه نویسی که باشی هواتو داریم</p>

          <div className="my-5 flex gap-4">
            <Button variant="primary" size="large">
              دوره های ری اکت و نکست
            </Button>
            <Button variant="neutral" size="large">
              مشاوره برنامه نویسی
            </Button>
          </div>
          <Image
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            src="/images/frameworks.png"
            width={412}
            height={39}
            alt="FrameWorks"
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          width={702}
          height={521}
          alt="classbon"
        />
      </div>
    </section>
  );
};

export default HomeHeroSection;
