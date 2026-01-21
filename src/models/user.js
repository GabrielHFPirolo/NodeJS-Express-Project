import mongoose from "mongoose";

const adressSchema = new Schema({
    street:{
        type: String,
        required: true
    },
    number:{
        type: String,
        required: true,
    },
    city:{
        type: String,
        required: true
    },
    reference:{
        type: String,
        required: true
    }
})

const addressSchema = new mongoose.Schema({
  street: String,
  number: String,
  city: String,
  reference: String
});

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true
    },

    email: {
      type: String,
      required: true,
      unique: true
    },

    passwordHash: {
      type: String,
      required: true
    },

    address: addressSchema,

    orders: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'order'
      }
    ]
  },
  {
    timestamps: true
  }
);

export default mongoose.model('User', userSchema);
