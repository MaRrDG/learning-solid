import { Routes, Route, useLocation, useNavigate, A } from "@solidjs/router";
import { StatisticsProvider } from "./context/Statistics";
import { Show } from "solid-js";
import { resetAllSignals } from "./utils";
import RockPaper from "./pages/RockPaper";
import MainMenu from "./pages/MainMenu";
import NotFound from "./pages/NotFound";
import Statistics from "./pages/Statistics";

const App = () => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <StatisticsProvider>
            <div className="bg-gray-900 w-full min-h-screen h-full sm:h-screen sm:w-screen flex items-center justify-evenly flex-col">
                <div className="mt-auto mb-5">
                    <Routes>
                        <Route path="/" component={<MainMenu />} />
                        <Route path="/rockpaper" component={<RockPaper />} />
                        <Route path="/statistics" component={<Statistics />} />

                        {/* PAGE NOT FOUND */}
                        <Route path="*" component={<NotFound />} />
                    </Routes>
                </div>

                <Show when={location.pathname === "/"}>
                    <A href="/statistics" className="text-white hover:text-indigo-500 font-medium">
                        See your statistics
                    </A>
                </Show>

                <div className="mt-auto mb-6 space-y-2 flex items-center flex-col">
                    <Show when={location.pathname !== "/"}>
                        <button
                            onClick={() => {
                                navigate(-1);

                                // Reset all signals
                                resetAllSignals();
                            }}
                            className="h-12 w-20 text-center rounded-md border border-transparent bg-indigo-700  text-base font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                            type="button"
                        >
                            Back
                        </button>
                    </Show>
                    <p className="text-white font-medium text-sm">This project is only for educational purposes</p>
                </div>
            </div>
        </StatisticsProvider>
    );
};

export default App;
