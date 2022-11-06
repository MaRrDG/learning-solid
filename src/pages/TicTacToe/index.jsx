import { useLocation } from "@solidjs/router";
import clsx from "clsx";
import { createEffect, createSignal, For, Match, Show, Switch } from "solid-js";
import Loader from "../../components/Loader";
import { useStatistics } from "../../context/Statistics";
import { getRandomNumber, resetTicTacToeSignals } from "../../utils";

const [selectedBoxNumbers, setSelectedBoxNumbers] = createSignal([]);
const [waitForPlayer2, setWaitForPlayer2] = createSignal(false);
const [result, setResult] = createSignal();

const winScenarios = [
    { 1: 1, 2: 2, 3: 3 },
    { 1: 4, 2: 5, 3: 6 },
    { 1: 7, 2: 8, 3: 9 },
    { 1: 1, 2: 4, 3: 7 },
    { 1: 2, 2: 5, 3: 8 },
    { 1: 3, 2: 6, 3: 9 },
    { 1: 1, 2: 5, 3: 9 },
    { 1: 3, 2: 5, 3: 7 },
];

const selectRandomBox = () => {
    let randomIdx = getRandomNumber(1, 8);

    // While randomIdx exists in selectedBoxNumbers array, we will generate a new number.
    while (selectedBoxNumbers().find((elem) => elem.id === randomIdx)) {
        randomIdx = getRandomNumber(1, 8);
    }

    setSelectedBoxNumbers((prev) => [...prev, { player: "player2", id: randomIdx }]);
};

const Box = ({ idx }) => {
    const location = useLocation();

    return (
        <div
            onClick={() => {
                if (selectedBoxNumbers().find((elem) => elem === idx) || waitForPlayer2()) return;
                setSelectedBoxNumbers((prev) => [...prev, { player: "player1", id: idx }]);

                if (selectedBoxNumbers().length >= 8) return;
                setWaitForPlayer2(true);

                setTimeout(() => {
                    if (location.pathname !== "/tictactoe" || result()) return;
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

const checkWin = (player, elem) => {
    if (
        player.find((d) => d.id === elem[1]) &&
        player.find((d) => d.id === elem[2]) &&
        player.find((d) => d.id === elem[3])
    ) {
        return true;
    }

    return false;
};

const TicTacToe = () => {
    const [allStatistics, { updateTicTacToe }] = useStatistics();

    createEffect(() => {
        if (selectedBoxNumbers().length < 3) return;
        const player1 = selectedBoxNumbers().filter((elem) => elem.player === "player1");
        const player2 = selectedBoxNumbers().filter((elem) => elem.player === "player2");

        winScenarios.forEach((elem) => {
            if (result()) return;

            if (checkWin(player1, elem)) {
                updateTicTacToe({
                    ...allStatistics()["Tic Tac Toe"],
                    ["win"]: allStatistics()["Tic Tac Toe"]["win"] + 1,
                });
                return setResult("win");
            } else if (checkWin(player2, elem)) {
                updateTicTacToe({
                    ...allStatistics()["Tic Tac Toe"],
                    ["lose"]: allStatistics()["Tic Tac Toe"]["lose"] + 1,
                });
                return setResult("lose");
            } else if (selectedBoxNumbers().length >= 9 && !checkWin(player1, elem) && !checkWin(player1, elem)) {
                updateTicTacToe({
                    ...allStatistics()["Tic Tac Toe"],
                    ["equal"]: allStatistics()["Tic Tac Toe"]["equal"] + 1,
                });
                return setResult("equal");
            }
        });
    });

    return (
        <div className="flex flex-col items-center space-y-5">
            <Switch>
                <Match when={result()}>
                    <h1 className="text-white uppercase font-medium text-2xl">
                        Result:{" "}
                        <span
                            className={`text-${
                                result() === "win" ? "green" : result() === "equal" ? "yellow" : "red"
                            }-500`}
                        >
                            {result()}
                        </span>
                    </h1>
                    <p
                        onClick={() => resetTicTacToeSignals()}
                        className="text-white uppercase hover:text-indigo-500 cursor-pointer font-medium"
                    >
                        Play again!
                    </p>
                </Match>
                <Match when={!result()}>
                    <h1 className="text-2xl font-medium text-white">Tic Tac Toe</h1>
                    <div className="grid grid-cols-3 grid-rows-3 gap-2">
                        <For each={[0, 1, 2, 3, 4, 5, 6, 7, 8]} fallback={<Loader />}>
                            {(item) => <Box idx={item + 1} />}
                        </For>
                    </div>
                </Match>
            </Switch>
        </div>
    );
};

export { setSelectedBoxNumbers, setWaitForPlayer2, setResult };
export default TicTacToe;
