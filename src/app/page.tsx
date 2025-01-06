"use client";
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { useState } from 'react';
import { Helmet } from 'react-helmet';

type MenuItem = {
  name: string;
  description: string;
  price: number;
};

type MenuCategories = {
  [K in 'starters' | 'mains' | 'desserts']: MenuItem[];
};

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
    { name: 'Cheese Selection', description: 'Curated artisanal cheeses, honey, nuts', price: 24 }
  ]
};

const OPENTABLE_LINK = "https://www.opentable.com/restref/client/?rid=XXXXX";

const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<keyof MenuCategories>('mains');

  const MenuDialog = () => (
    <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
      <DialogHeader>
        <DialogTitle className="text-3xl font-playfair text-center mb-8">Our Menu</DialogTitle>
      </DialogHeader>
      <div className="space-y-12 p-4">
        <div className="flex justify-center space-x-4 mb-8">
          {Object.keys(menuCategories).map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              className={`font-playfair capitalize ${
                selectedCategory === category ? 'bg-amber-600' : ''
              }`}
              onClick={() => setSelectedCategory(category as keyof MenuCategories)}
            >
              {category}
            </Button>
          ))}
        </div>
        <div className="space-y-6">
          {menuCategories[selectedCategory].map((item, index) => (
            <div key={index} className="flex justify-between items-start p-4 border-b">
              <div>
                <h4 className="font-playfair font-medium text-lg">{item.name}</h4>
                <p className="text-gray-600 text-sm mt-1">{item.description}</p>
              </div>
              <span className="font-playfair text-lg">${item.price}</span>
            </div>
          ))}
        </div>
      </div>
    </DialogContent>
  );

  return (
    <>
      <Helmet>
        <title>Rendezvous Restaurant | Fine Dining Experience</title>
        <meta name="description" content="Experience exquisite fine dining at Rendezvous. Featuring modern French cuisine in an elegant setting in the heart of the city." />
        <meta property="og:title" content="Rendezvous Restaurant" />
        <meta property="og:description" content="Experience exquisite fine dining at Rendezvous. Modern French cuisine in an elegant setting." />
        <meta property="og:image" content="/og-image.jpg" />
        <meta property="og:url" content="https://rendezvous.restaurant" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://rendezvous.restaurant" />
        <meta name="keywords" content="fine dining, French restaurant, luxury dining, Rendezvous restaurant" />
        <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet" />
      </Helmet>

      <div className="min-h-screen bg-white font-playfair">
        {/* Header */}
        <header className="fixed w-full bg-white/90 backdrop-blur-sm shadow-sm z-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center py-4">
              <div className="relative">
                <div 
                  className="text-3xl font-bold text-amber-600 font-playfair"
                  style={{
                    backgroundImage: 'url("/api/placeholder/200/100")',
                    backgroundSize: 'contain',
                    backgroundPosition: 'center',
                    backgroundClip: 'text',
                    WebkitBackgroundClip: 'text',
                    color: 'transparent'
                  }}
                >
                  Rendezvous
                </div>
              </div>
              
              {/* Desktop Navigation */}
              <nav className="hidden md:flex items-center space-x-8 font-playfair">
                <a href="#about" className="hover:text-amber-600 transition-colors">About</a>
                <Dialog>
                  <DialogTrigger className="hover:text-amber-600 transition-colors">Menu</DialogTrigger>
                  <MenuDialog />
                </Dialog>
                <a href="#contact" className="hover:text-amber-600 transition-colors">Contact</a>
                <Button 
                  variant="default" 
                  className="bg-amber-600 hover:bg-amber-700 font-playfair"
                  onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                >
                  Book a Table
                </Button>
              </nav>

              {/* Mobile Menu Button */}
              <button 
                className="md:hidden"
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
              <div className="md:hidden py-4">
                <div className="flex flex-col space-y-4">
                  <a href="#about" className="hover:text-amber-600">About</a>
                  <Dialog>
                    <DialogTrigger className="text-left hover:text-amber-600">Menu</DialogTrigger>
                    <MenuDialog />
                  </Dialog>
                  <a href="#contact" className="hover:text-amber-600">Contact</a>
                  <Button 
                    variant="default" 
                    className="bg-amber-600 hover:bg-amber-700 w-full"
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
            <img 
              src="adobestock.jpeg" 
              alt="Restaurant ambiance" 
              className="w-full h-full object-cover mix-blend-overlay"
            />
          </div>
          
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
            <div className="flex flex-col justify-center h-full text-white">
              <h1 className="text-5xl md:text-7xl font-bold mb-6 font-playfair">
                Experience Fine Dining
              </h1>
              <p className="text-xl md:text-2xl mb-8 max-w-2xl font-playfair">
                Join us for an unforgettable culinary journey with expertly crafted 
                dishes in an elegant atmosphere.
              </p>
              <div className="flex space-x-4">
                <Button 
                  variant="default" 
                  className="bg-amber-600 hover:bg-amber-700 font-playfair"
                  onClick={() => window.open(OPENTABLE_LINK, '_blank')}
                >
                  Book a Table
                </Button>
                <Dialog>
                  <DialogTrigger asChild>
                    <Button variant="outline" className="text-white border-white hover:bg-white/10 font-playfair">
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
                <h2 className="text-4xl font-bold mb-6 font-playfair">Our Story</h2>
                <p className="text-gray-600 mb-6">
                  Founded in 2010, Rendezvous has been serving exceptional cuisine
                  in an elegant setting. Our passion for quality ingredients and
                  innovative cooking techniques has made us a destination for food
                  lovers.
                </p>
                <Button variant="default" className="bg-amber-600 hover:bg-amber-700 font-playfair">
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
                      className="w-full bg-amber-600 hover:bg-amber-700 font-playfair"
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
                <a href="#" className="hover:text-amber-600">Instagram</a>
                <a href="#" className="hover:text-amber-600">Facebook</a>
                <a href="#" className="hover:text-amber-600">Twitter</a>
              </div>
            </div>
            <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
              <p>&copy; {new Date().getFullYear()} Rendezvous Restaurant. All rights reserved.</p>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default App;