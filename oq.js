// Oq.js - copyright (c) codiiie 2021
// This code is licensed under MIT License
function OQ(){};
OQ.prototype.SELECT_FROM = function(arrParam){

    let methodObj = {};
        methodObj["data"] = null;
        methodObj["input"] = arrParam;
        methodObj["WHERE"] = function(objKey,condition,val,caseSensitive = false){

            condition = condition.toLowerCase().trim();
            let foundData;

            // if a condition is equality
            if(condition == "="){

                foundData = arrParam.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] == val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() == String(val.toLowerCase()));

                    }

                })

            // if condition is not equality
            } else if(condition == "!="){

                foundData = arrParam.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] != val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() != String(val.toLowerCase()));

                    }

                })

            // else if the condition is greater than sign
            } else if(condition == ">"){

                foundData = arrParam.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) > Number(val));

                })

            // else if the condition is less than sign
            } else if(condition == "<"){

                foundData = arrParam.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) < Number(val));

                })

            // else if the condition is greater than or equal to sign
            } else if(condition == ">="){

                foundData = arrParam.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) >= Number(val));

                })

            // else if the condition is less than or equal to sign
            } else if(condition == "<="){

                foundData = arrParam.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) <= Number(val));

                })

            // else if the condition is similarity
            } else if(condition == "like"){

                foundData = arrParam.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        let regEx = new RegExp(val,"g");

                            return regEx.test(obj[objKey]);
                        
                    // if its not case sensitive
                    } else {
                      
                        let regEx = new RegExp(val,"gi");

                            return regEx.test(obj[objKey]);

                    }

                })

            // else if the condition is not similarity
            } else if(condition == "not like"){


                foundData = arrParam.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        let regEx = new RegExp(val,"g");

                            return !(regEx.test(obj[objKey]));
                        
                    // if its not case sensitive
                    } else {
                      
                        let regEx = new RegExp(val,"gi");

                            return !(regEx.test(obj[objKey]));

                    }

                })
            
            } else {

                foundData = [];

            }

            methodObj["data"] = [...foundData];

            return methodObj;

        } // WHERE()



        // OQ.AND()
        methodObj["AND"] = function(objKey,condition,val,caseSensitive = false){

            condition = condition.toLowerCase().trim();

            let queryData = [...methodObj["data"]];

            let foundData;

            // if a condition is equality
            if(condition == "="){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] == val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() == String(val).toLowerCase());

                    }

                })

            // if condition is not equality
            } else if(condition == "!="){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] != val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() != String(val).toLowerCase());

                    }

                })

            // else if the condition is greater than sign
            } else if(condition == ">"){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) > Number(val));

                })

            // else if the condition is less than sign
            } else if(condition == "<"){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) < Number(val));

                })

            // else if the condition is greater than or equal to sign
            } else if(condition == ">="){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) >= Number(val));

                })

            // else if the condition is less than or equal to sign
            } else if(condition == "<="){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) <= Number(val));

                })

            // else if the condition is similarity
            } else if(condition == "like"){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        let regEx = new RegExp(val,"g");

                            return regEx.test(obj[objKey]);
                        
                    // if its not case sensitive
                    } else {
                       
                        let regEx = new RegExp(val,"gi");

                            return regEx.test(obj[objKey]);

                    }

                })

            } else {

                foundData = [];

            }

            methodObj["data"] = [...foundData];

            return methodObj;

        } // AND()



        // OQ.OR()
        methodObj["OR"] = function(objKey,condition,val,caseSensitive = false){

            condition = condition.toLowerCase().trim();

            let queryData = [...arrParam];

            let foundData;

            // if a condition is equality
            if(condition == "="){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] == val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() == String(val).toLowerCase());

                    }

                })

            // if condition is not equality
            } else if(condition == "!="){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] != val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() != String(val).toLowerCase());

                    }

                })

            // else if the condition is greater than sign
            } else if(condition == ">"){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) > Number(val));

                })

            // else if the condition is less than sign
            } else if(condition == "<"){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) < Number(val));

                })

            // else if the condition is greater than or equal to sign
            } else if(condition == ">="){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) >= Number(val));

                })

            // else if the condition is less than or equal to sign
            } else if(condition == "<="){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) <= Number(val));

                })

            // else if the condition is similarity
            } else if(condition == "like"){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        let regEx = new RegExp(val,"g");

                            return regEx.test(obj[objKey]);
                        
                    // if its not case sensitive
                    } else {
                       
                        let regEx = new RegExp(val,"gi");

                            return regEx.test(obj[objKey]);

                    }

                })

            } else {

                foundData = [];

            }

            let mixedArray = [...methodObj["data"],...foundData];
            let filteredArray = [];

                mixedArray.forEach(function(ob1,ind){

                    if(ind == 0) return filteredArray.push(ob1);

                    let found = false;
                    let ob1Values = ""; 

                        for(k1 in ob1)  ob1Values += String(ob1[k1])+"";

                        filteredArray.forEach(function(ob2,i){

                            let ob2Values = "";
                                
                                for(k2 in ob2)  ob2Values += String(ob2[k2])+"";

                                if(ob1Values == ob2Values) found = true;

                        });

                        if(!found) filteredArray.push(ob1);

                })

            methodObj["data"] = [...filteredArray];

            return methodObj;

        } // OR()



        
        // OQ.OR()
        methodObj["OR"] = function(objKey,condition,val,caseSensitive = false){

            condition = condition.toLowerCase().trim();

            let queryData = [...arrParam];

            let foundData;

            // if a condition is equality
            if(condition == "="){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] == val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() == String(val).toLowerCase());

                    }

                })

            // if condition is not equality
            } else if(condition == "!="){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        return (obj[objKey] != val);
                        
                    // if its not case sensitive
                    } else {

                        return (String(obj[objKey]).toLowerCase() != String(val).toLowerCase());

                    }

                })

            // else if the condition is greater than sign
            } else if(condition == ">"){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) > Number(val));

                })

            // else if the condition is less than sign
            } else if(condition == "<"){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) < Number(val));

                })

            // else if the condition is greater than or equal to sign
            } else if(condition == ">="){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) >= Number(val));

                })

            // else if the condition is less than or equal to sign
            } else if(condition == "<="){

                foundData = queryData.filter(function(obj,objIndex){

                    return (Number(obj[objKey]) <= Number(val));

                })

            // else if the condition is similarity
            } else if(condition == "like"){

                foundData = queryData.filter(function(obj,objIndex){

                    // if its case sensitive
                    if(caseSensitive){

                        let regEx = new RegExp(val,"g");

                            return regEx.test(obj[objKey]);
                        
                    // if its not case sensitive
                    } else {
                       
                        let regEx = new RegExp(val,"gi");

                            return regEx.test(obj[objKey]);

                    }

                })

            } else {

                foundData = [];

            }

            let mixedArray = [...methodObj["data"],...foundData];
            let filteredArray = [];

                mixedArray.forEach(function(ob1,ind){

                    if(ind == 0) return filteredArray.push(ob1);

                    let found = false;
                    let ob1Values = ""; 

                        for(k1 in ob1)  ob1Values += String(ob1[k1])+"";

                        filteredArray.forEach(function(ob2,i){

                            let ob2Values = "";
                                
                                for(k2 in ob2)  ob2Values += String(ob2[k2])+"";

                                if(ob1Values == ob2Values) found = true;

                        });

                        if(!found) filteredArray.push(ob1);

                })

            methodObj["data"] = [...filteredArray];

            return methodObj;

        } // OR()


        
        // OQ.LIMIT()
        methodObj["LIMIT"] = function(limit){

            let limitData = [];

                limit = Number(limit);

                limit = limit < 0 ? limit * -1 : limit;

                if(!(limit > methodObj["data"].length)){

                    for(let entry = 0; entry < limit; entry++) limitData.push(methodObj["data"][entry]);

                    methodObj["data"] = [...limitData];

                }

                return methodObj;

        } // LIMIT()


        // OQ.ORDER_BY()
        methodObj["ORDER_BY"] = function(objKey,order = "ASC"){

                order = order.toLowerCase();

                if(isNaN(Number(methodObj["data"][0][objKey]))){

                    if(order == "asc"){

                        methodObj["data"] = [...methodObj["data"].sort((a,b) => String(a[objKey]).localeCompare(String(b[objKey])))];
                       
                    } else if(order == "desc"){

                        methodObj["data"] = [...methodObj["data"].sort((a,b) => String(b[objKey]).localeCompare(String(a[objKey])))];

                    }

                } else {

                    if(order == "asc"){

                        methodObj["data"] = [...methodObj["data"].sort((a,b) => Number(a[objKey]) - Number(b[objKey]))];

                    } else if(order == "desc"){

                        methodObj["data"] = [...methodObj["data"].sort((a,b) => Number(b[objKey]) - Number(a[objKey]))];

                    }

                }

                return methodObj;

        } // ORDER_BY()


        return methodObj;

} // OQ.prototype.SELECT_FROM()





OQ.prototype.UPDATE = function(arrParam){

    let methodObj = {};
        methodObj["data"] = [...arrParam];
        methodObj["input"] = arrParam;
        methodObj["SET"] = function(objKey,val){

            let innerObj = {};
                innerObj["WHERE"] = function(refKey,condition,refVal,caseSensitive = false){

                    let foundIndices = [];
                    condition = condition.toLowerCase().trim();

                    // if a condition is equality
                    if(condition == "="){

                        arrParam.forEach(function(obj,objIndex){

                            // if its case sensitive
                            if(caseSensitive){

                                if(obj[refKey] == refVal) foundIndices.push(objIndex);
                                
                            // if its not case sensitive
                            } else {

                                if(String(obj[refKey]).toLowerCase() == String(refVal.toLowerCase())) foundIndices.push(objIndex);

                            }

                        })


                    // if condition is not equality
                    } else if(condition == "!="){

                        arrParam.forEach(function(obj,objIndex){

                            // if its case sensitive
                            if(caseSensitive){

                                if(obj[refKey] != refVal) foundIndices.push(objIndex);
                                
                            // if its not case sensitive
                            } else {

                                if(String(obj[refKey]).toLowerCase() != String(refVal.toLowerCase())) foundIndices.push(objIndex);

                            }

                        })

                    // else if the condition is greater than sign
                    } else if(condition == ">"){

                        arrParam.forEach(function(obj,objIndex){

                            if(Number(obj[refKey]) > Number(refVal)) foundIndices.push(objIndex);

                        })

                    // else if the condition is less than sign
                    } else if(condition == "<"){

                        arrParam.forEach(function(obj,objIndex){

                            if(Number(obj[refKey]) < Number(refVal)) foundIndices.push(objIndex);

                        })

                    // else if the condition is greater than or equal to sign
                    } else if(condition == ">="){

                        arrParam.forEach(function(obj,objIndex){

                            if(Number(obj[refKey]) >= Number(refVal)) foundIndices.push(objIndex);

                        })

                    // else if the condition is less than or equal to sign
                    } else if(condition == "<="){

                        arrParam.forEach(function(obj,objIndex){

                            if(Number(obj[refKey]) <= Number(refVal)) foundIndices.push(objIndex);

                        })

                    // else if the condition is similarity
                    } else if(condition == "like"){


                        arrParam.forEach(function(obj,objIndex){

                            // if its case sensitive
                            if(caseSensitive){

                                let regEx = new RegExp(refVal,"g");

                                    if(regEx.test(obj[refKey])) foundIndices.push(objIndex);
                                
                            // if its not case sensitive
                            } else {
                            
                                let regEx = new RegExp(refVal,"gi");

                                    if(regEx.test(obj[refKey])) foundIndices.push(objIndex);

                            }

                        })

                    // else if the condition is not similarity
                    } else if(condition == "not like"){


                        arrParam.forEach(function(obj,objIndex){

                            // if its case sensitive
                            if(caseSensitive){

                                let regEx = new RegExp(refVal,"g");

                                    if(!regEx.test(obj[refKey])) foundIndices.push(objIndex);
                                
                            // if its not case sensitive
                            } else {
                            
                                let regEx = new RegExp(refVal,"gi");

                                    if(!regEx.test(obj[refKey])) foundIndices.push(objIndex);

                            }

                        })
                    
                    } else {

                        foundData = [];

                    }

                    foundIndices.forEach(function(dataIndex,i){ methodObj["data"][dataIndex][objKey] = val });

                    return methodObj;
                
                } // WHERE()

                return innerObj;

        } // SET()

        return methodObj;

} // OQ.prototype.UPDATE()

let query = new OQ();

