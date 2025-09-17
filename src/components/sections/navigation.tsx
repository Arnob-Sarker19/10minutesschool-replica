"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, ChevronDown, Globe, Phone } from 'lucide-react';

const navItems = [
  { label: 'ক্লাস ৬-১২', href: '/academic/', dropdown: true, notification: false },
  { label: 'স্কিলস', href: '/skills/', dropdown: true, notification: false },
  { label: 'ভর্তি পরীক্ষা', href: '/admission/', dropdown: false, notification: false },
  { label: 'অনলাইন ব্যাচ', href: '/online-batch/', dropdown: true, notification: false },
  { label: 'ইংলিশ সেন্টার', href: '/english-centre/', dropdown: true, notification: true },
  { label: 'আরো', href: '#', dropdown: true, notification: true },
];

const mobileNavItems = [
    { label: 'ক্লাস ৬-১২', href: '', dropdown: true, notification: false },
    { label: 'স্কিলস', href: '', dropdown: true, notification: false },
    { label: 'ভর্তি পরীক্ষা', href: '/admission', dropdown: false, notification: false },
    { label: 'আরো', href: '', dropdown: true, notification: true },
];

export default function Navigation() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background border-border">
      <div className="mx-auto flex max-w-[1440px] items-center justify-between gap-3 px-4 py-3 md:h-[65px] md:px-7">
        
        <div className="flex items-center gap-2">
          <button className="text-foreground xl:hidden">
            <Menu size={20} />
            <span className="sr-only">menu</span>
          </button>
          <div className="md:hidden">
            <Link href="/" className="block h-[27px] w-[100px]">
              <Image
                alt="10ms"
                src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
                width={100}
                height={27}
                style={{ filter: 'brightness(0) invert(1)' }}
              />
            </Link>
          </div>
        </div>

        <div className="items-center hidden gap-9 md:flex">
          <Link href="/" className="block h-[27px] w-[100px]">
            <Image
              alt="10ms"
              src="https://cdn.10minuteschool.com/images/svg/10mslogo-svg.svg"
              width={100}
              height={27}
              style={{ filter: 'brightness(0) invert(1)' }}
            />
          </Link>
        </div>

        <div className="flex-1 hidden w-full pr-4 md:block" />

        <nav className="hidden mr-4 xl:block">
          <ul className="flex items-center gap-2 lg:gap-4">
            {navItems.map((item, index) => (
              <li key={index} className="relative">
                <Link
                  href={item.href}
                  className="flex cursor-pointer items-center justify-center gap-0.5 text-sm font-medium text-muted-foreground hover:text-primary"
                >
                  <p className="relative mb-0 whitespace-nowrap">
                    {item.label}
                    {item.notification && <span className="absolute top-0 -right-1 h-1.5 w-1.5 rounded-full bg-destructive"></span>}
                  </p>
                  {item.dropdown && <ChevronDown size={20} className="mt-0 shrink-0" />}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="flex items-center space-x-4 md:space-x-6">
          <div className="flex items-center gap-3 md:gap-6">
            <span className="hidden cursor-pointer items-center gap-1 rounded border border-border px-2 py-[2px] text-foreground hover:bg-card md:flex">
                <Globe size={14} />
                <span>EN</span>
            </span>

            <a className="items-center hidden gap-1 text-accent hover:underline md:flex" href="tel:16910">
              <Phone size={16} />
              <span className="inline-block">16910</span>
            </a>
            
            <a className="flex items-center gap-1 text-foreground md:hidden" href="tel:16910">
              <Phone size={20} />
            </a>
          </div>

          <div className="block">
            <Link
              href="/auth/login/"
              className="flex items-center rounded-md bg-accent px-3 py-1 text-accent-foreground md:px-6"
            >
              <span id="login-button" className="whitespace-nowrap text-[12px] font-semibold leading-[24px] md:text-[16px] md:font-medium">
                লগ-ইন
              </span>
            </Link>
          </div>
        </div>
      </div>
      
      <div className="block border-t bg-background border-border md:hidden">
        <div className="mx-auto flex max-w-[350px] items-center justify-between p-4">
          {mobileNavItems.map((item, index) => (
            <li key={index} className="relative list-none">
              <Link
                href={item.href}
                className="flex cursor-pointer items-center gap-2 text-xs font-medium text-muted-foreground hover:text-primary"
              >
                <div className="flex items-center justify-center relative">
                  <p className="relative mb-0 whitespace-nowrap">
                    {item.label}
                    {item.notification && <span className="absolute top-0 -right-1 h-1.5 w-1.5 rounded-full bg-destructive"></span>}
                  </p>
                  {item.dropdown && <ChevronDown size={20} className="shrink-0" />}
                </div>
              </Link>
            </li>
          ))}
        </div>
      </div>
    </header>
  );
}