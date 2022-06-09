const { Router } =  require('express')
const Education = require('../models/education')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const educationItems = await Education.find()

        if(!educationItems) {
            throw new Error("No education items.")
        }
        res.status(200).json(educationItems)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const {school, location, gpa, major, dates, photo, backgroundColor} = req.body
    const neweducationItem = new Education({school, location, gpa, major, dates, photo, backgroundColor})

    try {
        const educationItem = await neweducationItem.save()
        if(!educationItem) {
            throw new Error("There was an error awaiting the transaction.")
        }
        res.status(200).json(educationItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const educationItem = Education.findById(id)
        if(!educationItem) {
            throw new Error('No education item was found.')
        }
        const removed = await educationItem.remove()

        if(!removed) {
            throw new Error("There was a problem deleting the education item.")
        }
        res.status(200).json({id})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
module.exports = router