const { Router } =  require('express')
const Resume = require('../models/Resume')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const resumeItems = await Resume.find()

        if(!resumeItems) {
            throw new Error("No resume items.")
        }
        res.status(200).json(resumeItems)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const {id, title, subtitle, dates, description, photo} = req.body
    const newResumeItem = new Resume({title, subtitle, dates, description, photo})

    try {
        const resumeItem = await newResumeItem.save()
        if(!resumeItem) {
            throw new Error("There was an error awaiting the transaction.")
        }
        res.status(200).json(resumeItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const resumeItem = Resume.findById(id)
        if(!resumeItem) {
            throw new Error('No resume item was found.')
        }
        res.status(200).json({id})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
module.exports = router