import { getAllStudents, getStudentById } from '../service/students.js';
export const getStudentsController = async (req, res) => {
  const students = await getAllStudents();
  res.json({
    status: 200,
    data: students,
    message: 'Successfully found students!',
  });
};

export const getStudentByIdController = async (req, res) => {
  const { studentId } = req.params;
  const student = await getStudentById(studentId);
  if (!student) {
    res.status(404).json({ message: 'Student not found' });
    return;
  }

  res.json({
    status: 200,
    data: student,
    message: `Successfully found student with id ${studentId}!`,
  });
};
