import {categoryModel} from "../models/categoryModel.js";


export const createCategory = async (req, res) => {
    try {
      const { categoryName, categoryImage } = req.body;
      const createCategory = await categoryModel.create({
        categoryName, categoryImage
      });
  
      if (createCategory) {
        res.json({
          status: 200,
          success: true,
          message: "Category Created Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: 400,
        success: false,
        message: "Failed to Create Category ",
      });
    }
  };

  export const getCategory = async (req, res) => {
    try {
      const category = await categoryModel.find({});
  
      if (category) {
        res.json({
          data:category,
          status: 200,
          success: true, 
          message: "Category fetched Successfully",
        });
      }
    } catch (error) {
      console.log(error);
      res.json({
        status: 400,
        success: false,
        message: "Failed to fetch Category ",
      });
    }
  };
  