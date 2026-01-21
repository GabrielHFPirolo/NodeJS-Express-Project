import mongoose from "mongoose";

const orderItemSchema = new Schema({
    productId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'product',
        required: true
    },
    name:{
        type: String,
        required: true
    },
    price:{
        type: Number,
        required: true
    },
    quantity:{
        type: Number,
        required: true,
        min: 1
    }
})


const orderSchema = new Schema(
    {
        items:{
            type:[orderItemSchema],
            required: true
        },
        totalPrice:{
            type: Number,
            required: true
        },
        status:{
            type: String,
            enum: ['pending', 'preparing', 'ready', 'finished', 'canceled'],
            default: 'pending'
        },
        customerName:{
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export default mongoose.model('order', orderSchema)