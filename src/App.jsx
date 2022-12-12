import { useState } from "react";
import { Header } from "./components/Header";
import { List } from "./components/List";

export const App = () => {
  return (
    <>
      <div className="container p-2">
        <Header />
        <div className="p-2">
          <p>Este proyecto hace uso de:</p>
          <ul>
            <li>
              API de Rick and Morty (
              <a
                href="https://rickandmortyapi.com/api/character"
                target="_blank"
              >
                https://rickandmortyapi.com/api/character
              </a>
              )
            </li>
            <li>
              Bootstrap y&nbsp;
              <a href="https://react-bootstrap.github.io/getting-started/introduction">
                React-Bootstrap
              </a>
            </li>
            <li>Componentes separados (Header, List y Character)</li>
          </ul>
          <List />
        </div>
      </div>
    </>
  );
};
