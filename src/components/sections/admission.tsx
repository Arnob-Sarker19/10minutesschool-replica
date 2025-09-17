import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

type AdmissionCourse = {
  title: string;
  instructors: string;
  imageUrl: string;
  href: string;
};

const admissionCourses: AdmissionCourse[] = [
  {
    title: 'ভার্সিটি A Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫',
    instructors: 'Aman Islam Siam +12',
    imageUrl: 'https://cdn.10minuteschool.com/images/varsity-a-unit-and-gst-admission-course-2025-thumbnail.jpg',
    href: 'https://10minuteschool.com/programs/10447/varsity-a-unit-admission-course-2025/',
  },
  {
    title: 'ভার্সিটি B Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫',
    instructors: 'Ridwan Kabir Beacon +7',
    imageUrl: 'https://cdn.10minuteschool.com/images/varsity-b-unit-and-gst-admission-course-2025-thumbnail.jpg',
    href: 'https://10minuteschool.com/programs/10448/varsity-b-unit-admission-course-2025/',
  },
  {
    title: 'ভার্সিটি C Unit + গুচ্ছ এডমিশন কোর্স - ২০২৫',
    instructors: 'Faiza Tasnim +10',
    imageUrl: 'https://cdn.10minuteschool.com/images/thumbnails/varsity-c-unit-and-gst-admission-course-2025-thumbnail.jpg',
    href: 'https://10minuteschool.com/programs/10449/varsity-c-unit-admission-course-2025/',
  },
];

const AdmissionCourseCard = ({ title, instructors, imageUrl, href }: AdmissionCourse) => (
  <a
    href={href}
    className="group block rounded-lg border border-transparent bg-card text-left text-white transition-all duration-300 hover:border-accent hover:shadow-lg hover:shadow-primary/10"
  >
    <div className="flex h-full flex-col overflow-hidden rounded-lg">
      <div className="relative aspect-[414/232] w-full">
        <Image
          src={imageUrl}
          alt={title}
          fill
          className="rounded-t-lg object-cover"
        />
      </div>
      <div className="flex flex-1 flex-col p-4">
        <h4 className="mb-2 flex-grow font-medium text-card-foreground">
          {title}
        </h4>
        <p className="text-sm text-muted-foreground">{instructors}</p>
      </div>
      <div className="mt-auto flex items-center gap-2 p-4 pt-0 text-sm font-medium text-accent transition-colors group-hover:text-primary">
        <p>বিস্তারিত</p>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  </a>
);

export default function AdmissionSection() {
  return (
    <div className="bg-background py-16 sm:py-24">
      <div className="container">
        <div className="relative rounded-[34px] border border-[#4A2D65] bg-[linear-gradient(180deg,rgba(82,23,153,0.40)_0%,rgba(22,6,54,0.40)_100%)] px-2 pb-8 pt-10 text-center md:px-6">
          <h2 className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 transform rounded-full border border-[#8136D9] bg-[#2D1643] px-[20px] py-[6px] text-base font-medium text-[#A763F3] whitespace-nowrap">
            ভর্তি পরীক্ষা
          </h2>
          <h3 className="mx-auto mb-4 max-w-[420px] text-2xl font-semibold text-foreground md:text-[2.625rem] md:leading-tight">
            স্বপ্নের ভার্সিটির সম্পূর্ণ প্রস্তুতি
          </h3>
          <p className="mx-auto mb-6 w-full max-w-[480px] text-sm text-gray-300 md:text-base">
            ইঞ্জিনিয়ারিং-মেডিকেল কিংবা ভার্সিটি-গুচ্ছ - লক্ষ্য যাই হোক, অর্জনের পথ এখানেই।
          </p>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {admissionCourses.map((course) => (
              <AdmissionCourseCard key={course.title} {...course} />
            ))}
          </div>
          <div className="mt-8">
            <a
              href="/admission/"
              className="inline-block rounded-lg bg-accent px-6 py-3 text-base font-medium text-accent-foreground transition-colors hover:bg-accent/90"
            >
              সকল কোর্স
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}