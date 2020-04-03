var mongoose=require('mongoose');
var profiledetailsschema=mongoose.Schema;

var profiledetailsschema=profiledetailsschema({
    empname:{type:String},
    fullname:{type:String},
    DOB :{type:String},
    DOJ:{type:String},
    gender:{type:String},
    phone :{type:String},
    email:{type:String},
   
    reportingmanager:{type:String},
    nextreportingmanager:{type:String},
    hrmanager:{type:String},
    fullid:{type:String},
    rig:{type:Number},
    

   
    
})
module.exports=mongoose.model('profiledetailsschema',profiledetailsschema)