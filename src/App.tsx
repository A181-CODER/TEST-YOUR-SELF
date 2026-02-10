import { useState, useCallback } from 'react';
import { Landing } from './components/Landing';
import { Questionnaire } from './components/Questionnaire';
import { Results } from './components/Results';
import { analyzeResults } from './data';
import type { Language, AnalysisResult } from './types';

type Screen = 'landing' | 'quiz' | 'results';

export function App() {
  const [lang, setLang] = useState<Language>('en');
  const [screen, setScreen] = useState<Screen>('landing');
  const [result, setResult] = useState<AnalysisResult | null>(null);

  const toggleLang = useCallback(() => {
    setLang(prev => prev === 'en' ? 'ar' : 'en');
  }, []);

  const handleStart = useCallback(() => {
    setScreen('quiz');
    window.scrollTo(0, 0);
  }, []);

  const handleComplete = useCallback((answers: Record<number, string>) => {
    const analysis = analyzeResults(answers);
    setResult(analysis);
    setScreen('results');
    window.scrollTo(0, 0);
  }, []);

  const handleRestart = useCallback(() => {
    setResult(null);
    setScreen('landing');
    window.scrollTo(0, 0);
  }, []);

  switch (screen) {
    case 'landing':
      return <Landing lang={lang} onStart={handleStart} onToggleLang={toggleLang} />;
    case 'quiz':
      return <Questionnaire lang={lang} onComplete={handleComplete} onToggleLang={toggleLang} />;
    case 'results':
      return result ? <Results lang={lang} result={result} onRestart={handleRestart} onToggleLang={toggleLang} /> : null;
    default:
      return null;
  }
}
