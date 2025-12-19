import React, { useState, useEffect } from 'react';
import { STORAGE_KEY } from '../constants';
import { Download, Trash2, ArrowLeft, Mail, Calendar, Globe } from 'lucide-react';

interface Lead {
  email: string;
  timestamp: string;
  domain: string;
}

export const AdminDashboard: React.FC = () => {
  const [leads, setLeads] = useState<Lead[]>([]);

  useEffect(() => {
    const data = localStorage.getItem(STORAGE_KEY);
    if (data) {
      setLeads(JSON.parse(data));
    }
  }, []);

  const clearDatabase = () => {
    if (window.confirm('Opravdu chcete vymazat celou databázi leadů?')) {
      localStorage.removeItem(STORAGE_KEY);
      setLeads([]);
    }
  };

  const exportToCSV = () => {
    if (leads.length === 0) return;
    
    const headers = ['Email', 'Datum a čas', 'Doména'];
    const rows = leads.map(l => [l.email, new Date(l.timestamp).toLocaleString('cs-CZ'), l.domain]);
    
    const csvContent = [
      headers.join(','),
      ...rows.map(r => r.join(','))
    ].join('\n');
    
    const blob = new Blob([csvContent], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.setAttribute('href', url);
    link.setAttribute('download', `SIESE_Leads_${new Date().toISOString().split('T')[0]}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-4">
          <div>
            <button 
              onClick={() => window.location.hash = ''}
              className="flex items-center text-blue-600 hover:text-blue-800 mb-4 transition-colors font-medium"
            >
              <ArrowLeft size={18} className="mr-2" />
              Zpět na web
            </button>
            <h1 className="text-3xl font-bold text-gray-900">Správa Leadů (Databáze)</h1>
            <p className="text-gray-500 mt-1">Seznam uživatelů, kteří si stáhli brožuru.</p>
          </div>
          
          <div className="flex items-center gap-3">
            <button 
              onClick={exportToCSV}
              disabled={leads.length === 0}
              className="flex items-center bg-blue-600 hover:bg-blue-700 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Download size={18} className="mr-2" />
              Exportovat CSV
            </button>
            <button 
              onClick={clearDatabase}
              disabled={leads.length === 0}
              className="flex items-center bg-white border border-red-200 text-red-600 hover:bg-red-50 px-5 py-2.5 rounded-md text-sm font-medium transition-all"
            >
              <Trash2 size={18} className="mr-2" />
              Smazat vše
            </button>
          </div>
        </div>

        <div className="bg-white shadow-sm rounded-xl border border-gray-200 overflow-hidden">
          {leads.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b border-gray-200">
                  <tr>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center"><Mail size={14} className="mr-2" /> Email</div>
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center"><Calendar size={14} className="mr-2" /> Datum stažení</div>
                    </th>
                    <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      <div className="flex items-center"><Globe size={14} className="mr-2" /> Doména</div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                  {leads.map((lead, idx) => (
                    <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                      <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                        {lead.email}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                        {new Date(lead.timestamp).toLocaleString('cs-CZ')}
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        <span className="bg-blue-100 text-blue-700 px-2.5 py-0.5 rounded-full text-xs font-medium">
                          {lead.domain}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="py-20 text-center">
              <div className="bg-gray-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail size={32} className="text-gray-400" />
              </div>
              <h3 className="text-lg font-medium text-gray-900">Zatím žádné leady</h3>
              <p className="text-gray-500 max-w-xs mx-auto mt-2">
                Jakmile si někdo stáhne brožuru, jeho email se zobrazí zde.
              </p>
            </div>
          )}
        </div>
        
        <div className="mt-8 text-center text-xs text-gray-400">
          Systém SIESE Lead Capture Engine &copy; {new Date().getFullYear()}
        </div>
      </div>
    </div>
  );
};