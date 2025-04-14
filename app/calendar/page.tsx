'use client';

import { useState } from 'react';
import { ArrowLeftIcon, CalendarIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const deadlines = [
  {
    id: 1,
    title: 'Déclaration URSSAF T1',
    date: '2024-04-15',
    type: 'urssaf',
    status: 'upcoming',
    description: 'Déclaration du chiffre d\'affaires du 1er trimestre',
  },
  {
    id: 2,
    title: 'Cotisations sociales',
    date: '2024-04-30',
    type: 'payment',
    status: 'upcoming',
    description: 'Paiement des cotisations sociales du trimestre',
  },
  {
    id: 3,
    title: 'Déclaration TVA',
    date: '2024-05-15',
    type: 'tva',
    status: 'upcoming',
    description: 'Déclaration de TVA mensuelle',
  },
  {
    id: 4,
    title: 'Acompte CFE',
    date: '2024-06-15',
    type: 'tax',
    status: 'upcoming',
    description: 'Paiement de l\'acompte de la Cotisation Foncière des Entreprises',
  },
];

const months = [
  'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
  'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
];

export default function Calendar() {
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return 'bg-green-100 text-green-800';
      case 'upcoming':
        return 'bg-blue-100 text-blue-800';
      case 'late':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'urssaf':
        return <CheckCircleIcon className="h-5 w-5 text-blue-500" />;
      case 'payment':
        return <ExclamationCircleIcon className="h-5 w-5 text-green-500" />;
      default:
        return <CalendarIcon className="h-5 w-5 text-gray-500" />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          <div className="flex items-center">
            <Link href="/dashboard" className="flex items-center text-gray-500 hover:text-gray-700">
              <ArrowLeftIcon className="h-5 w-5 mr-2" />
              Retour au tableau de bord
            </Link>
          </div>
          <div className="mt-4 flex items-center justify-between">
            <div className="flex items-center">
              <CalendarIcon className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                Calendrier des échéances
              </h1>
            </div>
            <div className="flex space-x-2">
              <select
                value={currentMonth}
                onChange={(e) => setCurrentMonth(parseInt(e.target.value))}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                {months.map((month, index) => (
                  <option key={month} value={index}>{month}</option>
                ))}
              </select>
              <select
                value={currentYear}
                onChange={(e) => setCurrentYear(parseInt(e.target.value))}
                className="rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
              >
                <option value={2024}>2024</option>
                <option value={2025}>2025</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        {/* Liste des échéances */}
        <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
          {deadlines.map((deadline) => (
            <div key={deadline.id} className="p-6 hover:bg-gray-50">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  {getTypeIcon(deadline.type)}
                  <div>
                    <h3 className="text-lg font-medium text-gray-900">{deadline.title}</h3>
                    <p className="text-sm text-gray-500">{deadline.description}</p>
                  </div>
                </div>
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">
                    {new Date(deadline.date).toLocaleDateString('fr-FR', {
                      day: 'numeric',
                      month: 'long',
                      year: 'numeric'
                    })}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(deadline.status)}`}>
                    {deadline.status === 'completed' ? 'Terminé' :
                     deadline.status === 'upcoming' ? 'À venir' : 'En retard'}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Rappels importants */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4">Rappels importants</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Déclarations URSSAF</h4>
              <p className="text-sm text-blue-100">À effectuer tous les trimestres avant le 15 du mois suivant</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">TVA</h4>
              <p className="text-sm text-blue-100">Déclaration mensuelle avant le 15 du mois suivant</p>
            </div>
            <div className="bg-white/10 rounded-lg p-4">
              <h4 className="font-medium mb-2">Impôts</h4>
              <p className="text-sm text-blue-100">Acomptes trimestriels à anticiper</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 