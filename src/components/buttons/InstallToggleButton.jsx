'use client'
import { InstallAppsContext } from '@/context/install.context';
import React, { useContext } from 'react';
import { BsChatLeftText } from 'react-icons/bs';
import { FiPhoneCall } from 'react-icons/fi';
import { IoVideocamOutline } from 'react-icons/io5';
import { toast } from 'react-toastify';

const saveTimelineEntry = (entry) => {
    try {
        const raw = localStorage.getItem('timeline') || '[]';
        const items = JSON.parse(raw);
        items.unshift(entry);
        localStorage.setItem('timeline', JSON.stringify(items));
        window.dispatchEvent(new CustomEvent('timeline:update', { detail: entry }));
    } catch (e) {
        console.error('Failed to save timeline entry', e);
    }
}

const InstallToggleButton = ({ contactName = 'Unknown' }) => {

    const something = useContext(InstallAppsContext);
    console.log(something, "something");

    const handleCall = () => {
        const entry = { id: Date.now(), type: 'Call', contact: contactName, timestamp: new Date().toISOString() };
        saveTimelineEntry(entry);
        toast.success('Call logged successfully', { position: 'top-right', autoClose: 3000 });
    }
    const handleText = () => {
        const entry = { id: Date.now(), type: 'Text', contact: contactName, timestamp: new Date().toISOString() };
        saveTimelineEntry(entry);
        toast.success('Text logged successfully', { position: 'top-right', autoClose: 3000 });
    }
    const handleVideo = () => {
        const entry = { id: Date.now(), type: 'Video', contact: contactName, timestamp: new Date().toISOString() };
        saveTimelineEntry(entry);
        toast.success('Video logged successfully', { position: 'top-right', autoClose: 3000 });
    }

    return (
        <div className='flex justify-between p-5 '>
            <p className='rounded-md p-3 mx-4 px-10 font-semibold bg-gray-100' onClick={handleCall}>< FiPhoneCall />Call</p>

            <p className="rounded-md p-3 mx-4 px-10 font-semibold bg-gray-100"
                onClick={handleText} ><BsChatLeftText />Text</p>

            <p className='rounded-md p-3 mx-4 px-10 font-semibold bg-gray-100' onClick={handleVideo}><IoVideocamOutline />Video</p>
        </div>
    );
};

export default InstallToggleButton;