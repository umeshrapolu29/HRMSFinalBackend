var mongoose=require('mongoose');
var companydetailsschema=mongoose.Schema;

var companydetailsschema=companydetailsschema({
    empname:{type:String},
    companyname :{type:String},
    designation:{type:String},
    experience:{type:String},
    rig:{type:Number},
    

   
    
})
module.exports=mongoose.model('companydetailsschema',companydetailsschema)