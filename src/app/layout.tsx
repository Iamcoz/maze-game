import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "미궁겜",
    description: "내 동년배들 다 미궁게임 해봤다",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="ko">
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}