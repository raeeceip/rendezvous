'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

const MenuPage = () => {
  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

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
          <h1 className="text-5xl md:text-7xl font-cormorant mb-4">Menu</h1>
          <div className="h-0.5 w-32 bg-[#F5F0E8]/20 mx-auto"></div>
        </motion.div>

        {/* Menu Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-12"
          >
            {/* Appetizers */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Appetizers</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">King of Wings <span className="text-[#F5F0E8]/70">17</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Jerk, Northern BBQ, hot 007, Honey garlic, Lemon pepper, Cajun, El diablo</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Spinach Dip <span className="text-[#F5F0E8]/70">16</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Four cheese blend, Spinach, Spring herb butter, served with grilled Naan bread</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Taco Cups <span className="text-[#F5F0E8]/70">15</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Chicken or beef, orange pico de gallo, southwest mayo, sweet red cabbage</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Crispy Beef Wontons <span className="text-[#F5F0E8]/70">16</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Vegetable braised beef, sauteed onions in a fried wonton wrapper</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Fish Cakes <span className="text-[#F5F0E8]/70">17</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Cod fish, potatoes, bell peppers, scotch bonnet, heavy cream, seasoned egg yolks</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Salads */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Salads</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">House Salad <span className="text-[#F5F0E8]/70">14</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Spring mix, cucumbers, bell peppers, red onions, cherry tomatoes, house dressing</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Caesar Salad <span className="text-[#F5F0E8]/70">15</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Romaine lettuce, bacon, parmesan cheese, garlic herb croutons, house Caesar dressing</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Greek Salad <span className="text-[#F5F0E8]/70">16</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Spring mix, olives, red onions, cherry tomatoes, feta cheese, cucumbers, house greek dressing</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="space-y-12"
          >
            {/* Mains */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Mains</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Colonel Salmon <span className="text-[#F5F0E8]/70">32</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Citrus pan seared salmon, creamy white wine sauce</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Sirloin Steak <span className="text-[#F5F0E8]/70">38</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">10oz sirloin steak, new orleans creole steak spice, topped with herb & garlic butter</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">RDV Lamb Chops <span className="text-[#F5F0E8]/70">42</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Half rack lamb chop, house red wine marinade</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Steam Stuffed Chicken <span className="text-[#F5F0E8]/70">34</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">House marinated steamed chicken breast, stuffed with cream cheese, spinach, mushrooms and bell peppers</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Pastas */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Pastas</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Bacon Carbonara <span className="text-[#F5F0E8]/70">26</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Spaghetti noodles, egg yolk, heavy cream, green onions, diced tomatoes, parmesan cheese, bacon</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Seafood Linguine <span className="text-[#F5F0E8]/70">32</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Linguine noodles, lobster, jumbo shrimp, scallops, creamy white wine sauce, diced bell peppers</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Rosee Chorizo <span className="text-[#F5F0E8]/70">28</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Rosee sauce, rigatoni noodles, chorizo, garlic, basil, chipotle peppers</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Pesto Amore <span className="text-[#F5F0E8]/70">27</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Penne noodles, pesto alfredo sauce, boneless grilled chicken thighs, cherry tomatoes</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Desserts */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Desserts</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Crème Brûlée <span className="text-[#F5F0E8]/70">12</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Classic vanilla bean crème brûlée with caramelized sugar crust</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Berry Cheesecake <span className="text-[#F5F0E8]/70">14</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">New York style cheesecake with fresh berry compote</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Rum Infused Brownie <span className="text-[#F5F0E8]/70">13</span></h3>
                    <p className="text-sm text-[#F5F0E8]/70">Warm chocolate brownie with vanilla ice cream and rum caramel sauce</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>

        {/* Sides */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <h2 className="text-3xl font-cormorant mb-6">Sides</h2>
          <p className="text-[#F5F0E8]/70">
            Side salad, sweet plantain, mash potatoes, jollof rice, fries, yam fries
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default MenuPage;

