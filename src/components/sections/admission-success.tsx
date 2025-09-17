'use client';

import React, { useState, useEffect, useRef } from 'react';

// A reusable animated counter component to show Bengali numerals
interface AnimatedCounterProps {
  end: number;
  duration?: number;
  suffix?: string;
}

const AnimatedCounter: React.FC<AnimatedCounterProps> = ({ end, duration = 2000, suffix = '' }) => {
  const [count, setCount] = useState(0);
  const animationFrameId = useRef<number | null>(null);
  const startTimestamp = useRef<number | null>(null);
  const hasAnimated = useRef(false);
  const ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated.current) {
          hasAnimated.current = true;
          
          const animate = (timestamp: number) => {
            if (!startTimestamp.current) {
              startTimestamp.current = timestamp;
            }

            const elapsedTime = timestamp - startTimestamp.current;
            const progress = Math.min(elapsedTime / duration, 1);
            const currentCount = Math.floor(progress * end);
            
            setCount(currentCount);

            if (elapsedTime < duration) {
              animationFrameId.current = requestAnimationFrame(animate);
            } else {
              setCount(end); // Ensure it ends on the exact value
            }
          };

          animationFrameId.current = requestAnimationFrame(animate);
        }
      },
      { threshold: 0.5 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current);
      }
      startTimestamp.current = null;
    };
  }, [end, duration]);

  const formattedCount = count.toLocaleString('bn-BD');

  return (
    <span ref={ref}>
      {formattedCount}
      {suffix}
    </span>
  );
};


const AdmissionSuccess = () => {
  const sectionStyle = {
    backgroundImage: "url('https://s3.ap-southeast-1.amazonaws.com/cdn.10minuteschool.com/images/admission-success-bg_1667196016140.png')",
    backgroundColor: '#7f2d33',
  };

  const stats = [
    { value: 4329, text: 'মোট শিক্ষার্থী', suffix: '' },
    { value: 640, text: 'চান্সপ্রাপ্ত শিক্ষার্থী', suffix: '+' },
    { value: 30, text: 'টপ ১০০-তে চান্সপ্রাপ্ত শিক্ষার্থী', suffix: '' },
  ];

  return (
    <section 
      className="bg-cover bg-center py-[60px] md:py-[100px]" 
      style={sectionStyle}
    >
      <div className="mx-auto max-w-7xl px-4">
        <h2 className="text-center text-2xl font-semibold text-white md:text-[40px] md:leading-[48px]">
          ২০২২-২৪ শিক্ষাবর্ষে টেন মিনিট স্কুলের এডমিশন সাফল্য
        </h2>
        <p className="mt-4 text-center text-base text-white md:text-xl">
          তোমাদের সাফল্যই আমাদের অনুপ্রেরণা
        </p>

        <div className="mx-auto mt-10 grid max-w-4xl grid-cols-1 gap-6 md:grid-cols-3">
          {stats.map((stat, index) => (
            <div key={index} className="rounded-lg bg-white/10 p-4 text-center text-white">
              <h2 className="text-[50px] font-bold leading-none">
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
              </h2>
              <p className="mt-2 text-xl">{stat.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdmissionSuccess;