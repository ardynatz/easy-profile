import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
  const error = useRouteError();

  return (
    <div className="mx-auto max-w-xl py-2" id="error-page">
      <h1 className="font-bold text-xl">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error.statusText || error.message}</i>
      </p>
      <div className="py-4">
        <a href="/">Go Back</a>
      </div>
    </div>
  );
}
