import React, { useState } from 'react';
import back from '../assets/back.png';
import { FaLock, FaSearch, FaPlus, FaPen } from "react-icons/fa";
import { useNavigate } from 'react-router-dom';

const Teams = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([
    { name: 'Santosh Bina',  blocked: false },
    { name: 'Ice Book (Radhe)', blocked: false },
    { name: 'Ice Book (Radhe)', blocked: false },
  ]);

  const [showAddCard, setShowAddCard] = useState(false);
  const [newTeamName, setNewTeamName] = useState('');

  const handleAddTeam = () => {
    if (newTeamName.trim() !== '') {
      setUsers([{ name: newTeamName, blocked: false }, ...users]);
      setNewTeamName('');
      setShowAddCard(false);
    }
  };

  const toggleBlock = (index) => {
    const updated = [...users];
    updated[index].blocked = !updated[index].blocked;
    setUsers(updated);
  };

  return (
    <div className='w-full min-h-screen bg-[#212121] font-sans relative'>

      {/* Back Button */}
      <img
        src={back}
        onClick={() => navigate('/home')}
        alt="Back"
        className='absolute top-3 mt-5 left-20 w-6 cursor-pointer'
      />

      {/* Header */}
      <div className='text-white text-center mb-8 pt-5'>
        <h1 className="text-3xl font-bold">Select Sites</h1>
      </div>

      {/* Search */}
      <div className="flex justify-between items-center px-8 mb-6">
        <div className="relative w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="Site Name"
            className="bg-[#2e2e2e] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md w-full outline-none"
          />
        </div>
      </div>

      {/* Team List */}
      <div className="p-1 md:p-4 bg-gray-100 min-h-screen">
        <div className='px-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 auto-rows-min'>
          {users.map((user, index) => (
            <div
              key={index}
              className='bg-white w-full text-black rounded-xl shadow-md p-4 flex flex-col justify-between gap-3'
            >
              <div className='text-lg font-bold grid grid-cols-2 gap-y-1'>
                <div className='text-gray-700 flex items-center gap-2'>
                  <div className="bg-green-500 p-1 rounded">
                    <FaLock className="text-white" size={12} />
                  </div>
                  <span className="capitalize">{user.name}</span>
                </div>

                <button className='flex items-center justify-end gap-1 text-sm text-gray-600 bg-gray-300 rounded px-3 py-1'>
                  <FaPen size={12} />
                  Edit
                </button>
              </div>

              {/* Action Buttons */}
              <div className='flex justify-between mt-2 text-sm'>
                <button className='bg-gray-200 text-gray-700 px-3 py-1 rounded'>Force Logout</button>
                <button className='bg-gray-200 text-gray-700 px-3 py-1 rounded'>Change Password</button>
                <button
                  className='bg-gray-200 text-gray-700 px-3 py-1 rounded'
                  onClick={() => toggleBlock(index)}
                >
                  {user.blocked ? 'Unblock User' : 'Block User'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating Add Button */}
      <button
        onClick={() => setShowAddCard(true)}
        className="fixed bottom-6 right-6 bg-black text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg hover:bg-gray-800 transition-all duration-200"
      >
        <FaPlus size={20} />
      </button>

      {/* Add Team Card */}
      {showAddCard && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-xl p-6 w-[300px] flex flex-col gap-4 shadow-lg">
            <h2 className="text-xl font-bold text-gray-800">Add New Team</h2>
            <input
              type="text"
              value={newTeamName}
              onChange={(e) => setNewTeamName(e.target.value)}
              placeholder="Enter team name"
              className="border border-gray-300 rounded px-3 py-2 outline-none"
            />
            <div className="flex justify-between">
              <button
                onClick={() => setShowAddCard(false)}
                className="px-4 py-2 rounded bg-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleAddTeam}
                className="px-4 py-2 rounded bg-black text-white"
              >
                Add
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Teams;
