import React from 'react';
import { useLanguage } from '../context/LanguageContext';

/**
 * Clean corporate EN / BN toggle matching image_5718fc.png layout
 * - Soft rounded corners & clean gray border
 * - Brand-aligned text states (Navy / Gold / Muted Slate)
 * - Minimalist middle dividing line layout
 */
const LanguageToggle: React.FC = () => {
  const { lang, toggleLang } = useLanguage();
  const isEN = lang === 'EN';

  return (
    <button
      onClick={toggleLang}
      aria-label="Toggle language"
      id="lang-toggle-btn"
      className="group"
      style={{
        position: 'relative',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '94px',
        height: '36px',
        borderRadius: '10px',
        border: '1px solid #E2E8F0', // Soft modern border matching image context
        background: '#FFFFFF',
        cursor: 'pointer',
        flexShrink: 0,
        transition: 'all 0.2s ease',
        padding: 0,
        outline: 'none',
        boxShadow: '0 1px 2px rgba(0,0,0,0.03)',
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = '#CBD5E1';
        e.currentTarget.style.backgroundColor = '#F8FAFC';
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = '#E2E8F0';
        e.currentTarget.style.backgroundColor = '#FFFFFF';
      }}
    >
      {/* Container holding labels and the middle separator line */}
      <div style={{ display: 'flex', alignItems: 'center', width: '100%', height: '100%' }}>

        {/* EN Side */}
        <span
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 700,
            color: isEN ? '#1a237e' : '#94A3B8', // Active Navy vs Muted Gray
            transition: 'color 0.2s ease',
            userSelect: 'none',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          EN
        </span>

        {/* Center Vertical Divider Line (Matches image_5718fc.png perfectly) */}
        <span
          style={{
            height: '16px',
            width: '1px',
            backgroundColor: '#E2E8F0',
          }}
        />

        {/* BN Side */}
        <span
          style={{
            flex: 1,
            textAlign: 'center',
            fontSize: '13px',
            fontWeight: 700,
            color: !isEN ? '#C9A84C' : '#94A3B8', // Active Gold vs Muted Gray
            transition: 'color 0.2s ease',
            userSelect: 'none',
            fontFamily: 'Inter, system-ui, sans-serif',
          }}
        >
          বাং
        </span>

      </div>
    </button>
  );
};

export default LanguageToggle;