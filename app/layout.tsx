import type { Metadata } from "next";
import Navbar from "@/app/layout/navigation";
import Footer from "@/app/layout/footer";
import { Globals } from "./theme/globals";

export const metadata: Metadata = {
	icons: [
		{
			rel: "icon",
			url: "/favicon.ico",
		},
	],
	title: "Design System Architect",
	description:
		"Уникальный курс по Архитектуре Дизайн Систем для средних и крупных организаций",
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
