import { useNavigate } from "@solidjs/router";

const NotFound = () => {
    const navigate = useNavigate();

    return (
        <div className="text-white text-3xl">
            <p>Ooops... page not found!</p>
        </div>
    );
};

export default NotFound;
