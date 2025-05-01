import React, { useEffect } from 'react';
import { useProgressStore } from './store/useProgressStore';
import HourLogger from './components/HourLogger';
import TownGrid from './components/TownGrid';
import BuildMenu from './components/BuildMenu';

function App() {
    const hours = useProgressStore((state) => state.hours);
    const points = useProgressStore((state) => state.points);
    const townData = useProgressStore((state) => state.townData);
    const addHours = useProgressStore((state) => state.addHours);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem('progress'));
        if (data) {
            addHours(data.hours);
        }
    }, [addHours]);

    useEffect(() => {
        localStorage.setItem('progress', JSON.stringify({ hours, points, townData }));
    }, [hours, points, townData]);

    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-4">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-2xl">
                <h1 className="text-3xl font-bold text-blue-600">Hello Forest!</h1>
                <HourLogger />
                <BuildMenu />
                <TownGrid />
            </div>
        </div>
    );
}

export default App;