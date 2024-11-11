import mongoose from "mongoose";

// Define Schema
const movieSchema = new mongoose.Schema({
  name: { type: String, required: true, trim: true },
  rating: { type: Number, required: true, min: 1, max: 5 },
  money: {
    type: mongoose.Decimal128,
    required: true,
    validate: (v) => (v) => 10,
  },
  genre: { type: Array },
  isActive: { type: Boolean },
  comments: [
    { value: { type: String }, published: { type: Date, default: Date.now } },
  ],
});

// Create model
const MovieModel = mongoose.model("Movie", movieSchema);

//======================= INSERTING ===============================
// const createDoc = async () => {
//   try {
//     // Create document
//     const m1 = new MovieModel({
//       name: "Inception",
//       rating: 5,
//       money: 60000,
//       genre: ["Action", "Adventure", "Sci-Fi"],
//       isActive: true,
//       comments: [{ value: "Such an amazing movie" }],
//     });

//     const result = await m1.save();
//     console.log("Document created:", result);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const insertManyDoc = async () => {
//   try {
//     // Create document
//     const m1 = new MovieModel({
//       name: "John Wick Chapter 1",
//       rating: 5,
//       money: 60000,
//       genre: ["Action", "Adventure"],
//       isActive: true,
//       comments: [{ value: "Such an amazing movie" }],
//     });
//     const m2 = new MovieModel({
//       name: "John Wick Chapter 2",
//       rating: 4,
//       money: 70000,
//       genre: ["Action", "Adventure"],
//       isActive: true,
//       comments: [{ value: "Such an amazing movie" }],
//     });
//     const m3 = new MovieModel({
//       name: "John Wick Chapter 3",
//       rating: 3.5,
//       money: 80000,
//       genre: ["Action", "Adventure"],
//       isActive: true,
//       comments: [{ value: "Such an amazing movie" }],
//     });
//     const m4 = new MovieModel({
//       name: "John Wick Chapter 4",
//       rating: 4.5,
//       money: 90000,
//       genre: ["Action", "Adventure"],
//       isActive: true,
//       comments: [{ value: "Such an amazing movie. I really did enjoy it" }],
//     });
//     const m5 = new MovieModel({
//       name: "Evil Within",
//       rating: 4,
//       money: 30000,
//       genre: ["Horror", "Thriller"],
//       isActive: true,
//       comments: [{ value: "Gets you on the edge of your seat everytime" }],
//     });

//     const result = await MovieModel.insertMany([m1, m2, m3, m4, m5]);
//     console.log("Document created:", result);
//   } catch (error) {
//     console.error(error);
//   }
// };

//======================= RETRIEVING ===============================
// const allDoc = async () => {
//   try {
//     const movies = await MovieModel.find();

//     // Iterate over documents
//     movies.forEach((movie) => {
//       console.log(movie.name);
//     });

//     // console.log("All documents:", movies);
//   } catch (error) {
//     console.error(error);
//   }
// };

// const singleDoc = async () => {
//   try {
//     const movie = await MovieModel.findById("6731c726f1686e875fdaa829", "name");

//     console.log("Single Document:", movie);
//   } catch (error) {
//     console.error(error);
//   }
// };

//======================= UPDATING ===============================
// const updateById = async () => {
//   try {
//     //updateOne(filter, whatToUpdate)
//     const movie = await MovieModel.updateOne(
//       { _id: "6731c726f1686e875fdaa829" },
//       { name: "Equalizer 3" }
//     );

//     console.log("Single Document:", movie);
//   } catch (error) {
//     console.error(error);
//   }
// };

//======================= DELETING ===============================
const deleteById = async () => {
  try {
    //updateOne(filter, whatToUpdate)
    const movie = await MovieModel.findByIdAndDelete(
      "6731c726f1686e875fdaa829"
    );
    console.log("Single Document:", movie);
  } catch (error) {
    console.error(error);
  }
};

export { deleteById };
