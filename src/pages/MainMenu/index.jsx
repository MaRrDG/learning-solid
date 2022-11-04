import Card from "../../components/Card";

const MainMenu = () => {
  return (
    <div className="flex flex-col sm:flex-row gap-5">
      <Card
        title={"X/O"}
        description={"Atunci cand te plictisesti baga un x si o"}
      />
      <Card
        title={"Rock Paper Scissors"}
        description={"Legenda piatra foarfeca hartie"}
      />
      <Card title={"Minesweeper"} description={"BOMBAAAAA"} />
    </div>
  );
};

export default MainMenu;
