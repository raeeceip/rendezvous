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
    <div className="min-h-screen bg-[#18181B] text-zinc-100">
      {/* Header */}
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed w-full bg-zinc-900/90 backdrop-blur-sm border-b border-zinc-800 z-50"
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
          <h1 className="text-5xl md:text-7xl font-cormorant mb-4">Dinner Menu</h1>
          <div className="h-0.5 w-32 bg-zinc-700 mx-auto"></div>
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
            {/* Smalls & Shared Plates */}
            <section>
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-3xl font-cormorant">Smalls</h2>
                <div className="h-[1px] flex-grow mx-4 bg-zinc-800"></div>
                <h2 className="text-3xl font-cormorant">Shared Plates</h2>
              </div>
              
              <div className="space-y-6">
                {/* Smalls */}
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Crispy Wings <span className="text-zinc-400">18</span></h3>
                    <p className="text-sm text-zinc-400">smoky BBQ, house hot, honey garlic, peri-peri, dry rub, honey hot, lemon pepper</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Jerk Dip <span className="text-zinc-400">17</span></h3>
                    <p className="text-sm text-zinc-400">Swiss cheese blend, black herb butter with a side of grilled naan</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Tacos <span className="text-zinc-400">16</span></h3>
                    <p className="text-sm text-zinc-400">Your choice of creole shrimp or chicken, pickled slaw, mango salsa, cajun crema</p>
                  </div>
                </div>

                {/* Shared Plates */}
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Chicken Dumplings <span className="text-zinc-400">17</span></h3>
                    <p className="text-sm text-zinc-400">Jerk chicken and slaw filling with a sweet and spicy ginger sauce</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Crispy Cauliflour <span className="text-zinc-400">15</span></h3>
                    <p className="text-sm text-zinc-400">Korean BBQ sauce, pickled slaw topped with sesame seeds</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Charcuterie <span className="text-zinc-400">25</span></h3>
                    <p className="text-sm text-zinc-400">Brie and cheddar, prosciutto, coppa salami, grapes, dried fruit, strawberry compote</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Large Plates */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Large Plates</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Blackened Chicken <span className="text-zinc-400">35</span></h3>
                    <p className="text-sm text-zinc-400">Chicken breast, sun dried mushroom rice, pickled slaw sweet plantain, jalapeno crema</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Pan Seared Salmon <span className="text-zinc-400">33</span></h3>
                    <p className="text-sm text-zinc-400">Salmon fillet on a bed of aromatic rice with seasonal vegetables</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Jollof Heritage <span className="text-zinc-400">39</span></h3>
                    <p className="text-sm text-zinc-400">Jollof rice, 6oz sirloin coleslaw, plantains</p>
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
            {/* Steakhouse */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Steakhouse</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">6oz or 12oz Steak <span className="text-zinc-400">(35)(55)</span></h3>
                    <p className="text-sm text-zinc-400">Your choice of 6oz sirloin (35) or 12oz ribeye (55), in our house marinade, seasonal vegetables and fries</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Steak and Shrimp <span className="text-zinc-400">(45)(63)</span></h3>
                    <p className="text-sm text-zinc-400">Your choice of 6oz sirloin (63), in our house marinade, black tiger shrimp in browned butter seasonal vegetables and fries</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Gold Lamb Chops <span className="text-zinc-400">(52)(77)</span></h3>
                    <p className="text-sm text-zinc-400">Half rack (52) or full rack (77) in our house marinade, chimichurri sauce, seasonal vegetables, mash</p>
                  </div>
                </div>
              </div>
            </section>

            {/* Burgers */}
            <section>
              <h2 className="text-3xl font-cormorant mb-6">Burgers</h2>
              <div className="space-y-6">
                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Beef Burger <span className="text-zinc-400">25</span></h3>
                    <p className="text-sm text-zinc-400">AAA Canadian ground beef, lettuce, tomato, caramelized onions, cheddar cheese, dill pickles, bacon, jerk aioli, choice of side</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Chicken Burger <span className="text-zinc-400">24</span></h3>
                    <p className="text-sm text-zinc-400">Fried chicken, creamy slaw, pickles, cheddar, lettuce, tomato, chipotle aioli, choice of side</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Mushroom Burger <span className="text-zinc-400">22</span></h3>
                    <p className="text-sm text-zinc-400">Vegan burger, crispy onions, tomato, lettuce, jerk aioli, choice of side</p>
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
                    <h3 className="text-xl font-cormorant">Pineapple Crème Brûlée <span className="text-zinc-400">10</span></h3>
                    <p className="text-sm text-zinc-400">Pineapple bowl with fresh fruit</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Berry Cheesecake <span className="text-zinc-400">12</span></h3>
                    <p className="text-sm text-zinc-400">Classic New York style cheesecake raspberry bourbon sauce, maple cream, berries</p>
                  </div>
                </div>

                <div className="menu-item">
                  <div>
                    <h3 className="text-xl font-cormorant">Ice Cream & Fruit <span className="text-zinc-400">8</span></h3>
                    <p className="text-sm text-zinc-400">Three scoops of ice cream topped with berries</p>
                  </div>
                </div>
              </div>
            </section>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default MenuPage;