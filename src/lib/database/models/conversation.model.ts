import { Timestamp } from "mongodb";
import { Schema, model, models } from "mongoose";

const ConversationSchema = new Schema({
    frase : String,
    retorno : String  
});

const Conversation = models?.Conversation || model('Conversation', ConversationSchema);

export default Conversation;