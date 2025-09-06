import type { Metadata } from "next";
import { Google_Sans_Code, Noto_Sans_Thai } from "next/font/google"
import "../index.css";
import Providers from "@/components/providers";
import Header from "@/components/header";
import FooterSection from "@/components/Footer";

const martian = Google_Sans_Code({
  subsets: ["latin"],
  variable: "--font-martian",
})

const notoThai = Noto_Sans_Thai({
  subsets: ["thai"],
  variable: "--font-noto-thai",
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
		<html lang="en" className="dark" suppressHydrationWarning>
			<body
				className={`${martian.variable} ${notoThai.variable}`}
			>
				<Providers>
					<div className="grid grid-rows-[auto_1fr] h-svh">
						{/* <Header /> */}
						{children}
						<FooterSection />
					</div>
				</Providers>
			</body>
		</html>
	);
}
