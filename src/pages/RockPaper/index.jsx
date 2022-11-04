import { createSignal } from "solid-js";
import clsx from "clsx";

const RockPaper = () => {
    const [selectedShape, setSelectedShape] = createSignal();
    const transition = "transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300";
    const shapes = ["Fist", "Rock", "Scissors"];

    const setShape = (shape) => {
        setSelectedShape(shape);
        const randomShape = shapes[Math.floor(Math.random() * shapes.length)];
    };

    return (
        <div className="flex flex-col items-center justify-center space-y-10">
            <h1 className="text-white uppercase font-medium text-xl">Select your shape</h1>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {shapes.map((shape) => (
                    <img
                        src={`src/assets/images/${shape.toLocaleLowerCase()}.png`}
                        alt={shape}
                        className={clsx("w-24 cursor-pointer", transition)}
                        onClick={() => setShape(shape)}
                    />
                ))}
            </div>
        </div>
    );
};

export default RockPaper;
