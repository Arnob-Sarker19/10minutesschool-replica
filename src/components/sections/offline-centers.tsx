import Image from 'next/image';
import { MapPin, ArrowRight } from 'lucide-react';

const locations = [
  { name: 'উত্তরা', href: 'https://www.google.com/maps/place/10+Minute+School+English+Centre+(Uttara)/@23.8645579,90.3963086,17z/data=!4m7!3m6!1s0x3755c5b9650f1f69:0x5e5b69cc4630435f!8m2!3d23.8645583!4d90.3988842!15sCj44dGggRmxvb3IsIE1pbGxlbm5pdW0gVG93ZXIsIEhvdXNlIDIsIFJvYWQgNywgU2VjdG9yIDMsIFV0dGFyYZIBEGVkdWNhdGlvbl9jZW50ZXLgAQA!16s%2Fg%2F11vr95pdw8?entry=tts', target: '_blank' },
  { name: 'পান্থপথ', href: 'https://maps.app.goo.gl/5S6zt16obZspNfA28?g_st=com.google.maps.preview.copy', target: '_blank' },
  { name: 'মিরপুর', href: 'https://www.google.com/maps/place/10+Minute+School+English+Centre+(Mirpur)/@23.8044657,90.3693722,15z/data=!4m6!3m5!1s0x3755c1ad1ad1b665:0x6bca269305be939d!8m2!3d23.8044657!4d90.3693722!16s%2Fg%2F11lnrxpzk8?entry=tts&g_ep=EgoyMDI0MDkxMS4wKgBIAVAD', target: '_blank' },
  { name: 'মগবাজার', href: 'https://www.google.com/maps/place/10+Minute+School+English+Centre+Moghbazar/@23.7490976,90.4048202,17z/data=!4m6!3m5!1s0x3755b9b9609f3105:0xa35b9e083d068494!8m2!3d23.7490979!4d90.4078299!16s%2Fg%2F11wqdj3dp1?entry=tts&g_ep=EgoyMDI0MTAyOS4wIPu8ASoASAFQAw%3D%3D', target: '_blank' },
  { name: 'চকবাজার, চট্টগ্রাম', href: 'https://maps.app.goo.gl/1krk3XZiwDQknqMb8', target: '_blank' },
];

const courses = [
  {
    imgSrc: "https://cdn.10minuteschool.com/images/thumbnails/kids-english-sqr-thumbnail-new.png",
    cta: "ফ্রি প্লে ডে বুক করুন",
    title: "Kids' English",
    description: "কেজি- ৩য় শ্রেণির শিক্ষার্থীদের জন্য",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSfX6YBGXnY8YxNlVZOEP6Y9GVCWVo9Qe-aeCuGM_4NV5Hu30Q/viewform",
    ctaColor: "text-[#E67E22]", // Mapped to a more appropriate color from theme
  },
  {
    imgSrc: "https://cdn.10minuteschool.com/images/SEJ_Thumbnails_1x1_%281%29_1732778436068.png",
    cta: "ফ্রি ক্লাস বুক করুন",
    title: "Spoken English Junior",
    description: "৪র্থ-১০ম শ্রেণির শিক্ষার্থীদের জন্য",
    href: "https://10minuteschool.com/event/free-class-spoken-english-junior",
    ctaColor: "text-green-500",
  },
  {
    imgSrc: "https://cdn.10minuteschool.com/images/ielts_thumbnails_1736327419792.png",
    cta: "ফ্রি ক্লাস বুক করুন",
    title: "IELTS Programme",
    description: "১,০০০+ প্র্যাকটিস ম্যাটেরিয়ালের এক্সেস",
    href: "https://10minuteschool.com/event/ielts-programme",
    ctaColor: "text-green-500",
  },
  {
    imgSrc: "https://cdn.10minuteschool.com/images/thumbnails/study-abroad-sqr-thumbnail.png",
    cta: "ফ্রী কন্সাল্টেসন বুক করুন",
    title: "Study Abroad",
    description: "5 Countries, 6000+ Programmes",
    href: "https://docs.google.com/forms/d/e/1FAIpQLSdF2JJpFAoaT4R88lo2CFKQgbVueKN_UwellHEulTGJN8vvWw/viewform",
    ctaColor: "text-[#E67E22]",
  },
  {
    imgSrc: "https://cdn.10minuteschool.com/images/Thumbnails/ssc-english-course-sqr-thumbnail-new.png",
    cta: "কোর্সে ভর্তি হন",
    title: "SSC English Crash Course",
    description: "এস এস সি শিক্ষার্থীদের জন্য",
    href: "https://10minuteschool.com/product/ssc-english-course/",
    ctaColor: "text-green-500",
  },
  {
    imgSrc: "https://cdn.10minuteschool.com/images/thumbnails/hsc-english-crash-course-sqr-thumbnail.png",
    cta: "কোর্সে ভর্তি হন",
    title: "HSC English Crash Course",
    description: "এইচ এস সি শিক্ষার্থীদের জন্য",
    href: "https://10minuteschool.com/product/hsc-english-crash-course/",
    ctaColor: "text-green-500",
  },
];

const OfflineCenters = () => {
  return (
    <div className="relative bg-[linear-gradient(180deg,rgba(123,21,21,0.40)_0%,rgba(59,6,6,0.40)_100%)] text-white rounded-[34px] border border-[#592327] text-center px-2 md:px-6 pt-10 pb-8">
      <h2 className="absolute text-sm md:text-base text-[#E64040] border border-[#E64040] inline-block rounded-full px-[20px] py-[6px] bg-[#441818] left-1/2 top-0 -translate-x-1/2 -translate-y-1/2">
        অফলাইন সেন্টার
      </h2>
      <h3 className="text-xl md:text-2xl w-full max-w-[470px] mb-4 mx-auto font-medium">
        অনলাইনে ৫ লক্ষাধিক শিক্ষার্থীকে ইংরেজি শিখিয়ে আমরা এখন অফলাইনে
      </h3>

      <div className="overflow-x-auto scrollbar-hide snap-x snap-mandatory">
        <ul className="flex items-center gap-2 mb-6 flex-nowrap md:justify-center">
          {locations.map((location) => (
            <a key={location.name} href={location.href} target={location.target} rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 text-sm rounded-lg bg-white/5 snap-center hover:bg-white/10 transition-colors">
              <span className="inline-block p-2 rounded-full bg-white/5">
                <MapPin className="h-4 w-4" />
              </span>
              <span className="whitespace-nowrap">{location.name}</span>
            </a>
          ))}
        </ul>
      </div>

      <div className="mb-8 grid grid-cols-1 gap-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 xl:gap-4">
        {courses.map((course, index) => (
          <a key={index} href={course.href} target="_blank" rel="noopener noreferrer" className="p-4 bg-white/5 rounded-2xl flex flex-col items-center justify-start gap-3 text-center transition-all duration-300 hover:bg-white/10 group h-full">
            <div className="w-[80px] h-[80px] relative rounded-lg overflow-hidden">
              <Image src={course.imgSrc} alt={course.title} fill sizes="(max-width: 768px) 80px, 80px" className="object-cover" />
            </div>
            <p className={`text-xs font-medium ${course.ctaColor}`}>{course.cta}</p>
            <h4 className="font-semibold text-white text-base leading-tight mt-auto">{course.title}</h4>
            <p className="text-xs text-gray-400">{course.description}</p>
          </a>
        ))}
      </div>

      <div className="flex flex-wrap items-center justify-center gap-6">
        <a href="https://10minuteschool.com/event/book-your-free-class-10ms-english-centre" target="_blank" rel="noopener noreferrer" className="text-base flex font-semibold items-center justify-center gap-2 rounded-lg bg-primary text-white py-3 px-6 hover:opacity-90 transition-opacity">
          ফ্রি ক্লাস বুক করুন
        </a>
        <a href="https://10minuteschool.com/english-centre/" target="_blank" rel="noopener noreferrer" className="hover:underline flex items-center text-white gap-1 text-base font-medium">
          বিস্তারিত জানুন
          <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default OfflineCenters;