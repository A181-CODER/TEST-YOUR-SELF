import { useState, useCallback } from 'react';
import { questions, ui, dimensionNames } from '../data';
import type { Language, Dimension } from '../types';

interface QuestionnaireProps {
  lang: Language;
  onComplete: (answers: Record<number, string>) => void;
  onToggleLang: () => void;
}

const sectionOrder: Dimension[] = ['thinking', 'drive', 'social', 'problem', 'adaptability'];
const sectionIcons: Record<Dimension, string> = {
  thinking: '🧠',
  drive: '🔥',
  social: '🤝',
  problem: '🧩',
  adaptability: '🌊',
};

export function Questionnaire({ lang, onComplete, onToggleLang }: QuestionnaireProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [animDir, setAnimDir] = useState<'left' | 'right'>('left');
  const [animating, setAnimating] = useState(false);

  const isAr = lang === 'ar';
  const t = ui.quiz;
  const question = questions[currentIndex];
  const totalQuestions = questions.length;
  const progress = ((currentIndex + 1) / totalQuestions) * 100;

  const currentSection = question.dimension;
  const sectionIndex = sectionOrder.indexOf(currentSection);

  const handleSelect = useCallback((trait: string) => {
    setAnswers(prev => ({ ...prev, [question.id]: trait }));
  }, [question.id]);

  const handleNext = useCallback(() => {
    if (currentIndex < totalQuestions - 1) {
      setAnimDir('left');
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev + 1);
        setAnimating(false);
      }, 200);
    } else {
      onComplete(answers);
    }
  }, [currentIndex, totalQuestions, answers, onComplete]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setAnimDir('right');
      setAnimating(true);
      setTimeout(() => {
        setCurrentIndex(prev => prev - 1);
        setAnimating(false);
      }, 200);
    }
  }, [currentIndex]);

  const isAnswered = answers[question.id] !== undefined;

  return (
    <div className={`min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 ${isAr ? 'font-ar' : ''}`} dir={isAr ? 'rtl' : 'ltr'}>
      {/* Top bar */}
      <div className="sticky top-0 z-20 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-3xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <span className="text-lg">{sectionIcons[currentSection]}</span>
              <div>
                <span className="text-xs text-slate-500 uppercase tracking-wider">
                  {t.section[lang]} {sectionIndex + 1}/5
                </span>
                <h2 className="text-sm font-medium text-slate-300">
                  {dimensionNames[currentSection][lang]}
                </h2>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-indigo-400">
                {currentIndex + 1} {t.of[lang]} {totalQuestions}
              </span>
              <button
                onClick={onToggleLang}
                className="px-3 py-1.5 text-xs font-medium text-slate-400 hover:text-white bg-white/5 hover:bg-white/10 border border-white/10 rounded-lg transition-all"
              >
                {ui.nav.lang[lang]}
              </button>
            </div>
          </div>
          {/* Progress bar */}
          <div className="h-1 bg-white/5 rounded-full overflow-hidden">
            <div
              className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>

      {/* Section dots */}
      <div className="flex justify-center gap-2 pt-6 pb-2">
        {sectionOrder.map((sec, i) => (
          <div
            key={sec}
            className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-300 ${
              i === sectionIndex
                ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                : i < sectionIndex
                ? 'bg-emerald-500/10 text-emerald-400/60'
                : 'bg-white/5 text-slate-600'
            }`}
          >
            <span>{sectionIcons[sec]}</span>
            <span className="hidden sm:inline">{dimensionNames[sec][lang]}</span>
          </div>
        ))}
      </div>

      {/* Question */}
      <div className="max-w-2xl mx-auto px-6 py-8">
        <div
          className={`transition-all duration-200 ${
            animating
              ? animDir === 'left'
                ? 'opacity-0 -translate-x-4'
                : 'opacity-0 translate-x-4'
              : 'opacity-100 translate-x-0'
          }`}
        >
          {/* Question text */}
          <div className="mb-8">
            <p className="text-xs font-medium text-indigo-400 uppercase tracking-wider mb-3">
              {t.question[lang]} {currentIndex + 1}
            </p>
            <h3 className="text-2xl md:text-3xl font-bold text-white leading-relaxed">
              {question[lang]}
            </h3>
            <p className="text-sm text-slate-500 mt-3">{t.selectOne[lang]}</p>
          </div>

          {/* Options */}
          <div className="space-y-3">
            {question.options.map((opt, i) => {
              const isSelected = answers[question.id] === opt.trait;
              return (
                <button
                  key={i}
                  onClick={() => handleSelect(opt.trait)}
                  className={`w-full text-start p-5 rounded-xl border-2 transition-all duration-300 group ${
                    isSelected
                      ? 'bg-indigo-500/15 border-indigo-500/50 shadow-lg shadow-indigo-500/10'
                      : 'bg-white/[0.03] border-white/[0.06] hover:bg-white/[0.06] hover:border-white/[0.12]'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-6 h-6 rounded-full border-2 flex items-center justify-center mt-0.5 transition-all duration-300 ${
                        isSelected
                          ? 'border-indigo-400 bg-indigo-500'
                          : 'border-slate-600 group-hover:border-slate-400'
                      }`}
                    >
                      {isSelected && (
                        <svg className="w-3.5 h-3.5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-base leading-relaxed transition-colors duration-300 ${
                      isSelected ? 'text-white font-medium' : 'text-slate-300 group-hover:text-white'
                    }`}>
                      {opt[lang]}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-between mt-10 pt-6 border-t border-white/5">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className={`flex items-center gap-2 px-5 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
              currentIndex === 0
                ? 'text-slate-700 cursor-not-allowed'
                : 'text-slate-400 hover:text-white hover:bg-white/5'
            }`}
          >
            <svg className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
            {t.previous[lang]}
          </button>

          <button
            onClick={handleNext}
            disabled={!isAnswered}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-lg font-medium text-sm transition-all duration-300 ${
              isAnswered
                ? currentIndex === totalQuestions - 1
                  ? 'bg-gradient-to-r from-emerald-600 to-teal-600 text-white hover:from-emerald-500 hover:to-teal-500 shadow-lg shadow-emerald-500/20'
                  : 'bg-gradient-to-r from-indigo-600 to-purple-600 text-white hover:from-indigo-500 hover:to-purple-500 shadow-lg shadow-indigo-500/20'
                : 'bg-white/5 text-slate-600 cursor-not-allowed'
            }`}
          >
            {currentIndex === totalQuestions - 1 ? t.finish[lang] : t.next[lang]}
            <svg className={`w-4 h-4 ${isAr ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
