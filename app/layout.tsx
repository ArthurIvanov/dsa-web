import type { Metadata } from "next";

import Navbar from "@/app/layout/navbar";
import Footer from "@/app/layout/footer";
import { Globals } from "./theme/globals";

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
				<Globals />
				<Navbar />
				<main className="main container">{children}</main>
				<Footer />
			</body>
		</html>
	);
}
