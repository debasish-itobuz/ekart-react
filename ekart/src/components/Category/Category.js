import React, { useEffect, useState } from "react";
import axios from "axios";
import { URLS } from "../../helper/urls.js";

export const Category = () => {
  const [categories, setCategories] = useState([]);

  const getCategories = async () => {
    const response = await axios.get(URLS.getCategories);
    setCategories(response.data.data);
  };

  useEffect(() => {
    getCategories();
  }, []);

  return (
    <div className="flex justify-evenly container mx-auto px-4 py-4 my-2 border bg-white">
      {categories.length &&
        categories.map((eachCategory) => {
          return (
            <div
              key={eachCategory._id}
              className="flex flex-col items-center justify-between"
            >
              <div className="w-16">
                <img className="w-full" src={eachCategory.categoryImage} />
              </div>
              <p className="text-center font-semibold">
                {eachCategory.categoryName}
              </p>
            </div>
          );
        })}
    </div>
  );
};
