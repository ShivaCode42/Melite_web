import React from 'react';
import { PROBLEMS } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Problems: React.FC = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal>
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400">
              Zní vám tyto problémy povědomě?
            </h2>
          </div>
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS.map((problem, index) => {
            const Icon = problem.icon;
            return (
              <ScrollReveal key={index} delay={index * 100} className="h-full">
                <div 
                  className="bg-white p-6 border border-blue-100 shadow-sm hover:shadow-md transition-shadow duration-300 h-full flex flex-col items-start text-left"
                >
                  <div className="mb-4 text-blue-600">
                    {/* Custom rendering for the paragraph sign to match image exactly if it's the first item */}
                    {index === 0 ? (
                      <span className="text-3xl font-serif font-bold text-blue-600">§</span>
                    ) : (
                      <Icon size={32} strokeWidth={1.5} />
                    )}
                  </div>
                  <h3 className="text-md font-bold text-[#2d76d8] mb-4 leading-tight min-h-[40px]">
                    {problem.title}
                  </h3>
                  <p className="text-gray-600 text-xs leading-relaxed">
                    {problem.description}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};