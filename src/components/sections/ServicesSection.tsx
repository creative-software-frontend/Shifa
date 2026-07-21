import { motion, type Variants } from 'framer-motion';
import { Hotel, Building2, Map } from 'lucide-react';
import servicesImg from '../../assets/image/1.jfif';
import img1 from '../../assets/image/3.jfif';
import img2 from '../../assets/image/31.jfif';
import img3 from '../../assets/image/4.jfif';
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';
import { useOurInvestmentList } from '../../hooks/useOurInvestmentList';
import { useOurVision } from '../../hooks/useOurVision';
import { getImageUrl } from '../../utils/imageUrl';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: 'easeOut' } }
};
const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ServicesSection: React.FC = () => {
  const { lang } = useLanguage();
  const s = UI.services;
  const { investments, loading, error } = useOurInvestmentList();
  const { visionData } = useOurVision();

  // Visual fallback (icons) cycled across dynamic backend cards.
  const VISUALS = [
    { icon: <Hotel size={38} />, image: img1 },
    { icon: <Building2 size={38} />, image: img2 },
    { icon: <Map size={38} />, image: img3 },
  ];

  // Night-time logic: Activates filter between 6 PM and 6 AM
  const isNight = new Date().getHours() < 6 || new Date().getHours() >= 18;
  const imageFilter = isNight ? 'filter brightness-[0.6] contrast-[1.2]' : '';

  return (
    <section id="services" className="pt-16 pb-12 bg-white">
      <div className="gs-container max-w-7xl mx-auto px-4">

        <motion.div
          className="text-center mb-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          <span className="text-xs font-bold tracking-[0.2em] uppercase block mb-1" style={{ color: 'var(--color-primary)' }}>
            {pick(s.label, lang)}
          </span>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-3" style={{ fontFamily: "'Playfair Display', serif", color: 'var(--color-dark)' }}>
            {pick(s.title, lang)}
          </h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto mt-2 leading-relaxed">
            {pick(s.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 lg:gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {loading ? (
            // Skeleton loading state matching card layout
            Array.from({ length: 3 }).map((_, idx) => (
              <motion.div
                key={idx}
                variants={fadeInUp}
                className="group relative flex flex-col justify-end min-h-[440px] p-6 overflow-hidden bg-neutral-800 animate-pulse"
                style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}
              >
                <div className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl bg-neutral-700/50" />
                <div className="relative z-20 flex flex-col items-start w-full text-left">
                  <div className="h-6 bg-neutral-700/80 rounded w-3/4 mb-3" />
                  <div className="h-4 bg-neutral-700/80 rounded w-full mb-1" />
                  <div className="h-4 bg-neutral-700/80 rounded w-5/6 mb-4" />
                  <div className="flex gap-2 mb-5">
                    <div className="h-6 w-16 bg-neutral-700/80 rounded-full" />
                    <div className="h-6 w-24 bg-neutral-700/80 rounded-full" />
                  </div>
                  <div className="h-10 w-full bg-neutral-700/80 rounded-full" />
                </div>
              </motion.div>
            ))
          ) : error ? (
            // Error state
            <div className="col-span-1 sm:col-span-3 text-center py-12 px-4 rounded-2xl border border-red-100 bg-red-50 text-red-600">
              <p className="font-medium text-lg">Unable to load investment categories.</p>
              <p className="text-sm mt-1">{error}</p>
            </div>
          ) : investments.length === 0 ? (
            // Empty state
            <div className="col-span-1 sm:col-span-3 text-center py-16 px-4 rounded-2xl bg-gray-50 border border-gray-100">
              <p className="font-medium text-lg text-gray-600">No investment categories available at the moment.</p>
              <p className="text-sm text-gray-500 mt-2">Please check back later for new opportunities.</p>
            </div>
          ) : (
            investments.map((service, i) => {
              const imageSrc = service.images?.[0]?.image_path ? getImageUrl(service.images[0].image_path) : VISUALS[i % VISUALS.length].image;
              const icon = VISUALS[i % VISUALS.length].icon;
              
              return (
                <motion.div
                  key={service.id}
                  id={`service-card-${service.id}`}
                  variants={fadeInUp}
                  className="group relative flex flex-col justify-end min-h-[440px] p-6 overflow-hidden cursor-pointer bg-neutral-900 select-none"
                  style={{ borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-card)' }}
                  whileHover={{ y: -6, boxShadow: 'var(--shadow-card-lg)' }}
                >
                  {/* Background Image Layer */}
                  <div className="absolute inset-0 z-0 overflow-hidden">
                    <motion.img
                      src={imageSrc}
                      alt={service.title}
                      className={`w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 ${imageFilter}`}
                    />
                  </div>

                  <div
                    className="absolute top-4 right-4 z-20 w-10 h-10 rounded-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ background: 'rgba(255, 255, 255, 0.16)', border: '1px solid rgba(255, 255, 255, 0.25)', color: '#ffffff' }}
                  >
                    {typeof icon === 'object' && 'props' in icon
                      ? { ...icon, props: { ...icon.props, size: 20 } }
                      : icon
                    }
                  </div>

                  {/* Content Area with drop-shadows for better contrast against images */}
                  <div className="relative z-20 flex flex-col items-start w-full text-left drop-shadow-md">
                    <h3 className="text-white text-xl font-semibold mb-1.5 tracking-wide" style={{ fontFamily: "'Playfair Display', serif" }}>
                      {service.category?.title}
                    </h3>
                    <p className="text-white/90 text-xs font-normal leading-relaxed mb-4 line-clamp-3">
                      {service.title}
                    </p>
                    <div className="flex flex-wrap items-center gap-2 mb-5">
                      <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-[11px] font-medium text-white" style={{ background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(4px)' }}>
                        ★ {service.rating}
                      </span>
                      <span className="px-3 py-1 rounded-full text-[11px] font-medium text-white" style={{ background: 'rgba(0, 0, 0, 0.3)', backdropFilter: 'blur(4px)' }}>
                        {service.category?.title}
                      </span>
                    </div>
                    <button
                      className="w-full bg-white text-black font-semibold text-xs py-3 rounded-full uppercase tracking-wider transition-all duration-300 active:scale-[0.98] hover:bg-neutral-100"
                      style={{ boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}
                    >
                      {pick(s.learnMore, lang)}
                    </button>
                  </div>
                </motion.div>
              );
            })
          )}
        </motion.div>
        <motion.div
          className="mt-16 overflow-hidden relative h-72 md:h-96 flex flex-col justify-center items-center p-6 md:p-10"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          style={{ borderRadius: 'var(--radius-xl)', boxShadow: 'var(--shadow-card-lg)' }}
        >
          {/* Background Image - No Overlay */}
          <div className="absolute inset-0 z-0 overflow-hidden">
            <motion.img
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.6 }}
              src={visionData?.image ? getImageUrl(visionData.image) : servicesImg}
              alt="Shifa Properties Ltd Group Hotel pool view"
              className={`w-full h-full object-cover origin-center ${imageFilter}`}
            />
          </div>

          {/* Content Area - Ensure text has a text-shadow if it becomes hard to read against the image */}
          <div className="relative z-20 flex flex-col items-center text-center max-w-xl w-full mx-auto">
            <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-2 text-white drop-shadow-md">
              {visionData?.title || pick(s.visionLabel, lang)}
            </span>
            <h3
              className="text-white text-xl md:text-3xl font-semibold mb-6 leading-snug tracking-wide drop-shadow-lg"
              style={{ fontFamily: "'Playfair Display', serif" }}
            >
              {visionData?.description || pick(s.visionTitle, lang)}
            </h3>
            <Link
              to="/projects"
              id="services-view-projects-btn"
              className="inline-block bg-white text-black font-semibold text-xs px-10 py-3.5 rounded-full uppercase tracking-wider transition-all duration-300 text-center active:scale-[0.98] hover:bg-neutral-100"
              style={{ boxShadow: '0 4px 14px rgba(0,0,0,0.3)', color: 'var(--color-black)' }}
            >
              {pick(s.viewProjects, lang)}
            </Link>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default ServicesSection;