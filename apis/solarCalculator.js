const router = require('express').Router(); //mini server
const Phone = require('../models/Phone');

// to get all the quotes
router.post('/api/calculate' , async(req,res)=>{
    
   try{
    let {phonenumber, rooftop, monthlybill} = req.body;
    let number = await Phone.find({PhoneNumber:phonenumber});
    if (number.length == 0) {
        await Phone.create({PhoneNumber:phonenumber, RoofTopArea:rooftop, MonthlyBill:monthlybill});
    } else{
        await Phone.updateOne({PhoneNumber:phonenumber}, {RoofTopArea:rooftop, MonthlyBill:monthlybill});
    }
    const panelsNeeded = Math.ceil(monthlybill / 420);
    const requiredArea = panelsNeeded * 2; 
    const capitalNeeded = panelsNeeded * 30000;
    const breakevenYears = capitalNeeded / (monthlybill * 12);
    const earningsNext25Years = (monthlybill * 12 * 25) - capitalNeeded;
    res.status(200).json({
        panelsNeeded,
        requiredArea,
        capitalNeeded,
        breakevenYears,
        earningsNext25Years
      });
   }
   catch(e){
    res.status(400).json({msg:"something went wrong"});
   }
})


module.exports = router;