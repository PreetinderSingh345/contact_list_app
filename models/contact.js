const mongoose=require("mongoose");//requiring mongoose and its existing instance will be used

const contactSchema=new mongoose.Schema({//defining a schema for the contact using Schema function of mongoose and storing the schema object inside contactSchema const variable

    name: {//we are providing name as the field inside the schema with type as string and this is a required field

        type: String,
        required: true

    },

    phNo: {//we are providing phNo as the field inside the schema with type as string and this too is a required field

        type: String, 
        required: true

    }

});

const Contact=mongoose.model("Contact", contactSchema);//defining the model name as "Contact" for which this schema is defined using model function of mongoose and storing it inside Contact const variable

module.exports=Contact;//exporting this model, so that it can be accessed inside the index.js server file