import { motion, type Variants } from 'framer-motion';
import { useLanguage } from '../../context/LanguageContext';
import { UI, pick } from '../../data/translations';

const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

export const TEAM_MEMBERS = [
  { id: 1, name: 'Md. Moniruzzaman', avatar: 'https://ui-avatars.com/api/?name=Md+Moniruzzaman&background=1a237e&color=fff&size=160&bold=true' },
  { id: 2, name: 'Kazi Md. Zia Uddin', avatar: 'https://ui-avatars.com/api/?name=Kazi+Zia&background=C9A84C&color=fff&size=160&bold=true' },
  { id: 3, name: 'Md. Mehedi Hasan Emon', avatar: 'https://ui-avatars.com/api/?name=Mehedi+Emon&background=0288D1&color=fff&size=160&bold=true' },
  { id: 4, name: 'Abu Nasar Md. Badrul Alam', avatar: 'https://ui-avatars.com/api/?name=Abu+Nasar&background=1a237e&color=fff&size=160&bold=true' },
  { id: 5, name: 'Shihab Shariar Khan', avatar: 'https://ui-avatars.com/api/?name=Shihab+Khan&background=C9A84C&color=fff&size=160&bold=true' },
  { id: 6, name: 'Mr. Abdul Mahbud Chowdhury', avatar: 'https://ui-avatars.com/api/?name=Abdul+Chowdhury&background=0288D1&color=fff&size=160&bold=true' },
];

const TeamsSection: React.FC = () => {
  const { lang } = useLanguage();

  return (
    <div id="teams" className="gs-section py-16" style={{ background: 'linear-gradient(135deg,#e8f4fd 0%,#dbeeff 100%)' }}>
      <div className="gs-container">
        <motion.div
          className="text-center mb-14"
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <span className="section-label text-slate-800 font-bold">{pick(UI.team.label, lang)}</span>
          <h2 className="section-title text-slate-950">{pick(UI.team.title, lang)}</h2>
          <p className="section-subtitle mx-auto mt-3 text-slate-700">
            {pick(UI.team.subtitle, lang)}
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {TEAM_MEMBERS.map((member, index) => {
            const trMember = UI.team.members[index];
            return (
              <motion.div
                key={member.id}
                id={`team-member-${member.id}`}
                variants={fadeInUp}
                className="gs-card p-6 text-center bg-white/60 backdrop-blur-sm border border-slate-200/60 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group"
              >
                <div className="relative w-24 h-24 mx-auto mb-5">
                  <img
                    src={member.avatar}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover border-4 shadow-md transition-transform duration-300 group-hover:scale-105"
                    style={{ borderColor: '#C9A84C' }}
                  />
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full border-2 border-white"
                    style={{ background: 'linear-gradient(135deg,#C9A84C,#fde68a)' }} />
                </div>

                <h3 className="font-black text-base mb-1 text-slate-950 font-serif">
                  {member.name}
                </h3>
                <p className="text-xs font-bold tracking-wider uppercase mb-3 text-[#C9A84C]">
                  {pick(trMember.role, lang)}
                </p>
                <p className="text-slate-700 text-xs leading-relaxed font-medium">
                  {pick(trMember.description, lang)}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default TeamsSection;