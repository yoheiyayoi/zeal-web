import { type ReactNode } from "react";

import { cn } from "@/lib/utils";

import Image from "next/image";
import LaunchUI from "@/components/logos/launch-ui";
import {
    Footer,
    FooterBottom,
    FooterColumn,
    FooterContent,
} from "@/components/ui/footer";
import { ModeToggle } from "@/components/ui/mode-toggle";

interface FooterLink {
    text: string;
    href: string;
}

interface FooterColumnProps {
    title: string;
    links: FooterLink[];
}

interface FooterProps {
    logo?: ReactNode;
    name?: string;
    columns?: FooterColumnProps[];
    copyright?: string;
    policies?: FooterLink[];
    showModeToggle?: boolean;
    className?: string;
}

export default function FooterSection({
    name = "Zeal Studios",
    columns = [],
    copyright = "© 2025 Zeal Studios & yooo_. All rights reserved",
    policies = [],
    showModeToggle = false,
    className,
}: FooterProps) {
    return (
        <footer className={cn("bg-gray-100 w-full", className)}>
            <div className="container max-w-7xl mx-auto">
                <div className="text-slate-900 font-medium p-3">
                    <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between">
                        <div className="flex items-center gap-2">
                            <Image src="/Zeal.png" width={30} height={30} alt="Zeal_ Studio" />
                            <p>Zeal Studios</p>
                        </div>
                        <p className="text-sm text-slate-600 ml-1">
                            © 2025 Zeal Studios. All rights reserved
                        </p>
                    </div>
                </div>
            </div>
        </footer>

    );
}