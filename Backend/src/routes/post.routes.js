const express = require('express');
const router = express.Router();
const {getPosts, getPost, createPost, updatePost, deletePost, likePost, commentPost} = require('../controllers/post.controller');

//Todos los posts
router.get('/', getPosts);

//El post de un id determinado
router.get('/:idPost', getPost);

//Crea un post
router.post('/create/:idUser', createPost);

//Actualiza un post
router.put('/update/:idPost', updatePost);

//Elimina un post
router.delete('/delete/:idPost', deletePost);

//Reaccion a un post un post
router.put('/like/:idPost/:idUser', likePost);

//Comentario a un post un post
router.put('/comment/:idPost/:idUser', commentPost);

module.exports = router;