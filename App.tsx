import { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Hero from '@/components/layout/Hero';
import Section from '@/components/layout/Section';
import Footer from '@/components/layout/Footer';
import TariffCalculator from '@/components/tariff/TariffCalculator';
import CoverageMap from '@/components/coverage/CoverageMap';
import SpeedTest from '@/components/coverage/SpeedTest';
import NetworkStatus from '@/components/support/NetworkStatus';
import RouterGuides from '@/components/support/RouterGuides';
import LiveChatWidget from '@/components/support/LiveChatWidget';
import B2BServices from '@/components/b2b/B2BServices';
import B2BContactForm from '@/components/b2b/B2BContactForm';
import AboutProject from '@/components/about/AboutProject';
import { useTheme } from '@/hooks/useTheme';
import type { B2BServiceId } from '@/data/b2bServices';

function SubHeading({ children }: { children: string }) {
  return <h3 className="mb-6 text-xl font-bold text-navy-900 sm:text-2xl dark:text-white">{children}</h3>;
}

export default function App() {
  const { theme, toggleTheme } = useTheme();
  const [quoteService, setQuoteService] = useState<B2BServiceId>('cloud');

  const handleRequestQuote = (service: B2BServiceId) => {
    setQuoteService(service);
    document.getElementById('b2b-form')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="min-h-screen bg-white text-navy-900 dark:bg-navy-950 dark:text-navy-100">
      <Navbar theme={theme} onToggleTheme={toggleTheme} />

      <main>
        <Hero />

        <Section
          id="tarif"
          eyebrow="Tarif kalkulyatori"
          title="Tarifingizni o'zingiz yig'ing"
          description="Internet tezligi va mobil tarifni tanlang — oylik narx Uztelecom rasmiy tariflari asosida darhol hisoblanadi."
        >
          <TariffCalculator />
        </Section>

        <Section
          id="qamrov"
          eyebrow="Qamrov va tezlik testi"
          title="Tarmoq qamrovini tekshiring"
          description="Hududingizda 3G, 4G LTE va 5G qamrovini ko'ring hamda internet tezligingizni o'lchang."
          className="bg-navy-50/60 dark:bg-navy-900/40"
        >
          <div className="space-y-16">
            <div>
              <SubHeading>Qamrov xaritasi</SubHeading>
              <CoverageMap />
            </div>
            <div>
              <SubHeading>Tezlik testi</SubHeading>
              <SpeedTest />
            </div>
          </div>
        </Section>

        <Section
          id="yordam"
          eyebrow="Texnik yordam"
          title="Router sozlamasi va yordam markazi"
          description="Tarmoq holatini kuzating va mashhur routerlarni bosqichma-bosqich sozlang."
        >
          <div className="space-y-16">
            <div>
              <SubHeading>Tarmoq holati</SubHeading>
              <NetworkStatus />
            </div>
            <div>
              <SubHeading>Bilimlar bazasi: router sozlamalari</SubHeading>
              <RouterGuides />
            </div>
          </div>
        </Section>

        <Section
          id="b2b"
          eyebrow="B2B korporativ xizmatlar"
          title="Biznesingiz uchun kengaytirilgan yechimlar"
          description="Ma'lumot markazi, optik tolali kanallar, virtual telefon markazi va kiberxavfsizlik xizmatlari."
          className="bg-navy-50/60 dark:bg-navy-900/40"
        >
          <div className="space-y-16">
            <B2BServices onRequestQuote={handleRequestQuote} />
            <div id="b2b-form" className="card scroll-mt-24 p-6 sm:p-10">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-navy-900 dark:text-white">Korporativ taklif so'rang</h3>
                <p className="mt-2 text-sm text-navy-600 dark:text-navy-300">
                  Ma'lumotlaringizni qoldiring, mutaxassisimiz siz bilan bog'lanib, taklif tayyorlaydi.
                </p>
              </div>
              <B2BContactForm selectedService={quoteService} onServiceChange={setQuoteService} />
            </div>
          </div>
        </Section>

        <Section
          id="haqida"
          eyebrow="Loyiha haqida"
          title="Sayt haqida va huquqiy ogohlantirish"
        >
          <AboutProject />
        </Section>
      </main>

      <Footer />
      <LiveChatWidget />
    </div>
  );
}
