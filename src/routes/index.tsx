import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Categories } from "@/components/Categories";
import { Advantages } from "@/components/Advantages";
import { Process } from "@/components/Process";
import { Projects } from "@/components/Projects";
import { About } from "@/components/About";
import { CalcForm } from "@/components/CalcForm";
import { Contacts } from "@/components/Contacts";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { MobileBar } from "@/components/MobileBar";
import { site } from "@/lib/site";

const title = "Корпусная мебель на заказ в Жезқазғане — Jihaz-Line";
const description =
  "Jihaz-Line — изготовление корпусной мебели для дома на заказ в Жезқазғане и области Ұлытау. Кухни, шкафы, гардеробные, прихожие и системы хранения.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title },
      { name: "description", content: description },
      { property: "og:title", content: title },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "ru_RU" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          name: site.name,
          description:
            "Собственное производство корпусной мебели для дома и офиса на заказ.",
          telephone: "+77765239977",
          email: site.email,
          address: {
            "@type": "PostalAddress",
            addressLocality: "Жезқазған",
            addressRegion: "Ұлытау облысы",
            addressCountry: "KZ",
          },
          areaServed: ["Жезқазған", "Ұлытау облысы"],
          sameAs: [
            site.instagram,
            site.facebook,
            site.youtube,
            site.tiktok,
            site.telegram,
          ],
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Categories />
        <Advantages />
        <Process />
        <Projects />
        <About />
        <CalcForm />
        <Contacts />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </>
  );
}
