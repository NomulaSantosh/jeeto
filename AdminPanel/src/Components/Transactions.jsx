import React, { useState } from 'react';
import back from '../assets/back.png';
import { useNavigate } from 'react-router-dom';
import TransactionDetailsModal from './TransactionDetailsModal'; // import the modal
import ScreenshotModal from './ScreenshotModal';
import WhatsApp from '../assets/WhatsApp.jpg'

const users = [
  {
    id: 'WW-RCRBEUZV-128',
    type: 'Withdraw from wallet ⬇️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Pending',
    requested: '7 Apr 2025 | 7:42 PM',
  },
  // Add three more users below (same or with different data as needed)
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Withdraw from wallet ⬇️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Rejected',
    requested: '7 Apr 2025 | 7:42 PM',
    rejected: '10 APR 2025 | 10:00 AM',
    screenshot: WhatsApp,
    
  },
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Deposit to wallet ⬆️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Approved',
    requested: '7 Apr 2025 | 7:42 PM',
    approved: '10 Apr 2025 | 7:42 PM',
    screenshot: WhatsApp,
  },
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Withdraw from wallet ⬇️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Pending',
    requested: '7 Apr 2025 | 7:42 PM',
  },
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Deposit to wallet ⬆️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Approved',
    requested: '7 Apr 2025 | 7:42 PM',
    approved: '10 Apr 2025 | 7:42 PM',
    screenshot: WhatsApp,
  },
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Withdraw from wallet ⬇️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Pending',
    requested: '7 Apr 2025 | 7:42 PM',
  },
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Withdraw from wallet ⬇️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Rejected',
    requested: '7 Apr 2025 | 7:42 PM',
    rejected: '10 APR 2025 | 10:00 AM',
    screenshot: WhatsApp,
  },
   {
    id: 'WW-RCRBEUZV-128',
    type: 'Withdraw from wallet ⬇️',
    code: 'JT-362173',
    coins: 3000,
    acoins: 0,
    status: 'Pending',
    requested: '7 Apr 2025 | 7:42 PM',
  },
];

const MyUser = () => {
  const navigate = useNavigate();
  const [selectedUser, setSelectedUser] = useState(null); 
  const [selectedScreenshot, setSelectedScreenshot] = useState(null); // Add state for screenshot
  return (
    <div className='min-h-screen bg-black font-sans relative'>
      <img
        src={back}
        onClick={() => navigate('/home')}
        alt="Back"
        className='absolute top-3 mt-5 left-20 w-6 cursor-pointer'
      />
      
      <div className='text-white text-center mb-8 pt-5'>
        <h1 className="text-3xl font-bold">My Transactions</h1>
      </div>

      <div className="p-1 md:p-4 bg-gray-100">
        <div className='px-8 grid grid-cols-4 grid-rows-4 gap-4'>
          {users.map((user, index) => (
            <div key={index} className='relative bg-white w-auto h-auto text-black rounded-xl shadow-md p-4'>
              <div className='grid grid-cols-2 border-b border-gray-200 text-gray-600 bg-gray-300 mb-3'>
                <p>Ref no.</p>
                <h2 className='font-semibold text-md'>{user.id}</h2>
                <p>Type</p>
                <h2 className='font-semibold text-md'>{user.type}</h2>
              </div>

              <div className='text-lg font-bold grid grid-cols-2 gap-y-1 my-3'>
                <p className='text-gray-600'>Client Code</p>
                <p className='text-right'>{user.code}</p>
                <p className='text-gray-600'>Requested Coins</p>
                <p className='text-right'>{user.coins}</p>
                <p className='text-gray-600'>Approved Coins</p>
                <p className='text-right'>{user.acoins}</p>
                <p className='text-gray-600'>Status</p>
                <p className={`text-right ${
                  user.status === 'Approved'
                    ? 'text-green-600'
                    : user.status === 'Rejected'
                    ? 'text-red-600'
                    : 'text-amber-400'
                }`}>{user.status}</p>

                {user.status === 'Approved' && (
                  <>
                    <p className='text-gray-600'>Screenshot</p>
                    <p onClick={() => setSelectedScreenshot(user.screenshot)} className='text-right underline cursor-pointer'>view</p>
                  </>
                )}

                {user.status === 'Rejected' && (
                  <>
                    <p className='text-gray-600'>Screenshot</p>
                    <p onClick={() => setSelectedScreenshot(user.screenshot)} className='text-right underline cursor-pointer'>view</p>
                  </>
                )}

                <p className='text-gray-600'>Requested On</p>
                <p className='text-right'>{user.requested}</p>

                {user.status === 'Approved' && (
                  <>
                    <p className='text-gray-600'>Approved On</p>
                    <p className='text-right'>{user.approved}</p>
                  </>
                )}
                {user.status === 'Rejected' && (
                  <>
                    <p className='text-gray-600'>Rejected On</p>
                    <p className='text-right'>{user.rejected}</p>
                  </>
                )}
              </div>

              <div className='items-center'>
                <p
                  onClick={() => setSelectedUser(user)}
                  className='bg-white text-black rounded-lg border-t border-gray-200 px-60 cursor-pointer hover:bg-gray-100 text-center'
                >
                  View
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedUser && (
        <TransactionDetailsModal
          user={selectedUser}
          onClose={() => setSelectedUser(null)}
        />
      )}

  {selectedScreenshot && (
    <ScreenshotModal
      screenshotUrl={selectedScreenshot}
      onClose={() => setSelectedScreenshot(null)}
    />
  )}
    </div>
  );
};

export default MyUser;
