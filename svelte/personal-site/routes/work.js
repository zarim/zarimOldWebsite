const { Router } =  require('express')
const Work = require('../models/Work')

const router = Router()

router.get('/', async (req, res) => {
    try {
        const workItems = await Work.find()

        if(!workItems) {
            throw new Error("No work items.")
        }
        res.status(200).json(workItems)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})

router.post('/', async (req, res) => {
    const {title, subtitle, dates, description, photo, backgroundColor} = req.body
    const newworkItem = new Work({title, subtitle, dates, description, photo, backgroundColor})

    try {
        const workItem = await newworkItem.save()
        if(!workItem) {
            throw new Error("There was an error awaiting the transaction.")
        }
        res.status(200).json(workItem)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})

router.delete('/:id', async(req, res) => {
    const {id} = req.params
    try {
        const workItem = Work.findById(id)
        if(!workItem) {
            throw new Error('No work item was found.')
        }
        const removed = await workItem.remove()

        if(!removed) {
            throw new Error("There was a problem deleting the work item.")
        }
        res.status(200).json({id})
    } catch (error) {
        res.status(404).json({message: error.message})
    }
})
module.exports = router