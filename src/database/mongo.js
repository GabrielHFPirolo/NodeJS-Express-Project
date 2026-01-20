import mongoose from 'mongoose'

async function connectDb(params) {
    try{
        await mongoose.connect(process.env.MONGO_URI)
        console.log("DB conectado com sucesso")
    } catch(error) {
        console.error("Conexão com DB falhou", error)
    }
}

export default connectDb