'use client';

import { useState } from 'react';
import Link from 'next/link';
import { 
  DocumentTextIcon, 
  ArrowDownTrayIcon, 
  ArrowLeftIcon,
  FunnelIcon,
  MagnifyingGlassIcon,
  DocumentDuplicateIcon,
  DocumentCheckIcon,
  ClockIcon
} from '@heroicons/react/24/solid';

const documents = [
  {
    id: 1,
    name: 'Kbis',
    description: 'Extrait Kbis officiel de votre entreprise',
    status: 'available',
    type: 'official',
    date: '2024-03-15',
    fileType: 'pdf',
    size: '156 Ko'
  },
  {
    id: 2,
    name: 'Statuts de l\'entreprise',
    description: 'Document officiel des statuts',
    status: 'available',
    type: 'official',
    date: '2024-03-15',
    fileType: 'pdf',
    size: '284 Ko'
  },
  {
    id: 3,
    name: 'Attestation URSSAF',
    description: 'Attestation d\'immatriculation URSSAF',
    status: 'pending',
    type: 'administrative',
    date: '2024-03-20',
    fileType: 'pdf',
    size: '0 Ko'
  },
  {
    id: 4,
    name: 'Attestation INSEE',
    description: 'Attestation d\'inscription au répertoire SIRENE',
    status: 'pending',
    type: 'administrative',
    date: '2024-03-20',
    fileType: 'pdf',
    size: '0 Ko'
  },
  {
    id: 5,
    name: 'Mandat de prélèvement',
    description: 'Mandat signé pour les prélèvements SEPA',
    status: 'available',
    type: 'contract',
    date: '2024-03-10',
    fileType: 'pdf',
    size: '127 Ko'
  }
];

export default function Documents() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedType, setSelectedType] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [previewDocument, setPreviewDocument] = useState<number | null>(null);

  const filteredDocuments = documents.filter(doc => {
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesType = selectedType === 'all' || doc.type === selectedType;
    const matchesStatus = selectedStatus === 'all' || doc.status === selectedStatus;
    return matchesSearch && matchesType && matchesStatus;
  });

  const handleDownload = (documentId: number) => {
    // TODO: Implement document download
    console.log('Downloading document:', documentId);
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
          <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center">
              <DocumentDuplicateIcon className="h-8 w-8 text-blue-500 mr-3" />
              <h1 className="text-3xl font-bold text-gray-900">
                Mes documents
              </h1>
            </div>
            <div className="mt-4 sm:mt-0 flex items-center space-x-2">
              <div className="relative">
                <MagnifyingGlassIcon className="h-5 w-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Rechercher un document..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                />
              </div>
              <select
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Tous les types</option>
                <option value="official">Documents officiels</option>
                <option value="administrative">Documents administratifs</option>
                <option value="contract">Contrats</option>
              </select>
              <select
                value={selectedStatus}
                onChange={(e) => setSelectedStatus(e.target.value)}
                className="border border-gray-300 rounded-lg py-2 px-4 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="all">Tous les statuts</option>
                <option value="available">Disponible</option>
                <option value="pending">En attente</option>
              </select>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Liste des documents */}
          <div className="lg:col-span-2">
            <div className="bg-white shadow rounded-lg divide-y divide-gray-200">
              {filteredDocuments.map((document) => (
                <div
                  key={document.id}
                  className="p-6 hover:bg-gray-50 transition-colors duration-200 cursor-pointer"
                  onClick={() => setPreviewDocument(document.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`p-3 rounded-lg ${
                        document.status === 'available' ? 'bg-green-100' : 'bg-gray-100'
                      }`}>
                        {document.status === 'available' ? (
                          <DocumentCheckIcon className="h-6 w-6 text-green-600" />
                        ) : (
                          <ClockIcon className="h-6 w-6 text-gray-400" />
                        )}
                      </div>
                      <div>
                        <h3 className="text-lg font-medium text-gray-900">{document.name}</h3>
                        <div className="mt-1 flex items-center space-x-4">
                          <p className="text-sm text-gray-500">{document.description}</p>
                          <span className="text-xs text-gray-400">•</span>
                          <p className="text-sm text-gray-500">{document.size}</p>
                          <span className="text-xs text-gray-400">•</span>
                          <p className="text-sm text-gray-500">
                            {new Date(document.date).toLocaleDateString('fr-FR')}
                          </p>
                        </div>
                      </div>
                    </div>
                    {document.status === 'available' && (
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          handleDownload(document.id);
                        }}
                        className="flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                      >
                        <ArrowDownTrayIcon className="h-5 w-5 mr-2" />
                        Télécharger
                      </button>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Prévisualisation */}
          <div className="lg:col-span-1">
            <div className="bg-white shadow rounded-lg p-6 sticky top-6">
              {previewDocument ? (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Prévisualisation</h3>
                  <div className="aspect-w-3 aspect-h-4 bg-gray-100 rounded-lg mb-4">
                    {/* Ici, on pourrait ajouter une prévisualisation du PDF */}
                    <div className="flex items-center justify-center h-full">
                      <DocumentTextIcon className="h-16 w-16 text-gray-400" />
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Nom du fichier</h4>
                      <p className="mt-1 text-sm text-gray-900">
                        {documents.find(d => d.id === previewDocument)?.name}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Type</h4>
                      <p className="mt-1 text-sm text-gray-900">
                        {documents.find(d => d.id === previewDocument)?.fileType.toUpperCase()}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Taille</h4>
                      <p className="mt-1 text-sm text-gray-900">
                        {documents.find(d => d.id === previewDocument)?.size}
                      </p>
                    </div>
                    <div>
                      <h4 className="text-sm font-medium text-gray-500">Date</h4>
                      <p className="mt-1 text-sm text-gray-900">
                        {new Date(documents.find(d => d.id === previewDocument)?.date || '').toLocaleDateString('fr-FR')}
                      </p>
                    </div>
                  </div>
                </div>
              ) : (
                <div className="text-center py-12">
                  <DocumentTextIcon className="mx-auto h-12 w-12 text-gray-400" />
                  <h3 className="mt-2 text-sm font-medium text-gray-900">Aucun document sélectionné</h3>
                  <p className="mt-1 text-sm text-gray-500">
                    Cliquez sur un document pour afficher ses détails
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
} 