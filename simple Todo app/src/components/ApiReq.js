const Api_Req = async (url = '',options = null,err = null) =>{
   try{
      const response = await fetch(url,options)
      if(!response.ok) throw Error('Failed to process')
   }catch(error){
     err = error
   }finally{
    return err
   }
}

export default Api_Req