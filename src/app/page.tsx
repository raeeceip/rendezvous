'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogTrigger } from '@/components/ui/dialog';
import { FeatureCard } from '@/components/ui/feature-card';
import { MenuSelectionDialog } from '@/components/ui/menu-selection-dialog';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

const customStyles = {
  backgroundGradient: 'linear-gradient(to bottom, rgba(10, 26, 47, 0.7), rgba(10, 26, 47, 0.5))',
};

const OPENTABLE_LINK = process.env.NEXT_PUBLIC_OPENTABLE_LINK || "https://www.opentable.com/restref/client/?rid=XXXXX";

const featureCards = [
  {
    title: "Private Events",
    description: "Host unforgettable gatherings in our elegant private spaces.",
    link: "/private-events"
  },
  {
    title: "Wine Selection",
    description: "Explore our curated collection of fine wines from around the world.",
    link: "/drinks-menu"
  },
  {
    title: "Chef's Table",
    description: "Experience an intimate dining journey with our executive chef.",
    link: "/menu"
  }
];

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) return null;

  return (
    <main className="min-h-screen bg-[#0A1A2F] overflow-x-hidden">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6 }}
        className="fixed w-full bg-[#0A1A2F]/80 backdrop-blur-md border-b border-[#F5F0E8]/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-4">
              <motion.div 
                className="w-16 h-16 relative"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Image
                  src="/logo.svg"
                  alt="Rendezvous"
                  width={64}
                  height={64}
                  className="w-full h-full rounded-full"
                  priority
                />
              </motion.div>
              <span className="text-3xl font-cormorant text-[#F5F0E8] tracking-widest font-light">Rendezvous</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-cormorant">
              <motion.a 
                href="#about" 
                className="text-[#F5F0E8]/80 hover:text-[#F5F0E8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                About
              </motion.a>
              <Dialog>
                <DialogTrigger asChild>
                  <motion.button
                    className="text-[#F5F0E8]/80 hover:text-[#F5F0E8] transition-colors cursor-pointer"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Menus
                  </motion.button>
                </DialogTrigger>
                <MenuSelectionDialog />
              </Dialog>
              <motion.a 
                href="#contact" 
                className="text-[#F5F0E8]/80 hover:text-[#F5F0E8] transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.a>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  className="border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#F5F0E8]/10 font-cormorant"
                  onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                >
                  Book a Table
                </Button>
              </motion.div>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-[#F5F0E8]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                {isMenuOpen ? (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth={2} 
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="md:hidden border-t border-[#F5F0E8]/10"
              >
                <div className="py-4 flex flex-col space-y-4">
                  <a href="#about" className="text-[#F5F0E8]/80 hover:text-[#F5F0E8]">About</a>
                  <Dialog>
                    <DialogTrigger asChild>
                      <button className="text-left text-[#F5F0E8]/80 hover:text-[#F5F0E8]">
                        Menus
                      </button>
                    </DialogTrigger>
                    <MenuSelectionDialog />
                  </Dialog>
                  <a href="#contact" className="text-[#F5F0E8]/80 hover:text-[#F5F0E8]">Contact</a>
                  <Button 
                    variant="outline" 
                    className="border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#F5F0E8]/10 w-full font-cormorant"
                    onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                  >
                    Book a Table
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0">
          <Image 
            src="/adobestock.jpeg" 
            alt="Restaurant ambiance" 
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div 
            className="absolute inset-0" 
            style={{ background: customStyles.backgroundGradient }}
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex flex-col justify-center h-full text-[#F5F0E8] pt-24"
          >
            <h1 className="text-6xl md:text-8xl font-cormorant font-light mb-8 tracking-widest leading-tight">
              A Culinary<br />Journey
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-2xl font-cormorant font-light tracking-wider leading-relaxed text-[#F5F0E8]/90">
              Experience the art of fine dining in an atmosphere of understated elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-[#F5F0E8]/40 bg-[#0A1A2F]/70 text-[#D4AF37] hover:bg-[#F5F0E8]/20 hover:text-[#0A1A2F] font-cormorant text-lg px-8 py-3 transition-colors"
                  onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                >
                  Reserve a Table
                </Button>
              </motion.div>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button 
                      variant="outline" 
                      className="border-[#F5F0E8]/40 bg-[#0A1A2F]/70 w-full text-[#D4AF37] hover:bg-[#F5F0E8]/20 hover:text-[#0A1A2F] font-cormorant text-lg px-8 py-3 transition-colors"
                    >
                      View Menus
                    </Button>
                  </DialogTrigger>
                  <MenuSelectionDialog />
                </Dialog>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px] md:h-[600px]"
            >
              <Image 
                src="/restaurant.jpeg" 
                alt="Our restaurant" 
                fill
                className="rounded-lg shadow-xl object-cover"
              />
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-5xl text-[#F5F0E8] font-light mb-6 font-cormorant tracking-wide">Our Story</h2>
              <p className="text-[#F5F0E8]/80 text-lg mb-8 font-light leading-relaxed">
                Founded in 2025, Rendezvous is dedicated to serving exceptional cuisine
                in an elegant setting. Our passion for quality ingredients and
                innovative cooking techniques has made us a destination for food
                lovers, combining traditional flavors with modern presentations.
              </p>
              <p className="text-[#F5F0E8]/80 text-lg mb-8 font-light leading-relaxed">
                Every dish tells a story, crafted with precision and care by our expert culinary team.
                We believe in creating moments that last, experiences that linger, and flavors that inspire.
              </p>
              <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                <Button 
                  variant="outline" 
                  className="border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#F5F0E8]/10 font-cormorant text-lg px-8 py-6"
                >
                  Learn More
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-24 bg-[#0A1A2F]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-cormorant text-[#F5F0E8] font-light tracking-wide text-center mb-12">Our Offerings</h2>
          <div className="hidden md:grid md:grid-cols-3 gap-8">
            {featureCards.map((card, index) => (
              <FeatureCard key={index} {...card} />
            ))}
          </div>
          <div className="md:hidden">
            <Swiper
              modules={[Pagination]}
              spaceBetween={20}
              slidesPerView={1}
              pagination={{ clickable: true }}
            >
              {featureCards.map((card, index) => (
                <SwiperSlide key={index}>
                  <FeatureCard {...card} />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-[#0A1A2F]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              <h2 className="text-5xl font-cormorant text-[#F5F0E8] font-light tracking-wide">Visit Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-cormorant text-[#F5F0E8]/90 mb-4">Location</h3>
                  <p className="text-[#F5F0E8]/80 text-lg font-light leading-relaxed">
                    101 Clarence St, Ottawa, Ontario
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-cormorant text-[#F5F0E8]/90 mb-4">Hours</h3>
                  <p className="text-[#F5F0E8]/80 text-lg font-light leading-relaxed">
                    Monday - Friday: 11am - 10pm<br />
                    Saturday - Sunday: 5pm - 11pm
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-cormorant text-[#F5F0E8]/90 mb-4">Contact</h3>
                  <p className="text-[#F5F0E8]/80 text-lg font-light leading-relaxed">
                    Phone: (555) 123-4567<br />
                    Email: info@rendezvous.restaurant
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="bg-[#0A1A2F]/50 border-[#F5F0E8]/10">
                <CardHeader>
                  <CardTitle className="text-3xl font-cormorant text-[#F5F0E8] font-light tracking-wide text-center">Make a Reservation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-[#F5F0E8]/80 text-center font-light leading-relaxed">
                    Join us for an unforgettable dining experience.
                  </p>
                  <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                    <Button 
                      variant="outline" 
                      className="w-full border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#F5F0E8]/10 font-cormorant text-lg py-6"
                      onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                    >
                      Book on OpenTable
                    </Button>
                  </motion.div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#0A1A2F] text-[#F5F0E8] py-16 border-t border-[#F5F0E8]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center space-y-8"
          >
            <div className="flex justify-center">
              <Image 
                src="/logo.svg" 
                alt="Rendezvous" 
                width={120} 
                height={120}
                className="mb-6 rounded-full"
              />
            </div>
            <p className="text-[#F5F0E8]/60 text-lg font-light">Elevating dining to an art form</p>
            <div className="flex justify-center space-x-8">
              {['Instagram', 'Facebook', 'Twitter'].map((social) => (
                <motion.a
                  key={social}
                  href="#"
                  className="text-[#F5F0E8]/60 hover:text-[#F5F0E8] transition-colors text-lg font-cormorant"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social}
                </motion.a>
              ))}
            </div>
          </motion.div>
          <div className="mt-16 pt-8 border-t border-[#F5F0E8]/10 text-center">
            <p className="text-[#F5F0E8]/60 font-light">&copy; {new Date().getFullYear()} Rendezvous Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

