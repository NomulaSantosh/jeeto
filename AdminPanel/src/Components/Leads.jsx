import React from 'react';
import back from '../assets/back.png';
import square from '../assets/square.jpg';
import { FaWhatsapp,FaUser,FaSearch,FaPhone } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const users = [
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  // Add three more users below (same or with different data as needed)
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
  {
    
    number: '9990808087',
    requested: '7 Apr 2025 | 7:42 PM',
    
  },
];

const MyUser = () => {
  const navigate = useNavigate();

  return (
    <div className='w-full min-h-screen bg-[#212121] font-sans relative'>

      <img src={back} onClick={() => navigate('/home')} alt="Back" className='absolute top-3 mt-5 left-20 w-6 cursor-pointer' />
      <img src={square} alt="Square" className='absolute right-20 mt-5 top-0 w-6' />

      <div className='text-white text-center mb-8 pt-5'>
        <h1 className="text-3xl font-bold">My Users</h1>
      </div>

      <div className="flex justify-between items-center px-8 mb-6">
         <div className="relative w-1/2">
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Name, Phone"
              className="bg-[#2e2e2e] text-white placeholder-gray-400 pl-10 pr-4 py-2 rounded-md w-full outline-none"
            />
         </div>
        
      </div>

       <div className="p-1 md:p-4 bg-gray-100 min-h-screen">
        <div className='px-8 grid grid-cols-3 gap-4 auto-rows-min'>
          {users.map((user, index) => (
            <div 
              key={index} 
              className='relative bg-white w-full h-full text-black rounded-xl shadow-md p-4 flex flex-col'
            >
              <div className='grid grid-cols-2 border-b border-gray-200 text-gray-600 bg-gray-300 mb-3'>
                <FaUser className="text-sm text-black" />
                                
                                <span className='text-gray-700'><FaPhone className='absolute  text-black' />{user.number}</span>
                              
              </div>

              <div className='text-lg font-bold grid grid-cols-2 gap-y-1 my-3 flex-1'>

                
                <p className='text-gray-600'>{user.requested}</p>
                <button className='bg-gray-400 text-black rounded-lg'>
                  <FaWhatsapp className='absolute text-green-700' /> 
                  chat
                </button>

              
              </div>

             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyUser;
