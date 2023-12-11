import Image from "next/image";
import { Button } from "../button/button";
import { IconArrowLeftFill } from "../icons/icons";

export const HomeHeroSection: React.FC = () => {
  return (
    <section className="bg-hero-pattern bg-no-repeat bg-center xl:bg-left mt-5 xl:mt-20">
      <div className="container flex flex-col-reverse items-center xl:flex-row">
        <div className="flex-1 flex flex-col gap-5 mt-12 pb-5 text-center xl:text-right">
          <h3 className="text-xl xl:text-2xl dark:text-info">
            خوش اومدی به ...
          </h3>
          <h1 className=" text-3xl lg:text-5xl xl:text-5xl font-black gradient">
            مسیر صعود به قله‌های برنامه‌نویسی
          </h1>
          <p className="max-w-2xl  text-lg md:text-xl font-bold leading-8">
            هر جای مسیرِ برنامه‌نویسی که باشی، با هم‌راهی استادهای باتجربهٔ
            کلاسبن می‌تونی بدون محدودیت به قله‌های بالاتر صعود کنی. ما همیشه
            هواتو داریم.
          </p>
          <div className="mt-5 flex justify-center xl:justify-start gap-4">
            <Button variant="primary" size="large" className="animated-icon">
              دوره‌های ری‌اکت و نکست
              <IconArrowLeftFill fill="currentColor" />
            </Button>
            <Button variant="neutral" size="large">
              مشاوره برنامه‌نویسی
            </Button>
          </div>
          <Image
            src="/images/frameworks.png"
            className="grayscale mt-4 opacity-70 m-auto xl:m-0"
            width={412}
            height={39}
            alt=""
          />
        </div>
        <Image
          src="/images/programmer-landing.svg"
          alt=""
          width={702}
          height={521}
        />
      </div>
    </section>
  );
};
