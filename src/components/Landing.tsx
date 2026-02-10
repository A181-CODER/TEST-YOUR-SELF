import { ui } from '../data';
import type { Language } from '../types';

interface LandingProps {
  lang: Language;
  onStart: () => void;
  onToggleLang: () => void;
}

export function Landing({ lang, onStart, onToggleLang }: LandingProps) {
  const isAr = lang === 'ar';
  const t = ui.landing;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 ${isAr ? 'font-ar' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Language Toggle */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={onToggleLang}
          className="px-4 py-2 text-sm font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg backdrop-blur-sm transition-all duration-300"
        >
          {ui.nav.lang[lang]}
        </button>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '3s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-600/5 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen px-6 py-20">
        {/* Main Hero */}
        <div className="text-center max-w-3xl mx-auto">
          {/* Icon */}
          <div className="animate-fadeInUp opacity-0 mb-8">
            <div className="inline-flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-br from-indigo-500 to-purple-600 shadow-2xl shadow-indigo-500/30">
              <span className="text-4xl">🧠</span>
            </div>
          </div>

          {/* Title */}
          <h1 className="animate-fadeInUp opacity-0 stagger-1 text-5xl md:text-7xl font-extrabold text-white tracking-tight leading-tight mb-4">
            {t.title[lang]}
          </h1>
          <p className="animate-fadeInUp opacity-0 stagger-2 text-xl md:text-2xl font-medium text-indigo-300 mb-6">
            {t.subtitle[lang]}
          </p>
          <p className="animate-fadeInUp opacity-0 stagger-3 text-lg text-slate-400 max-w-xl mx-auto leading-relaxed mb-12">
            {t.desc[lang]}
          </p>

          {/* Feature Cards */}
          <div className="animate-fadeInUp opacity-0 stagger-4 grid grid-cols-1 md:grid-cols-3 gap-4 mb-12 max-w-2xl mx-auto">
            {t.features.map((f, i) => (
              <div
                key={i}
                className="group p-5 rounded-xl bg-white/5 border border-white/10 hover:bg-white/10 hover:border-indigo-500/30 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{f.icon}</div>
                <h3 className="text-white font-semibold text-base mb-1">{f[lang]}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{f.desc[lang]}</p>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="animate-fadeInUp opacity-0 stagger-5">
            <button
              onClick={onStart}
              className="group relative inline-flex items-center gap-3 px-10 py-4 text-lg font-semibold text-white bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl shadow-2xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:from-indigo-500 hover:to-purple-500 transition-all duration-300 transform hover:scale-[1.02]"
            >
              {t.start[lang]}
              <svg className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isAr ? 'rotate-180 group-hover:-translate-x-1' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </button>
          </div>

          {/* Meta info */}
          <div className="animate-fadeInUp opacity-0 stagger-6 mt-8 space-y-2">
            <p className="text-sm text-slate-500">{t.time[lang]}</p>
            <p className="text-xs text-slate-600 flex items-center justify-center gap-1.5">
              <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
              {t.note[lang]}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
