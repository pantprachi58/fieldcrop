import type { Metadata, Viewport } from "next";
import { Open_Sans, Raleway } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-open-sans",
});

const raleway = Raleway({
  subsets: ["latin"],
  weight: ["100", "400", "500", "700", "900"],
  variable: "--font-raleway",
});

export const viewport: Viewport = {
  themeColor: "#FCDB5A",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://fieldcrop.in"),
  title: "Pure Organic Products Online Store | Fieldcrop",
  description:
    "No fake labels, no compromises. Fieldcrop is an organic products online store for pure, chemical-free, nutrient-rich products with traditional goodness.",
  keywords: [
    "organic products online store",
    "organic India",
    "chemical-free products",
    "cold pressed oils",
    "desi ghee",
    "natural spices",
    "Fieldcrop",
    "FSSAI approved organic products",
  ],
  authors: [{ name: "Fieldcrop", url: "https://fieldcrop.in" }],
  creator: "Fieldcrop",
  publisher: "Fieldcrop",
  alternates: {
    canonical: "https://fieldcrop.in/",
  },
  openGraph: {
    type: "website",
    url: "https://fieldcrop.in/",
    siteName: "Fieldcrop",
    title: "Pure Organic Products Online Store | Fieldcrop",
    description:
      "No fake labels, no compromises. Fieldcrop is an organic products online store for pure, chemical-free, nutrient-rich products with traditional goodness.",
    images: [
      {
        url: "https://fieldcrop.in/logo.png",
        alt: "Fieldcrop – Pure Organic Products Online Store",
      },
    ],
    locale: "en_IN",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-snippet": -1,
      "max-image-preview": "large",
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    statusBarStyle: "default",
  },
};

// ── JSON-LD Structured Data ──────────────────────────────────────────────────

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Fieldcrop",
  url: "https://fieldcrop.in/",
  logo: "https://fieldcrop.in/img/site_logo.png",
  email: "fieldcroponline@gmail.com",
  telephone: "+91-9528091495",
  sameAs: ["https://www.instagram.com/fieldcrop.in"],
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pacific Golf Estate, A Block",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248013",
    addressCountry: "IN",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Fieldcrop",
  url: "https://fieldcrop.in/",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://fieldcrop.in/?s={search_term_string}",
    "query-input": "required name=search_term_string",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Store",
  name: "Fieldcrop",
  image: "https://fieldcrop.in/img/site_logo.png",
  url: "https://fieldcrop.in/",
  telephone: "+91-9528091495",
  email: "fieldcroponline@gmail.com",
  priceRange: "₹₹",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Pacific Golf Estate, A Block",
    addressLocality: "Dehradun",
    addressRegion: "Uttarakhand",
    postalCode: "248013",
    addressCountry: "IN",
  },
  areaServed: "India",
  sameAs: ["https://www.instagram.com/fieldcrop.in"],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What makes Fieldcrop different?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Science-backed solutions plus farm fresh products, organic India quality, and online store ease.",
      },
    },
    {
      "@type": "Question",
      name: "Which products do you offer?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "100% natural, chemical-free, FSSAI approved products.",
      },
    },
    {
      "@type": "Question",
      name: "Is COD available?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes, cash on delivery is available.",
      },
    },
    {
      "@type": "Question",
      name: "How long is delivery?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Delivery takes approximately 3-5 days across India.",
      },
    },
    {
      "@type": "Question",
      name: "Are your products 100% natural?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. No chemicals. No preservatives.",
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${openSans.variable} ${raleway.variable}`}>
      <head>
        <meta name="msapplication-navbutton-color" content="#FCDB5A" />
        <link rel="shortcut icon" href="/img/favicon.png" />


        {/* Critical styles from template */}
        <link rel="stylesheet" href="/css/critical.min.css" type="text/css" />
        {/* Full stylesheet – needed for start-screen height/positioning before JS runs */}
        <link rel="stylesheet" href="/css/style.min.css" type="text/css" />

        {/* Device.js */}
        <Script src="/js/device.min.js" strategy="beforeInteractive" />
      </head>
      <body>
        {/* JSON-LD Structured Data – placed in body section as required */}
        <section
          aria-hidden="true"
          style={{ display: "none" }}
          id="structured-data"
        >
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
          />
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
          />
        </section>

        <div id="app">
          <Header />

          {children}

          <Footer />
        </div>

        <div id="btn-to-top-wrap">
          <a id="btn-to-top" className="circled" href="javascript:void(0);" data-visible-offset="800"></a>
        </div>

        {/* Scripts */}
        <Script src="https://ajax.googleapis.com/ajax/libs/jquery/2.2.4/jquery.min.js" strategy="beforeInteractive" />
        <Script id="jquery-fallback" strategy="beforeInteractive">
          {`window.jQuery || document.write('<script src="/js/jquery-2.2.4.min.js"><\\/script>')`}
        </Script>
        
        {/* main.min.js and vegas.js run after hydration so jQuery is available */}
        <Script src="/js/main.min.js" strategy="afterInteractive" />
        <Script src="/js/vegas.js" strategy="afterInteractive" />
      </body>
    </html>
  );
}


