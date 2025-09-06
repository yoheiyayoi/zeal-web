"use client"

import { BackgroundEffects } from "./shared/solution-hero-background"
import Image from "next/image"
import { cn } from "@/lib/utils"
import Glow from "./ui/glow"

export function HomeHero() {
    return (
        <div className="min-h-screen relative overflow-hidden font-sans">
            <div className="relative z-50 flex items-center justify-center min-h-screen">
                <div className="text-center space-y-8 max-w-5xl mx-auto px-8 py-20">
                    <div className="space-y-6 relative z-50">
                        <Image
                            src="/Zeal-Banner.png"
                            width={500}
                            height={500}
                            alt="Zeal_ Studio"
                        />

                        <div className="space-y-2 font-semibold text-3xl md:text-4xl text-slate-600 font-eng">
                            Meet <b>Zeal Studios</b>
                        </div>

                        <Glow variant='center' />
                    </div>

                    <div className="space-y-4 max-w-4xl mx-auto relative z-50">
                        <p className="text-xl text-slate-800 leading-relaxed drop-shadow-lg">
                            <span className="font-eng">The only Roblox Studios you’ll ever need (maybe)</span>
                            <br />
                            <span>สตูดิโอ Roblox ที่เจ๋งที่สุด (มั้ง)</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
