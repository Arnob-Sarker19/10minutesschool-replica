"use client";

import Image from 'next/image';
import { BookOpen, ArrowRight } from 'lucide-react';

const sscHscCourses = [
    {
        title: "HSC 27 অনলাইন ব্যাচ (ফাইন্যান্স ও একাউন্টিং)",
        imageUrl: "https://cdn.10minuteschool.com/images/thumbnails/hsc-27-bundle-1.JPG",
        link: "https://10minuteschool.com/product/hsc-27-finance-and-accounting-online-batch/"
    },
    {
        title: "HSC 27 অনলাইন ব্যাচ (জিওগ্রাফি ও ইকোনমিক্স)",
        imageUrl: "https://cdn.10minuteschool.com/images/thumbnails/hsc-27-bundle-2.JPG",
        link: "https://10minuteschool.com/product/hsc-27-geography-and-economics-online-batch/"
    },
    {
        title: "HSC 27 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
        imageUrl: "https://cdn.10minuteschool.com/images/thumbnails/HSC_OB_27/hsc-2027-online-batch-science-group-thumbnail.png",
        link: "https://10minuteschool.com/product/hsc-27-science-group-online-batch/"
    },
    {
        title: "HSC 27 অনলাইন ব্যাচ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)",
        imageUrl: "https://cdn.10minuteschool.com/images/thumbnails/HSC_OB_27/hsc-27-bangla-english-ict-online-batch-thumbnail-new.png",
        link: "https://10minuteschool.com/product/hsc-27-bangla-english-ict-online-batch/"
    },
    {
        title: "HSC 26 অনলাইন ব্যাচ ২.০ (বাংলা, ইংরেজি, তথ্য ও যোগাযোগ প্রযুক্তি)",
        imageUrl: "https://cdn.10minuteschool.com/images/quiz/course_thumbnail/hsc-26-online-batch-2-bangla-english-ict-thumbnail.png",
        link: "https://10minuteschool.com/product/hsc-26-online-batch-2-bangla-english-ict/"
    },
    {
        title: "HSC 26 অনলাইন ব্যাচ (ফিজিক্স, কেমিস্ট্রি, ম্যাথ, বায়োলজি)",
        imageUrl: "https://cdn.10minuteschool.com/images/thumbnails/HSC_26_OB_Thumbnails/hsc-2026-online-batch-science-group-thumbnail.jpg",
        link: "https://10minuteschool.com/product/hsc-2026-online-batch/"
    },
    {
        title: "১০ম শ্রেণি [সকল বিভাগ] বাংলা, ইংরেজি, আই.সি.টি., সাধারণ গণিত [SSC 2026 ব্যাচ]",
        imageUrl: "https://cdn.10minuteschool.com/images/thumbnails/class-10-bangla-english-ict-g-math-thumbnail.jpg",
        link: "https://10minuteschool.com/product/class-10-bangla-english-ict-math-for-ssc-2026/"
    },
    {
        title: "১০ম শ্রেণি - অনলাইন ব্যাচ ২০২৫ (বিজ্ঞান বিভাগ) [SSC 2026 ব্যাচ]",
        imageUrl: "https://cdn.10minuteschool.com/images/catalog/media/JNk0Q-oDP4w-HD_1735798898974.jpg",
        link: "https://10minuteschool.com/product/class-10-online-batch-2025/"
    }
];

const SscHscSection = () => {
    return (
        <section className="dark bg-background py-14">
            <div className="container mx-auto text-center">
                <div className="mb-4 flex items-center justify-center gap-1.5 text-sm font-medium leading-5 text-blue-primary">
                    <BookOpen className="h-4 w-4" />
                    <span>SSC & HSC</span>
                </div>
                <h2 className="text-3xl font-bold text-foreground">
                    SSC ও HSC শিক্ষার্থীদের জন্য
                </h2>
                <div className="relative mt-8">
                    <div className="scrollbar-hide flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4">
                        {sscHscCourses.map((course, index) => (
                            <a
                                key={index}
                                href={course.link}
                                className="group w-[272px] flex-shrink-0 snap-start"
                            >
                                <div className="flex h-full flex-col overflow-hidden rounded-lg border border-border bg-card shadow-lg transition-shadow duration-300 hover:shadow-primary/20">
                                    <div className="relative h-[152px] w-full">
                                        <Image
                                            src={course.imageUrl}
                                            alt={course.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            className="object-cover transition-transform duration-300 group-hover:scale-105"
                                        />
                                    </div>
                                    <div className="flex flex-1 flex-col p-4 text-left">
                                        <h4 className="flex-grow text-base font-semibold text-card-foreground">
                                            {course.title}
                                        </h4>
                                        <div className="mt-2 flex items-center gap-1 text-sm font-medium text-green-500">
                                            বিস্তারিত
                                            <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                                        </div>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SscHscSection;