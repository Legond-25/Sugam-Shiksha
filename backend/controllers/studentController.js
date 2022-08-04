const Student = require('../models/primary schema/studentModel');

//1. Get all students

exports.getAllStudents = async (req, res) => {
    try {
        const student = await Student.find({})
        res.status(200).json({student})
    }catch (error) {
        res.status(500).json({msg: error})
    }
    }

//.2 Add/Create new Student   

exports.createStudent = async (req, res) => {
        try {
            req.student = req.user;
            const student = await Student.create(req.body)
            res.status(201).json({student})
        }catch (error) {
            res.status(500).json({msg: error})
        }  
    }

//.3 Read Student/Fetch particular student

exports.getStudent = async (req, res) => {
    try{
        const {id:studentID} = req.params
        const student = await Student.findOne({_id:studentID})
    if(!student){
        return res.status(404).json({msg:`No student with id : ${taskID}`})
    }
     
        res.status(200).json({student})
    }catch (error) {
        res.status(500).json({msg: error})
    }
        
    } 

//.4 Delete Student

exports.deleteStudent = async (req, res) => {
        try {
            const {id:studentID} = req.params;
            const student = await Student.findOneAndDelete({_id:taskID});
            if(!student){
                return res.status(404).json({msg:`No student with id : ${taskID}`})
            }
        res.status(200).json({student})
        } catch (error) {
            res.status(500).json({msg: error}) 
        }
        res.send('delete task')
    }
    
//.5 Update Student

exports.updateStudent = async (req, res) => {
        try {
            const {id:studentID} = req.params
           
            const student = await Task.findOneAndUpdate({_id:studentID},req.body,{
                new:true,
                runValidators:true,
            })
            
        if(!student){
            return res.status(404).json({msg:`No student with id : ${taskID}`})
        }
    
        res.status(200).json({student})
        } catch (error) {
            res.status(500).json({msg: error})
        }
        
    }
