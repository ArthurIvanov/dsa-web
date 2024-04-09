import type { Metadata } from "next";

import "./globals.css";
import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";

export const metadata: Metadata = {
	title: "Example landing",
	description: "Test ptoject",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body>
				<Navbar />
				<main className="main">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
