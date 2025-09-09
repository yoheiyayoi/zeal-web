"use client";
import ColourfulText from "@/components/ui/colourful-text";
import { fadeUpVariant } from "@/utils/Shared";
import { motion } from "framer-motion";
import React from 'react'

export default function Home() {
    return (
        <motion.div
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto max-w-6xl px-3 md:px-0 py-30">
                <span className="text-3xl md:text-4xl font-semibold">
                    <ColourfulText text="Our Projects" />
                </span>

                <p className="pt-2 text-2xl">Sorry this page isn't finished yet. 😴</p>
            </div>
        </motion.div>
    );
}
