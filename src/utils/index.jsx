import { setRandomShape, setResult, setSelectedShape, setShowFinal } from "../pages/RockPaper";
import { setSelectedBoxNumbers, setWaitForPlayer2 } from "../pages/TicTacToe";

export const resetRockPaperSignals = () => {
    setShowFinal(false);
    setRandomShape();
    setResult();
    setSelectedShape();
};

export const resetTicTacToeSignals = () => {
    setSelectedBoxNumbers([]);
    setWaitForPlayer2(false);
};

export const resetAllSignals = () => {
    resetRockPaperSignals();
    resetTicTacToeSignals();
};
