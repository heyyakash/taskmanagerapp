const express = require('express')
const router = express.Router()
const task = require('../Schema/TasksSchema');
const fetchuser = require('../middleware/fetchuser');
const {createTask,getTask,deleteTask, updateTask} = require('../Controllers/tasksController') 

router.route('/').post(fetchuser,createTask).get(fetchuser,getTask);
router.route('/:id').delete(deleteTask).patch(updateTask);

module.exports=router;