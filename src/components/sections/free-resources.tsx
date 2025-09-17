import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const FreeResources = () => {
  return (
    <div className="bg-background">
      <div className="container py-16 md:py-[100px]">
        <div className="bg-[#153e38] rounded-2xl p-5 md:p-10 flex flex-col md:flex-row items-center gap-5 justify-between">
          <div className="text-center md:text-left">
            <h2 className="text-2xl md:text-4xl text-white font-semibold max-w-[500px] mb-5 mx-auto md:mx-0">
              সেরা শিক্ষকের তৈরি ক্লাস নোট এবং লেকচার শিট প্রয়োজন?
            </h2>
            <Button
              asChild
              className="bg-accent hover:bg-accent/90 text-primary-foreground font-semibold px-8 py-3 h-auto rounded-lg"
              size="lg"
            >
              <a href="https://10minuteschool.com/resource/">
                ফ্রি ডাউনলোড করুন
              </a>
            </Button>
          </div>
          <div>
            <Image
              src="https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/image_pdf_1685354763931.png"
              alt="Free PDF resources illustration"
              width={300}
              height={240}
              className="w-full max-w-[200px] lg:max-w-[250px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeResources;