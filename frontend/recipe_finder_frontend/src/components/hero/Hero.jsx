import React, { useContext, useState } from "react";
import AppContext from "../../context/appContext";
import { findRecipe } from "../../api/services/recipeServices";
import { scrollToElement } from "../../utils/appUtils";

const Hero = () => {
  const { setLoading, setRecipe, setPreview, setImage, setError } =
    useContext(AppContext);

  const handleFileChange = async (event) => {
    event.preventDefault();
    setLoading(true);
    setRecipe(null);
    setError(null);

    const selectedFile = event.target.files[0];
    setImage(selectedFile);

    const formData = new FormData();
    formData.append("image", selectedFile);
    console.log(formData);

    try {
      setPreview(URL.createObjectURL(selectedFile));
      // const response = await findRecipe(formData);
      // // scrollToElement("recipe-section");
      // setRecipe(response.data);
    } catch (error) {
      console.error("Error:", error);
      // alert("Error occured");
      setError("Server Error");
      setPreview(false);
      setImage("");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto md:grid md:grid-cols-3 items-center min-h-screen pt-[7rem]">
      <div className="justify-self-center col-span-2">
        <div class="bg-transparent px-8 md:px-0">
          <a href="#">
            <img class="w-full" src="public\hero_img_04.png" alt="" />
          </a>
          <div class="mb-8">
            <h1 className="text-5xl font-bold   text-slate-700">
              Just Snap and Cook!
            </h1>
            <h1 className="mt-2 text-xl font-semibold text-slate-600">
              Fast and 100% Free
            </h1>
          </div>
        </div>
      </div>

      <div className="">
        <div className="flex items-center justify-center flex-col h-[300px] md:w-[400px] md:shadow-xl rounded-xl p-4 bg-white">
          <div>
            <div class="flex items-center justify-center w-full">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full  border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 dark:hover:bg-gray-800 dark:bg-gray-700 hover:bg-gray-100 dark:border-gray-600 dark:hover:border-gray-500 dark:hover:bg-gray-600"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6 px-4">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG or JPG (MAX. 800x400px)
                  </p>
                </div>
                <input
                  onChange={handleFileChange}
                  id="dropzone-file"
                  type="file"
                  class="hidden"
                  accept="*/*"
                />
              </label>
            </div>
          </div>

          <div className="pt-4 text-slate-500">
            <h1 className="text-lg font-bold  text-center">
              Upload Image of Food
            </h1>
            <h1 className="text-md text-center">Provide a Clear Image</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
