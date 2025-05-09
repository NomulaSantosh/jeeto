import React from 'react';
import back from '../assets/back.png';
import square from '../assets/square.jpg';
import { FaWhatsapp,FaUser,FaSearch } from 'react-icons/fa';


const users = [
  {
    id: 'JT-411144',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  // Add three more users below (same or with different data as needed)
  {
    id: 'JT-411145',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  {
    id: 'JT-411146',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  {
    id: 'JT-411147',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  {
    id: 'JT-411147',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  {
    id: 'JT-411147',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  {
    id: 'JT-411147',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
  {
    id: 'JT-411147',
    number: '9990808087',
    deposit: 0,
    withdraw: 0,
    balance: 0,
    pl: 0,
    exposure: 0,
    referred: 0,
    activeClosed: '0/0',
    joined: '7 Apr 2025 | 7:42 PM',
    lastUsed: '7 Apr 2025 | 7:42 PM',
  },
];

const MyUser = () => {
  return (
    <div className='w-full min-h-screen bg-[#212121] font-sans relative'>

      <img src={back} alt="Back" className='absolute top-3 mt-5 left-20 w-6 cursor-pointer' />
      <img src={square} alt="Square" className='absolute right-20 mt-5 top-0 w-6' />

      <div className='text-white text-center mb-8 pt-5'>
        <h1 className="text-3xl font-bold">My Users</h1>
      </div>

      <div className="flex justify-between items-center px-8 mb-6">
         <div className="relative w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ID, Name, Phone"
              className="bg-[#2e2e2e] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md w-full outline-none"
            />
         </div>
        <select className="bg-[#2e2e2e] text-white px-8 py-2 rounded-md outline-none ml-4">
          <option>Partners</option>
          <option>All Users</option>
          <option>Active</option>
          <option>Inactive</option>
        </select>
      </div>

      <div className='px-8 grid grid-cols-4 grid-rows-4 gap-4'>
        {users.map((user, index) => (
          <div key={index} className='relative bg-white w-auto h-auto text-black rounded-xl shadow-md p-4'>
            <div className='flex items-center border-b border-gray-200 justify-between mb-3'>
              <h2 className='font-semibold text-lg'>{user.id}</h2>
              <FaUser className="text-sm text-black" />
            </div>

            <div className='text-sm grid grid-cols-2 mb-1'>
              <p>Number:</p> 
              <div className='flex'>
                <FaWhatsapp className='absolute right-21 top-15 text-green-500' />
                <span className='text-gray-700 ml-24'>{user.number}</span>
              </div>
            </div>
                    <div className='text-sm grid grid-cols-2 gap-y-1 my-3'>
                          <p className='text-gray-600'>Deposit To Wallet</p>
                          <p className='text-right'>{user.deposit}</p>

                          <p className='text-gray-600'>Withdraw From Wallet</p>
                          <p className='text-right'>{user.withdraw}</p>

                          <p className='text-gray-600'>Wallet Balance</p>
                          <p className='text-right'>{user.balance}</p>

                          <p className='text-gray-600'>P/L</p>
                          <p className='text-right'>{user.pl}</p>

                          <p className='text-gray-600'>Exposure</p>
                          <p className='text-right'>{user.exposure}</p>

                          <p className='text-gray-600'>Referred</p>
                          <p className='text-right'>{user.referred}</p>

                          <p className='text-gray-600'>Active/Closed ID</p>
                          <p className='text-right'>{user.activeClosed}</p>
                   </div>

                   <div className='text-sm grid grid-cols-2 gap-y-1 my-1'>
                      <p className='text-gray-600'>Joined On</p>
                      <p className='text-right'>{user.joined}</p>

                      <p className='text-gray-600'>Last Used</p>
                      <p className='text-right'>{user.lastUsed}</p>
                   </div>
                     <p className='text-[#bebaba] ml-64'>(today)</p> 


                  
            <div className='flex justify-around mt-4'>
              <button className='bg-gray-200 text-black rounded-lg px-15 py-3'>ID's</button>
              <button className='bg-gray-200 text-black px-10 py-3 rounded'>Transactions</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyUser;
