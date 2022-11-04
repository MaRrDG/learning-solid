import { Routes, Route } from "@solidjs/router";
import { lazy } from "solid-js";

import MainMenu from "./pages/MainMenu";
import NotFound from "./pages/NotFound";
import RockPaper from "./pages/RockPaper";

const App = () => {
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

            <p className="text-white font-medium text-sm mt-auto mb-6">This project is only for educational purposes</p>
        </div>
    );
};

export default App;
