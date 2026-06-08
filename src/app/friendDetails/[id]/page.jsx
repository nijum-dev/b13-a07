import InstallToggleButton from '@/components/buttons/InstallToggleButton';
import Image from 'next/image';
import React from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { FiArchive,  } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { MdDelete, MdSnooze } from 'react-icons/md';
const friendsPromise = async () => {
    const res = await fetch("http://localhost:3000/friends.json");
    const friends = await res.json();
    return friends;
}
const friendDetailsPage = async ({ params }) => {
    const friends = await friendsPromise()
    const { id } = await params
    const friend = friends.find((friend) => String(friend.id) === id);
    return (
        <div>
            <div className='flex gap-5 container px-3 py-3 mx-auto  justify-center'>
                <div className='one '>
                    <div className=' bg-white text-center p-6 rounded-md'>
                        <Image src={friend.picture} alt={friend.name} width={60} height={100}
                            className="rounded-full mx-auto"></Image>
                        <h2 className="font-bold">{friend.name}</h2>
                        <p className={`badge w-fit mx-auto p-1 mt-2 rounded-xl px-4 text-white ${friend.status === "overdue"
                                        ? "bg-[#EF4444]" : friend.status === "on-track"
                                            ? "bg-[#244D3F]"
                                            : "bg-[#EFAD44]"}`}>{friend.status}</p><br />
                         <p className="badge font-semibold text-[#244D3F] bg-[#CBFADB]">{friend.tags}</p><br />
                        <i className='text-[#64748B] '>"{friend.bio}"</i>
                        <p className='text-[#64748B]'>Preferred:{friend.email}</p>
                    </div>

                    <div className='flex justify-center p-2 mt-3 gap-2 bg-white rounded-md '>
                        <p className='my-auto'><MdSnooze /></p>
                        <p className='font-semibold text-sm'>Snooze 2 Weeks</p>
                    </div>
                    <div className='flex justify-center p-2 mt-3 gap-2 bg-white rounded-md '>
                        <p className='my-auto'><FiArchive /></p>
                        <p  className='font-semibold text-sm'>Archive</p>
                    </div>
                    <div className='flex justify-center p-2 mt-3 gap-2 bg-white text-red-500 rounded-md '>
                        <p className='my-auto'><MdDelete /></p>
                        <p className='font-semibold text-sm '>Delete</p>
                    </div>
                </div>
                <div className='two'>
                    <div className='flex mx-auto text-center gap-2 mb-6 '>
                        <div className='p-5 rounded-md bg-white '>
                            <h2 className='font-bold text-2xl text-gray-700'>{friend.days_since_contact}</h2>
                            <p className='text-[#64748B] text-sm '>Days Since Contact</p>
                        </div>
                        <div className='p-5 rounded-md bg-white'>
                            <h2 className='font-bold text-2xl text-gray-700 px-10'>{friend.goal}</h2>
                            <p className='text-[#64748B] text-sm'>Goal(Days)</p>
                        </div>
                        <div className='p-5 rounded-md bg-white'>
                            <h2 className='font-bold text-2xl text-gray-700'>{friend.next_due_date}</h2>
                            <p className='text-[#64748B] text-sm'>Next Due</p>
                        </div>
                    </div>

                    <div>
                        <div className='mb-5'>
                            <div className=' bg-white rounded-md' >
                                <div className='flex justify-between  '>
                                    <p className='p-5 text-[#244d35] font-semibold'>Relationship Goal</p>
                                     <button className='btn btn-xs mt-3 mr-2'>Edit</button>                                   
                                </div>                               
                                       
                                 <p className='text-[#64748B]  px-5 pb-5 '>Connect every <span className='text-black font-semibold'>{friend.goal}</span> 
                                 <span className='text-black font-semibold'> days</span>
                                 </p>                       
                            </div>                         
                        </div>
                        <div></div>
                    </div>

                        <div className='rounded-md bg-white'>
                            <p className='p-2 px-7 pt-5 font-semibold text-[#244d35] '>Quick Check-In</p>
                            <div >
                                <InstallToggleButton contactName={friend.name} />
                               
                            </div>

                        </div>



                </div>
            </div>
        </div>
    );
};

export default friendDetailsPage;