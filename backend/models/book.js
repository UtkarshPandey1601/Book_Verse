import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    name: String,
    price: Number,
    cat: String,
    image: String,
    title: String,
    genre: String,
});
const Book = mongoose.model("Book", bookSchema);

export default Book;