import React, { useState } from 'react';
import { Bell, User } from 'lucide-react';
import AddWidgetDrawer from './AddWidgetDrawer';

const DashboardHeader = () => (
  <div className="flex justify-between items-center bg-white px-6 py-4 shadow">
    <div className="text-sm text-gray-500">Home &gt; <span className="font-semibold text-gray-900">Dashboard V2</span></div>
    <div className="flex items-center space-x-4">
      <input type="text" placeholder="Search anything..." className="border px-4 py-1 rounded w-64 text-sm" />
      <Bell className="text-gray-500 w-5 h-5 cursor-pointer" />
      <User className="text-gray-500 w-6 h-6 cursor-pointer" />
    </div>
  </div>
);

const SectionHeader = ({ title, onAdd }) => (
  <div className="flex justify-between items-center mt-8 mb-4 px-6">
    <h2 className="text-xl font-semibold text-gray-800">{title}</h2>
    <div className="flex space-x-2">
      <button onClick={onAdd} className="bg-blue-500 text-white px-3 py-1 rounded">+ Add Widget</button>
      <button className="border px-3 py-1 rounded text-sm">Last 2 Days Timeline</button>
    </div>
  </div>
);

const WidgetCard = ({ name, text }) => (
  <div className="p-4 bg-white border rounded shadow-sm mb-2">
    <h4 className="font-semibold text-blue-600">{name}</h4>
    <p className="text-gray-600 text-sm">{text}</p>
  </div>
);

const CNAPPSection = ({ widgets, onAdd }) => (
  <div className="bg-white p-6 shadow rounded mx-6">
    <h3 className="text-lg font-semibold mb-4">CSPM Executive Dashboard</h3>
    <div className="grid grid-cols-2 gap-4 mt-4">
      <div className="bg-gray-100 p-4 rounded">
        <h4 className="text-md font-semibold mb-2">Cloud Account</h4>
        <div className="flex justify-around gap-4">
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-[10px] border-green-500 flex items-center justify-center text-lg font-bold text-green-700 bg-white">
              12
            </div>
            <span className="mt-2 text-sm text-gray-700">Connected</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-24 h-24 rounded-full border-[10px] border-red-500 flex items-center justify-center text-lg font-bold text-red-700 bg-white">
              4
            </div>
            <span className="mt-2 text-sm text-gray-700">Not Connected</span>
          </div>
        </div>
      </div>
      <div className="bg-gray-100 p-4 rounded">
        <div className="flex justify-between items-center mb-2">
          <h4 className="text-md font-semibold">Cloud Account Risk Assessment</h4>
          <button onClick={onAdd} className="text-blue-500 text-sm hover:underline hover:text-blue-600">+ Add Widget</button>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-[10px] border-red-500 flex items-center justify-center text-md font-semibold text-red-700 bg-white">
              3
            </div>
            <span className="mt-1 text-xs text-gray-700">Failed</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-[10px] border-yellow-400 flex items-center justify-center text-md font-semibold text-yellow-700 bg-white">
              5
            </div>
            <span className="mt-1 text-xs text-gray-700">Warning</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-[10px] border-gray-400 flex items-center justify-center text-md font-semibold text-gray-700 bg-white">
              2
            </div>
            <span className="mt-1 text-xs text-gray-700">Not Available</span>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-20 h-20 rounded-full border-[10px] border-green-500 flex items-center justify-center text-md font-semibold text-green-700 bg-white">
              10
            </div>
            <span className="mt-1 text-xs text-gray-700">Passed</span>
          </div>
        </div>
      </div>
    </div>
    <div className="mt-6">
      {widgets.map((w, i) => (
        <WidgetCard key={i} name={w.name} text={w.text} />
      ))}
    </div>
  </div>
);

const CWPPSection = () => (
  <div className="bg-white p-6 shadow rounded mx-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">CWPP Dashboard</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 border rounded text-center text-gray-400">No graph available for Top 5 Namespace Alerts</div>
      <div className="p-4 border rounded text-center text-gray-400">No graph available for Workload Alerts</div>
    </div>
  </div>
);

const RegistryScanSection = () => (
  <div className="bg-white p-6 shadow rounded mx-6 mt-6">
    <h3 className="text-lg font-semibold mb-4">Registry Scan</h3>
    <div className="grid grid-cols-2 gap-4">
      <div className="p-4 border rounded">
        <h4 className="text-md font-semibold mb-2">Image Risk Assessment</h4>
        <div className="h-4 bg-blue-400 rounded w-full animate-pulse" />
      </div>
      <div className="p-4 border rounded">
        <h4 className="text-md font-semibold mb-2">Image Security Issues</h4>
        <div className="h-4 bg-red-400 rounded w-full animate-pulse" />
      </div>
    </div>
  </div>
);

const Dashboard = () => {
  const [showDrawer, setShowDrawer] = useState(false);
  const [cnappWidgets, setCnappWidgets] = useState([]);

  const openDrawer = () => setShowDrawer(true);
  const closeDrawer = () => setShowDrawer(false);

  const handleAddWidget = (widget) => {
    setCnappWidgets(prev => [...prev, widget]);
    closeDrawer();
  };

  return (
    <div className="bg-gray-100 min-h-screen">
      <DashboardHeader />
      <SectionHeader title="CNAPP Dashboard" onAdd={openDrawer} />
      <CNAPPSection widgets={cnappWidgets} onAdd={openDrawer} />
      <CWPPSection />
      <RegistryScanSection />
      {showDrawer && <AddWidgetDrawer onAdd={handleAddWidget} onClose={closeDrawer} />}
    </div>
  );
};

export default Dashboard;