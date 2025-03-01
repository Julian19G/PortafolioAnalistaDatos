import React from 'react'
import { motion } from "framer-motion";

export default function Lenguajes() {
  return (
    <div>
                    <div className="flex gap-3 justify-center">
              {["React", "Python", "Next.js"].map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-blue-500 text-white px-4 py-2 rounded-lg text-lg font-semibold"
                  whileHover={{ scale: 1.1 }}
                >
                  {tool}
                </motion.div>
              ))}
            </div>
    </div>
    
  )
}
