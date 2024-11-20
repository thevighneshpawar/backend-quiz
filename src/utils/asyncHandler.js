const asyncHandler= (requestHandler) => {
   return (req,res,next)=>{
        Promise.resolve(requestHandler(req,res,next))
        .catch((err)=>next(err))
    }
}

export {asyncHandler}


// higher order functions
/*
const asyncHandler = (fn) =>async(rea,res,next)=>{
    try {
        await fn(req,res,next)
        
    } catch (error) {
        res.status(err.code || 500).json({
            success:false,
            message:err.message
        })
    }

}  
*/

