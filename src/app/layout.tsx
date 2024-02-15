import "./globals.css";
import { Figtree } from "next/font/google";
import localFont from "next/font/local";
import { Footer } from "./_components/footer";
import { Header } from "./_components/header";
import QueryProvider from "@/providers/react-query-provider";
import NextTopLoader from "nextjs-toploader";

const figtree = Figtree({
	display: "swap",
	subsets: ["latin"],
	weight: ["300", "400", "500", "600", "700", "800", "900"],
	variable: "--font-figtree",
});

const yekanx = localFont({
	src: [
		{
			path: "../../public/fonts/IRANYekanX-UltraLight.woff2",
			weight: "100",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Thin.woff2",
			weight: "200",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Regular.woff2",
			weight: "300",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Medium.woff2",
			weight: "400",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Heavy.woff2",
			weight: "500",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Bold.woff2",
			weight: "600",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-ExtraBold.woff2",
			weight: "700",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-Black.woff2",
			weight: "800",
			style: "normal",
		},
		{
			path: "../../public/fonts/IRANYekanX-ExtraBlack.woff2",
			weight: "900",
			style: "normal",
		},
	],
	variable: "--font-yekanx",
});

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html dir="rtl" className={`dark ${figtree.variable} ${yekanx.variable}`}>
			<body className="min-h-screen grid grid-rows-[80px_1fr_auto] dark:bg-base-100 dark:text-base-content">
				<NextTopLoader showSpinner={false} color="var(--color-primary)" />
				<QueryProvider>
					<Header />
					<main>{children}</main>
					<Footer />
				</QueryProvider>
			</body>
		</html>
	);
}
