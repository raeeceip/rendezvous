'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';

// Add custom styles to match the logo
const customStyles = {
  backgroundGradient: 'linear-gradient(to bottom, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.5))',
  overlayColor: 'rgba(0, 0, 0, 0.6)',
};

// Types
type MenuItem = {
  name: string;
  description: string;
  price: number | string;
};

type MenuCategories = {
  smalls: MenuItem[];
  shared: MenuItem[];
  large: MenuItem[];
  steakhouse: MenuItem[];
  salads: MenuItem[];
  desserts: MenuItem[];
};

// Constants
const menuCategories: MenuCategories = {
  smalls: [
    { name: 'Crispy Wings', description: 'smoky BBQ, house hot, honey garlic, peri-peri, dry rub, honey hot, lemon pepper', price: 18 },
    { name: 'Jerk Dip', description: 'Swiss cheese blend, black herb butter with a side of grilled naan', price: 17 },
    { name: 'Tacos', description: 'Your choice of creole shrimp or chicken, pickled slaw, mango salsa, cajun crema', price: 16 }
  ],
  shared: [
    { name: 'Chicken Dumplings', description: 'Jerk chicken and slaw filling with a sweet and spicy ginger sauce', price: 17 },
    { name: 'Crispy Cauliflour', description: 'Korean BBQ sauce, pickled slaw topped with sesame seeds', price: 15 },
    { name: 'Charcuterie', description: 'Brie and cheddar, prosciutto, coppa salami, grapes, dried fruit, strawberry compote', price: 25 }
  ],
  large: [
    { name: 'Blackened Chicken', description: 'Chicken breast, sun dried mushroom rice, pickled slaw sweet plantain, jalapeno crema', price: 35 },
    { name: 'Pan Seared Salmon', description: 'Salmon fillet on a bed of aromatic rice with seasonal vegetables', price: 33 },
    { name: 'Jollof Heritage', description: 'Jollof rice, 6oz sirloin coleslaw, plantains', price: 39 }
  ],
  steakhouse: [
    { name: '6oz or 12oz Steak', description: 'Your choice of 6oz sirloin or 12oz ribeye, in our house marinade, seasonal vegetables and fries', price: '35/55' },
    { name: 'Steak and Shrimp', description: 'Your choice of 6oz sirloin with black tiger shrimp in browned butter', price: '45/63' },
    { name: 'Gold Lamb Chops', description: 'Half rack or full rack in our house marinade, chimichurri sauce', price: '52/77' }
  ],
  salads: [
    { name: 'Mango Salad', description: 'Black tiger shrimp, white wine vinaigrette, avocado crema, tajin, cucumber', price: 24 },
    { name: 'Caesar Salad', description: 'romaine, caesar dressing, toasted rosemary garlic bread crumbs, grated parmesan, bacon', price: 22 },
    { name: 'Frisée Salad', description: 'potato, lemon vinaigrette, double bacon, topped with shaved cheddar', price: 20 }
  ],
  desserts: [
    { name: 'Pineapple Crème Brûlée', description: 'Pineapple bowl with fresh fruit', price: 10 },
    { name: 'Berry Cheesecake', description: 'Classic New York style cheesecake raspberry bourbon sauce', price: 12 },
    { name: 'Rum Infused Brownie', description: 'Dark chocolate rum infused brownie, vanilla ice cream', price: 12 }
  ]
};

const OPENTABLE_LINK = process.env.NEXT_PUBLIC_OPENTABLE_LINK || "https://www.opentable.com/restref/client/?rid=XXXXX";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof MenuCategories>('large');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Prevent hydration mismatch by not rendering until mounted
  if (!isMounted) {
    return null;
  }

  const MenuDialog = () => (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900/95 backdrop-blur-sm">
      <DialogHeader>
        <DialogTitle className="text-3xl font-cormorant text-center mb-8 text-zinc-100">Our Menu</DialogTitle>
      </DialogHeader>
      <div className="space-y-8 p-6">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {Object.keys(menuCategories).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`font-cormorant capitalize ${
                selectedCategory === category 
                  ? 'bg-zinc-700 text-zinc-100' 
                  : 'text-zinc-300 border-zinc-700 hover:bg-zinc-800'
              }`}
              onClick={() => setSelectedCategory(category as keyof MenuCategories)}
            >
              {category}
            </Button>
          ))}
        </div>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 20 }}
            transition={{ duration: 0.3 }}
            className="space-y-6"
          >
            {menuCategories[selectedCategory].map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex justify-between items-start p-4 border-b border-zinc-800"
              >
                <div className="flex-1 pr-4">
                  <h4 className="font-cormorant font-medium text-lg text-zinc-100">{item.name}</h4>
                  <p className="text-zinc-400 text-sm mt-1 font-light">{item.description}</p>
                </div>
                <span className="font-cormorant text-lg text-zinc-100 whitespace-nowrap">
                  ${item.price}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </DialogContent>
  );

  return (
    <main className="min-h-screen bg-zinc-900 overflow-x-hidden">
      {/* Header */}
      <header className="fixed w-full bg-zinc-900/80 backdrop-blur-md border-b border-zinc-800/50 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-6">
            <Link href="/" className="flex items-center space-x-4">
              <div className="w-16 h-16 relative">
                <Image
                  src="/logo.svg"
                  alt="Rendezvous"
                  width={64}
                  height={64}
                  className="w-full h-full rounded-full"
                  priority
                />
              </div>
              <span className="text-3xl font-cormorant text-zinc-100 tracking-widest font-light">Rendezvous</span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-cormorant">
              <a href="#about" className="text-zinc-300 hover:text-zinc-100 transition-colors">
                About
              </a>
              <Dialog>
                <DialogTrigger>
                  <span className="text-zinc-300 hover:text-zinc-100 transition-colors cursor-pointer">
                    Menu
                  </span>
                </DialogTrigger>
                <MenuDialog />
              </Dialog>
              <a href="#contact" className="text-zinc-300 hover:text-zinc-100 transition-colors">
                Contact
              </a>
              <Button 
                variant="outline" 
                className="border-zinc-700 text-zinc-100 hover:bg-zinc-800 font-cormorant"
                onClick={() => window.open(OPENTABLE_LINK, '_blank')}
              >
                Book a Table
              </Button>
            </nav>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-zinc-100"
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
                className="md:hidden border-t border-zinc-800"
              >
                <div className="py-4 flex flex-col space-y-4">
                  <a href="#about" className="text-zinc-300 hover:text-zinc-100">About</a>
                    <Link href="/menu" className="text-zinc-300 hover:text-zinc-100">
                    Menu
                    </Link>
                  <a href="#contact" className="text-zinc-300 hover:text-zinc-100">Contact</a>
                  <Button 
                    variant="outline" 
                    className="border-zinc-700 text-zinc-100 hover:bg-zinc-800 w-full font-cormorant"
                    onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                  >
                    Book a Table
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </header>

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
          <div className="flex flex-col justify-center h-full text-zinc-100 pt-24">
            <h1 className="text-6xl md:text-8xl font-cormorant font-light mb-8 tracking-widest leading-tight">
              A Culinary<br />Journey
            </h1>
            <p className="text-xl md:text-3xl mb-12 max-w-2xl font-cormorant font-light tracking-wider leading-relaxed">
              Experience the art of fine dining in an atmosphere of understated elegance.
            </p>
            <div className="flex flex-col sm:flex-row gap-5">
              <Button 
                variant="outline" 
                className="border-zinc-800 text-zinc-500 hover:bg-zinc-100 hover:text-zinc-900 font-cormorant text-lg"
                onClick={() => window.open(OPENTABLE_LINK, '_blank')}
              >
                Reserve a Table
              </Button>
              <Dialog>
                <Link href="/menu">
                  <Button 
                  variant="outline" 
                  className="border-zinc-800 w-full text-zinc-500 hover:bg-zinc-500 hover:text-zinc-900 font-cormorant text-lg"
                  >
                  View Menu
                  </Button>
                </Link>
                <MenuDialog />
              </Dialog>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="relative h-[400px] md:h-[600px]">
              <Image 
                src="/restaurant.jpeg" 
                alt="Our restaurant" 
                fill
                className="rounded-lg shadow-xl object-cover"
              />
            </div>
            <div className="space-y-8">
              <h2 className="text-5xl text-zinc-100 font-light mb-6 font-cormorant tracking-wide">Our Story</h2>
              <p className="text-zinc-300 text-lg mb-8 font-light leading-relaxed">
                Founded in 2025, Rendezvous is dedicated to serving exceptional cuisine
                in an elegant setting. Our passion for quality ingredients and
                innovative cooking techniques has made us a destination for border-zinc-800
                lovers, combining traditional flavors with modern presentations.
              </p>
              <p className="text-zinc-300 text-lg mb-8 font-light leading-relaxed">
                Every dish tells a story, crafted with precision and care by our expert culinary team.
                We believe in creating moments that last, experiences that linger, and flavors that inspire.
              </p>
              <Button 
                variant="outline" 
                className="border-zinc-800 text-zinc-800 hover:bg-zinc-100 hover:text-zinc-900 font-cormorant text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Special Features Section */}
      <section className="py-24 bg-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-cormorant text-zinc-100 font-light tracking-wide">Private Events</h3>
              <p className="text-zinc-300 font-light leading-relaxed">
                Create unforgettable moments in our elegant private dining spaces.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-cormorant text-zinc-100 font-light tracking-wide">Wine Selection</h3>
              <p className="text-zinc-300 font-light leading-relaxed">
                Curated collection of fine wines from around the world.
              </p>
            </div>
            <div className="text-center space-y-4">
              <h3 className="text-3xl font-cormorant text-zinc-100 font-light tracking-wide">Chefs Table</h3>
              <p className="text-zinc-300 font-light leading-relaxed">
                An intimate dining experience with our executive chef.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            <div className="space-y-8">
              <h2 className="text-5xl font-cormorant text-zinc-100 font-light tracking-wide">Visit Us</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-cormorant text-zinc-200 mb-4">Location</h3>
                  <p className="text-zinc-300 text-lg font-light leading-relaxed">
                    101 Clarence St, Ottawa, Ontario<br />
                    
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-cormorant text-zinc-200 mb-4">Hours</h3>
                  <p className="text-zinc-300 text-lg font-light leading-relaxed">
                    Monday - Friday: 11am - 10pm<br />
                    Saturday - Sunday: 5pm - 11pm
                  </p>
                </div>
                <div>
                  <h3 className="text-2xl font-cormorant text-zinc-200 mb-4">Contact</h3>
                  <p className="text-zinc-300 text-lg font-light leading-relaxed">
                    Phone: (555) 123-4567<br />
                    Email: info@rendezvous.restaurant
                  </p>
                </div>
              </div>
            </div>
            <div>
              <Card className="bg-zinc-800 border-zinc-700">
                <CardHeader>
                  <CardTitle className="text-3xl font-cormorant text-zinc-100 font-light tracking-wide text-center">Make a Reservation</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <p className="text-zinc-300 text-center font-light leading-relaxed">
                    Join us for an unforgettable dining experience.
                  </p>
                  <Button 
                    variant="outline" 
                    className="w-full border-zinc-800 text-zinc-100 hover:bg-zinc-100 hover:text-zinc-900 font-cormorant text-lg py-6"
                    onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                  >
                    Book on OpenTable
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 text-zinc-100 py-16 border-t border-zinc-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <div className="flex justify-center">
              <Image 
                src="/logo.svg" 
                alt="Rendezvous" 
                width={120} 
                height={120}
                className="mb-6 rounded-full"
              />
            </div>
            <p className="text-zinc-400 text-lg font-light">Elevating dining to an art form</p>
            <div className="flex justify-center space-x-8">
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-cormorant">
                Instagram
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-cormorant">
                Facebook
              </a>
              <a href="#" className="text-zinc-400 hover:text-zinc-100 transition-colors text-lg font-cormorant">
                Twitter
              </a>
            </div>
          </div>
          <div className="mt-16 pt-8 border-t border-zinc-800 text-center">
            <p className="text-zinc-400 font-light">&copy; {new Date().getFullYear()} Rendezvous Restaurant. All rights reserved.</p>
          </div>
        </div>
      </footer>

    </main>
  );

}
