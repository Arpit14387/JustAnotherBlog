import express from 'express';

import { getPosts, getPost, createPost, updatePost, likePost,postbyname,postbytitle, deletePost } from "./postsController.js";

const router = express.Router();

router.get('/', getPosts);
router.post('/', createPost);
router.get('/id/:id', getPost);
router.patch('/:id', updatePost);
router.delete('/:id', deletePost);
router.get('/name',postbyname);
router.get('/title',postbytitle);
router.patch('/:id/likePost', likePost);

export default router;