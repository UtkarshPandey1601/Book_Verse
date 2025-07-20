import book from "../models/book.js";
export const getAllBooks = async (req, res) => {
    const books = await book.find();
    res.status(200).json({ books });
};