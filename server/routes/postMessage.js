import mongoose from 'mongoose';

const postSchema = mongoose.Schema({
    
    
    topic: String,
    post: String,
    name: String,
    password: String,
    image:String,
    createdAt: {type: Date, default: Date.now},
})

var PostMessage = mongoose.model('PostMessage', postSchema);

export default PostMessage;