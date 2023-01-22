"use client";
import { Features } from '@/components/Features';
import Header from '@/components/Header';
import Pricing from '@/components/Pricing';
import {Button} from '@chakra-ui/react';
function Home() {
  return (
    <>
      <Header />
      <Pricing />
      <Features />
    </>
  )
}

export default Home