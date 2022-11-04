const Card = ({ title, description }) => {
  return (
    <div className="w-[13rem] h-[20rem] bg-gray-600 rounded-lg flex flex-col justify-center items-center">
      <div className="p-2 text-center w-full h-[30%] rounded-t-lg bg-indigo-500 flex items-center justify-center text-white text-2xl font-medium border-b-2 border-white">
        {title}
      </div>
      <p className="p-2 text-white font-medium text-center">{description}</p>
      <button
        type="button"
        className="h-12 mt-auto mb-12 w-32 text-center rounded-md border border-transparent bg-indigo-500  text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        PLAY
      </button>
    </div>
  );
};

export default Card;
