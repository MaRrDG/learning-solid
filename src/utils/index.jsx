import { setRandomShape, setResult, setSelectedShape, setShowFinal } from "../pages/RockPaper";

export const resetRockPaperSignals = () => {
    setShowFinal(false);
    setRandomShape();
    setResult();
    setSelectedShape();
};

export const resetAllSignals = () => {
    resetRockPaperSignals();
};
