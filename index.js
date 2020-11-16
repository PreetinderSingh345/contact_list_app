const express=require("express");//requiring express module to use it as our framework

const path=require("path");//requiring path module which is needed in setting the path of views folder

const port=8000;//port number on which the server is supposed to run

const db=require("./config/mongoose.js");//requiring our database whose configuration has been set inside mongoose.js file of the config folder

const Contact=require("./models/contact.js");//requiring the Contact model whose schema has been defined inside contact.js file of the models folder

const app=express();//firing up the express app

app.set("view engine", "ejs");//setting up the view engine as ejs

app.set("views", path.join(__dirname, "views"));//setting up the views folder and providing path to it which is views folder inside current folder

app.use(express.urlencoded({extended: true}));//using a middleware for parsing the form data and provding extended as true to remove the warning which we were getting

app.use(express.static("assets"));//using a middleware to set up the static files like css, js etc.

app.listen(port, function(err){

    if(err){
        console.log("Error in running the server : "+err);
        return ;
    }

    console.log("Server is up and running on port : "+port);

});//telling the app to listen to the given port and then handle the error(if there is any)

app.get("/", function(req, res){//handling the request for the incoming route "/" and providing the corresponding controller function

    Contact.find({}, function(err, contacts){//in this case we are using find function of Contact and since we are not specifying any arguments inside {} as to which contact(s) are to be found, so all the contacts will be returned by this function and we are obtaining them inside contacts

        if(err){//providing an error message if there is any error while fetching the contacts from the database
            console.log(`Error in fetching contacts from database : ${err}`);
            return ;
        }

        return res.render("home", {//rendering the home page as the response and providing the needed dynamic data in case the contacts are successfully fetched from the database

            title: "CONTACT LIST",
            contact_list: contacts

        });

   }); 

});

app.post("/create-contact", function(req, res){//here we are handling the incoming post request on the route "/create-contact" with the required controller function

   Contact.create({//creating a document of the Contact model with the value of fields corresponding to the incoming request data
        
        name: req.body.name,
        phNo: req.body.phNo
        
   }, function(err, newContact){

        if(err){//providing an error message if there is any error while trying to create a new Contact document
            
            console.log(`Error in creating contact : ${err}`);
            return ;
        }

        return res.redirect("back");//reloading the current page as the response with the new contact added to the contact list

   });
d
});

app.get("/delete-contact", function(req, res){//here we are handling the incoming get request(request from an a tag is get by default) on the route "/delete-contact" with the required controller function 

    let id=req.query.id;//obtaining the unique id of the contact to be deleted from the query params

    Contact.findByIdAndDelete(id, function(err){//calling findByIdAndDelete function to delete the contact by its id

        if(err){//providing an error message if there is any error while deleting the contact
            console.log(`Error in deleting contact : ${err}`);
            return ;
        }

        return res.redirect("back");//reloading the current page as the response without the contact which was to be deleted

    });

});