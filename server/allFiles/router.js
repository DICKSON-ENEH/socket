const express = require("express")
const router = express.Router()
const userModel = require("./usermodel")
const likeModel = require("./model")
const mongoose = require("mongoose")

router.get("/", async(req, res)=>{
    try {
        const user = await userModel.find()
        res.status(200).json({
            message:"success",
            data:user
        })
        
    } catch (error) {
        
    }
})
router.post("/create", async(req, res)=>{
    try {
        
        const users = await userModel.create(req.body)
        res.status(201).json({
            message:"success",
            data:users
        })
        
    } catch (error) {
        
    }
})

router.post("/:id/like", async(req, res)=>{
    try {
        const users = await userModel.findById(req.params.id)
        const createlike = new likeModel({
            user:req.params.id
        })
       
        users.like.push((mongoose.Types.ObjectId(createlike._id)))
        users.save()
        
        res.status(201).json({
            message:"success",
            data:createlike
        })
        
    } catch (error) {
        
    }
})
router.get("/:id/like", async(req, res)=>{
    try {
        const users = await userModel.findById(req.params.id)
        const like = await userModel.findById(req.params.id).populate("like")
        res.status(200).json({
            message:"success",
            data:like
        })
        
    } catch (error) {
        
    }
})

module.exports= router