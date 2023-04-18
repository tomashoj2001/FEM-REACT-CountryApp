import { Helmet } from "react-helmet";
import { Link } from "wouter";

export default function Error ({ search }) {
  return (
    <>
      <Helmet>
        <title>Error 404 | Country App</title>
      </Helmet>

      <section className="error">
        <h1>Ups! Something went wrong :(</h1>
        <h2>"{search}" was not found</h2>
        <Link to="/" className="detail__btn">Go back home</Link>
      </section>
    </>
  )
}