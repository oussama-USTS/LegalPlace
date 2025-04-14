'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  CheckCircleIcon, 
  DocumentTextIcon, 
  ChevronRightIcon,
  ChatBubbleLeftRightIcon,
  CalendarIcon,
  ChartBarIcon,
  CalculatorIcon,
  BellIcon,
  ArrowTrendingUpIcon,
  UserGroupIcon,
  CurrencyEuroIcon,
  ClockIcon,
  ScaleIcon
} from '@heroicons/react/24/solid';

// Données simulées pour les statistiques
const stats = [
  { id: 1, name: 'Chiffre d\'affaires', value: '12,500€', change: '+12%', icon: CurrencyEuroIcon, 
    gradient: 'from-rose-500 to-pink-600', shadowColor: 'shadow-rose-500/30' },
  { id: 2, name: 'Documents', value: '24', change: '+3', icon: DocumentTextIcon, 
    gradient: 'from-amber-400 to-orange-600', shadowColor: 'shadow-amber-500/30' },
  { id: 3, name: 'Tâches', value: '8', change: '-2', icon: ClockIcon, 
    gradient: 'from-emerald-400 to-teal-600', shadowColor: 'shadow-emerald-500/30' },
  { id: 4, name: 'Visiteurs', value: '156', change: '+22%', icon: UserGroupIcon, 
    gradient: 'from-violet-500 to-purple-600', shadowColor: 'shadow-violet-500/30' },
];

const activities = [
  { id: 1, type: 'document', title: 'Statuts signés', time: 'Il y a 2h', status: 'success' },
  { id: 2, type: 'payment', title: 'Paiement reçu', time: 'Il y a 3h', status: 'success' },
  { id: 3, type: 'task', title: 'RDV Expert Comptable', time: 'Dans 2 jours', status: 'pending' },
  { id: 4, type: 'alert', title: 'Déclaration TVA', time: 'Dans 5 jours', status: 'warning' },
];

const steps = [
  { id: 1, name: 'Questionnaire complété', status: 'complete' },
  { id: 2, name: 'Documents fournis', status: 'complete' },
  { id: 3, name: 'Vérification en cours', status: 'current' },
  { id: 4, name: 'Création de l\'entreprise', status: 'upcoming' },
  { id: 5, name: 'Documents officiels', status: 'upcoming' },
];

const quickActions = [
  {
    id: 1,
    name: 'Chat Assistance',
    icon: ChatBubbleLeftRightIcon,
    href: '/chat',
    gradient: 'from-cyan-400 via-cyan-500 to-teal-600',
    description: 'Parlez à un expert en direct',
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20v20H0V0zm10 17.5c4.142 0 7.5-3.358 7.5-7.5S14.142 2.5 10 2.5 2.5 5.858 2.5 10s3.358 7.5 7.5 7.5z' fill='%2306B6D4' fill-opacity='0.05'/%3E%3C/svg%3E\")"
  },
  {
    id: 2,
    name: 'Simulation Fiscale',
    icon: CalculatorIcon,
    href: '/simulator',
    gradient: 'from-blue-400 via-blue-500 to-indigo-600',
    description: 'Estimez vos charges et impôts',
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h20L10 20 0 0z' fill='%233B82F6' fill-opacity='0.05'/%3E%3C/svg%3E\")"
  },
  {
    id: 3,
    name: 'Calendrier',
    icon: CalendarIcon,
    href: '/calendar',
    gradient: 'from-indigo-400 via-violet-500 to-purple-600',
    description: 'Vos échéances importantes',
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M2 2h16v16H2V2zm8 8h8v8H10V10z' fill='%234F46E5' fill-opacity='0.05'/%3E%3C/svg%3E\")"
  },
  {
    id: 4,
    name: 'Statistiques',
    icon: ChartBarIcon,
    href: '/stats',
    gradient: 'from-sky-400 via-blue-500 to-blue-600',
    description: 'Suivez votre activité',
    bgPattern: "url(\"data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h4v4H0V0zm8 0h4v4H8V0zm8 0h4v4h-4V0z' fill='%230EA5E9' fill-opacity='0.05'/%3E%3C/svg%3E\")"
  }
];

export default function Dashboard() {
  const [showChat, setShowChat] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Background moderne et minimaliste */}
      <div className="fixed inset-0">
        {/* Base gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900"></div>
        
        {/* Mesh gradient overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(800px_circle_at_100%_200px,rgba(111,137,251,0.15),transparent)]"></div>
        
        {/* Subtle moving gradients */}
        <div className="absolute inset-0">
          <div className="absolute -top-48 -left-48 w-96 h-96 bg-indigo-500/20 rounded-full blur-3xl animate-pulse-slow"></div>
          <div className="absolute top-1/2 -right-48 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse-slow animation-delay-2000"></div>
        </div>

        {/* Modern grid pattern */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "url(\"data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0h40v40H0V0zm20 20h20v20H20V20zM0 20h20v20H0V20z' fill='%23FFFFFF' fill-opacity='0.05'/%3E%3C/svg%3E\")",
            backgroundSize: '40px 40px'
          }}
        ></div>

        {/* Glass overlay */}
        <div className="absolute inset-0 backdrop-blur-[100px]"></div>
      </div>

      {/* Contenu principal */}
      <div className="relative z-10">
        {/* Header avec effet glassmorphism amélioré */}
        <header className="bg-white/10 backdrop-blur-xl border-b border-white/10 sticky top-0 z-50">
          <div className="max-w-7xl mx-auto py-4 px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-8">
                <h1 className="text-3xl font-bold bg-gradient-to-r from-white via-amber-200 to-rose-400 bg-clip-text text-transparent animate-gradient">
                  LegalPlace
                </h1>
                <div className="text-white/80 font-medium backdrop-blur-lg bg-rose-500/10 px-4 py-1 rounded-lg border border-rose-500/20">
                  {currentTime.toLocaleTimeString()}
                </div>
              </div>
              <div className="flex items-center space-x-6">
                <button 
                  onClick={() => setShowNotifications(!showNotifications)}
                  className="relative p-2 text-white/80 hover:text-white transition-colors duration-200 hover:scale-110 transform"
                >
                  <BellIcon className="h-6 w-6" />
                  <span className="absolute top-0 right-0 h-2 w-2 bg-gradient-to-r from-amber-400 to-rose-400 rounded-full animate-pulse"></span>
                </button>
                <div className="flex items-center space-x-3">
                  <div className="relative group">
                    <div className="absolute -inset-0.5 bg-gradient-to-r from-rose-500 to-amber-500 rounded-full blur opacity-60 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
                    <img
                      src="https://ui-avatars.com/api/?name=John+Doe&background=6366f1&color=fff"
                      alt="Profile"
                      className="relative h-8 w-8 rounded-full"
                    />
                  </div>
                  <span className="text-sm font-medium text-white/90">John Doe</span>
                </div>
              </div>
            </div>
          </div>
        </header>

        <main className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
          {/* Stats Cards avec design attractif */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className={`relative group bg-white/10 backdrop-blur-lg rounded-xl transition-all duration-300 transform hover:-translate-y-1 hover:scale-105 overflow-hidden ${stat.shadowColor}`}
              >
                <div className="absolute inset-0 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
                <div className="relative p-6">
                  <div className="flex items-center justify-between">
                    <div className={`rounded-lg p-3 bg-gradient-to-r ${stat.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <span className={`text-sm font-semibold px-2 py-1 rounded-full ${
                      stat.change.startsWith('+') 
                        ? 'bg-emerald-500/20 text-emerald-300' 
                        : 'bg-rose-500/20 text-rose-300'
                    }`}>
                      {stat.change}
                    </span>
                  </div>
                  <h3 className="mt-4 text-2xl font-bold text-white group-hover:text-blue-200 transition-colors">{stat.value}</h3>
                  <p className="mt-1 text-sm text-blue-200/80">{stat.name}</p>
                </div>
                <div className={`h-1 bg-gradient-to-r ${stat.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            ))}
          </div>

          {/* Grille principale */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Colonne de gauche */}
            <div className="lg:col-span-2 space-y-6">
              {/* Progress Section avec style attractif */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300 group">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <ScaleIcon className="h-5 w-5 text-blue-300 mr-2 group-hover:rotate-180 transition-transform duration-700" />
                  Progression de votre dossier
                </h2>
                <div className="space-y-4">
                  {steps.map((step, index) => (
                    <div key={step.id} className="relative">
                      <div className="flex items-center group/step">
                        <div className={`flex-shrink-0 h-8 w-8 flex items-center justify-center rounded-full
                          transition-all duration-300 shadow-lg
                          ${step.status === 'complete' 
                            ? 'bg-gradient-to-r from-emerald-500 to-teal-500 group-hover/step:from-emerald-400 group-hover/step:to-teal-400' 
                            : step.status === 'current' 
                            ? 'bg-gradient-to-r from-blue-500 to-indigo-500 group-hover/step:from-blue-400 group-hover/step:to-indigo-400'
                            : 'bg-gradient-to-r from-slate-600 to-slate-500 group-hover/step:from-slate-500 group-hover/step:to-slate-400'}`}>
                          <CheckCircleIcon className="h-5 w-5 text-white" />
                        </div>
                        <div className="ml-4 flex-1">
                          <p className={`text-sm font-medium transition-colors duration-300
                            ${step.status === 'complete' ? 'text-emerald-300' :
                              step.status === 'current' ? 'text-blue-300' : 
                              'text-slate-400'}`}>
                            {step.name}
                          </p>
                        </div>
                      </div>
                      {index < steps.length - 1 && (
                        <div className="ml-4 mt-2 mb-2 w-0.5 h-6 bg-gradient-to-b from-blue-500/50 to-transparent"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Actions Grid avec style attractif */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {quickActions.map((action) => (
                  <Link 
                    href={action.href} 
                    key={action.id}
                    className="group relative overflow-hidden rounded-xl transition-all duration-500 hover:scale-105"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r opacity-90 group-hover:opacity-100 transition-opacity duration-300"
                         style={{
                           backgroundImage: `linear-gradient(135deg, ${action.gradient.split(' ')[0].replace('from-', '')} 0%, ${action.gradient.split(' ')[2].replace('to-', '')} 100%)`
                         }}>
                    </div>
                    <div className="absolute inset-0" style={{ backgroundImage: action.bgPattern }}></div>
                    <div className="relative p-6">
                      <div className="flex items-center justify-between">
                        <div className="bg-white/20 backdrop-blur-lg rounded-xl p-3 shadow-xl group-hover:scale-110 group-hover:rotate-6 transition-all duration-300">
                          <action.icon className="h-6 w-6 text-white" />
                        </div>
                        <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:translate-x-2 transition-transform duration-300">
                          <ChevronRightIcon className="h-5 w-5 text-white/80" />
                        </div>
                      </div>
                      <div className="mt-6">
                        <h3 className="text-lg font-semibold text-white group-hover:translate-x-2 transition-transform duration-300">
                          {action.name}
                        </h3>
                        <p className="mt-2 text-sm text-white/80 group-hover:translate-x-2 transition-transform duration-300">
                          {action.description}
                        </p>
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500"></div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* Colonne de droite */}
            <div className="space-y-6">
              {/* Activités récentes */}
              <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 hover:bg-white/15 transition-all duration-300">
                <h2 className="text-lg font-semibold text-white mb-4 flex items-center">
                  <ClockIcon className="h-5 w-5 text-blue-300 mr-2" />
                  Activités récentes
                </h2>
                <div className="space-y-4">
                  {activities.map((activity) => (
                    <div key={activity.id} className="group flex items-start space-x-3 p-3 rounded-lg hover:bg-white/5 transition-all duration-200">
                      <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                        activity.status === 'success' ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                        activity.status === 'warning' ? 'bg-gradient-to-r from-amber-400 to-orange-400' :
                        'bg-gradient-to-r from-blue-400 to-indigo-400'
                      } group-hover:scale-150 transition-transform duration-300`} />
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white">{activity.title}</p>
                        <p className="text-xs text-blue-200/80">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Compte Pro Section avec style premium */}
              <div className="relative group overflow-hidden rounded-xl">
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-indigo-600 opacity-90 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute inset-0 bg-[url('/texture.png')] opacity-20"></div>
                <div className="relative p-6">
                  <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-400 rounded-full blur-2xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
                  <h2 className="text-xl font-semibold text-white mb-4">Compte professionnel</h2>
                  <p className="text-blue-100 mb-6">
                    Profitez d'une offre exclusive pour votre compte bancaire professionnel
                  </p>
                  <ul className="space-y-3 mb-6">
                    <li className="flex items-center text-sm text-white/90">
                      <CheckCircleIcon className="h-5 w-5 mr-2 text-yellow-400" />
                      <span>Ouverture en 24h</span>
                    </li>
                    <li className="flex items-center text-sm text-white/90">
                      <CheckCircleIcon className="h-5 w-5 mr-2 text-yellow-400" />
                      <span>Carte Business gratuite</span>
                    </li>
                    <li className="flex items-center text-sm text-white/90">
                      <CheckCircleIcon className="h-5 w-5 mr-2 text-yellow-400" />
                      <span>3 mois sans frais</span>
                    </li>
                  </ul>
                  <button className="w-full bg-gradient-to-r from-yellow-400 to-orange-400 text-slate-900 px-6 py-3 rounded-lg font-medium hover:from-yellow-300 hover:to-orange-300 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-orange-500/25">
                    Découvrir l'offre
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>

        {/* Chat flottant avec style attractif */}
        {showChat && (
          <div className="fixed bottom-20 right-4 w-96 h-96 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl p-4 animate-fade-in-up border border-white/10">
            <div className="h-full flex flex-col">
              <div className="flex justify-between items-center mb-4 pb-3 border-b border-white/10">
                <h3 className="text-lg font-semibold text-white">Chat Assistance</h3>
                <button 
                  onClick={() => setShowChat(false)}
                  className="text-white/60 hover:text-white/90 transition-colors"
                >
                  <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="flex-1 overflow-y-auto">
                {/* Contenu du chat */}
              </div>
            </div>
          </div>
        )}

        {/* Notifications panel avec style attractif */}
        {showNotifications && (
          <div className="fixed top-16 right-4 w-80 bg-white/10 backdrop-blur-xl rounded-xl shadow-2xl p-4 animate-fade-in-down border border-white/10">
            <h3 className="text-lg font-semibold text-white mb-4">Notifications</h3>
            <div className="space-y-4">
              {activities.map((activity) => (
                <div key={activity.id} className="group flex items-start space-x-3 p-2 hover:bg-white/5 rounded-lg transition-all duration-200">
                  <div className={`flex-shrink-0 w-2 h-2 mt-2 rounded-full ${
                    activity.status === 'success' ? 'bg-gradient-to-r from-emerald-400 to-teal-400' :
                    activity.status === 'warning' ? 'bg-gradient-to-r from-amber-400 to-orange-400' :
                    'bg-gradient-to-r from-blue-400 to-indigo-400'
                  } group-hover:scale-150 transition-transform duration-300`} />
                  <div>
                    <p className="text-sm font-medium text-white">{activity.title}</p>
                    <p className="text-xs text-blue-200/80">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Bouton de chat flottant avec nouveau style */}
        <button
          onClick={() => setShowChat(!showChat)}
          className="fixed bottom-4 right-4 p-4 bg-gradient-to-r from-rose-500 to-amber-500 text-white rounded-full shadow-lg hover:shadow-rose-500/50 hover:from-rose-400 hover:to-amber-400 transition-all duration-300 hover:scale-110 group"
        >
          <ChatBubbleLeftRightIcon className="h-6 w-6 group-hover:rotate-12 transition-transform" />
        </button>
      </div>

      <style jsx>{`
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.4;
            transform: scale(1) translate(0, 0);
          }
          50% {
            opacity: 0.6;
            transform: scale(1.1) translate(10px, -10px);
          }
        }

        .animate-pulse-slow {
          animation: pulse-slow 10s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }

        .animation-delay-2000 {
          animation-delay: 2s;
        }
      `}</style>
    </div>
  );
} 