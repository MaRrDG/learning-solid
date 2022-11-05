import { createSignal, For, Show } from "solid-js";
import Loader from "../../components/Loader";

const [selectedBoxNumbers, setSelectedBoxNumbers] = createSignal([]);

const Box = ({ idx }) => {
    return (
        <div
            onClick={() => {
                if (selectedBoxNumbers().find((elem) => elem === idx)) return;
                setSelectedBoxNumbers((prev) => [...prev, idx]);
                console.log(selectedBoxNumbers());
            }}
            className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans"
        >
            <Show when={selectedBoxNumbers().find((elem) => elem === idx) ? true : false}>X</Show>
        </div>
    );
};

const TicTacToe = () => {
    return (
        <div className="flex flex-col items-center space-y-5">
            <h1 className="text-2xl font-medium text-white">Tic Tac Toe</h1>
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                <For each={[0, 1, 2, 3, 4, 5, 6, 7, 8]} fallback={<Loader />}>
                    {(item) => <Box idx={item + 1} />}
                </For>
            </div>
        </div>
    );
};

export default TicTacToe;
