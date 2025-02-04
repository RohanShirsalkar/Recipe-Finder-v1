import React from "react";
import { scrollToElement } from "../../utils/appUtils";

const Footer = () => {
  return (
    <footer class=" bg-white shadow-sm">
      <div class=" max-w-6xl mx-auto p-4 md:py-8">
        <div class="sm:flex sm:items-center sm:justify-between">
          <a
            href="https://flowbite.com/"
            class="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse"
          >
            <img
              src="https://flowbite.com/docs/images/logo.svg"
              class="h-8"
              alt="Flowbite Logo"
            />
            <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              InstaRecipe
            </span>
          </a>
          <ul class="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
            <li>
              <a
                onClick={() => scrollToElement("info-section")}
                class="hover:underline me-4 md:me-6 cursor-pointer"
              >
                About
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToElement("info-section")}
                class="hover:underline me-4 md:me-6 cursor-pointer"
              >
                How to Use
              </a>
            </li>
            <li>
              <a
                onClick={() => scrollToElement("hero-section")}
                class="hover:underline me-4 md:me-6 cursor-pointer"
              >
                Find Recipe
              </a>
            </li>
          </ul>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <span class="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2023{" "}
          <a href="https://flowbite.com/" class="hover:underline">
            InstaRecipe™
          </a>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
