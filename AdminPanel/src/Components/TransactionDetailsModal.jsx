// components/TransactionDetailsModal.jsx
import React from 'react';

const TransactionDetailsModal = ({ user, onClose }) => {
  if (!user) return null;

  return (
    <div className="fixed inset-0 bg-black/30 bg-opacity-70 backdrop-blur-sm flex items-center justify-center z-50 overflow-hidden">
      <div className="bg-white rounded-xl p-6 w-full max-w-xl mx-4 relative text-black">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-xl font-bold text-gray-600 hover:text-black"
        >
          &times;
        </button>

        <h2 className="text-2xl font-bold mb-4 text-center">Transaction Details</h2>

        <div className="grid grid-cols-2 gap-y-3 text-lg">
          <p className="text-gray-600">Ref no.</p>
          <p className="text-right">{user.id}</p>
          

          <p className="text-gray-600">Type</p>
          <p className="text-right">{user.type}</p>

          <p className="text-gray-600">Client Code</p>
          <p className="text-right">{user.code}</p>

          <p className="text-gray-600">Requested Coins</p>
          <p className="text-right">{user.coins}</p>

          <p className="text-gray-600">Approved Coins</p>
          <p className="text-right">{user.acoins}</p>

          <p className="text-gray-600">Status</p>
          <p className={`text-right ${
              user.status === 'Approved' ? 'text-green-600' :
              user.status === 'Rejected' ? 'text-red-600' : 'text-amber-400'
          }`}>
            {user.status}
          </p>

          <p className="text-gray-600">Requested On</p>
          <p className="text-right">{user.requested}</p>

          {user.status === 'Approved' && (
            <>
              <p className="text-gray-600">Approved On</p>
              <p className="text-right">{user.approved}</p>
            </>
          )}

          {user.status === 'Rejected' && (
            <>
              <p className="text-gray-600">Rejected On</p>
              <p className="text-right">{user.rejected}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default TransactionDetailsModal
