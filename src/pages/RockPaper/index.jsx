import { createSignal, For } from "solid-js";
import clsx from "clsx";
import { resetRockPaperSignals } from "../../utils";
import { useStatistics } from "../../context/Statistics";

// Variables
const transition = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300";
const shapes = ["Paper", "Rock", "Scissors"];
const equals = ["Paper-Paper", "Rock-Rock", "Scissors-Scissors"];
const wins = ["Scissors-Paper", "Paper-Rock", "Rock-Scissors"];

// Signals
const [selectedShape, setSelectedShape] = createSignal();
const [showFinal, setShowFinal] = createSignal(false);
const [randomShape, setRandomShape] = createSignal();
const [result, setResult] = createSignal();

// Component
const RockPaper = () => {
    const [allStatistics, { updateRockPaperStatistics }] = useStatistics();

    const showFinalResult = (shape) => {
        setSelectedShape(shape);
        setRandomShape(shapes[Math.floor(Math.random() * shapes.length)]);
        setShowFinal(true);

        const getEqual = equals.find((elem) => elem === [selectedShape(), randomShape()].join("-"));
        const getWin = wins.find((elem) => elem === [selectedShape(), randomShape()].join("-"));
        setResult(getEqual ? "equal" : getWin ? "win" : "lose");

        // Update statistics context
        updateRockPaperStatistics({
            ...allStatistics()["Rock Paper Scissors"],
            [result()]: allStatistics()["Rock Paper Scissors"][result()] + 1,
        });

        // Reset Signals
        setTimeout(() => {
            resetRockPaperSignals();
        }, 1500);
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <Switch>
                <Match when={!showFinal()}>
                    <>
                        <h1 className="text-white uppercase font-medium text-2xl">Select your shape</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 items-center">
                            <For each={shapes} fallback={<div>Loading...</div>}>
                                {(item) => (
                                    <img
                                        src={`src/assets/images/${item.toLocaleLowerCase()}.png`}
                                        alt={item}
                                        className={clsx("w-36 cursor-pointer", transition)}
                                        onClick={() => showFinalResult(item)}
                                    />
                                )}
                            </For>
                        </div>
                    </>
                </Match>
                <Match when={showFinal()}>
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
                    <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 sm:space-x-5 items-center">
                        <img
                            className={clsx("w-36", transition)}
                            src={`src/assets/images/${selectedShape().toLocaleLowerCase()}.png`}
                            alt="player1"
                        />
                        <p className="text-3xl text-white font-medium">vs</p>
                        <img
                            className={clsx("w-36", transition)}
                            src={`src/assets/images/${randomShape().toLocaleLowerCase()}.png`}
                            alt="player1"
                        />
                    </div>
                </Match>
            </Switch>
        </div>
    );
};

export { setShowFinal, setSelectedShape, setRandomShape, setResult };
export default RockPaper;
