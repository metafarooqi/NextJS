"use client";
import Image from 'next/image'
import { Inter } from '@next/font/google'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features';
import MissionSection from '@/components/MissionSection';
import Courses from '@/components/Courses';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
   <>
    <HeroSection />
    <MissionSection />
    <Courses />
    {/* <Statistics /> */}
    </>
  )}