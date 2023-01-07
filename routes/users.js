import express from "express";
import { v4 as uuidv4 } from 'uuid';
import {getUser, createUser, deleteUser, updateUser, getUserWithID} from '../controllers/users.js'

const router = express.Router();

// a mock database
let users = []

// all routes starts with /users
router.get('/', getUser);

router.post('/', createUser);

router.get('/:id', getUserWithID);

router.delete('/:id',deleteUser);

router.patch('/:id', updateUser)

export default router;