import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { MessageCircle, Phone } from 'lucide-react';

const companyLinks = [
  { href: 'https://app.10minuteschool.com/careers', text: 'ক্যারিয়ার / নিয়োগ বিজ্ঞপ্তি' },
  { href: 'https://docs.google.com/forms/d/e/1FAIpQLScWh9jjyWnUKdDKET1-LHvdTxuU6-ssd0GLTI-0JlQ2MH6RzA/viewform', text: 'শিক্ষক হিসাবে যোগ দিন' },
  { href: 'https://affiliation.10minuteschool.com/', text: 'অ্যাফিলিয়েট হিসাবে যোগ দিন' },
  { href: 'https://app.10minuteschool.com/privacy-policy', text: 'প্রাইভেসি পলিসি' },
  { href: 'https://app.10minuteschool.com/refund-policy', text: 'রিফান্ড পলিসি' },
  { href: 'https://app.10minuteschool.com/terms-and-conditions', text: 'ব্যবহারকারীর শর্তাবলি' },
];

const otherLinks = [
  { href: 'https://blog.10minuteschool.com/', text: 'ব্লগ' },
  { href: 'https://10minuteschool.com/store/all', text: 'বুক স্টোর' },
  { href: 'https://10minuteschool.com/content', text: 'ফ্রি নোটস ও গাইড' },
  { href: 'https://10minuteschool.com/jobs-prep', text: 'চাকরি প্রস্তুতি কোর্সসমূহ' },
  { href: 'https://10minuteschool.com/certificate', text: 'সার্টিফিকেট ভেরিফাই করুন' },
  { href: 'https://10minuteschool.com/resource', text: 'ফ্রি ডাউনলোড' },
];

const socialLinks = [
  { href: 'https://www.facebook.com/10minuteschool/', src: 'https://cdn.10minuteschool.com/images/facebook_1695730910971.png', alt: 'facebook' },
  { href: 'https://www.instagram.com/10ms_insta/', src: 'https://cdn.10minuteschool.com/images/instagram_1695731442397.png', alt: 'instagram' },
  { href: 'https://www.linkedin.com/company/10ms/', src: 'https://cdn.10minuteschool.com/images/linkedin_1695731507042.png', alt: 'linkedin' },
  { href: 'https://www.youtube.com/channel/UCL89KKkLs0tZKld-iIS3NGw', src: 'https://cdn.10minuteschool.com/images/youtube_1695731538726.png', alt: 'youtube' },
  { href: 'https://www.tiktok.com/@10minuteschool?lang=en', src: 'https://cdn.10minuteschool.com/images/Tiktok_1695731564895.png', alt: 'Tiktok' },
];

const Footer = () => {
  return (
    <>
      <footer className="bg-[#0F101A] pt-[50px] pb-[70px] text-[#A2A4A8] text-sm font-normal">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-[1fr_0.5fr_0.5fr_1fr] md:gap-x-14 md:gap-y-12">
            
            <div className="flex flex-col gap-6">
              <Link href="/">
                <Image src="https://10minuteschool.com/images/logo.svg" alt="10 Minute School" width={144} height={36} className="brightness-0 invert" />
              </Link>
              <h3 className="text-xl font-bold text-white">ডাউনলোড করুন আমাদের মোবাইল অ্যাপ</h3>
              <div className="flex items-center gap-4">
                <a href="https://play.google.com/store/apps/details?id=com.a10minuteschool.tenminuteschool" target="_blank" rel="noopener noreferrer">
                  <Image src="https://cdn.10minuteschool.com/images/google-play-icon_1695731678094.png" alt="Google Play" width={140} height={43} />
                </a>
                <a href="https://apps.apple.com/us/app/10-minute-school/id1577061772" target="_blank" rel="noopener noreferrer">
                  <Image src="https://cdn.10minuteschool.com/images/ios-store-icon_1695731704002.png" alt="App Store" width={124} height={43} />
                </a>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white">কোম্পানি</h3>
              <ul className="flex flex-col gap-[10px]">
                {companyLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white">অন্যান্য</h3>
              <ul className="flex flex-col gap-[10px]">
                {otherLinks.map((link) => (
                  <li key={link.text}>
                    <a href={link.href} className="hover:text-accent transition-colors" target="_blank" rel="noopener noreferrer">
                      {link.text}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="flex flex-col gap-4">
              <h3 className="text-xl font-bold text-white">আমাদের যোগাযোগ মাধ্যম</h3>
              <ul className="flex flex-col gap-[14px]">
                <li>
                  কল করুন: <a href="tel:16910" className="hover:text-accent font-sans transition-colors">16910</a> (24x7)
                </li>
                <li>
                  হোয়াটসঅ্যাপ: <a href="https://api.whatsapp.com/send?phone=+8801896016252&text=I%20need%20your%20assistance" className="hover:text-accent font-sans transition-colors" target="_blank" rel="noopener noreferrer">+8801896016252</a> (24x7)
                </li>
                <li>
                  দেশের বাহির থেকে: <a href="tel:+8809610916910" className="hover:text-accent font-sans transition-colors">+880 9610916910</a>
                </li>
                <li>
                  ইমেইল: <a href="mailto:support@10minuteschool.com" className="hover:text-accent font-sans transition-colors">support@10minuteschool.com</a>
                </li>
              </ul>
              <div className="flex items-center gap-4 mt-2">
                {socialLinks.map((social) => (
                  <a href={social.href} key={social.alt} target="_blank" rel="noopener noreferrer" className="transition-opacity hover:opacity-80">
                    <Image src={social.src} alt={social.alt} width={32} height={32} />
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className="mt-12 border-t border-white/10 pt-8 text-center text-white/60">
            স্বত্ব © ২০১৫ - ২০২৫ টেন মিনিট<br className="md:hidden" /> স্কুল কর্তৃক সর্বস্বত্ব সংরক্ষিত
          </div>
        </div>
      </footer>
      <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
        <a 
          href="https://api.whatsapp.com/send?phone=+8801896016252&text=I%20need%20your%20assistance"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          className="bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
        >
          <MessageCircle size={28} />
        </a>
        <a 
          href="tel:16910"
          aria-label="Call for support"
          className="bg-accent text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-green-700 transition-colors"
        >
          <Phone size={28} />
        </a>
      </div>
    </>
  );
};
export default Footer;