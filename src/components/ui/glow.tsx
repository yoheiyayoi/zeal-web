import { cn } from "@/lib/utils"

interface GlowProps {
  variant?: "top" | "bottom" | "center"
  className?: string
}

export default function Glow({ variant = "center", className }: GlowProps) {
  const variantStyles = {
    top: "top-0 -translate-y-1/2",
    bottom: "bottom-0 translate-y-1/2",
    center: "top-1/2 -translate-y-1/2",
  }

  return (
    <div className={cn("absolute left-1/2 -translate-x-1/2 pointer-events-none", variantStyles[variant], className)}>
      <div className="w-96 h-32 bg-gradient-to-r from-blue-500/30 via-purple-500/40 to-pink-500/30 rounded-full blur-3xl opacity-60"></div>
    </div>
  )
}
