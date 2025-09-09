import type { Metadata } from "next";
import { Google_Sans_Code, Noto_Sans_Thai } from "next/font/google"
import localFont from "next/font/local"

import "../index.css";
import Providers from "@/components/providers";
import FooterSection from "@/components/Footer";
import Navbar from "@/components/Navbar/navbar";

const martian = Google_Sans_Code({
	subsets: ["latin"],
	variable: "--font-martian",
})

const lineSeed = localFont({
	src: [
		{
			path: './fonts/LINESeedSansTH_W_Th.woff2',
			weight: '300',
			style: 'normal',
		},
		{
			path: './fonts/LINESeedSansTH_W_Rg.woff2',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/LINESeedSansTH_W_Bd.woff2',
			weight: '700',
			style: 'normal',
		},
		{
			path: './fonts/LINESeedSansTH_W_XBd.woff2',
			weight: '800',
			style: 'normal',
		},
		{
			path: './fonts/LINESeedSansTH_W_He.woff2',
			weight: '900',
			style: 'normal',
		},
	]
})

export const metadata: Metadata = {
	title: "Zeal Studios",
	description: "Zeal Studios's website กลุ่มคนผู้พัฒนาเกมบน Roblox และอื่นๆ ที่ขี้เกียจระดับจักรวาล",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="light" suppressHydrationWarning>
			<body
				className={`${lineSeed.className}`}
			>
				<Providers>
					<div className="flex flex-col min-h-screen">
						<Navbar />
						<main className="flex-1">
							{children}
						</main>
						<FooterSection />
					</div>
				</Providers>
			</body>
		</html>
	);
}
