import React, { useState } from 'react';
import Layout from '../Layout/Layout';
import DynamicBreadcrumbs from '../Components/DynamicBreadcrumbs/DynamicBreadcrumbs';

const guidanceData = [
  { id: 1, authority: 'Authority A', officer: 'John Doe', designation: 'Manager', email: 'john@example.com' },
  { id: 2, authority: 'Authority B', officer: 'Jane Smith', designation: 'Director', email: 'jane@example.com' },
  { id: 3, authority: 'Authority C', officer: 'Robert Brown', designation: 'Coordinator', email: 'robert@example.com' },
];

const Guidance = () => {
  const [search, setSearch] = useState('');
  const [filterBy, setFilterBy] = useState('officer');

  const filteredData = guidanceData.filter(item =>
    item[filterBy].toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Layout>
      <DynamicBreadcrumbs/>
      <div className="w-[80rem] mx-auto p-4 mb-4 mt-4">
        <div className="mb-4 flex gap-2">
          <select
            className="border p-2 rounded"
            value={filterBy}
            onChange={(e) => setFilterBy(e.target.value)}
          >
            <option value="officer">Filter by Name</option>
            <option value="designation">Filter by Designation</option>
          </select>
          <input
            type="text"
            placeholder="Search..."
            className="border p-2 rounded"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <table className="table-auto w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-[#13406C] text-white">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Administrative Authority</th>
              <th className="p-2 border">Nodal Officer</th>
              <th className="p-2 border">Designation</th>
              <th className="p-2 border">Email</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((item) => (
                <tr key={item.id} className="border">
                  <td className="p-2 border text-center">{item.id}</td>
                  <td className="p-2 border">{item.authority}</td>
                  <td className="p-2 border">{item.officer}</td>
                  <td className="p-2 border">{item.designation}</td>
                  <td className="p-2 border">{item.email}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="p-2 text-center">No matching records found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </Layout>
  );
};

export default Guidance;