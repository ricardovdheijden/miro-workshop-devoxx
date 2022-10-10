import { Suspense } from "react";

import Main from "./main.client";
import Time from "../components/Time.server";


// Time is a server component (pre-renders in backend)
// Will be shipped as HTML to the browser.
// xx.server.js - Server component
// xx.client.js - Client component
// xx.js assumes to be a server component

export default function Index() {
  return (
    <Suspense fallback={"Loading..."}>
      <Time />
      <Main />
    </Suspense>
  );
}
