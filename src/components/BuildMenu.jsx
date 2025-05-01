import { useProgressStore } from '../store/useProgressStore';

export default function BuildMenu() {
    const enqueueItem = useProgressStore((s) => s.enqueueItem);
    const points = useProgressStore((s) => s.points);

    return (
        <div className="my-4">
            <h2 className="text-xl font-semibold mb-2">Build Menu</h2>
            <div className="flex gap-4">
                <button
                    onClick={() => enqueueItem('🏠', 5)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                >
                    Buy House (5 pts)
                </button>
                <button
                    onClick={() => enqueueItem('🌳', 2)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                >
                    Buy Tree (2 pts)
                </button>
                <button
                    onClick={() => enqueueItem('🌊', 3)}
                    className="bg-teal-500 text-white px-3 py-1 rounded"
                >
                    Buy Lake (3 pts)
                </button>
            </div>
            <div className="mt-2 text-sm text-gray-600">Points: {points}</div>
        </div>
    );
}