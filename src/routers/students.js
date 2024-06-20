import { Router } from 'express';
// import { getAllStudents, getStudentById } from '../service/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getStudentByIdController,
  getStudentsController,
} from '../controllers/students.js';
const router = Router();
router.get('/students', ctrlWrapper(getStudentsController));
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));
export default router;
