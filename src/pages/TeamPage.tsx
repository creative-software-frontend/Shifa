import React from 'react';
import TeamsSection from '../components/sections/TeamsSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

const TeamPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <PageTransition id="team-page">
      <main className="pt-24 bg-slate-50">
        <PageHero
          title={pick(UI.pageHero.team.title, lang)}
          subtitle={pick(UI.pageHero.team.subtitle, lang)}
          imageSrc={heroImg}
        />
        <TeamsSection />
      </main>
    </PageTransition>
  );
};

export default TeamPage;
