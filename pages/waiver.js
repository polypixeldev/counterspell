import React, { useState } from 'react';

export default function Waiver() {
  const [type, setType] = useState('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const queryParams = new URLSearchParams({ type, id }).toString();
    const res = await fetch(`/api/v1/waiver?${queryParams}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4 bg-blue-500 text-white">
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          >
            <option value="">Select Type</option>
            <option value="email">Email</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm font-bold mb-2" htmlFor="id">
            Email/Name
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-white"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-700 hover:bg-blue-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      <div className="mt-4 text-white">
        <h2 className="text-lg font-bold">Response:</h2>
        <pre className="bg-gray-800 p-4 rounded">{JSON.stringify(response, null, 2)}</pre>
      </div>

    </>
  );
}