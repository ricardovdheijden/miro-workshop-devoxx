import { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import MiroItem from "../components/MiroItem";

export default function Main() {
  const [authenticated, setAuthenticated] = useState(false);
  const [items, setItems] = useState([]);

  // On Page Load
  useEffect(() => {
    fetch("api/authenticate")
      .then((response) => response.json())
      .then((result) => {
        setAuthenticated(result.authenticated)
        if (result.authenticated) {
          fetch('api/getItems')
            .then(res => res.json())
            .then(res => {
              setItems(res.data);
            })
        }
      });
  }, []);

  return (
    <main>
      <Head>
        <title>Miro Workshop</title>
        <meta name="description" content="Miro Workshop" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {authenticated ? (
        <>
          {items.map(item => <MiroItem key={item.id} item={item} />)}
        </>
      ) : (
        <Link href="/api/signin">
          <a>Sign In</a>
        </Link>
      )}
    </main>
  );
}
