import { useNavigate } from "@solidjs/router";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="text-white text-3xl flex items-center flex-col space-y-6">
      <p>Ooops... page not found!</p>
      <button
        type="button"
        onClick={() => navigate(-1)}
        className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-2 py-1 text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
      >
        Go back
      </button>
    </div>
  );
};

export default NotFound;
