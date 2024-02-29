import React from "react";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Categorie from "./pages/Categorie/Categorie";
import Game from "./pages/Game/Game";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "./components/GlobalStyle";
import { Provider } from "react-redux";
import store from "./redux/Store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/About",
    element: <About />,
  },
  {
    path: "/Category",
    element: <Categorie />,
  },
  {
    path: "/Game",
    element: <Game />,
  },
]);

const theme = {
  colors: {
    navy: "#261676",
    blue: "#2463FF",
    white: "#ffff",
  },
  bg: {
    desktop: "bg.png",
    tablet: "bg(3).png",
    phone: "bg.png",
  },
  backraund:
    "linear-gradient(180deg, rgba(26, 4, 58, 0.75) 0%, rgba(21, 18, 120, 0.75) 70.31%, rgba(43, 22, 119, 0.75) 100%)",
  shadow: {
    defoult: [
      "  0px -2px 0px 3px #140E66 inset,0px 1px 0px 6px #3C74FF inset",
      " 0px -4px 0px 5px #243041 inset,0px -12px 0px 11px #9D2DF5 inset",
    ],
  },
  font: "Mouse Memoirs",
  size: {
    phone: 375,
    tablet: 768,
    desktop: 1440,
  },
};

function App() {
  return (
    <>
      <Provider store={store}>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <RouterProvider router={router}></RouterProvider>
        </ThemeProvider>
      </Provider>
    </>
  );
}

export default App;
