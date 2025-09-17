import Image from 'next/image';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface Course {
  title: string;
  imageSrc: string;
  imageAlt: string;
  instructor: string;
  href: string;
}

const courses: Course[] = [
  {
    title: "বিসিএস প্রিলি রেকর্ডেড কোর্স",
    imageSrc: "https://cdn.10minuteschool.com/images/thumbnails/BCS_Preli_Recorded_Course_Thumbnail.jpg",
    imageAlt: "বিসিএস প্রিলি রেকর্ডেড কোর্স",
    instructor: "Sakib Bin Rashid +20",
    href: "https://10minuteschool.com/programs/152/bcs-preli/",
  },
  {
    title: "ব্যাংক জবস কোর্স",
    imageSrc: "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/BankJ.jpg",
    imageAlt: "ব্যাংক জবস কোর্স",
    instructor: "Akif Masumi +8",
    href: "https://10minuteschool.com/programs/170/bank-job/",
  },
  {
    title: "সরকারি চাকরি প্রস্তুতি বেসিক কোর্স",
    imageSrc: "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/shorkari_chakri_prostuti_rac.jpg",
    imageAlt: "সরকারি চাকরি প্রস্তুতি বেসিক কোর্স",
    instructor: "Akif Masumi +10",
    href: "https://10minuteschool.com/programs/252/govt-job-basic-prep/",
  },
  {
    title: "English for Govt. Jobs",
    imageSrc: "https://cdn.10minuteschool.com/images/thumbnails/english-for-govt-jobs-16x9-updated.jpg",
    imageAlt: "English for Govt. Jobs course",
    instructor: "Shahnawaz Hossain Jay",
    href: "https://10minuteschool.com/programs/10173/english-course-for-govt-jobs-preparation/",
  },
  {
    title: "GK for Govt. Jobs",
    imageSrc: "https://cdn.10minuteschool.com/images/thumbnails/gk-course-for-govt-jobs-thumbnail.jpg",
    imageAlt: "GK for Govt. Jobs course",
    instructor: "আব্দুর রহমান শ্রাবণ",
    href: "https://10minuteschool.com/programs/10182/gk-for-govt-jobs/",
  },
  {
    title: "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স - ২০২৩",
    imageSrc: "https://cdn.10minuteschool.com/images/thumbnails/PATR23/PATR_updated_thumbnail_May_2023.jpg",
    imageAlt: "প্রাথমিক সহকারী শিক্ষক নিয়োগ পরীক্ষা কোর্স",
    instructor: "Nafis Islam +3",
    href: "https://10minuteschool.com/programs/10203/primary-assistant-teachers-recruitment-course/",
  },
  {
    title: "বিসিএস প্রশ্ন সমাধান",
    imageSrc: "https://cdn.10minuteschool.com/images/skills/Updated_Thumbnail_v3/bcs_qs_thumbnail.jpg",
    imageAlt: "বিসিএস প্রশ্ন সমাধান",
    instructor: "Akif Masumi +3",
    href: "https://10minuteschool.com/programs/179/bcs-ques-solve/",
  },
  {
    title: "ব্যাংক জবস প্রশ্ন সমাধান + মডেল টেস্ট কোর্স",
    imageSrc: "https://cdn.10minuteschool.com/images/thumbnails/bank_jobs_question_solve_course_model_test.jpg",
    imageAlt: "ব্যাংক জবস প্রশ্ন সমাধান + মডেল টেস্ট কোর্স",
    instructor: "Akif Masumi +2",
    href: "https://10minuteschool.com/programs/10037/bank-jobs-question-solution-and-model-test/",
  },
];

const CourseCard = ({ course }: { course: Course }) => (
  <a
    href={course.href}
    className="group flex w-[272px] flex-shrink-0 flex-col snap-start overflow-hidden rounded-lg bg-card text-left text-card-foreground shadow-md transition-all hover:shadow-lg border border-border hover:border-primary"
  >
    <div className="overflow-hidden">
      <Image
        src={course.imageSrc}
        alt={course.imageAlt}
        width={272}
        height={152}
        className="w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />
    </div>
    <div className="flex flex-1 flex-col p-4">
      <h4 className="text-[17px] font-semibold leading-snug text-foreground">
        {course.title}
      </h4>
      <p className="mt-1 text-sm text-muted-foreground">{course.instructor}</p>
      <div className="mt-auto flex items-center gap-1 pt-2 text-sm text-primary">
        <p className="mb-0">বিস্তারিত</p>
        <ArrowRight className="h-4 w-4" />
      </div>
    </div>
  </a>
);

const JobPreparationSection = () => {
    return (
        <section className="py-16 text-foreground">
            <div className="container px-4">
                <div className="relative rounded-[34px] border border-[#2F5444] bg-[linear-gradient(180deg,rgba(32,109,75,0.40)_0%,rgba(11,39,26,0.40)_100%)] px-2 pb-8 pt-10 text-center md:px-6">
                    <h2 className="absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-0 whitespace-nowrap rounded-full border border-[#3CE18D] bg-[#133224] px-[20px] py-[6px] text-lg font-medium text-[#3CE18D]">
                        চাকরি প্রস্তুতি
                    </h2>
                    <h3 className="mx-auto mb-4 w-full max-w-[340px] text-2xl font-semibold">
                        সরকারি চাকরির সর্বোচ্চ প্রস্তুতি
                    </h3>
                    <p className="mx-auto mb-10 w-full max-w-[360px] text-base text-muted-foreground">
                        বিসিএস কিংবা ব্যাংকে চাকরি - টার্গেট যেটাই হোক, সলিউশন এখানেই!
                    </p>

                    <div className="scrollbar-hide relative -mx-2 flex snap-x snap-mandatory gap-4 overflow-x-auto px-2 pb-4 md:-mx-6 md:px-6">
                        {courses.map((course, index) => (
                            <CourseCard key={index} course={course} />
                        ))}
                    </div>

                    <a
                        href="https://10minuteschool.com/jobs-prep/"
                        className="mt-10 inline-flex items-center justify-center gap-2 text-primary hover:underline"
                    >
                        <span>সকল কোর্স</span>
                        <ArrowRight className="h-4 w-4" />
                    </a>
                </div>
            </div>
        </section>
    );
};

export default JobPreparationSection;