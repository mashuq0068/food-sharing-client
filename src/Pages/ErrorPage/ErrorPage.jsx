import { useRouteError } from "react-router-dom";

const ErrorPage = () => {
    const error = useRouteError()
    console.log(error)
    return (
        <div>
            {error?.data}
        </div>
    );
};

export default ErrorPage;