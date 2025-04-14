'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  BellIcon, 
  UserCircleIcon,
  ChevronDownIcon,
  Cog6ToothIcon,
  ArrowRightOnRectangleIcon,
  ChatBubbleLeftRightIcon
} from '@heroicons/react/24/solid';

export default function DashboardHeader() {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const [showNotifications, setShowNotifications] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());

  // Mettre à jour l'heure toutes les secondes
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const notifications = [
    {
      id: 1,
      title: "Document disponible",
      message: "Votre Kbis est maintenant disponible",
      time: "Il y a 5 min",
      unread: true
    },
    {
      id: 2,
      title: "Rappel important",
      message: "N'oubliez pas votre déclaration URSSAF",
      time: "Il y a 1 heure",
      unread: true
    }
  ];

  return (
    <header className="bg-white shadow-lg">
      {/* Barre supérieure */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-800 text-white px-4 py-1">
        <div className="max-w-7xl mx-auto flex justify-between items-center text-sm">
          <div className="flex items-center space-x-4">
            <span>{currentTime.toLocaleTimeString('fr-FR')}</span>
            <span>•</span>
            <span className="flex items-center">
              <div className="w-2 h-2 bg-green-400 rounded-full mr-2"></div>
              Tous les services sont opérationnels
            </span>
          </div>
          <div className="flex items-center space-x-4">
            <Link href="/support" className="hover:text-blue-200 transition-colors duration-200">
              Support
            </Link>
            <Link href="/aide" className="hover:text-blue-200 transition-colors duration-200">
              Centre d'aide
            </Link>
          </div>
        </div>
      </div>

      {/* Barre principale */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center justify-between">
          {/* Logo et navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex items-center">
              <h1 className="text-2xl font-bold text-gray-900">LegalPlace</h1>
              <span className="ml-2 px-2 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded">
                Pro
              </span>
            </div>
            <nav className="hidden md:flex space-x-6">
              <Link 
                href="/dashboard" 
                className="text-gray-900 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Tableau de bord
              </Link>
              <Link 
                href="/documents" 
                className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Documents
              </Link>
              <Link 
                href="/calendar" 
                className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Échéances
              </Link>
              <Link 
                href="/simulator" 
                className="text-gray-500 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                Simulateur
              </Link>
            </nav>
          </div>

          {/* Actions utilisateur */}
          <div className="flex items-center space-x-4">
            {/* Bouton chat */}
            <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200">
              <ChatBubbleLeftRightIcon className="h-6 w-6" />
            </button>

            {/* Notifications */}
            <div className="relative">
              <button 
                className="p-2 text-gray-500 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setShowNotifications(!showNotifications)}
              >
                <div className="relative">
                  <BellIcon className="h-6 w-6" />
                  {notifications.some(n => n.unread) && (
                    <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                  )}
                </div>
              </button>

              {/* Menu notifications */}
              {showNotifications && (
                <div className="absolute right-0 mt-2 w-80 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                  <div className="px-4 py-2 border-b border-gray-200">
                    <h3 className="text-sm font-semibold text-gray-900">Notifications</h3>
                  </div>
                  {notifications.map((notification) => (
                    <div 
                      key={notification.id}
                      className="px-4 py-3 hover:bg-gray-50 cursor-pointer"
                    >
                      <p className="text-sm font-medium text-gray-900">{notification.title}</p>
                      <p className="text-sm text-gray-500">{notification.message}</p>
                      <p className="text-xs text-gray-400 mt-1">{notification.time}</p>
                    </div>
                  ))}
                  <div className="px-4 py-2 border-t border-gray-200">
                    <Link href="/notifications" className="text-sm text-blue-600 hover:text-blue-800">
                      Voir toutes les notifications
                    </Link>
                  </div>
                </div>
              )}
            </div>

            {/* Profil utilisateur */}
            <div className="relative">
              <button 
                className="flex items-center space-x-3 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                onClick={() => setShowProfileMenu(!showProfileMenu)}
              >
                <UserCircleIcon className="h-8 w-8" />
                <div className="hidden md:block text-left">
                  <p className="text-sm font-medium">John Doe</p>
                  <p className="text-xs text-gray-500">Micro-entreprise</p>
                </div>
                <ChevronDownIcon className="h-5 w-5" />
              </button>

              {/* Menu profil */}
              {showProfileMenu && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg py-1 z-50 border border-gray-200">
                  <Link 
                    href="/profile"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <UserCircleIcon className="h-5 w-5 mr-3 text-gray-400" />
                    Mon profil
                  </Link>
                  <Link 
                    href="/settings"
                    className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <Cog6ToothIcon className="h-5 w-5 mr-3 text-gray-400" />
                    Paramètres
                  </Link>
                  <button 
                    className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                  >
                    <ArrowRightOnRectangleIcon className="h-5 w-5 mr-3 text-gray-400" />
                    Déconnexion
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Barre de progression */}
      <div className="h-1 w-full bg-gray-200">
        <div className="h-full w-2/3 bg-gradient-to-r from-blue-500 to-blue-600 rounded-r"></div>
      </div>
    </header>
  );
} 