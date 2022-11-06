import clsx from "clsx";
import { createSignal, For, Match, Show, Switch } from "solid-js";
import Loader from "../../components/Loader";

const [selectedBoxNumbers, setSelectedBoxNumbers] = createSignal([]);
const [waitForPlayer2, setWaitForPlayer2] = createSignal(false);

const selectRandomBox = () => {
    let randomIdx = Math.floor(Math.random() * 9);

    // While randomIdx exists in selectedBoxNumbers array, we will generate a new number.
    while (selectedBoxNumbers().find((elem) => elem.id === randomIdx)) {
        randomIdx = Math.floor(Math.random() * 9);
    }

    setSelectedBoxNumbers((prev) => [...prev, { player: "player2", id: randomIdx }]);
};

const Box = ({ idx }) => {
    return (
        <div
            onClick={() => {
                if (selectedBoxNumbers().find((elem) => elem === idx) || waitForPlayer2()) return;
                setSelectedBoxNumbers((prev) => [...prev, { player: "player1", id: idx }]);
                setWaitForPlayer2(true);

                setTimeout(() => {
                    setWaitForPlayer2(false);
                    selectRandomBox();
                }, 1000);
            }}
            className={clsx(
                "flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans",
                waitForPlayer2() ? "cursor-not-allowed" : "cursor-pointer"
            )}
        >
            <Show when={selectedBoxNumbers().find((elem) => elem.id === idx) ? true : false}>
                <Switch>
                    <Match when={selectedBoxNumbers().find((elem) => elem.id === idx).player === "player1"}>X</Match>
                    <Match when={selectedBoxNumbers().find((elem) => elem.id === idx).player === "player2"}>O</Match>
                </Switch>
            </Show>
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

export { setSelectedBoxNumbers, setWaitForPlayer2 };
export default TicTacToe;
