import { useProgressStore } from '../store/useProgressStore';
import './TownGrid.css';

export default function TownGrid() {
    const townData = useProgressStore((state) => state.townData);
    const placeItemAt = useProgressStore((state) => state.placeItemAt);
    const buildQueue = useProgressStore((state) => state.buildQueue);

    const handleTileClick = (index) => {
        if (buildQueue.length > 0 && !townData[index]) {
            placeItemAt(index);
        }
    };

    return (
        <div className="p-4">
            <div
                className="grid grid-cols-10 gap-1 bg-gray-200 p-2 rounded"
                style={{ width: 'fit-content', border: '2px solid #aaa' }}
            >
                {townData.map((tile, i) => (
                    <div
                        key={i}
                        onClick={() => handleTileClick(i)}
                        className={`w-10 h-10 border border-gray-500 flex items-center justify-center cursor-pointer text-sm ${!tile ? 'bg-white' : 'bg-green-300'
                            }`}
                    >
                        {tile || ''}
                    </div>
                ))}
            </div>
        </div>
    );
}