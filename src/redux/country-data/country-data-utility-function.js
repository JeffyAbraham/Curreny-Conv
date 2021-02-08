const filterById=(currency,id)=>
{
   
    var currentData=currency.find(curren => curren.id == id);

    return currentData
}

export default filterById;