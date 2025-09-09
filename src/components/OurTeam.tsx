import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Mail, Phone, MapPin, Twitter, Github, Linkedin } from "lucide-react"
import { WobbleCard } from "./ui/wobble-card"

interface TeamMember {
  id: string
  name: string
  title: string
  avatar: string
  description: string
}

const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "yohei_yayoi",
    title: "Founder / Scripter / UI Designer",
    avatar: "https://avatars.githubusercontent.com/u/93367004?v=4",
    description: "(@YoheiKung)",
  },
  {
    id: "2",
    name: "p_2009.",
    title: "Modeler / Animator / Graphic Designer",
    avatar: "https://cdn.discordapp.com/avatars/863313526349234176/a3f917fb0257a1335e2447b2a14ba270?size=1024",
    description: "(@CGGXDTVV)",
  },
  {
    id: "3",
    name: "isosad0132",
    title: "Graphic Designer / Tester",
    avatar: "https://cdn.discordapp.com/avatars/919607663845842945/2a23d5ae29cbe9e27c47cb7e9da269a0.png?size=1024",
    description: "(@SosadQQ)",
  },
  {
    id: "4",
    name: "mr.toon7044",
    title: "Modeler / Animator / Graphic Designer",
    avatar: "https://cdn.discordapp.com/avatars/973093010847969290/427bf5ceaf6321a37391c5c60e413a07.png?size=1024",
    description: "(@whatdohayyyy)",
  },
  {
    id: "5",
    name: "dptkung007",
    title: "Tester",
    avatar: "https://cdn.discordapp.com/avatars/858646937217138710/5f619bc2fa66acd587c1b9ef8c0e9648?size=1024",
    description: "(@Lactasoy010)",
  },
  {
    id: "6",
    name: "_rexel_",
    title: "Scripter / UI Designer / Visual Effect",
    avatar: "https://cdn.discordapp.com/avatars/856819327524012033/a_f9cfaa5e2224043e6c3d894da52af456?size=1024",
    description: "(@nontkph_40404)",
  },
  {
    id: "7",
    name: "bxngpxx",
    title: "Scripter",
    avatar: "https://cdn.discordapp.com/avatars/538610299809562645/ed3672df145208bd15e6051180796701.png?size=1024",
    description: "(@)",
  },
  {
    id: "8",
    name: "bosnoz",
    title: "Tester",
    avatar: "https://cdn.discordapp.com/avatars/924521341678407692/378e66360930390e626191aa0efd748d.png?size=1024",
    description: "(@)",
  },
  {
    id: "9",
    name: "beelbellx",
    title: "UI Designer",
    avatar: "https://cdn.discordapp.com/avatars/878436044566036540/32816a711efa7ec063b52204e94a898e.png?size=1024",
    description: "(@)",
  },
]

export function TeamSection() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
      {teamMembers.map((member) => (
        <WobbleCard key={member.id} className="p-5 bg-white" containerClassName="bg-white">
          <div className="flex items-start gap-6">
            <div className="relative">
              <Avatar className="h-20 w-20 ring-2 ring-border/20">
                <AvatarImage src={member.avatar || "/placeholder.svg"} alt={member.name} />
                <AvatarFallback className="text-lg font-semibold">
                  {member.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
            </div>

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{member.name}</h3>
                  <p className="text-sm font-semibold text-gray-600">{member.title}</p>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-sm text-muted-foreground leading-relaxed">{member.description}</p>
              </div>
            </div>
          </div>
        </WobbleCard>
      ))}
    </div>
  )
}
