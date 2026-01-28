
import React, { useState } from 'react';
import { Question, QuestionOption } from '../types';

interface AssessmentProps {
  questions: Question[];
  onComplete: (answers: Record<number, number | number[]>) => void;
  title: string;
  privacyNotice: string;
}

const Assessment: React.FC<AssessmentProps> = ({ questions, onComplete, title, privacyNotice }) => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<number, number | number[]>>({});

  const question = questions[currentIdx];
  const progress = ((currentIdx + 1) / questions.length) * 100;

  const handleSelect = (option: QuestionOption) => {
    if (question.type === 'multi') {
      const currentAnswers = (answers[question.id] as number[]) || [];
      // Handle the "None tracked" special case if score is 0
      if (option.score === 0) {
        setAnswers({ ...answers, [question.id]: [0] });
        return;
      }
      
      let nextAnswers = currentAnswers.filter(a => a !== 0);
      if (nextAnswers.includes(option.score)) {
        nextAnswers = nextAnswers.filter(a => a !== option.score);
      } else {
        nextAnswers.push(option.score);
      }
      setAnswers({ ...answers, [question.id]: nextAnswers });
    } else {
      setAnswers({ ...answers, [question.id]: option.score });
    }
  };

  const handleNext = () => {
    if (currentIdx < questions.length - 1) {
      setCurrentIdx(currentIdx + 1);
    } else {
      onComplete(answers);
    }
  };

  const handleBack = () => {
    if (currentIdx > 0) {
      setCurrentIdx(currentIdx - 1);
    }
  };

  const isAnswered = answers[question.id] !== undefined && 
    (Array.isArray(answers[question.id]) ? (answers[question.id] as number[]).length > 0 : true);

  return (
    <div className="bg-white rounded-2xl border border-slate-200 shadow-sm p-6 md:p-10 max-w-2xl mx-auto">
      <div className="mb-8">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-rose-600 mb-1">{title}</h2>
        <div className="flex items-center justify-between gap-4 mb-2">
          <span className="text-xs font-medium text-slate-500">Question {currentIdx + 1} of {questions.length}</span>
          <span className="text-xs font-medium text-slate-500">{Math.round(progress)}% Complete</span>
        </div>
        <div className="w-full h-1.5 bg-slate-100 rounded-full overflow-hidden">
          <div 
            className="h-full bg-rose-600 transition-all duration-300" 
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>

      <div className="min-h-[300px]">
        <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-8 leading-tight">
          {question.text}
        </h3>

        <div className="space-y-3">
          {question.options.map((option, idx) => {
            const isSelected = question.type === 'multi' 
              ? (answers[question.id] as number[] || []).includes(option.score)
              : answers[question.id] === option.score;

            return (
              <button
                key={idx}
                onClick={() => handleSelect(option)}
                className={`w-full text-left p-4 rounded-xl border transition-all ${
                  isSelected 
                    ? 'border-rose-600 bg-rose-50 text-rose-900 ring-1 ring-rose-600' 
                    : 'border-slate-200 hover:border-slate-300 bg-white text-slate-700'
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 ${
                    isSelected ? 'bg-rose-600 border-rose-600' : 'bg-white border-slate-300'
                  }`}>
                    {isSelected && <div className="w-2 h-2 bg-white rounded-full" />}
                  </div>
                  <span className="font-medium">{option.label}</span>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-12 flex items-center justify-between border-t border-slate-100 pt-8">
        <button
          onClick={handleBack}
          disabled={currentIdx === 0}
          className={`text-sm font-semibold flex items-center gap-1 ${
            currentIdx === 0 ? 'text-slate-300 cursor-not-allowed' : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          ← Back
        </button>
        <button
          onClick={handleNext}
          disabled={!isAnswered}
          className={`px-8 py-3 rounded-xl font-bold transition-all ${
            !isAnswered 
              ? 'bg-slate-100 text-slate-400 cursor-not-allowed' 
              : 'bg-slate-900 text-white hover:bg-rose-600 shadow-lg shadow-rose-200/50'
          }`}
        >
          {currentIdx === questions.length - 1 ? 'Finish Assessment' : 'Next Question →'}
        </button>
      </div>

      <p className="mt-8 text-center text-xs text-slate-400 font-medium italic">
        {privacyNotice}
      </p>
    </div>
  );
};

export default Assessment;
