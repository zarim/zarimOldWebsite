const { Schema, model } = require('mongoose')

const ResumeSchema = new Schema({
    title: {
        type: String, 
        required: true
    },
    subtitle: {
        type: String
    },
    dates: {
        type: String
    },
    description: {
        type: String, 
        required: true
    },
    photo: {
        type: String
    }
})

const Resume = model('resume', ResumeSchema)
module.exports = Resume