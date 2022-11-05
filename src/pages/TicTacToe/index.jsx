const TicTacToe = () => {
    return (
        <div className="flex flex-col items-center space-y-5">
            <h1 className="text-2xl font-medium text-white">Tic Tac Toe</h1>
            <div className="grid grid-cols-3 grid-rows-3 gap-2">
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    X
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    X
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    O
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    O
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    X
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    X
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    O
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    O
                </div>
                <div className="flex items-center justify-center w-16 h-16 border-2 border-white text-white font-medium text-4xl font-sans">
                    X
                </div>
            </div>
        </div>
    );
};

export default TicTacToe;
