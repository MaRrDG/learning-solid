import Card from "../../components/Card";

const MainMenu = () => {
    return (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5 mt-5 mb-5 sm:m-0">
            <Card
                title="X/O"
                link="/tictactoe"
                description="The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row is the winner."
            />
            <Card
                title="Rock Paper Scissors"
                link="/rockpaper"
                description="Is a hand game originating from China, usually played between two people, in which each player simultaneously forms one of three shapes with an outstretched hand"
            />
            <Card
                title="Minesweeper"
                link="/minesweeper"
                description="Is a logic puzzle video game genre generally played on personal computers. The game features a grid of clickable squares, with hidden mines scattered throughout the board. "
            />
        </div>
    );
};

export default MainMenu;
