let mongoose = require('mongoose'),
  express = require('express'),
  router = express.Router()

// Member Model
let memberSchema = require('../Models/Member')

// CREATE Member
router.route('/create-member').post((req, res, next) => {
  memberSchema.create(req.body, (error, data) => {
    if (error) {
      return next(error)
    } else {
      console.log(data)
      res.json(data)
    }
  })
})

// READ Member
router.route('/').get((req, res) => {
  memberSchema.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Get Single Member
router.route('/edit-member/:id').get((req, res) => {
  memberSchema.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
})

// Update Member
router.route('/update-member/:id').put((req, res, next) => {
  memberSchema.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body,
    },
    (error, data) => {
      if (error) {
        return next(error)
        console.log(error)
      } else {
        res.json(data)
        console.log('Member updated successfully !')
      }
    },
  )
})

// Delete Member
router.route('/delete-member/:id').delete((req, res, next) => {
  memberSchema.findByIdAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data,
      })
    }
  })
})

module.exports = router
