import { useRouteError } from "react-router-dom";
const ErrorComponent = () => {
    const err = useRouteError();
    console.log(err);
    return (
       
        <div>
            <h1>Something went wrong!!</h1>
            <h2>Please enter the correct page!!</h2>
        </div>
    );
};

export default ErrorComponent;