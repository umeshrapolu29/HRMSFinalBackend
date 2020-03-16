var mongoose=require('mongoose');
var personaldetailsschema=mongoose.Schema;

var personaldetailsschema=personaldetailsschema({
    empname:{type:String},
    primaryemailid:{type:String},
    secondaryemailid :{type:String},
    primaryphone:{type:String},
    secondaryphone :{type:String},
    gaurdain:{type:String},
    gaurdainnumber:{type:String},
    rig:{type:String},
    

   
    
})
module.exports=mongoose.model('personaldetailsschema',personaldetailsschema)