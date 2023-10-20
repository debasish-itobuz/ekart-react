import mongoose from "mongoose";

const categorySchema = new mongoose.Schema({
  categoryName: {
    type: String,
    required: true,
  },
  categoryImage: {
    type: String,
    required: true,
  },
});

export const categoryModel = mongoose.model("Categories", categorySchema);
