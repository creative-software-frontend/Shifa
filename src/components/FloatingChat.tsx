import { useState } from 'react';

const WHATSAPP_NUMBER = '8801877715333'; // Country code + number, no +
const MESSENGER_URL = 'https://m.me/shifapropertiesltdgroup'; // Update with real page
const WHATSAPP_MESSAGE = encodeURIComponent('Hello! I am interested in Shifa Properties Ltd investments. Please contact me.');

const FloatingChat: React.FC = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '6rem',   // sits just above the ScrollToTop button
        right: '2rem',
        zIndex: 9998,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-end',
        gap: '10px',
      }}
    >
      {/* ── Expandable chat buttons ── */}
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-end',
          gap: '10px',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0) scale(1)' : 'translateY(12px) scale(0.88)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'opacity 0.28s cubic-bezier(.4,0,.2,1), transform 0.28s cubic-bezier(.4,0,.2,1)',
        }}
      >
        {/* WhatsApp */}
        <a
          href={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-whatsapp-btn"
          aria-label="Chat on WhatsApp"
          title="WhatsApp"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: '#25D366',
            color: '#fff',
            borderRadius: '50px',
            padding: '10px 16px 10px 12px',
            boxShadow: '0 4px 18px rgba(37,211,102,0.45)',
            textDecoration: 'none',
            fontFamily: 'Poppins, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px) scale(1.04)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(37,211,102,0.6)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 18px rgba(37,211,102,0.45)';
          }}
        >
          {/* WhatsApp SVG */}
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="#25D366"/>
            <path d="M22.5 9.5A9 9 0 0 0 7.1 20.9L6 26l5.3-1.1A9 9 0 0 0 22.5 9.5z" fill="#fff"/>
            <path d="M19.8 18.3c-.3-.1-1.7-.8-1.9-.9-.3-.1-.5-.1-.7.1-.2.3-.8.9-1 1.1-.2.2-.4.2-.7.1-.3-.1-1.3-.5-2.5-1.5-.9-.8-1.5-1.8-1.7-2.1-.2-.3 0-.5.1-.6l.5-.6c.1-.2.2-.3.3-.5.1-.2 0-.4 0-.5-.1-.1-.7-1.6-.9-2.2-.2-.6-.5-.5-.7-.5h-.6c-.2 0-.6.1-.9.4-.3.3-1.1 1.1-1.1 2.6 0 1.5 1.1 3 1.3 3.2.2.2 2.2 3.3 5.3 4.6.7.3 1.3.5 1.7.6.7.2 1.4.2 1.9.1.6-.1 1.7-.7 2-1.3.2-.6.2-1.2.1-1.3-.1-.1-.3-.2-.6-.3z" fill="#25D366"/>
          </svg>
          WhatsApp
        </a>

        {/* Messenger */}
        <a
          href={MESSENGER_URL}
          target="_blank"
          rel="noopener noreferrer"
          id="floating-messenger-btn"
          aria-label="Chat on Messenger"
          title="Messenger"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            background: 'linear-gradient(135deg, #0084ff, #a033ff)',
            color: '#fff',
            borderRadius: '50px',
            padding: '10px 16px 10px 12px',
            boxShadow: '0 4px 18px rgba(0,132,255,0.40)',
            textDecoration: 'none',
            fontFamily: 'Poppins, system-ui, sans-serif',
            fontSize: '13px',
            fontWeight: 600,
            whiteSpace: 'nowrap',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'translateY(-2px) scale(1.04)';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 8px 28px rgba(0,132,255,0.55)';
          }}
          onMouseLeave={e => {
            (e.currentTarget as HTMLAnchorElement).style.transform = 'none';
            (e.currentTarget as HTMLAnchorElement).style.boxShadow = '0 4px 18px rgba(0,132,255,0.40)';
          }}
        >
          {/* Messenger SVG */}
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <circle cx="16" cy="16" r="16" fill="url(#mg)"/>
            <defs>
              <linearGradient id="mg" x1="0" y1="32" x2="32" y2="0">
                <stop offset="0%" stopColor="#0084ff"/>
                <stop offset="100%" stopColor="#a033ff"/>
              </linearGradient>
            </defs>
            <path d="M16 6C10.5 6 6 10.2 6 15.4c0 3 1.5 5.6 3.9 7.4V26l3.5-1.9c.9.3 1.9.4 2.6.4 5.5 0 10-4.2 10-9.4C26 10.2 21.5 6 16 6zm1 12.6l-2.5-2.7-5 2.7 5.4-5.8 2.6 2.7 4.9-2.7-5.4 5.8z" fill="#fff"/>
          </svg>
          Messenger
        </a>
      </div>

      {/* ── Toggle button (chat bubble) ── */}
      <button
        id="floating-chat-toggle"
        onClick={() => setOpen(o => !o)}
        aria-label={open ? 'Close chat options' : 'Open chat options'}
        title="Chat with us"
        style={{
          width: '52px',
          height: '52px',
          borderRadius: '50%',
          border: 'none',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: 'linear-gradient(135deg, #1a237e, #0288D1)',
          boxShadow: '0 4px 24px rgba(26,35,126,0.45), 0 2px 8px rgba(0,0,0,0.18)',
          transition: 'transform 0.3s cubic-bezier(.4,0,.2,1), box-shadow 0.3s',
          transform: open ? 'rotate(45deg) scale(1.05)' : 'rotate(0deg) scale(1)',
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 8px 32px rgba(26,35,126,0.6)';
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLButtonElement).style.boxShadow = '0 4px 24px rgba(26,35,126,0.45), 0 2px 8px rgba(0,0,0,0.18)';
        }}
      >
        {open ? (
          /* Close X */
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.5" strokeLinecap="round">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        ) : (
          /* Chat icon */
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/>
          </svg>
        )}
      </button>
    </div>
  );
};

export default FloatingChat;
