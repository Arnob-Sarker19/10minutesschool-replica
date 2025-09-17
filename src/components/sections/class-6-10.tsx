import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Play } from 'lucide-react';

const PlayButtonIcon = () => (
  <div className="absolute inset-0 z-10 flex items-center justify-center">
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-white/30 backdrop-blur-sm transition-transform duration-300 group-hover:scale-110 md:h-20 md:w-20">
      <Play className="h-8 w-8 fill-white text-white md:h-10 md:w-10" />
    </div>
  </div>
);

const Class6To10Section = () => {
  return (
    <div className="bg-white py-14 md:py-20">
      <div className="container mx-auto px-4 text-center">
        <div className="mb-4 inline-block rounded-full border border-[#6F42C1] bg-[#F4F0FF] px-4 py-2 text-sm font-medium text-[#6F42C1]">
          ক্লাস ৬-১০
        </div>
        <h2 className="mb-4 text-3xl font-semibold text-gray-900 md:text-[42px] md:leading-[1.2]">
          বছর জুড়ে অনলাইন ব্যাচে কী কী থাকছে?
        </h2>
        <p className="mx-auto mb-12 max-w-3xl text-base text-gray-600 md:text-lg">
          সেরা শিক্ষকদের পরিচর্যায় দেশের যেকোন প্রান্ত থেকে অব্যাহত থাকুক পড়াশুনার অগ্রযাত্রা
        </p>

        <div className="mx-auto grid max-w-6xl gap-8 md:grid-cols-2 lg:gap-12">
          <div className="text-left">
            <Link href="#" className="group relative block w-full overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.10minuteschool.com/images/C9zD3gaMIoo-HD_%281%29_1735814324424.jpg"
                alt="সারা বছরে কী কী হচ্ছে অনলাইন ব্যাচে? - ভিডিও থাম্বনেইল"
                width={588}
                height={332}
                className="h-auto w-full object-cover"
              />
              <PlayButtonIcon />
            </Link>
            <h3 className="my-4 text-xl font-bold text-gray-900">
              সারা বছরে কী কী হচ্ছে অনলাইন ব্যাচে?
            </h3>
            <p className="text-base text-gray-600">
              এক্সপার্ট টিচারদের লাইভ ক্লাস, গোছানো মাস্টারবুক, ও মডেল টেস্ট দিয়ে ঘরে বসেই ৬ষ্ঠ-১০ম শ্রেণির পড়াশোনার কমপ্লিট প্রিপারেশন!
            </p>
          </div>

          <div className="text-left">
            <Link href="#" className="group relative block w-full overflow-hidden rounded-2xl">
              <Image
                src="https://cdn.10minuteschool.com/images/JNk0Q-oDP4w-HD_%281%29_1735814406251.jpg"
                alt="সারা বছর সেরা রেজাল্ট - ভিডিও থাম্বনেইল"
                width={588}
                height={332}
                className="h-auto w-full object-cover"
              />
              <PlayButtonIcon />
            </Link>
            <h3 className="my-4 text-xl font-bold text-gray-900">
              সারা বছর সেরা রেজাল্ট
            </h3>
            <p className="text-base text-gray-600">
              পুরো বছরের পারফেক্ট পড়াশোনার প্ল্যানে সারা বছর ৬ষ্ঠ-১০ম শ্রেণির সব পরীক্ষার সেরা প্রস্তুতি ঘরে বসেই।
            </p>
          </div>
        </div>

        <div className="mt-12">
          <Link
            href="/online-batch/"
            className="inline-flex items-center justify-center gap-2 rounded-lg bg-accent px-6 py-3 font-medium text-white transition-colors hover:bg-green-700"
          >
            আপনার ক্লাস বেছে নিন
            <ArrowRight className="h-5 w-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Class6To10Section;