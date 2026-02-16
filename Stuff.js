import mongoose from "mongoose";


const stuff = new mongoose.Schema({

    name: {
        type: string
    },

    dep: {
        type: string
    },
    
    timestamp: true

})


export const Stuff = mongoose.model('Stuff', stuff)