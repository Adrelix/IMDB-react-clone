function promiseNoData(param){
    if(!param.promise){
        return <div>no data</div>
    }
    else if(param.promise && !param.data && !param.error){
       return <img src="../loader.gif" class="image" />
    }else if(param.promise && !param.data && param.error){
       return <div class = "bordercolour">{param.error.toString()}</div>
    }else if(param.promise && param.data && !param.error){
        return "";
    }
        

    
}       
export default promiseNoData;
