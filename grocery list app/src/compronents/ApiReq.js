const Api_Req = async (url = '',ApiOpt = null,Errmsg = null) =>{
    try{
        const response = await fetch(url,ApiOpt)
        if(!response.ok) throw Error('Please Reload the Page')
    } catch(Err){
        Errmsg = Err
    } finally{
        return Errmsg
    }
  
}

export default Api_Req