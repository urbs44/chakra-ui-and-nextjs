// app/page.tsx
'use client'
import { Link } from '@chakra-ui/next-js'
import HeroSection from '@/components/HeroSection'
import Features from '@/components/Features'
import Testimonials from '@/components/Testimonials'
import Footer from '@/components/Footer'

export default function Page() {
  return (
    <>
    <HeroSection/>
    <Features/>
    <Testimonials />
    <Footer />
    </>
  )
}