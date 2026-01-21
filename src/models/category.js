import mongoose from "mongoose";

const categorySchema = new mongoose.Schema(
    {
        name:{
            type: String,
            required: true
        },
        description:{
            type: String
        },
        order:{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'order',
            required: true
        },
        isActive:{
            type: Boolean,
            default: true
        }
    }
)

export default mongoose.model('category', categorySchema)