const express = require('express')
const router = express.Router()
const task = require('../Schema/TasksSchema.js');
const fetchuser = require('../Middleware/fetchuser.js');
const {createTask,getTask,deleteTask, updateTask} = require('../Controllers/tasksController.js') 

router.route('/').post(fetchuser,createTask).get(fetchuser,getTask);
router.route('/:id').delete(deleteTask).patch(updateTask);

module.exports=router;