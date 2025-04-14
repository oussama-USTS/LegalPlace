'use client';

import { useState } from 'react';
import { ArrowLeftIcon, CalculatorIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

export default function Simulator() {
  const [revenue, setRevenue] = useState('');
  const [activity, setActivity] = useState('services');
  const [charges, setCharges] = useState('');

  const calculateTaxes = () => {
    const revenueNum = parseFloat(revenue) || 0;
    const chargesNum = parseFloat(charges) || 0;

    // Calculs simplifiés pour la démonstration
    const cotisationsSociales = activity === 'services' ? revenueNum * 0.22 : revenueNum * 0.12;
    const impots = Math.max(0, (revenueNum - chargesNum - cotisationsSociales) * 0.15);
    const beneficeNet = revenueNum - chargesNum - cotisationsSociales - impots;

    return {
      cotisationsSociales: cotisationsSociales.toFixed(2),
      impots: impots.toFixed(2),
      beneficeNet: beneficeNet.toFixed(2)
    };
  };

  const results = calculateTaxes();

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
          <div className="mt-4 flex items-center">
            <CalculatorIcon className="h-8 w-8 text-blue-500 mr-3" />
            <h1 className="text-3xl font-bold text-gray-900">
              Simulateur Fiscal
            </h1>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="bg-white shadow rounded-lg p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Formulaire */}
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Type d'activité
                </label>
                <select
                  value={activity}
                  onChange={(e) => setActivity(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                >
                  <option value="services">Prestations de services</option>
                  <option value="commerce">Vente de marchandises</option>
                  <option value="artisanat">Artisanat</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Chiffre d'affaires annuel prévu (€)
                </label>
                <input
                  type="number"
                  value={revenue}
                  onChange={(e) => setRevenue(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ex: 30000"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Charges prévisionnelles (€)
                </label>
                <input
                  type="number"
                  value={charges}
                  onChange={(e) => setCharges(e.target.value)}
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Ex: 5000"
                />
              </div>
            </div>

            {/* Résultats */}
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Estimation annuelle</h3>
              
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500">Cotisations sociales</div>
                  <div className="text-2xl font-bold text-blue-600">{results.cotisationsSociales} €</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500">Impôts estimés</div>
                  <div className="text-2xl font-bold text-blue-600">{results.impots} €</div>
                </div>

                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-sm text-gray-500">Bénéfice net estimé</div>
                  <div className="text-2xl font-bold text-green-600">{results.beneficeNet} €</div>
                </div>
              </div>

              <div className="mt-6 text-sm text-gray-500">
                * Ces calculs sont des estimations et peuvent varier selon votre situation personnelle
              </div>
            </div>
          </div>
        </div>

        {/* Conseils fiscaux */}
        <div className="mt-6 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg p-6">
          <h3 className="text-xl font-medium mb-4">Conseils personnalisés</h3>
          <ul className="space-y-3">
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                <span className="text-sm font-medium">1</span>
              </div>
              <p>Pensez à mettre de côté environ 30% de vos revenus pour les charges sociales et fiscales</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                <span className="text-sm font-medium">2</span>
              </div>
              <p>Conservez tous vos justificatifs de charges pour optimiser votre fiscalité</p>
            </li>
            <li className="flex items-start">
              <div className="flex-shrink-0 h-6 w-6 rounded-full bg-blue-400 flex items-center justify-center mr-3">
                <span className="text-sm font-medium">3</span>
              </div>
              <p>N'oubliez pas de déclarer vos revenus trimestriellement à l'URSSAF</p>
            </li>
          </ul>
        </div>
      </main>
    </div>
  );
} 