'use client';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { Montserrat } from 'next/font/google';
import { cn } from '@/lib/utils';
import {
  LayoutDashboard,
  MessageSquare,
  ImageIcon,
  VideoIcon,
  Music,
  Code,
  Settings,
} from 'lucide-react';

const monserrat = Montserrat({
  weights: [600],
  subsets: ['latin'],
});

const routes = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    href: '/dashboard',
    color: 'text-sky-500',
  },
  {
    label: 'Conversation',
    icon: MessageSquare,
    href: '/conversation',
    color: 'text-violet-500',
  },
  {
    label: 'Image Generation',
    icon: ImageIcon,
    href: '/image',
    color: 'text-pink-500',
  },
  {
    label: 'Video Generation',
    icon: VideoIcon,
    href: '/video',
    color: 'text-orange-700',
  },
  {
    label: 'Music Generation',
    icon: Music,
    href: '/music',
    color: 'text-emerald-500',
  },
  {
    label: 'Code Generation',
    icon: Code,
    href: '/code',
    color: 'text-green-700',
  },
  {
    label: 'Settings',
    icon: Settings,
    href: '/settings',
  },
];

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

        <div className='space-y-1'>
          {routes.map((route) => (
            <Link key={route.href} href={route.href}>
              <div className='flex items-center gap-2 flex-1 hover:bg-[#1f2937]  space-x-4 px-3 py-4 rounded-md'>
                <route.icon
                  className={cn(
                    'h-6 w-6 transition-all duration-500 ',
                    route.color
                  )}
                  size={20}
                />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
