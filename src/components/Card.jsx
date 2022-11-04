import { A } from "@solidjs/router";

const Card = ({ title, description, link }) => {
    return (
        <div className="w-[16rem] h-[22rem] bg-gray-600 rounded-lg flex flex-col justify-center items-center transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
            <div className="p-2 text-center w-full h-[30%] rounded-t-lg bg-indigo-500 flex items-center justify-center text-white text-2xl font-medium border-b-2 border-white">
                {title}
            </div>
            <p className="p-2 text-white font-medium text-center">{description}</p>
            <A
                href={link}
                className="h-12 mt-auto mb-6 w-32 items-center flex justify-center rounded-md border border-transparent bg-indigo-500  text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
                PLAY
            </A>
        </div>
    );
};

export default Card;
