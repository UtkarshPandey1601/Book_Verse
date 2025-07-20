import express from 'express';
import { getAllBooks } from '../controllers/bookcontroller.js'

const bookRoutes=express.Router();

bookRoutes.get('/getbook', getAllBooks);

export default bookRoutes; 