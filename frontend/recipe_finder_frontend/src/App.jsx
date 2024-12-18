import { useEffect, useState } from "react";
import "./App.css";
import { findRecipe } from "./api/services/recipeServices";
import Navbar from "./components/common/Navbar";
import Home from "./pages/Home";
import MyContext from "./context/appContext";
import Spinner from "./components/loader/Spinner";
import Footer from "./components/common/Footer";
import Toast from "./components/common/Toast";

function App() {
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState("");
  const [state, setState] = useState("Hello World");
  const [recipe, setRecipe] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  return (
    <>
      <MyContext.Provider
        value={{
          state,
          setState,
          recipe,
          setRecipe,
          loading,
          setLoading,
          setImage,
          image,
          setPreview,
          preview,
          error,
          setError,
        }}
      >
        {loading && <Spinner />}
        <Toast />
        <Navbar />
        <Home />
        <Footer />
      </MyContext.Provider>
    </>
  );
}

export default App;
