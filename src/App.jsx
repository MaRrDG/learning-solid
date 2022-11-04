import { Routes, Route } from "@solidjs/router";
import MainMenu from "./pages/MainMenu";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <div className="bg-gray-900 w-screen h-screen flex items-center justify-center">
      <Routes>
        <Route path="/" component={<MainMenu />} />

        {/* PAGE NOT FOUND */}
        <Route path="*" component={<NotFound />} />
      </Routes>
    </div>
  );
};

export default App;
