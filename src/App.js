import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Category from './components/Category';
import { setSearchQuery } from './redux/dashboardSlice';
import Dashboard from './components/Dashboard';

function App() {
  return <Dashboard />;
  const dashboard = useSelector(state => state.dashboard);
  const dispatch = useDispatch();

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-700">Dynamic Dashboard</h1>
      <input
        type="text"
        placeholder="Search Widgets..."
        className="border p-2 mb-6 w-full rounded shadow-sm"
        onChange={e => dispatch(setSearchQuery(e.target.value))}
      />
      {Object.keys(dashboard)
      .filter(key => key !== 'searchQuery')
      .map(category => (
        <Category key={category} title={category} widgets={dashboard[category]} />
      ))}
    </div>
  );
}

export default App;