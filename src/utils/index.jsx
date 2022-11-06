import { setRandomShape, setResult, setSelectedShape, setShowFinal } from "../pages/RockPaper";
import { setSelectedBoxNumbers, setWaitForPlayer2, setResult as setResultTicTacToe } from "../pages/TicTacToe";

export const resetRockPaperSignals = () => {
    setShowFinal(false);
    setRandomShape();
    setResult();
    setSelectedShape();
};

export const resetTicTacToeSignals = () => {
    setSelectedBoxNumbers([]);
    setWaitForPlayer2(false);
    setResultTicTacToe();
};

export const resetAllSignals = () => {
    resetRockPaperSignals();
    resetTicTacToeSignals();
};

export const getRandomNumber = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);

    return Math.floor(Math.random() * (max - min + 1)) + min;
};
