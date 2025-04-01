import { useRouteError } from "react-router-dom";
import { LOGO_URL } from "../utils/constants";

const Error = () => {
  const err = useRouteError();
  console.log(err);

  return (
    <div>
      <h1>Oops!!</h1>
      <h1>404</h1>
      <h2>Something went wrong</h2>
      <h3>
        {err.status}: {err.statusText}
      </h3>
    </div>
  );
};

export default Error;
