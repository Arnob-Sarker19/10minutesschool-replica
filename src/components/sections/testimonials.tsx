import Image from "next/image";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}

const testimonialsData: Testimonial[] = [
  {
    quote: "কোর্সটির প্রতিটি সেকশনে ছিল স্পষ্ট নির্দেশনা । বিশেষ করে, “Reading” এবং “Writing” সেকশন এতটাই informative ছিল যা আমার জন্য Mock Test এবং Real Exam কে সহজ করে তুলেছিল। আমার সবচেয়ে ভালো লেগেছে “Writing Part”",
    name: "Tahiya Faiza",
    designation: "Teaching Assistant, Brac University",
    image: "https://cdn.10minuteschool.com/images/1667372177810.png"
  },
  {
    quote: "অফলাইনে শেখার মত সময় হয়ে উঠছিল না তাই অনলাইন কোর্স কে বেছে নেওয়া । কোর্সটিতে খুব সুন্দর করে হরফ তানভীন মাদ পড়ানো হয়েছে । খুব সহজেই প্রতিদিন প্র্যাকটিস করে খুব দ্রুত শুদ্ধ তেলাওয়াত আয়ত্ত করতে পেরেছি।",
    name: "Zakirul Islam",
    designation: "Businessman",
    image: "https://cdn.10minuteschool.com/images/1667372177810.png"
  },
  {
    quote: "আমার একটি অনলাইন পেজ ছিল কিন্তু পেইজটিকে নিয়ে কিভাবে সামনে আগাবে কোন কিছু বুঝতে পারছিলাম না । কোর্সটি করার মাধ্যমে কিভাবে একটি বেসিক পোস্ট দিবো কিভাবে ইউজ করব কিভাবে কন্টাক্ট করবো শিখতে পেরেছি।",
    name: "Hasibur Rahman",
    designation: "Online Business Owner",
    image: "https://cdn.10minuteschool.com/images/1667372177810.png"
  },
  {
    quote: "টেন মিনিট স্কুলের অনলাইন ব্যাচে ইংরেজি ক্লাস করার পর ইংরেজি বিষয়ে আমি ৯০+ মার্কস পেয়েছি। এছাড়াও টেন মিনিট স্কুলের লাইভ চ্যাট, পোল এবং লিডারবোর্ড ফিচারটি চমৎকার যা আমাদের প্রতিনিয়ত পড়াশোনার আগ্রহ বাড়াতে সাহায্য করেছে।",
    name: "Mushfik Jaman",
    designation: "Class 8, Bedkashi Collegiate School, Khulna",
    image: "https://cdn.10minuteschool.com/images/1667372177810.png"
  },
  {
    quote: "অনলাইন ব্যাচের ক্লাসের সবচেয়ে চমৎকার বিষয় হলো ক্লাসে পড়ানোর টেকনিক। প্রত্যেকটি শিক্ষক এত যত্ন করে ক্লাসগুলো করান যে আমার বাচ্চা ক্লাসগুলো খুব এঞ্জয় করে। পড়াশোনা এমন মজারই হওয়া দরকার! এছাড়া, মান্থলি এক্সাম, লেকচার শীট গুলো ও খুবই মানসম্মত।",
    name: "Miftahul Jannat",
    designation: "Class 7",
    image: "https://cdn.10minuteschool.com/images/1667372177810.png"
  }
];

const Testimonials = () => {
  return (
    <div className="bg-background pt-[50px] pb-[70px]">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-3xl md:text-[42px] font-semibold text-foreground mb-12">
          কেন আমরাই শিক্ষার্থী ও অভিভাবকগণের প্রথম পছন্দ?
        </h2>
        
        <div className="scrollbar-hide flex flex-nowrap gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory -mx-4 px-4">
          {testimonialsData.map((testimonial, index) => (
            <div key={index} className="flex-shrink-0 snap-start w-full max-w-[370px]">
              <div className="bg-card p-6 pb-[50px] rounded-lg h-full flex flex-col">
                <div className="h-[25px] w-[35px]">
                  <Quote className="h-full w-full text-primary/30" fill="currentColor" />
                </div>
                <p className="text-muted-foreground my-3 leading-[24px] text-base flex-grow">
                  {testimonial.quote}
                </p>
                <div className="mt-8 flex items-center gap-4">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    width={50}
                    height={50}
                    className="rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-semibold text-foreground text-lg">
                      {testimonial.name}
                    </h3>
                    <p className="text-muted-foreground text-sm opacity-80 mt-1">
                      {testimonial.designation}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;