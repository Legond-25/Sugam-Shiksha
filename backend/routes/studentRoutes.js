const express = require('express');
const router = express.Router();

const studentController = require('../controllers/studentController');

router.
    route('/')
    .get(studentController.getAllStudents)
    .post(studentController.createStudent);

router.get('/me', studentController.getMe);

router.delete('/deleteMe', studentController.deleteMe)

router.
    route('/:id').
    get(studentController.getStudent)
    .patch(studentController.updateStudent)
    .delete(studentController.deleteStudent);


module.exports = router;