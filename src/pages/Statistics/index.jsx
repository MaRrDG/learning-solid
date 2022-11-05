import { For } from "solid-js";
import { useStatistics } from "../../context/Statistics";

const tableHead = ["Game", "Wins", "Loses", "Equals"];
const games = ["Rock Paper Scissors", "Tic Tac Toe", "Minesweeper"];

const Statistics = () => {
    const [allStatistics] = useStatistics();

    return (
        <div className="flex flex-col items-center space-y-5">
            <h1 className="text-white text-2xl font-medium">Your statistics</h1>

            <div class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 rounded-lg">
                <table class="min-w-full divide-y divide-gray-300">
                    <thead class="bg-indigo-700">
                        <tr>
                            <For each={tableHead} fallback={<div>Loading...</div>}>
                                {(item) => (
                                    <th scope="col" class="px-3 py-3.5 text-left text-sm font-semibold text-gray-100">
                                        {item}
                                    </th>
                                )}
                            </For>
                        </tr>
                    </thead>
                    <tbody class="divide-y divide-gray-200 bg-gray-200">
                        <For each={games} fallback={<div>Loading...</div>}>
                            {(item, idx) => (
                                <tr>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {item}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {allStatistics()[item]?.win}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {allStatistics()[item]?.lose}
                                    </td>
                                    <td class="whitespace-nowrap px-3 py-4 text-sm font-medium text-gray-900">
                                        {allStatistics()[item]?.equal}
                                    </td>
                                </tr>
                            )}
                        </For>
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Statistics;
