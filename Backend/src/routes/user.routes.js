const express = require('express');
const router = express.Router();
const {getUsers, getUser, createUser, editUser, deleteUser} = require('../controllers/user.controller');

//Obtener todos los usuarios
router.get('/', getUsers);

//Obtener un usuario
router.get('/:id', getUser);

//Crear un usuario
router.post('/', createUser);

//Editar un  usuario
router.put('/:id', editUser);

//Eliminar un usuario
router.delete('/:id', deleteUser);

module.exports = router;