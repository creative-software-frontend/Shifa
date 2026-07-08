import React from 'react';
import AboutSection from '../components/sections/AboutSection';
import PageTransition from '../components/PageTransition';
import PageHero from '../components/PageHero';
import heroImg from '../assets/image/6fa3ef6e-c22d-45b6-a859-b2108f8af13c.jfif';
import { Counter } from '../components/ui/Counter';
import { STATS } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';
import { UI, pick } from '../data/translations';

// Premium Lucide Icons integrated
import {
  Award,
  TrendingUp,
  ShieldCheck,
  Users,
  Compass,
  Flag,
  HeartHandshake,
  Heart,
  Scale,
  SmilePlus,
  Check
} from 'lucide-react';

const AboutPage: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <PageTransition id="about-page">
      <main className="pt-24 bg-slate-50">

        {/* Page header */}
        <PageHero
          title={pick(UI.pageHero.about.title, lang)}
          subtitle={pick(UI.pageHero.about.subtitle, lang)}
          imageSrc={heroImg}
        />

        {/* About section (Who We Are + Sister Concern) */}
        <AboutSection />

        {/* ── Our Mission ── */}
        <div className="gs-section pt-10 pb-16 bg-white">
          <div className="gs-container">
            <div className="text-center mb-12">
              <span className="section-label">{lang === 'EN' ? 'Our Direction' : 'আমাদের দিকনির্দেশনা'}</span>
              <h2 className="section-title text-black">{lang === 'EN' ? 'Our Mission' : 'আমাদের লক্ষ্য'}</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  icon: <Award className="w-6 h-6 text-[#C9A84C]" />,
                  title: { en: 'Quality First', bn: 'গুণগত মান প্রথমে' },
                  body: { en: 'Ensure high quality products with the most modern & innovative concepts.', bn: 'সবচেয়ে আধুনিক এবং উদ্ভাবনী ধারণার সাথে উচ্চ মানের পণ্য নিশ্চিত করা।' }
                },
                {
                  icon: <TrendingUp className="w-6 h-6 text-[#0288D1]" />,
                  title: { en: 'Economic Growth', bn: 'অর্থনৈতিক প্রবৃদ্ধি' },
                  body: { en: 'Grow the economy by reducing poverty & unemployment across Bangladesh.', bn: 'বাংলাদেশ জুড়ে দারিদ্র্য ও বেকারত্ব হ্রাস করে অর্থনীতি বৃদ্ধি করা।' }
                },
                {
                  icon: <ShieldCheck className="w-6 h-6 text-[#1a237e]" />,
                  title: { en: 'Safe Investment', bn: 'নিরাপদ বিনিয়োগ' },
                  body: { en: 'Create tension-free sources of income by providing guaranteed & safe investment returns.', bn: 'নিশ্চিত এবং নিরাপদ বিনিয়োগ আয়ের মাধ্যমে চিন্তামুক্ত আয়ের উৎস তৈরি করা।' }
                },
                {
                  icon: <Users className="w-6 h-6 text-[#C9A84C]" />,
                  title: { en: 'Client Priority', bn: 'ক্লায়েন্ট অগ্রাধিকার' },
                  body: { en: 'Give the highest priority and ensure the best service to all our valued clients.', bn: 'আমাদের সকল সম্মানিত ক্লায়েন্টকে সর্বোচ্চ অগ্রাধিকার দেওয়া এবং সেরা সেবা নিশ্চিত করা।' }
                },
                {
                  icon: <Compass className="w-6 h-6 text-[#0288D1]" />,
                  title: { en: 'Tourism Vision', bn: 'পর্যটন ভিশন' },
                  body: { en: 'Make Bangladesh one of the top tourism destinations in the world.', bn: 'বাংলাদেশকে বিশ্বের শীর্ষ পর্যটন গন্তব্যগুলোর একটিতে পরিণত করা।' }
                },
                {
                  icon: <Flag className="w-6 h-6 text-[#1a237e]" />,
                  title: { en: 'National Pride', bn: 'জাতীয় গর্ব' },
                  body: { en: 'Make the nation prestigious & wealthy through excellence in hospitality.', bn: 'আতিথেয়তায় উৎকর্ষের মাধ্যমে জাতিকে মর্যাদাপূর্ণ ও সমৃদ্ধ করা।' }
                },
              ].map((m, i) => (
                <div key={i} className="gs-card p-6 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group border border-slate-100 rounded-xl bg-white">
                  <div className="p-3 bg-slate-50 w-fit rounded-lg mb-4 transition-transform duration-300 group-hover:scale-110 group-hover:bg-slate-100">
                    {m.icon}
                  </div>
                  {/* এখানে text-black ব্যবহার করা হয়েছে লেখা গাঢ় করার জন্য */}
                  <h3 className="font-black text-sm mb-2 text-black">{pick(m.title, lang)}</h3>
                  <p className="text-gray-800 text-xs leading-relaxed">{pick(m.body, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        {/* ── Enhanced Vision Section ── */}
        <section className="relative py-16 overflow-hidden bg-[#f8f9fc]">
          {/* Subtle Background Pattern */}
          <div className="absolute top-0 right-0 w-1/3 h-full bg-[#1a237e]/5 skew-x-12 -mr-20" />

          <div className="gs-container relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

              {/* Vision Text Block */}
              <div className="lg:col-span-7">
                <span className="inline-block py-1 px-3 mb-4 text-[10px] tracking-[0.2em] uppercase font-bold text-[#C9A84C] bg-[#C9A84C]/10 rounded-full">
                  {lang === 'EN' ? 'Strategic Outlook' : 'কৌশলগত দৃষ্টিভঙ্গি'}
                </span>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-[#1a237e] mb-8 leading-tight">
                  {lang === 'EN' ? (
                    <>Redefining the Future of <span className="text-[#0288D1]">Sustainable Living</span></>
                  ) : (
                    <><span className="text-[#0288D1]">টেকসই জীবনযাপনের</span> ভবিষ্যৎ পুনর্নির্ধারণ</>
                  )}
                </h2>

                <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
                  <p>
                    {lang === 'EN' ? (
                      <>We don’t just build properties; we craft ecosystems. Shifa Properties Ltd Group is committed to transcending traditional real estate by integrating <strong className="text-[#1a237e]">halal-certified investment models</strong> with world-class hospitality standards.</>
                    ) : (
                      <>আমরা কেবল সম্পত্তি তৈরি করি না; আমরা ইকোসিস্টেম তৈরি করি। শিফা প্রপার্টিজ লিমিটেড গ্রুপ বিশ্বমানের আতিথেয়তার মানগুলোর সাথে <strong className="text-[#1a237e]">হালাল-প্রত্যয়িত বিনিয়োগ মডেল</strong> যুক্ত করে ঐতিহ্যবাহী রিয়েল এস্টেটকে ছাড়িয়ে যেতে প্রতিশ্রুতিবদ্ধ।</>
                    )}
                  </p>
                  <p>
                    {lang === 'EN' ? (
                      'Our vision is to empower thousands of families by bridging the gap between luxury lifestyle aspirations and reliable, long-term financial security.'
                    ) : (
                      'বিলাসবহুল জীবনযাপনের আকাঙ্ক্ষা এবং নির্ভরযোগ্য, দীর্ঘমেয়াদী আর্থিক সুরক্ষার মধ্যে ব্যবধান দূর করে হাজার হাজার পরিবারকে ক্ষমতায়িত করাই আমাদের ভিশন।'
                    )}
                  </p>
                </div>
              </div>

              {/* Modern Stats Grid */}
              <div className="lg:col-span-5">
                <div className="grid grid-cols-2 gap-4">
                  {STATS.map((stat, index) => (
                    <div
                      key={index}
                      className="group relative p-6 bg-white rounded-2xl border border-gray-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.1)] transition-all duration-300"
                    >
                      <div className="absolute top-0 right-0 p-3 opacity-0 group-hover:opacity-100 transition-opacity">
                        <div className="w-2 h-2 rounded-full bg-[#C9A84C]" />
                      </div>
                      <h3 className="text-3xl font-black text-[#1a237e] mb-1">
                        <Counter value={stat.value} />
                      </h3>
                      <p className="text-xs font-semibold uppercase tracking-wider text-gray-400 group-hover:text-[#1a237e] transition-colors">
                        {pick(UI.stats[index], lang)}
                      </p>
                    </div>
                  ))}
                </div>

                {/* Trust Indicator */}
                <div className="mt-8 p-4 bg-[#1a237e] rounded-xl text-white flex items-center gap-4 shadow-lg shadow-blue-900/10">
                  <div className="w-10 h-10 flex flex-shrink-0 items-center justify-center rounded-full bg-[#C9A84C]/20 text-[#C9A84C]">
                    <Check className="w-5 h-5 stroke-[3]" />
                  </div>
                  <p className="text-sm font-medium">
                    {lang === 'EN' ? 'Trusted by 5,000+ investors globally for excellence and integrity.' : 'উৎকর্ষতা এবং সততার জন্য বিশ্বব্যাপী ৫,০০০+ বিনিয়োগকারীর দ্বারা বিশ্বস্ত।'}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── Our Values ── */}
        <div className="gs-section py-16 bg-white">
          <div className="gs-container">
            <div className="text-center mb-6">
              <span className="section-label">{lang === 'EN' ? 'What We Stand For' : 'আমরা যা বিশ্বাস করি'}</span>
              <h2 className="section-title">{pick(UI.whyUs.values.title, lang)}</h2>

            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { icon: <HeartHandshake className="w-8 h-8 text-[#1a237e]" />, label: { en: 'Always Customer First — Customer Priority — Customer Focused', bn: 'সর্বদা গ্রাহক প্রথমে — গ্রাহক অগ্রাধিকার — গ্রাহক কেন্দ্রিক' } },
                { icon: <SmilePlus className="w-8 h-8 text-[#0288D1]" />, label: { en: 'Sharing both happiness & sadness', bn: 'সুখ ও দুঃখ উভয়ই ভাগ করে নেওয়া' } },
                { icon: <Scale className="w-8 h-8 text-[#C9A84C]" />, label: { en: 'Respect & Responsibility', bn: 'সম্মান ও দায়িত্ব' } },
                { icon: <Heart className="w-8 h-8 text-rose-500" />, label: { en: 'Honesty, Caring & Trust', bn: 'সততা, যত্ন ও বিশ্বাস' } },
              ].map((v, i) => (
                <div key={i} className="gs-card p-6 flex flex-col items-center text-center gap-4 hover:shadow-gold transition-all duration-300 hover:-translate-y-1 group border border-slate-50 bg-slate-50/30 rounded-xl">
                  <div className="transition-transform duration-300 group-hover:scale-110">
                    {v.icon}
                  </div>
                  <p className="text-gray-700 text-sm font-semibold leading-snug">{pick(v.label, lang)}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </main>
    </PageTransition>
  );
};

export default AboutPage;