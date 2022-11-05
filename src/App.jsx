import RockPaper, { setShowFinal } from "./pages/RockPaper";
import { Routes, Route, useLocation, useNavigate } from "@solidjs/router";
import MainMenu from "./pages/MainMenu";
import NotFound from "./pages/NotFound";
import { Show } from "solid-js";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <div className="bg-gray-900 w-full h-full sm:h-screen sm:w-screen flex items-center justify-evenly flex-col">
            <div className="mt-auto">
                <Routes>
                    <Route path="/" component={<MainMenu />} />
                    <Route path="/rockpaper" component={<RockPaper />} />

                    {/* PAGE NOT FOUND */}
                    <Route path="*" component={<NotFound />} />
                </Routes>
            </div>

            <div className="mt-auto mb-6 space-y-2 flex items-center flex-col">
                <Show when={location.pathname !== "/"}>
                    <button
                        onClick={() => {
                            navigate(-1);

                            // Reset all signals
                            setShowFinal(false);
                        }}
                        className="h-12 w-20 text-center rounded-md border border-transparent bg-indigo-500  text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        type="button"
                    >
                        Back
                    </button>
                </Show>
                <p className="text-white font-medium text-sm">This project is only for educational purposes</p>
            </div>
        </div>
    );
};

export default App;
