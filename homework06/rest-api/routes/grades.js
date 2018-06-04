var express = require('express');
const { check, validationResult } = require('express-validator/check');

var router = express.Router();

const grades = [{id: 1, name: 'Asaad Saad', course: 'CS572', grade: 95},
    {id: 2, name: 'Carl', course: 'CS572', grade: 99}];

/* GET grades listing. */
router.get('/', function (req, res, next) {
    // res.send(grades);
    res.json(grades);

});

/* GET grade by given id */
router.get('/:id', function (req, res, next) {
    const gradeId = req.params.id;
    res.json(grades.find(o => o.id == gradeId));
});

/* POST grade to create new grade */
router.post('/', [
    check('id', 'id is requied!').exists(),
    check('name', 'name is required!').exists(),
    check('course', 'course is required!').exists()
        .isIn(['CS572', 'CS573']).withMessage('not a valid course!'),
    check('grade', 'grade is required!').exists()
        .matches('/\d/').withMessage('must be a number!')
], function (req, res, next) {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(422).json({ errors: errors.array() });
    }
    const newGrade = {
        id: req.body.id,
        name: req.body.name,
        course: req.body.course,
        grade: req.body.grade };
    grades.push(newGrade);
    res.json(grades);
});

/* Update for given id */
router.put('/:id', function (req, res, next) {
    const index = grades.findIndex(o => o.id == req.params.id);
    grades[index].name = req.body.name;
    grades[index].course = req.body.course;
    grades[index].grade = req.body.grade;
    res.json(grades[index]);
});

/* DELETE grade by given id */
router.delete('/:id', function (req, res, next) {
    grades.splice(grades.findIndex(o => o.id == req.params.id), 1);
    res.json(grades);
});

module.exports = router;
