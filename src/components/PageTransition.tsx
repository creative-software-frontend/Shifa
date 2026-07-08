import { motion } from 'framer-motion';

const pageVariants = {
  initial: { opacity: 0, y: 10 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -10 }
};

const PageTransition: React.FC<{ children: React.ReactNode; id?: string; className?: string }> = ({ children, id, className }) => {
  return (
    <motion.div
      id={id}
      className={className}
      initial="initial"
      animate="in"
      exit="out"
      variants={pageVariants}

    >
      {children}
    </motion.div>
  );
};

export default PageTransition;
