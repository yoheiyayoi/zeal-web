"use client";
import { motion } from "framer-motion";
import React from 'react'
import { HomeHero } from "@/components/HomeHero";
import { fadeUpVariant } from "@/utils/Shared";

export default function Home() {
	return (
		<motion.div
            variants={fadeUpVariant}
            initial="initial"
            animate="animate"
        >
            <div>
                <HomeHero />
            </div>
        </motion.div>
	);
}
