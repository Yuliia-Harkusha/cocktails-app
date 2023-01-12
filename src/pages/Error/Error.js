import React from "react";
import { Link } from "react-router-dom";

export default function Error() {
  return (
    <section>
      <div>
        <h2>Something went wrong</h2>
        <Link to="/">Back home</Link>
      </div>
    </section>
  );
}
