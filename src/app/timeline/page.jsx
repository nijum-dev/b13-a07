"use client"
import React, { useEffect, useMemo, useState } from 'react';
import { FiPhoneCall } from 'react-icons/fi';
import { BsChatLeftText } from 'react-icons/bs';
import { IoVideocamOutline } from 'react-icons/io5';

const iconForType = (type) => {
	if (type === 'Call') return <FiPhoneCall className="text-xl text-[#244D3F]" />;
	if (type === 'Text') return <BsChatLeftText className="text-xl text-[#244D3F]" />;
	if (type === 'Video') return <IoVideocamOutline className="text-xl text-[#244D3F]" />;
	return <FiPhoneCall className="text-xl text-[#244D3F]" />;
};

export default function TimelinePage() {
	const [entries, setEntries] = useState([]);
	const [filter, setFilter] = useState('All');

	useEffect(() => {
		const loadEntries = () => {
			try {
				const raw = localStorage.getItem('timeline') || '[]';
				const parsed = JSON.parse(raw) || [];
				const sorted = parsed.slice().sort((a, b) => (b.id || 0) - (a.id || 0));
				setEntries(sorted);
			} catch (e) {
				setEntries([]);
			}
		};

		loadEntries();

		const handler = (e) => {
			const entry = e?.detail;
			if (entry) {
				setEntries((prev) => [entry, ...prev]);
			}
		};

		window.addEventListener('timeline:update', handler);
		return () => window.removeEventListener('timeline:update', handler);
	}, []);

	const displayedEntries = useMemo(() => {
		return entries.filter((entry) => {
			if (filter === 'All') return true;
			if (filter === 'Calls') return entry.type === 'Call';
			if (filter === 'Texts') return entry.type === 'Text';
			if (filter === 'Videos') return entry.type === 'Video';
			return true;
		});
	}, [entries, filter]);

	const formatTs = (iso) => {
		try {
			return new Intl.DateTimeFormat('en-US', {
				month: 'long',
				day: 'numeric',
				year: 'numeric',
			}).format(new Date(iso));
		} catch {
			return iso;
		}
	};

	return (
		<div className="container mx-auto px-4 py-8">
			<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
				<div>
					<h1 className="text-3xl font-bold text-[#244d35]">Timeline</h1>
					
					<div className="w-full md:w-60">
					<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="timeline-filter">Filter timeline</label>
					<select
						id="timeline-filter"
						value={filter}
						onChange={(e) => setFilter(e.target.value)}
						className="w-full rounded-md border border-gray-300 bg-white px-3 py-2"
					>
						<option>All</option>
						<option>Calls</option>
						<option>Texts</option>
						<option>Videos</option>
					</select>
				</div>
				</div>
				
			</div>

			<div className="space-y-3">
				{displayedEntries.length === 0 ? (
					<div className="rounded-xl border border-gray-200 bg-white p-6 text-center text-gray-500">
						No timeline entries yet. Click Call, Text, or Video on a friend detail page to add logs.
					</div>
				) : (
					displayedEntries.map((entry) => (
						<div key={entry.id} className="flex items-center gap-4 rounded-xl border border-gray-200 bg-white px-5 py-4 shadow-sm">
							<div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#F1F9F6] text-[#244D3F]">
								{iconForType(entry.type)}
							</div>
							<div className="flex-1">
								<div className="font-semibold text-gray-800">{entry.type} with {entry.contact}</div>
								<div className="text-sm text-gray-500">{formatTs(entry.timestamp)}</div>
							</div>
						</div>
					))
				)}
			</div>
		</div>
	);
}
