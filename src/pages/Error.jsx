import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function Error () {
  return (
    <>
      <Helmet>
        <title>Error 404 | Country App</title>
      </Helmet>
      <h1>Ups! Something went wrong :(</h1>
      <Link to="/">Go back home</Link>
    </>
  )
}