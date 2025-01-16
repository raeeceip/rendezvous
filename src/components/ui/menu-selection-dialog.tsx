'use client';

import { Button } from "@/components/ui/button";
import { DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

const menuOptions = [
  {
    title: "Dinner Menu",
    description: "Experience our curated selection of fine dining dishes",
    image: "/placeholder.svg?height=400&width=600",
    href: "/menu"
  },
  {
    title: "Cocktail Menu",
    description: "Discover our signature cocktails and bottle service",
    image: "/placeholder.svg?height=400&width=600",
    href: "/cocktails"
  },
  {
    title: "Private Events",
    description: "Learn about our exclusive private dining experiences",
    image: "/placeholder.svg?height=400&width=600",
    href: "/private-events"
  }
];

export function MenuSelectionDialog() {
  return (
    <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto bg-[#0A1A2F]/95 backdrop-blur-sm border-[#F5F0E8]/10">
      <DialogHeader>
        <DialogTitle className="text-3xl font-cormorant text-center mb-8 text-[#F5F0E8]">Our Menus</DialogTitle>
      </DialogHeader>
      <div className="grid md:grid-cols-3 gap-6 p-6">
        {menuOptions.map((option, index) => (
          <motion.div
            key={option.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <Link href={option.href}>
              <div className="group relative overflow-hidden rounded-lg">
                <div className="relative h-48 w-full overflow-hidden">
                  <Image
                    src={option.image || "/placeholder.svg"}
                    alt={option.title}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-[#0A1A2F]/60 transition-opacity duration-300 group-hover:opacity-75" />
                </div>
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-2xl font-cormorant text-[#F5F0E8] mb-2">{option.title}</h3>
                  <p className="text-[#F5F0E8]/80 text-sm">{option.description}</p>
                  <Button
                    variant="outline"
                    className="mt-4 border-[#F5F0E8]/20 text-[#F5F0E8] hover:bg-[#F5F0E8]/10 font-cormorant"
                  >
                    View Menu
                  </Button>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </DialogContent>
  );
}
