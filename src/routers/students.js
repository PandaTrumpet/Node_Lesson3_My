import { Router } from 'express';
// import { getAllStudents, getStudentById } from '../service/students.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';
import {
  getStudentByIdController,
  getStudentsController,
  createStudentController,
} from '../controllers/students.js';
const router = Router();
router.get('/students', ctrlWrapper(getStudentsController));
router.get('/students/:studentId', ctrlWrapper(getStudentByIdController));
router.post('/students', ctrlWrapper(createStudentController));
export default router;
