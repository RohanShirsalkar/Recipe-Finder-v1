import React, { useContext, useEffect } from "react";
import AppContext from "../../context/appContext";
import { scrollToElement } from "../../utils/appUtils";

const BigCard = () => {
  const { recipe, preview, setError } = useContext(AppContext);
  const data = recipe;

  useEffect(() => {
    if (recipe !== null) {
      scrollToElement("recipe-section");
    }
  }, [recipe]);

  if (!recipe) {
    return null;
  }

  if (recipe.isItFood === false) {
    setError("Item is not food");
    // alert("Not food");
    return null;
  }

  if (recipe.canItBeCookedAtHome === false) {
    return (
      <>
        <div className=" my-8 p-8 font-semibold text-slate-600 space-y-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-4">
              <img
                src={preview}
                className="rounded-lg md:max-w-[300px]"
                alt=""
              />
            </div>

            <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
            <p className="text-xl mb-2 text-red-400">
              This food cannot be cooked at home
            </p>
            <p className="text-xl mb-2">{data.description}</p>
          </div>
        </div>
      </>
    );
  }

  return (
    <div className=" my-8 p-8 font-semibold text-slate-600 space-y-4">
      <div className="max-w-4xl mx-auto">
        <div className="mb-4">
          <img src={preview} className="rounded-lg md:max-w-[300px]" alt="" />
        </div>
        <h1 className="text-4xl font-bold mb-4">{data.name}</h1>
        <p className="text-xl mb-2">{data.description}</p>
        <p className="text-xl mb-2">
          <strong>Origin:</strong> {data.origin}
        </p>
        {/* <p className="text-xl mb-2">
          <strong>Serves:</strong> {data.serves}
        </p> */}

        <h2 className="text-2xl font-semibold mt-6 mb-2">Ingredients:</h2>
        <ul className="list-disc ml-6 mb-4">
          {data.ingredients.map((ingredient, index) => (
            <li key={index}>
              <a
                href={ingredient.link}
                className="text-blue-500 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                {ingredient.name} - {ingredient.quantity}
              </a>
            </li>
          ))}
        </ul>

        <h2 className="text-2xl font-semibold mt-6 mb-2">Instructions:</h2>
        <pre className="whitespace-pre-wrap bg-gray-100 p-4 rounded">
          {data.instructions}
        </pre>
      </div>
    </div>
  );
};

export default BigCard;
