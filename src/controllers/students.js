import { getAllStudents, getStudentById } from '../service/students.js';
import { createStudent } from '../service/students.js';
export const getStudentsController = async (req, res, next) => {
  try {
    const students = await getAllStudents();
    res.json({
      status: 200,
      data: students,
      message: 'Successfully found students!',
    });
  } catch (error) {
    next(error);
  }
};

export const getStudentByIdController = async (req, res, next) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
  // if (!student) {
  //   res.status(404).json({ message: 'Student not found' });
  //   return;
  // }
  if (!student) {
    next(new Error('Student not found'));
    return;
  }
  res.json({
    status: 200,
    data: student,
    message: `Successfully found student with id ${studentId}!`,
  });
};

export const createStudentController = async (req, res) => {
  const student = await createStudent(req.body);
  res.status(201).json({
    status: 201,
    message: `Successfully created a student!`,
    data: student,
  });
};
