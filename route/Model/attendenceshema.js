var mongoose=require('mongoose');
var attendenceschema=mongoose.Schema;

var attendenceschema=attendenceschema({
    name:{type:String},
    date:{type:String},
    reason:{type:String},
  
    status:{type:String},
    email:{type:String},
   
  

    
})
module.exports=mongoose.model('attendenceschema',attendenceschema)