import React, { useState } from 'react';
import { ADAPTABILITY_TABS, MODULE_CONTENT } from '../constants';
import { ScrollReveal } from './ScrollReveal';

export const Adaptability: React.FC = () => {
  const [activeTab, setActiveTab] = useState(ADAPTABILITY_TABS[0]);
  const content = MODULE_CONTENT[activeTab];

  return (
    <section id="produkty" className="py-12 md:py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-16 max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-medium text-blue-400 mb-6">
              Řešení které se vám přizpůsobí
            </h2>
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Přizpůsobte si SIESE přesně podle vašich potřeb díky modulární architektuře. Od základních integrací a archivu až po pokročilou správu dokumentů a detailní analytiku s přehlednými reporty.
            </p>
          </div>
        </ScrollReveal>

        {/* Navigation Tabs */}
        <ScrollReveal delay={200}>
          <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10 overflow-x-auto">
            <span className="text-gray-400 font-bold text-lg mr-4 uppercase tracking-wide">Moduly</span>
            <div className="flex space-x-2 md:space-x-4">
              {ADAPTABILITY_TABS.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-2 rounded-md text-sm font-medium transition-all duration-200 border whitespace-nowrap ${
                    activeTab === tab
                      ? 'bg-[#3b82f6] text-white border-[#3b82f6] shadow-md'
                      : 'bg-white text-gray-600 border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Dynamic Content Area */}
        {/* We use key={activeTab} to trigger animation on tab change */}
        <div key={activeTab}>
          {content.layout === 'grid' && (
             <ScrollReveal delay={300}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {content.items.map((item: any, index: number) => (
                  <div key={index} className="bg-blue-50/50 p-8 rounded-xl border border-blue-100 hover:shadow-md transition-shadow">
                    <h3 className="text-2xl font-bold text-[#3b82f6] mb-4">{item.title}</h3>
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed min-h-[40px]">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.features.map((feature: any, fIndex: number) => (
                        <li key={fIndex} className="text-sm text-gray-700 leading-relaxed">
                          <span className="font-semibold text-gray-900">{feature.label}</span> {feature.text}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          )}

          {content.layout === 'visual' && (
            <ScrollReveal delay={300}>
              <div className="bg-blue-50/50 rounded-xl overflow-hidden border border-blue-100 flex flex-col lg:flex-row shadow-sm min-h-[400px]">
                {/* Left: Text Content */}
                <div className="p-8 lg:p-12 lg:w-1/2 flex flex-col justify-center">
                  <h3 className="text-3xl font-bold text-[#3b82f6] mb-4">{content.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {content.description}
                  </p>
                  <ul className="space-y-4">
                    {content.features.map((feature: any, index: number) => (
                      <li key={index} className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{feature.label}</span> {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Visual */}
                <div className="lg:w-1/2 bg-white p-8 flex items-center justify-center border-l border-blue-100 relative overflow-hidden">
                   {/* Background decoration */}
                   <div className="absolute top-0 right-0 w-64 h-64 bg-blue-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob"></div>
                   <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-50 rounded-full mix-blend-multiply filter blur-3xl opacity-50 animate-blob animation-delay-2000"></div>

                   {content.visualType === 'chart' && (
                     <div className="relative z-10 bg-white p-6 rounded-lg shadow-lg w-full max-w-sm">
                        <h4 className="text-gray-500 text-xs uppercase tracking-wider mb-4 font-semibold">Typ klauzule</h4>
                        <div className="flex items-center justify-center mb-4">
                           {/* Simple Donut Chart Representation using CSS Conic Gradient */}
                           <div className="w-40 h-40 rounded-full relative" 
                                style={{ 
                                  background: 'conic-gradient(#3b82f6 0% 40%, #bfdbfe 40% 100%)' 
                                }}>
                              <div className="absolute inset-4 bg-white rounded-full flex items-center justify-center">
                                 <div className="text-center">
                                   <span className="block text-2xl font-bold text-gray-800">100%</span>
                                 </div>
                              </div>
                           </div>
                        </div>
                        <div className="flex justify-between text-xs text-gray-600 px-4">
                           <div className="flex items-center"><span className="w-3 h-3 bg-[#3b82f6] rounded-sm mr-2"></span>Standardní</div>
                           <div className="flex items-center"><span className="w-3 h-3 bg-[#bfdbfe] rounded-sm mr-2"></span>Nestandardní</div>
                        </div>
                     </div>
                   )}

                   {content.visualType === 'list' && (
                     <div className="relative z-10 w-full max-w-sm">
                        <div className="bg-white rounded-lg shadow-xl overflow-hidden border border-gray-100">
                          <div className="bg-gray-50 p-3 border-b border-gray-100 flex justify-between items-center">
                            <span className="font-bold text-gray-700 text-sm">SIESE</span>
                            <div className="flex space-x-1">
                              <div className="w-2 h-2 rounded-full bg-red-400"></div>
                              <div className="w-2 h-2 rounded-full bg-yellow-400"></div>
                              <div className="w-2 h-2 rounded-full bg-green-400"></div>
                            </div>
                          </div>
                          <div className="p-4">
                             <button className="bg-[#3b82f6] text-white text-xs px-3 py-1.5 rounded-sm mb-4 font-medium shadow-sm hover:bg-blue-600 transition-colors">
                               Přenést dokumenty
                             </button>
                             <div className="space-y-2">
                               {['Smlouva_ABC_OmegaSolutions_2025.pdf', 'Plna_moc_ABC_danovy_poradce_2024.pdf', 'SoD_Projekt_Alfa_StavebniUpravy_2024.pdf'].map((file, i) => (
                                 <div key={i} className="flex items-center p-2 hover:bg-gray-50 rounded cursor-default group border border-transparent hover:border-gray-100 transition-all">
                                   <div className="w-6 h-8 bg-gray-100 rounded-sm flex items-center justify-center mr-3 text-[8px] text-gray-500 font-bold border border-gray-200">PDF</div>
                                   <span className="text-xs text-gray-600 truncate flex-1">{file}</span>
                                 </div>
                               ))}
                             </div>
                          </div>
                        </div>
                     </div>
                   )}
                </div>
              </div>
            </ScrollReveal>
          )}

          {content.layout === 'code' && (
            <ScrollReveal delay={300}>
              <div className="bg-blue-50/50 rounded-xl overflow-hidden border border-blue-100 flex flex-col lg:flex-row shadow-sm">
                {/* Left: Text Content */}
                <div className="p-8 lg:p-12 lg:w-1/2">
                  <h3 className="text-3xl font-bold text-[#3b82f6] mb-4">{content.title}</h3>
                  <p className="text-gray-600 mb-6 text-sm leading-relaxed">
                    {content.description}
                  </p>
                  <ul className="space-y-4">
                    {content.features.map((feature: any, index: number) => (
                      <li key={index} className="text-sm text-gray-700 leading-relaxed">
                        <span className="font-semibold text-gray-900">{feature.label}</span> {feature.text}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right: Code Visualization */}
                <div className="lg:w-1/2 bg-[#1e1e1e] p-6 overflow-hidden flex items-center min-h-[300px]">
                  <div className="w-full font-mono text-xs md:text-sm overflow-x-auto">
                    <div className="min-w-[400px]"> {/* Min width ensures code structure doesn't break on tiny screens */}
                      <div className="text-gray-500 mb-2">/* Process data from the central system. */</div>
                      <div className="text-purple-400 mb-1">
                        <span className="text-gray-400">* @param</span> <span className="text-yellow-300">{`{Object}`}</span> <span className="text-blue-300">req</span> - The request object.
                      </div>
                      <div className="text-purple-400 mb-4">
                        <span className="text-gray-400">* @return</span> <span className="text-yellow-300">{`{Object}`}</span> - The response object.
                      </div>
                      
                      <div className="text-blue-400">export const <span className="text-yellow-300">processCentralData</span> = <span className="text-white">(req)</span> <span className="text-white">{`=> {`}</span></div>
                      <div className="pl-4 text-purple-400">const <span className="text-white">{`{`}</span></div>
                      <div className="pl-8 text-white">body: <span className="text-white">{`{`}</span></div>
                      <div className="pl-12 text-blue-300">centralData,</div>
                      <div className="pl-12 text-blue-300">source,</div>
                      <div className="pl-8 text-white">{`}`}</div>
                      <div className="pl-4 text-white">{`} = req;`}</div>
                      
                      <div className="pl-4 mt-2 text-gray-400">console.log('<span className="text-green-400">Processing data from central system</span>', centralData);</div>
                      <div className="pl-4 text-gray-500">// Logic to handle central system data...</div>
                      <div className="text-white">{`}`}</div>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          )}
        </div>

      </div>
    </section>
  );
};