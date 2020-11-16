const mongoose=require("mongoose");//requiring the mongoose library(ODM(object document mapper))

mongoose.connect("mongodb://localhost/contact_list_db", {useUnifiedTopology: true, useNewUrlParser: true});//connecting to the mongodb database from localhost(our machine which is the server) with the name of database given as contact_list_db and we have used certain new properties whose earlier versions we're going to be depracated to remove the warnings which we were getting

const db=mongoose.connection;//acquiring the connection to the database(to check whether it is successful or not)

db.on("error", console.error.bind("console", "Error in connecting to the database"));//if there is any error while we are trying to turn on the database, we bind that error to the console with an appropriate error message

db.once("open", function(){

    console.log("Successfully connected to the database");

});//when the database is open(on), we print the message for the successful connection to the database