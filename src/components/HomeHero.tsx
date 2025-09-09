"use client"

import Image from "next/image"
import { cn } from "@/lib/utils"
import Glow from "./ui/glow"
import ColourfulText from "./ui/colourful-text"

export function HomeHero() {
    return (
        <div className="min-h-screen relative overflow-hidden font-sans">
            <div className="absolute inset-x-0 top-0 flex h-full w-full items-center justify-center opacity-100">
                <img
                    alt="background"
                    src="https://deifkwefumgah.cloudfront.net/shadcnblocks/block/patterns/square-alt-grid.svg"
                    className="[mask-image:radial-gradient(75%_75%_at_center,white,transparent)] opacity-90"
                />
            </div>
            <div className="relative flex items-center justify-center min-h-screen">
                <div className="text-center space-y-8 max-w-5xl mx-auto px-8 py-20">
                    <div className="space-y-6 relative">
                        <Image
                            src="/Zeal-Banner.png"
                            width={500}
                            height={500}
                            alt="Zeal_ Studio"
                        />

                        <div className="space-y-2 font-semibold text-3xl md:text-4xl text-slate-600 font-eng">
                            Meet <span className="font-extrabold">
                                <ColourfulText text="Zeal Studios" />
                            </span>
                        </div>

                        <Glow variant='center' />
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto relative z-50">
                        <p className="text-xl text-slate-800 leading-relaxed drop-shadow-lg">
                            <span className="font-eng">The only Roblox Studios you’ll ever need (maybe)</span>
                            <br />
                            <span className="tracking-wide">สตูดิโอ Roblox ที่เจ๋งที่สุด (มั้ง)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
