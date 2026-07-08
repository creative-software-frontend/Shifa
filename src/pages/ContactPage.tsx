import React from 'react';
import ContactSection from '../components/sections/ContactSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

const ContactPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <PageTransition id="contact-page">
      <main className="pt-24 bg-slate-50">
        <PageHero
          title={pick(UI.pageHero.contact.title, lang)}
          subtitle={pick(UI.pageHero.contact.subtitle, lang)}
          imageSrc={heroImg}
        />
        <div className="py-12">
          <ContactSection />
        </div>
      </main>
    </PageTransition>
  );
};

export default ContactPage;
