const data = require("../Schema/Schema")

let user = async(req,res)=>{
     try{

        let item = data(req.body)
        let success = await item.save()
        console.log("success", success)
        console.log("item", item)

        if(success){
               return res.status(200).json({
                   msg:"added successfully",
                   status:"200",
                   success:success
               })
        }

     }catch(error){
              
        return res.status(500).json({
            msg:"missing something",
            status:"500",
             error:JSON.stringify(error)
        })
        
     }
}


module.exports = {user}