"use client";

import { useState, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Rocket, ArrowLeft, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  { name: "ভাষা শিক্ষা", count: 23 },
  { name: "ফ্রিল্যান্সিং", count: 6 },
  { name: "বান্ডেল", count: 9 },
  { name: "স্কিলস এন্ড আইটি", count: 14 },
  { name: "ডিজাইন এন্ড ক্রিয়েটিভ", count: 6 },
  { name: "ক্যারিয়ার রেডিনেস", count: 8 },
  { name: "কিডস কোর্সসমূহ", count: 1 },
  { name: "প্রফেশনাল কোর্সসমূহ", count: 2 },
  { name: "ফ্রি কোর্সসমূহ", count: 42 },
];

const courses = [
  {
    title: "IELTS Course by Munzereen Shahid",
    instructor: "Munzereen Shahid",
    image: "https://cdn.10minuteschool.com/images/thumbnails/IELTS_new_16_9.png",
    href: "https://10minuteschool.com/product/ielts-course/",
  },
  {
    title: "ঘরে বসে Spoken English",
    instructor: "Munzereen Shahid",
    image: "https://cdn.10minuteschool.com/images/thumbnails/skills/ghore-boshe-Spoken-English-course-thumbnail-by-Munzereen-Shahid-16x9.jpg",
    href: "https://10minuteschool.com/product/ghore-boshe-spoken-english/",
  },
  {
    title: "IELTS LIVE Batch",
    instructor: "Uttam Deb +4",
    image: "https://cdn.10minuteschool.com/images/thumbnails/batch-12-ielts-live-batch-thumbnails.jpg",
    href: "https://10minuteschool.com/product/ielts-live-batch/",
  },
  {
    title: "Spoken English Junior LIVE Batch",
    instructor: "Rukhsar Sanjaree +4",
    image: "https://cdn.10minuteschool.com/images/catalog/media/sej-thumbnial_1734278669669.jpg",
    href: "https://10minuteschool.com/product/spoken-english-junior-live-batch/",
  },
  {
    title: "২৪ ঘণ্টায় কোরআন শিখি",
    instructor: "মাওলানা শাইখ মুহাম্মাদ জামাল উদ্দীন",
    image: "https://cdn.10minuteschool.com/images/catalog/media/%C3%A0%C2%A7%C2%A8%C3%A0%C2%A6%C2%AA-%C3%A0%C2%A6%C2%98%C3%A0%C2%A6%C2%A3%C3%A0%C2%A7%C2%8D%C3%A0%C2%A6%C2%9F%C3%A0%C2%A6%C2%BE%C3%A0%C2%A6%C2%AF%C3%A0%C2%A6%C2%BC-%C3%A0%C2%A6%C2%95%C3%A0%C2%A7%C2%8B%C3%A0%C2%A6%C2%B0%C3%A0%C2%A6%C2%86%C3%A0%C2%A6%C2%A8-%C3%A0%C2%A6%C2%B6%C3%A0%C2%A6%C2%BF%C3%A0%C2%A6%C2%96%C3%A0%C2%A6%C2%BF---Course-Thumbnail-PSD_1732445930516.jpg",
    href: "https://10minuteschool.com/product/easy-quran-reading/",
  },
  {
    title: "English Communication for Professionals",
    instructor: "Munzereen Shahid",
    image: "https://cdn.10minuteschool.com/images/thumbnails/english-communication-for-professionals/english-communication-for-professsionals-course-thumbnail---16x9.jpg",
    href: "https://10minuteschool.com/product/english-for-professionals-course/",
  },
];

const CheckmarkIcon = () => (
  <svg width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path fillRule="evenodd" clipRule="evenodd" d="M14.654 6.32688C14.9398 6.07921 15.3619 6.11054 15.6096 6.39634C15.8573 6.68214 15.8259 7.10427 15.5401 7.35194L10.5401 11.8519C10.2798 12.086 9.87978 12.086 9.61947 11.8519L7.3986 9.85194C7.15178 9.63004 7.12921 9.24584 7.35111 8.99902C7.57301 8.7522 7.95721 8.72963 8.20403 8.95153L9.93208 10.5186L14.654 6.32688Z" fill="#3B82F6"></path>
    <path d="M12.5 23C18.5751 23 23.5 18.0751 23.5 12C23.5 5.92487 18.5751 1 12.5 1C6.42487 1 1.5 5.92487 1.5 12C1.5 18.0751 6.42487 23 12.5 23Z" stroke="#3B82F6" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
  </svg>
);

export default function SkillsSection() {
    const [activeTab, setActiveTab] = useState("ভাষা শিক্ষা");
    const scrollContainerRef = useRef<HTMLDivElement>(null);

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = direction === 'left' ? -300 : 300;
            scrollContainerRef.current.scrollBy({ left: scrollAmount, behavior: 'smooth' });
        }
    };

    return (
        <section className="bg-black text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <div className="flex items-center justify-center gap-2">
                    <div className="p-2 rounded-full bg-white/10">
                        <Rocket className="h-5 w-5 text-white" />
                    </div>
                    <h2 className="text-sm font-medium text-white/80">স্কিলস</h2>
                </div>

                <h3 className="mt-4 text-4xl font-semibold md:text-5xl">
                    দেশসেরা স্কিল ডেভেলপমেন্ট প্লাটফর্ম
                </h3>

                <div className="flex flex-wrap items-center justify-center gap-4 mt-6 md:gap-8">
                    <div className="flex items-center gap-2">
                        <CheckmarkIcon />
                        <p className="text-white/90">দেশসেরা শিক্ষক</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckmarkIcon />
                        <p className="text-white/90">৫ লাখ+শিক্ষার্থী</p>
                    </div>
                    <div className="flex items-center gap-2">
                        <CheckmarkIcon />
                        <p className="text-white/90">৭০+ অনলাইন কোর্স</p>
                    </div>
                </div>

                <div className="relative mt-12">
                    <div className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto pb-4 -mx-4 px-4 md:justify-center">
                        {tabs.map((tab) => (
                            <button
                                key={tab.name}
                                onClick={() => setActiveTab(tab.name)}
                                className={`flex-shrink-0 snap-center rounded-lg px-4 py-2.5 text-sm mx-1 focus:outline-none transition-all duration-300 ${
                                    activeTab === tab.name
                                        ? "border-2 border-accent bg-transparent text-white font-semibold"
                                        : "bg-card text-gray-400"
                                }`}
                            >
                                {tab.name}
                                <span className={`ml-2 rounded-full px-2 py-0.5 text-xs ${ activeTab === tab.name ? 'bg-accent/20 text-accent' : 'bg-gray-700 text-gray-300'}`}>{tab.count}</span>
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative mt-8">
                    <Button variant="outline" size="icon" className="absolute left-[-20px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-800/80 hover:bg-gray-700/90 border-0 text-white hidden md:flex" onClick={() => scroll('left')}>
                        <span className="sr-only">Scroll Left</span>
                        <ArrowLeft className="h-5 w-5" />
                    </Button>
                    <div ref={scrollContainerRef} className="scrollbar-hide flex snap-x snap-mandatory overflow-x-auto scroll-smooth gap-6 -mx-4 px-4">
                        {courses.map((course, index) => (
                            <div key={index} className="w-[272px] shrink-0 snap-start space-y-3 text-left">
                                <a href={course.href}>
                                    <Image
                                        src={course.image}
                                        alt={course.title}
                                        width={272}
                                        height={153}
                                        className="rounded-lg w-full h-auto aspect-[16/9] object-cover transition-transform duration-300 hover:scale-105"
                                    />
                                </a>
                                <h4 className="font-semibold text-white truncate h-6">{course.title}</h4>
                                <p className="text-sm text-gray-400">{course.instructor}</p>
                                <a href={course.href} className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:underline">
                                    বিস্তারিত
                                    <ArrowRight className="h-4 w-4" />
                                </a>
                            </div>
                        ))}
                    </div>
                    <Button variant="outline" size="icon" className="absolute right-[-20px] top-1/2 -translate-y-1/2 z-10 h-10 w-10 rounded-full bg-gray-800/80 hover:bg-gray-700/90 border-0 text-white hidden md:flex" onClick={() => scroll('right')}>
                        <span className="sr-only">Scroll Right</span>
                        <ArrowRight className="h-5 w-5" />
                    </Button>
                </div>

                <a href="https://10minuteschool.com/categories/language-learning/" className="mt-12 inline-flex items-center gap-2 rounded-lg bg-card px-6 py-3 text-base font-medium text-white hover:bg-gray-700 transition">
                    সকল কোর্স
                    <ArrowRight className="h-4 w-4" />
                </a>
            </div>
        </section>
    );
}