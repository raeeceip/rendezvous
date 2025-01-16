import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { motion } from "framer-motion"
import Link from "next/link"

interface FeatureCardProps {
  title: string
  description: string
  link: string
}

export function FeatureCard({ title, description, link }: FeatureCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Card className="bg-[#0A1A2F]/70 border-[#F5F0E8]/20 h-full">
        <CardHeader>
          <CardTitle className="text-2xl font-cormorant text-[#F5F0E8] font-light tracking-wide">{title}</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-[#F5F0E8]/80 font-light leading-relaxed">{description}</p>
          <Link href={link}>
            <Button 
              variant="outline" 
              className="w-full border-[#F5F0E8]/40 text-[#F5F0E8] hover:bg-[#F5F0E8]/20 font-cormorant"
            >
              Learn More
            </Button>
          </Link>
        </CardContent>
      </Card>
    </motion.div>
  )
}

