'use client';
import React, { useState } from 'react';
import { Navbar } from '../component/Navbar';
import { Mail, Phone, Globe } from 'lucide-react';
import Cursor from '../component/Cursor';

const EnvironmentalGroups = [
  {
    name: "Greenpeace India",
    description: "Leading environmental organization focused on climate action",
    email: "supporter.in@greenpeace.org",
    phone: "+91-11-4840-5000",
    website: "https://www.greenpeace.org/india/"
  },
  {
    name: "Centre for Science and Environment (CSE)",
    description: "Research and advocacy organization on environmental issues",
    email: "cse@cseindia.org",
    phone: "+91-11-2924-0350",
    website: "https://www.cseindia.org/"
  },
  {
    name: "WWF-India",
    description: "Wildlife and conservation focused organization",
    email: "support@wwfindia.net",
    phone: "+91-11-4150-4850",
    website: "https://www.wwfindia.org/"
  }
];

const Developers = [
    {
        name: "Sanish Pagui",
        description: "---------------------------",
        email: "SanishEmail@gmail.com",
        phone: "9999999991",
        website: "https://www.sanish.com/"
    },
    {
        name: "Jai Gauns Dessai",
        description: "---------------------------",
        email: "JaiEmail@gmail.com",
        phone: "9999999992",
        website: "https://www.jai.com/"
    },
    {
        name: "Conrad Alves",
        description: "---------------------------",
        email: "ConradEmail@gmail.com",
        phone: "9999999993",
        website: "https://www.conrad.com/"
    }
  ];

export default function ContactPage() {
  const [selectedGroup, setSelectedGroup] = useState(null);

  return (
    <div className='bg-white min-h-screen w-full'>
      <Navbar />
      <Cursor />
      <div className='container mx-auto px-4 py-24'>
        <h1 className='text-4xl font-bold text-green-700 mb-8 text-center'>
          Environmental Action Networks
        </h1>
        
        <div className='grid md:grid-cols-3 gap-6'>
          {EnvironmentalGroups.map((group) => (
            <div 
              key={group.name} 
              className='bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all'
              onClick={() => setSelectedGroup(group)}
            >
              <h2 className='text-2xl font-semibold text-green-800 mb-4'>{group.name}</h2>
              <p className='text-gray-600 mb-4'>{group.description}</p>
              <div className='flex items-center mb-2'>
                <Mail className='mr-2 text-green-600' size={20}/>
                <span>{group.email}</span>
              </div>
            </div>
          ))}
        </div>

        <h1 className='text-4xl font-bold text-green-700 py-8 mb-8 text-center'>
          Developers
        </h1>

        <div className='grid md:grid-cols-3 gap-6'>
          {Developers.map((group) => (
            <div 
              key={group.name} 
              className='bg-green-50 p-6 rounded-lg shadow-md hover:shadow-xl transition-all'
              onClick={() => setSelectedGroup(group)}
            >
              <h2 className='text-2xl font-semibold text-green-800 mb-4'>{group.name}</h2>
              <p className='text-gray-600 mb-4'>{group.description}</p>
              <div className='flex items-center mb-2'>
                <Mail className='mr-2 text-green-600' size={20}/>
                <span>{group.email}</span>
              </div>
            </div>
          ))}
        </div>

        {selectedGroup && (
          <div className='fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50'>
            <div className='bg-white p-8 rounded-lg max-w-md w-full'>
              <h2 className='text-3xl font-bold text-green-800 mb-4'>{selectedGroup.name}</h2>
              <div className='space-y-4'>
                <div className='flex items-center'>
                  <Mail className='mr-3 text-green-600' size={24}/>
                  <span>{selectedGroup.email}</span>
                </div>
                <div className='flex items-center'>
                  <Phone className='mr-3 text-green-600' size={24}/>
                  <span>{selectedGroup.phone}</span>
                </div>
                <div className='flex items-center'>
                  <Globe className='mr-3 text-green-600' size={24}/>
                  <a 
                    href={selectedGroup.website} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className='text-blue-600 hover:underline'
                  >
                    Visit Website
                  </a>
                </div>
              </div>
              <button 
                onClick={() => setSelectedGroup(null)}
                className='mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition-colors'
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
