import React, { useState } from 'react';

export default function Waiver() {
  const [type, setType] = useState('');
  const [id, setId] = useState('');
  const [response, setResponse] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch('/api/waiver', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ type, id }),
    });

    const data = await res.json();
    setResponse(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="p-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="type">
            Type
          </label>
          <select
            id="type"
            value={type}
            onChange={(e) => setType(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          >
            <option value="">Select Type</option>
            <option value="email">Email</option>
            <option value="name">Name</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="id">
            Name/Email
          </label>
          <input
            id="id"
            type="text"
            value={id}
            onChange={(e) => setId(e.target.value)}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
      {response && (
        <div className="mt-4">
          <h2 className="text-lg font-bold">Response:</h2>
          <pre className="bg-gray-100 p-4 rounded">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </>
  );
}