import mongoose from "mongoose";


const stuff = new mongoose.Schema({

    name: {
        type: String
    },

    dep: {
        type: String
    },
    


})


export const Stuff = mongoose.model('Stuff', stuff)