'use client';

import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import Image from 'next/image';
import { useEffect, useState } from 'react';

// Types
type MenuItem = {
  name: string;
  description: string;
  price: number;
};

type MenuCategories = {
  [K in 'starters' | 'mains' | 'desserts']: MenuItem[];
};

// Constants
const menuCategories: MenuCategories = {
  starters: [
    { name: 'Lobster Bisque', description: 'Creamy lobster soup with cognac', price: 18 },
    { name: 'Beef Carpaccio', description: 'Thinly sliced beef with truffle oil and parmesan', price: 22 },
    { name: 'Wild Mushroom Tart', description: 'Seasonal mushrooms, aged gruyere, herbs', price: 16 }
  ],
  mains: [
    { name: 'Wagyu Ribeye', description: 'Grade A5 Japanese Wagyu, seasonal vegetables', price: 95 },
    { name: 'Dover Sole', description: 'Pan-seared sole, lemon butter sauce', price: 68 },
    { name: 'Truffle Risotto', description: 'Carnaroli rice, black truffle, aged parmesan', price: 42 }
  ],
  desserts: [
    { name: 'Crème Brûlée', description: 'Tahitian vanilla, caramelized sugar', price: 14 },
    { name: 'Chocolate Soufflé', description: 'Valrhona chocolate, vanilla ice cream', price: 16 },
    { name: 'Pineapple Brûlée', description: 'Caramelized pineapple, fresh berries, coconut cream', price: 15 }
  ]
};

const OPENTABLE_LINK = process.env.NEXT_PUBLIC_OPENTABLE_LINK || "https://www.opentable.com/restref/client/?rid=XXXXX";

export default function HomePage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof MenuCategories>('mains');
  const [mounted, setMounted] = useState(false);

  // Handle hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const MenuDialog = () => (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto bg-zinc-900/95 backdrop-blur-sm">
      <DialogHeader>
        <DialogTitle className="text-3xl font-cormorant text-center mb-8 text-zinc-100">Our Menu</DialogTitle>
      </DialogHeader>
      <div className="space-y-12 p-6">
        <div className="flex justify-center space-x-4 mb-8">
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
        <div className="space-y-6">
          {menuCategories[selectedCategory].map((item, index) => (
            <div key={index} className="flex justify-between items-start p-4 border-b border-zinc-800">
              <div>
                <h4 className="font-cormorant font-medium text-lg text-zinc-100">{item.name}</h4>
                <p className="text-zinc-400 text-sm mt-1 font-light">{item.description}</p>
              </div>
              <span className="font-cormorant text-lg text-zinc-100">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );

  return (
    <div className="min-h-screen bg-zinc-900">
      {/* Header */}
      <header className="fixed w-full bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="relative">
              <div className="flex items-center">
                <div className="w-12 h-12">
                  <Image
                    src="/logo.svg"
                    alt="Rendezvous"
                    width={48}
                    height={48}
                    className="w-full h-full rounded-full"
                  />
                </div>
                <span className="ml-3 text-2xl font-cormorant font-light tracking-wider text-zinc-100">
                  Rendezvous
                </span>
              </div>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8 font-cormorant">
              <a href="#about" className="text-zinc-300 hover:text-zinc-100 transition-colors">About</a>
              <Dialog>
                <DialogTrigger className="text-zinc-300 hover:text-zinc-100 transition-colors">Menu</DialogTrigger>
                <MenuDialog />
              </Dialog>
              <a href="#contact" className="text-zinc-300 hover:text-zinc-100 transition-colors">Contact</a>
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
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-zinc-800">
              <div className="flex flex-col space-y-4">
                <a href="#about" className="text-zinc-300 hover:text-zinc-100">About</a>
                <Dialog>
                  <DialogTrigger className="text-left text-zinc-300 hover:text-zinc-100">Menu</DialogTrigger>
                  <MenuDialog />
                </Dialog>
                <a href="#contact" className="text-zinc-300 hover:text-zinc-100">Contact</a>
                <Button 
                  variant="outline" 
                  className="border-zinc-700 text-zinc-100 hover:bg-zinc-800 w-full font-cormorant"
                  onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                >
                  Book a Table
                </Button>
              </div>
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen">
        <div className="absolute inset-0 bg-black/50">
          <Image 
            src="/adobestock.jpeg" 
            alt="Restaurant ambiance" 
            fill
            className="object-cover mix-blend-overlay"
            priority
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
          <div className="flex flex-col justify-center h-full text-zinc-100">
            <h1 className="text-6xl md:text-8xl font-cormorant font-light mb-6 tracking-wider">
              A Culinary Journey
            </h1>
            <p className="text-xl md:text-2xl mb-8 max-w-2xl font-cormorant font-light tracking-wide">
              Experience the art of fine dining in an atmosphere of understated elegance.
            </p>
            <div className="flex space-x-4">
              <Button 
                variant="outline" 
                className="border-zinc-600 text-zinc-600 hover:bg-zinc-600 hover:text-zinc-900 font-cormorant text-lg"
                onClick={() => window.open(OPENTABLE_LINK, '_blank')}
              >
                Reserve a Table
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button 
                    variant="outline" 
                    className="border-zinc-600 text-zinc-600 hover:bg-zinc-600 hover:text-zinc-900 font-cormorant text-lg"
                  >
                    View Menu
                  </Button>
                </DialogTrigger>
                <MenuDialog />
              </Dialog>
            </div>
          </div>
        </div>
      </section>

        {/* About Section */}
        <section id="about" className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="restaurant.jpeg" 
                  alt="Our restaurant" 
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div>
                <h2 className="text-4xl text-white font-bold mb-6 font-playfair">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, Rendezvous has been serving exceptional cuisine
                  in an elegant setting. Our passion for quality ingredients and
                  innovative cooking techniques has made us a destination for food
                  lovers.
                </p>
                <Button variant="default" className="bg-gray-600 hover:bg-gray-700 font-playfair">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-12">
              <div>
                <h2 className="text-4xl font-bold mb-6 font-playfair">Visit Us</h2>
                <div className="space-y-4">
                  <p className="text-gray-600">
                    123 Dining Street<br />
                    Foodville, FD 12345
                  </p>
                  <p className="text-gray-600">
                    <strong>Hours:</strong><br />
                    Mon-Fri: 11am - 10pm<br />
                    Sat-Sun: 10am - 11pm
                  </p>
                  <p className="text-gray-600">
                    <strong>Contact:</strong><br />
                    Phone: (555) 123-4567<br />
                    Email: info@rendezvous.restaurant
                  </p>
                </div>
              </div>
              <div>
                <Card>
                  <CardHeader>
                    <CardTitle className="font-playfair">Make a Reservation</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Button 
                      variant="default" 
                      className="w-full bg-gray-600 hover:bg-gray-700 font-playfair"
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
        <footer className="bg-gray-900 text-white py-12">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <div className="text-2xl font-bold mb-4 font-playfair">Rendezvous</div>
              <p className="text-gray-400 mb-4">Fine dining at its finest</p>
              <div className="flex justify-center space-x-4">
                <a href="#" className="hover:text-gray-600">Instagram</a>
                <a href="#" className="hover:text-gray-600">Facebook</a>
                <a href="#" className="hover:text-gray-600">Twitter</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Rendezvous Restaurant. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
  
  );
};

