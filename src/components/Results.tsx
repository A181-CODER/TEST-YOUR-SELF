import { ui, dimensionNames, traitLabels } from '../data';
import type { Language, AnalysisResult, Dimension } from '../types';

interface ResultsProps {
  lang: Language;
  result: AnalysisResult;
  onRestart: () => void;
  onToggleLang: () => void;
}

const dimColors: Record<Dimension, { bg: string; bar: string; text: string; border: string }> = {
  thinking: { bg: 'bg-indigo-500/10', bar: 'bg-indigo-500', text: 'text-indigo-400', border: 'border-indigo-500/20' },
  drive: { bg: 'bg-amber-500/10', bar: 'bg-amber-500', text: 'text-amber-400', border: 'border-amber-500/20' },
  social: { bg: 'bg-emerald-500/10', bar: 'bg-emerald-500', text: 'text-emerald-400', border: 'border-emerald-500/20' },
  problem: { bg: 'bg-purple-500/10', bar: 'bg-purple-500', text: 'text-purple-400', border: 'border-purple-500/20' },
  adaptability: { bg: 'bg-cyan-500/10', bar: 'bg-cyan-500', text: 'text-cyan-400', border: 'border-cyan-500/20' },
};

const dimIcons: Record<Dimension, string> = {
  thinking: '🧠',
  drive: '🔥',
  social: '🤝',
  problem: '🧩',
  adaptability: '🌊',
};

export function Results({ lang, result, onRestart, onToggleLang }: ResultsProps) {
  const isAr = lang === 'ar';
  const t = ui.results;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 ${isAr ? 'font-ar' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Header */}
      <div className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-4xl mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold text-white flex items-center gap-2">
            <span className="text-2xl">📊</span>
            {t.title[lang]}
          </h1>
          <div className="flex items-center gap-3">
            <button
              onClick={onToggleLang}
              className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            >
              {ui.nav.lang[lang]}
            </button>
            <button
              onClick={onRestart}
              className="px-4 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
            >
              {t.restart[lang]}
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-6 py-10 space-y-10">

        {/* Mindset Archetype */}
        <section className="animate-fadeInUp opacity-0">
          <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-indigo-600/20 via-purple-600/10 to-transparent border border-indigo-500/20 p-8 md:p-10">
            <div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="relative">
              <p className="text-xs font-medium text-indigo-400 uppercase tracking-wider mb-2">
                {t.mindset[lang]}
              </p>
              <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
                {result.mindsetType[lang]}
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed max-w-2xl">
                {result.mindsetDesc[lang]}
              </p>
            </div>
          </div>
        </section>

        {/* How You Think */}
        <section className="animate-fadeInUp opacity-0 stagger-1">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-indigo-500/15 flex items-center justify-center">
              <span className="text-xl">{result.thinkingProfile.icon}</span>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-white">{t.thinking[lang]}</h2>
              <p className="text-sm text-indigo-400 font-medium">{result.thinkingProfile.title[lang]}</p>
            </div>
          </div>
          <div className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-6 md:p-8">
            <p className="text-slate-300 leading-relaxed text-lg">
              {result.thinkingProfile.description[lang]}
            </p>
          </div>
        </section>

        {/* Core Strengths */}
        <section className="animate-fadeInUp opacity-0 stagger-2">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/15 flex items-center justify-center">
              <span className="text-xl">💪</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{t.strengths[lang]}</h2>
          </div>
          <div className="grid gap-4">
            {result.strengths.map((s, i) => (
              <div
                key={i}
                className="group rounded-xl bg-white/[0.03] border border-white/[0.06] hover:bg-white/[0.05] hover:border-emerald-500/20 p-5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-emerald-500/15 flex items-center justify-center mt-0.5">
                    <span className="text-emerald-400 font-bold text-sm">{i + 1}</span>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">{s[lang]}</h3>
                    <p className="text-slate-400 leading-relaxed">{s.detail[lang]}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Fields That Suit You */}
        <section className="animate-fadeInUp opacity-0 stagger-3">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-amber-500/15 flex items-center justify-center">
              <span className="text-xl">🎯</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{t.fields[lang]}</h2>
          </div>
          <div className="grid gap-4">
            {result.fields.map((f, i) => (
              <div
                key={i}
                className="rounded-xl bg-white/[0.03] border border-white/[0.06] p-5 hover:bg-white/[0.05] transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4 mb-3">
                  <h3 className="text-white font-semibold text-lg">{f.name[lang]}</h3>
                  <div className="flex-shrink-0 flex items-center gap-2">
                    <span className="text-xs font-medium text-slate-500">{t.match[lang]}</span>
                    <span className={`text-sm font-bold px-2.5 py-1 rounded-lg ${
                      f.match >= 80 ? 'bg-emerald-500/15 text-emerald-400' :
                      f.match >= 60 ? 'bg-amber-500/15 text-amber-400' :
                      'bg-slate-500/15 text-slate-400'
                    }`}>
                      {f.match}%
                    </span>
                  </div>
                </div>
                <p className="text-slate-400 text-sm leading-relaxed">{f.reason[lang]}</p>
                <div className="mt-3 h-1.5 bg-white/5 rounded-full overflow-hidden">
                  <div
                    className={`h-full rounded-full transition-all duration-1000 ease-out ${
                      f.match >= 80 ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                      f.match >= 60 ? 'bg-gradient-to-r from-amber-500 to-orange-500' :
                      'bg-gradient-to-r from-slate-500 to-slate-400'
                    }`}
                    style={{ width: `${f.match}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Dimension Breakdown */}
        <section className="animate-fadeInUp opacity-0 stagger-4">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-xl bg-purple-500/15 flex items-center justify-center">
              <span className="text-xl">📐</span>
            </div>
            <h2 className="text-2xl font-bold text-white">{t.dimensions[lang]}</h2>
          </div>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {result.dimensions.map((dim) => {
              const colors = dimColors[dim.dimension];
              const traits = Object.entries(dim.scores).sort((a, b) => b[1] - a[1]);
              return (
                <div
                  key={dim.dimension}
                  className={`rounded-xl bg-white/[0.03] border ${colors.border} p-5`}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="text-lg">{dimIcons[dim.dimension]}</span>
                    <h3 className="text-white font-semibold text-sm">
                      {dimensionNames[dim.dimension][lang]}
                    </h3>
                  </div>
                  <div className="mb-4">
                    <span className={`text-xs font-medium uppercase tracking-wider ${colors.text}`}>
                      {t.dominant[lang]}
                    </span>
                    <p className="text-white font-bold text-lg mt-0.5">
                      {traitLabels[dim.dominant]?.[lang] || dim.dominant}
                    </p>
                  </div>
                  <div className="space-y-2">
                    {traits.map(([trait, score]) => (
                      <div key={trait} className="flex items-center gap-2">
                        <span className="text-xs text-slate-400 w-20 truncate" title={traitLabels[trait]?.[lang]}>
                          {traitLabels[trait]?.[lang] || trait}
                        </span>
                        <div className="flex-1 h-2 bg-white/5 rounded-full overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-700 ${
                              trait === dim.dominant ? colors.bar : 'bg-white/10'
                            }`}
                            style={{ width: `${(score / 5) * 100}%` }}
                          />
                        </div>
                        <span className="text-xs text-slate-500 w-4 text-center">{score}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Disclaimer */}
        <section className="animate-fadeInUp opacity-0 stagger-5">
          <div className="rounded-xl bg-white/[0.02] border border-white/[0.05] p-6 text-center">
            <p className="text-slate-500 text-sm leading-relaxed">
              {t.disclaimer[lang]}
            </p>
          </div>
        </section>

        {/* Restart button */}
        <div className="animate-fadeInUp opacity-0 stagger-6 text-center pb-10">
          <button
            onClick={onRestart}
            className="inline-flex items-center gap-2 px-8 py-3 text-base font-medium text-slate-300 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
            </svg>
            {t.restart[lang]}
          </button>
        </div>
      </div>
    </div>
  );
}
