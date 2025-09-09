"use client";
import { motion } from "framer-motion";
import React from 'react'
import { TeamSection } from "@/components/OurTeam";
import { fadeUpVariant } from "@/utils/Shared";
import ColourfulText from "@/components/ui/colourful-text";

export default function Home() {
	return (
		<motion.div
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
        >
            <div className="container mx-auto max-w-6xl px-3 md:px-0 py-30">
                <span className="text-3xl md:text-4xl font-semibold">
                    <ColourfulText text="Our Team" />
                </span>

                <div className="pt-2">
                    <TeamSection />
                </div>
            </div>
        </motion.div>
	);
}
