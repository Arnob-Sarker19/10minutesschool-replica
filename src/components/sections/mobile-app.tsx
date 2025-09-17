import Image from "next/image";

const MobileAppSection = () => {
  return (
    <div className="bg-dark-background py-16 md:py-24">
      <div className="container">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-[#102c46] via-[#1a1d29] to-[#1e1732]">
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-2">
            <div className="p-8 pb-0 text-center md:pb-8 md:p-14 md:text-left">
              <h2 className="text-3xl font-semibold text-white md:text-[42px] leading-tight md:leading-[1.3]">
                ডাউনলোড করুন আমাদের
                <br />
                মোবাইল অ্যাপ, শেখা শুরু করুন
                <br />
                আজ থেকেই
              </h2>
              <div className="mt-8 flex flex-wrap justify-center gap-4 md:justify-start">
                <a
                  href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="https://10minuteschool.com/images/home/googlePlay.svg"
                    alt="Get it on Google Play"
                    width={180}
                    height={54}
                    className="h-12 w-auto md:h-[54px]"
                  />
                </a>
                <a
                  href="https://apps.apple.com/us/app/10-minute-school/id1577061772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block transition-transform duration-300 hover:scale-105"
                >
                  <Image
                    src="https://10minuteschool.com/images/home/appStore.svg"
                    alt="Download on the App Store"
                    width={180}
                    height={54}
                    className="h-12 w-auto md:h-[54px]"
                  />
                </a>
              </div>
            </div>
          </div>
          <div className="md:absolute md:inset-y-0 md:right-0 md:w-1/2">
            <Image
              src="https://cdn.10minuteschool.com/images/download_app_1668328988106.png"
              alt="10 Minute School Mobile App"
              width={650}
              height={668}
              className="relative -mt-8 w-4/5 mx-auto transition-transform duration-300 hover:scale-105 md:absolute md:bottom-0 md:w-[130%] md:max-w-none md:mt-0 md:-right-[15%] md:mx-0"
              sizes="(max-width: 768px) 80vw, 50vw"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileAppSection;