import "./globals.css";
import type { Metadata } from "next";
import { Alegreya, Inter } from "next/font/google";
import { Manrope, Marck_Script } from "next/font/google";
import "yet-another-react-lightbox/styles.css";
import { Toaster } from "react-hot-toast";
import { webUrl } from "@/utils/constants";
const manrope = Manrope({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin-ext", "vietnamese", "latin"],
  variable: "--font-manrope",
});

const marck = Marck_Script({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-marck",
});
const alegreya = Alegreya({
  subsets: ["latin-ext", "vietnamese", "latin"],
  weight: ["400", "500", "700", "800", "900"],
  variable: "--font-alegreya",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={` ${marck.variable} ${manrope.variable} 
        ${alegreya.variable}
      font-manrope `}
      >
        <Toaster />
        {children}
      </body>
    </html>
  );
}
// interface Metadata{
//   metadataBase: null | URL;
//   title: null | AbsoluteTemplateString;
//   description: null | string;
//   applicationName: null | string;
//   authors: null | Array<Author>;
//   generator: null | string;
//   keywords: null | Array<string>;
//   referrer: null | ReferrerEnum;
//   /**
//    * @deprecated
//    */
//   themeColor: null | ThemeColorDescriptor[];
//   /**
//    * @deprecated
//    */
//   colorScheme: null | ColorSchemeEnum;
//   /**
//    * @deprecated
//    */
//   viewport: null | string;
//   creator: null | string;
//   publisher: null | string;
//   robots: null | ResolvedRobots;
//   alternates: null | ResolvedAlternateURLs;
//   icons: null | ResolvedIcons;
//   openGraph: null | ResolvedOpenGraph;
//   manifest: null | string | URL;
//   twitter: null | ResolvedTwitterMetadata;
//   verification: null | ResolvedVerification;
//   appleWebApp: null | ResolvedAppleWebApp;
//   formatDetection: null | FormatDetection;
//   itunes: null | ItunesApp;
//   abstract: null | string;
//   appLinks: null | ResolvedAppLinks;
//   archives: null | Array<string>;
//   assets: null | Array<string>;
//   bookmarks: null | Array<string>;
//   category: null | string;
//   classification: null | string;
//   other:
//     | null
//     | ({
//         [name: string]: string | number | Array<string | number>;
//       } & DeprecatedMetadataFields);
// }
export const metadata: Metadata = {
  title: "Rightson Kirigha - Web Developer and UI/UX Designer",
  description: `I am Rightson Kirigha, a passionate web developer and UI/UX designer based in Nairobi, Kenya. Explore my portfolio for creative digital solutions.`,
  applicationName: null,
  authors: null,
  generator: null,
  keywords: [
    "rightson kirigha",
    "riara university",
    "web developer",
    "UI/UX designer",
    "Nairobi",
    "Kenya",
    "portfolio",
  ],

  creator: "Rightson Kirigha",
  openGraph: {
    determiner: "auto",
    title: "Rightson Kirigha - Web Developer and UI/UX Designer",
    description:
      "Passionate about crafting digital experiences. Explore my portfolio for web development and UI/UX design wonders.",
    emails: "chari.rightson@gmail.com",
    phoneNumbers: ["+254791568168"],
    faxNumbers: [],
    siteName: "Rightson's Portfolio",
    locale: "en_US",
    alternateLocale: ["es_ES"],
    images: [
      {
        url: webUrl + "/rightson.jpg",
        alt: "Rightson Kirigha - Web Developer and UI/UX Designer",
      },
    ],
    audio: [],
    videos: [],
    url: webUrl,
    countryName: "Kenya",
    ttl: 3600,
  },
  twitter: {
    site: webUrl,
    creator: "@rightson",
    title: "Rightson Kirigha - Web Developer and UI/UX Designer",
    description: `I am Rightson Kirigha, a passionate web developer and UI/UX designer based in Nairobi, Kenya. Explore my portfolio for creative digital solutions.`,
    images: [
      {
        url: webUrl + "/rightson.jpg",
        alt: "Rightson Kirigha",
        width: 500,
        height: 500,
      },
    ],
  },
};
