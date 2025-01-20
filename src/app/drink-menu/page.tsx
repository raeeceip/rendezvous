'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const CocktailsPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const cocktailMenu = [
    { category: "TEQUILA", items: [
      { name: "1800 SILVER", price: 200 },
      { name: "1800 REPOSADO", price: 200 },
      { name: "CASAMIGOS BLANCO", price: 310 },
      { name: "CASAMIGOS REPOSADO", price: 310 },
      { name: "DON JULIO 1942", price: 820 },
      { name: "CLASE AZUL REPOSADO", price: 900 }
    ]},
    { category: "CHAMPAGNE", items: [
      { name: "VEUVE CLICQUOT BRUT", price: 220 }
    ]},
    { category: "VODKA", items: [
      { name: "CIROC ULTRA PREMIUM", price: 200 },
      { name: "GREY GOOSE", price: 200 },
      { name: "GREY GOOSE MAGNUM (1750 ML)", price: 450 }
    ]},
    { category: "COGNAC", items: [
      { name: "HENNESSY VS", price: 250 }
    ]}
  ];

  return (
    <div className="min-h-screen bg-[#0A1A2F] text-[#F5F0E8]">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-[#0A1A2F]/90 backdrop-blur-sm border-b border-[#F5F0E8]/10 z-50"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12">
                <Image
                  src="/logo.svg"
                  alt="Rendezvous"
                  width={48}
                  height={48}
                  className="w-full h-full rounded-full"
                />
              </div>
              <span className="font-cormorant text-2xl tracking-wide">Rendezvous</span>
            </Link>
          </div>
        </div>
      </motion.header>

      <div className="pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-cormorant mb-4">Bottle Service</h1>
          <div className="h-0.5 w-32 bg-[#F5F0E8]/20 mx-auto"></div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
          {cocktailMenu.map((section, index) => (
            <motion.div
              key={section.category}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <h2 className="text-3xl font-cormorant mb-6 text-[#D4AF37]">{section.category}</h2>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div key={itemIndex} className="flex justify-between items-center border-b border-[#F5F0E8]/10 pb-2">
                    <span className="text-lg font-cormorant">{item.name}</span>
                    <span className="text-lg font-cormorant text-[#D4AF37]">{item.price}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-16 text-center text-[#F5F0E8]/80"
        >
          <p>All Bottles are 750ml otherwise specified - 20% Gratuity Added To All Orders.</p>
        </motion.div>
      </div>
    </div>
  );
};

export default CocktailsPage;

