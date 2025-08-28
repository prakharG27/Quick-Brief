import mongoose, { mongo } from 'mongoose';

const Connection=async()=>{
     const URL=`mongodb+srv://user:codeforinterview@project.vvy84ip.mongodb.net/?retryWrites=true&w=majority&appName=Project`;
    try{

       await mongoose.connect(URL,{useNewUrlParser:true});
    console.log('connected succesfully mango');
    } catch(error){
     console.log('Error while connecting',error);
    }

     
}

export default Connection;