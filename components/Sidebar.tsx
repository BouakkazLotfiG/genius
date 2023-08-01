'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';

const monserrat = Montserrat({
  weights: [600],
  subsets: ['latin'],
});

const Sidebar = () => {
  return (
    <div className='space-y-4 flex flex-col h-full bg-[#111827] text-white'>
      {' '}
      <div className='px-3  flex-1'>
        <Link className='flex items-center pl-3 mb-14' href='/dashboard'>
          <div className='relative w-24 h-24 mr-4'>
            <Image fill alt='logo' src='/next.svg' />
          </div>
          <h1 className={cn('text-2xl font-bold', monserrat.className)}>
            Genius
          </h1>
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
