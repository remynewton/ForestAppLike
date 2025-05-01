import { useState } from 'react';
import { useProgressStore } from '../store/useProgressStore';

export default function HourLogger() {
    const [input, setInput] = useState('');
    const addHours = useProgressStore((state) => state.addHours);

    const handleSubmit = () => {
        const hours = parseFloat(input);
        if (!isNaN(hours)) addHours(hours);
        setInput('');
    };

    return (
        <div className="p-4">
            <input
                type="number"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Hours studied"
                className="border p-2 mr-2"
            />
            <button onClick={handleSubmit} className="bg-green-500 text-white px-4 py-2 rounded">
                Log Hours
            </button>
        </div>
    );
}