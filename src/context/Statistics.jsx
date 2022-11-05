import { createSignal, createContext, useContext } from "solid-js";

const StatisticsContext = createContext();

export const StatisticsProvider = (props) => {
    const [allStatistics, setAllStatistics] = createSignal({
            "Rock Paper Scissors": {
                win: 0,
                lose: 0,
                equal: 0,
            },
            "Tic Tac Toe": {
                win: 0,
                lose: 0,
                equal: 0,
            },
            Minesweeper: {
                win: 0,
                lose: 0,
                equal: "-",
            },
        }),
        statistics = [
            allStatistics,
            {
                updateRockPaperStatistics(data) {
                    setAllStatistics({
                        ...allStatistics(),
                        "Rock Paper Scissors": data,
                    });
                },
                updateTicTacToe(data) {
                    setAllStatistics({
                        ...allStatistics(),
                        "Tic Tac Toe": data,
                    });
                },
                updateMinesweeper(data) {
                    setAllStatistics({
                        ...allStatistics(),
                        Minesweeper: data,
                    });
                },
            },
        ];

    return <StatisticsContext.Provider value={statistics}>{props.children}</StatisticsContext.Provider>;
};

export const useStatistics = () => {
    return useContext(StatisticsContext);
};
