import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const onlineBatches = [
  {
    name: 'ক্লাস ৬,৭,৮',
    icon: 'https://cdn.10minuteschool.com/images/image_6344663_1733036653015.png',
    href: '#', 
  },
  {
    name: 'ক্লাস ৯, ১০',
    icon: 'https://cdn.10minuteschool.com/images/9-10_1732778140427.png',
    href: '#',
  },
  {
    name: 'HSC ২৫, ২৬ ',
    icon: 'https://cdn.10minuteschool.com/images/ssc_1732778162589.png',
    href: '#',
  },
  {
    name: 'HSC ২৭',
    icon: 'https://cdn.10minuteschool.com/images/hscbag_1732778180651.png',
    href: '#',
  },
];

const skillCourses = [
  {
    href: 'https://10minuteschool.com/product/spoken-english-junior-live-batch/',
    src: 'https://cdn.10minuteschool.com/images/SEJ_Live_Batch_new_2_1739180955021.png',
    alt: 'Spoken English Junior Live Batch',
  },
  {
    href: 'https://10minuteschool.com/product/ielts-course/',
    src: 'https://cdn.10minuteschool.com/images/IELTS-by-MS_1739183534497.png',
    alt: 'IELTS Course by Munzereen Shahid',
  },
  {
    href: 'https://10minuteschool.com/product/ielts-live-batch/',
    src: 'https://cdn.10minuteschool.com/images/IELTS-CBC_1737226553456.jpg',
    alt: 'IELTS Live Batch',
  },
  {
    href: 'https://10minuteschool.com/product/english-grammar-course/',
    src: 'https://cdn.10minuteschool.com/images/CEGC_1737226615398.jpg',
    alt: 'Complete English Grammar Course',
  },
  {
    href: 'https://10minuteschool.com/product/ghore-boshe-spoken-english/',
    src: 'https://cdn.10minuteschool.com/images/GBSE_%281%29_1737226645568.jpg',
    alt: 'Ghore Boshe Spoken English',
  },
];

const Hero = () => {
  return (
    <section>
      <h1 className="sr-only">10 minute school home</h1>
      <div className="bg-black text-white py-10 bg-[url('https://cdn.10minuteschool.com/json/Background_Noise_1732776287934_1736059620396.png')]">
        <div className="px-2 md:container md:px-0">
          <div className="items-center justify-center hidden pb-10 md:flex h-auto md:h-[100px]">
             <Image
              alt="শেখার যাত্রা শুরু এখানেই"
              src="https://cdn.10minuteschool.com/images/Frame_2147223622%402x_%281%29_1732776618989.png"
              width={616}
              height={200}
              className="w-auto h-auto max-h-[100px]"
              priority
            />
          </div>
           <div className="flex md:hidden items-center justify-center pb-6">
            <Image
              alt="শেখার যাত্রা শুরু এখানেই"
              src="https://cdn.10minuteschool.com/images/Frame_2147223622%402x_%281%29_1732776618989.png"
              width={616}
              height={200}
              className="w-auto max-w-[90%] h-auto"
              priority
            />
          </div>

          <div className="flex flex-col gap-10 md:flex-row md:gap-6">
            {/* Left Card: Online Batches */}
            <div className="flex-1 min-w-0">
              <div className="relative bg-[linear-gradient(180deg,rgba(19,57,146,0.40)_0%,rgba(6,14,83,0.40)_100%)] rounded-[34px] border border-[#253A71] text-center px-4 md:px-6 pt-10 pb-4 md:pb-8 h-full flex flex-col">
                <h2 className="absolute text-sm md:text-base text-[#2B72FF] border border-[#2B72FF] inline-block rounded-full px-[20px] py-[4px] bg-[#15275D] left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                  অনলাইন কোর্স
                </h2>
                <div className="flex-grow">
                  <h3 className="text-base md:text-2xl md:max-w-[360px] mb-4 mx-auto">
                    অনলাইন ব্যাচ ২০২৫ এর সকল কোর্সে ভর্তি চলছে!
                  </h3>
                  <div className="flex gap-2 pb-1 mb-4 overflow-x-auto lg:justify-center md:gap-4 md:mb-6 scrollbar-hide">
                    {onlineBatches.map((batch, index) => (
                      <a key={index} href={batch.href} className="flex-shrink-0">
                        <div className="group flex flex-col items-center justify-between rounded-2xl text-white bg-white/10 px-2 py-5 transition-all duration-300 backdrop-blur-md h-[129px] w-[90px] md:w-[122px]">
                          <div className="h-[65px] flex items-center">
                            <Image
                              alt={batch.name}
                              src={batch.icon}
                              width={65}
                              height={65}
                              className="max-w-[40px] md:max-w-[65px]"
                            />
                          </div>
                          <h4 className="text-xs text-center md:text-base whitespace-nowrap mt-auto">{batch.name}</h4>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
                <a className="flex items-center justify-center gap-1 text-[#10b981] hover:underline mt-auto" href="https://10minuteschool.com/event/hsc-online-batch/">
                  এইচএসসি ২৬-২৭ ফ্রি ক্লাস বুক করুন
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Right Card: Skills */}
            <div className="flex-1 min-w-0">
              <div className="relative bg-[linear-gradient(180deg,rgba(150,96,20,0.40)_0%,rgba(59,37,6,0.40)_100%)] rounded-[34px] border border-[#64523D] text-center px-4 md:px-6 pt-10 pb-4 md:pb-8 h-full flex flex-col">
                <h2 className="absolute text-sm md:text-base text-[#F29D1F] border border-[#F29D1F] inline-block rounded-full px-[20px] py-[4px] bg-[#583112] left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                  অনলাইন কোর্স
                </h2>
                <div className="flex-grow">
                  <h3 className="text-base md:text-2xl max-w-[360px] mb-4 mx-auto">
                    পছন্দের স্কিল শিখুন, নিজেকে সেরা করে গড়ে তুলুন
                  </h3>
                  <div className="mb-4 md:mb-6">
                    <div className="scrollbar-hide relative flex flex-nowrap justify-center gap-2 md:gap-4 overflow-x-scroll scroll-smooth snap-x snap-mandatory">
                      {skillCourses.map((course, index) => (
                        <a key={index} href={course.href} className="w-[94px] flex-shrink-0 snap-center">
                          <Image
                            alt={course.alt}
                            src={course.src}
                            width={282}
                            height={399}
                            className="transition-all duration-300 rounded-md shadow-lg hover:shadow-xl w-full h-auto"
                          />
                        </a>
                      ))}
                    </div>
                  </div>
                </div>
                <a className="flex items-center justify-center gap-1 text-[#10b981] hover:underline mt-auto" href="https://10minuteschool.com/en/categories/free/?ref=FreeCourse_text">
                  ৩০+ ফ্রি কোর্সে এনরোল হতে ক্লিক করুন
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Hero;