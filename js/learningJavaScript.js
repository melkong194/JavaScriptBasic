/*----------------------------------------------------*/
/*--------------ARRAY in JAVA SCRIPT------------------*/

//Methods for input & output
var arr=[1,2,7,8,7,3];

console.log("***********************************************************************");
console.log("1  ********************************************************************");
console.log("***********************************************************************");
console.log("PUSH: input at end ------------");
console.log("Array:",arr);
arr.push(5);
console.log(arr);

console.log("***********************************************************************");
console.log("2  ********************************************************************");
console.log("***********************************************************************");
console.log("POP: remove from end ------------");
console.log("Array:",arr);
console.log("output:",arr.pop());
console.log(arr);

console.log("***********************************************************************");
console.log("3  ********************************************************************");
console.log("***********************************************************************");
console.log("UNSHIFT: input at head ---------");
console.log("Array:",arr);
console.log(arr.unshift(7));
console.log(arr);

console.log("***********************************************************************");
console.log("4  ********************************************************************");
console.log("***********************************************************************");
console.log("SHIFT: remove from head ---------");
console.log("Array:",arr);
console.log("output:",arr.shift());
console.log(arr);

console.log("***********************************************************************");
console.log("5  ********************************************************************");
console.log("***********************************************************************");
console.log("indexOF: search & return index of 1st element ---------");
console.log("Array:",arr);
console.log("indexOf(7)==>",arr.indexOf(7));
console.log("indexOf(11)==>",arr.indexOf(11));

console.log("***********************************************************************");
console.log("6  ********************************************************************");
console.log("***********************************************************************");
console.log("lastIndexOf: search & return index of last element ---------");
console.log("Array:",arr);
console.log("lastIndexOf(7)==>",arr.lastIndexOf(7));
console.log("lastIndexOf(11)==>",arr.lastIndexOf(11));

console.log("***********************************************************************");
console.log("7  ********************************************************************");
console.log("***********************************************************************");
console.log("splice: remove number of element from start ---------");
console.log("Array:",arr);
console.log("arr.splice(1,2)==>",arr.splice(1,2));
console.log("Array:",arr);
console.log("arr.splice(1,2,11,8)==>",arr.splice(1,2,11,8,4,5,6,7));
console.log("Array:",arr);

console.log("***********************************************************************");
console.log("8  ********************************************************************");
console.log("***********************************************************************");
console.log("slice: Show number of element from start ---------");
console.log("Array:",arr);
console.log("arr.slice(1,2)==>",arr.slice(1,2));
console.log("arr.slice(2,1)==>",arr.slice(2,1));
console.log("Array:",arr);

console.log("***********************************************************************");
console.log("9  ********************************************************************");
console.log("***********************************************************************");
console.log("findIndex: Search & return index by A defined function ---------");

console.log("----------I------------------------------------------");
var output = arr.findIndex(function(a, b){//a: value, b: index
    //console.log("a:",a,"---b:",b)
    return a==4; // findIndex automatically returns index of position is TRUE
})

console.log("Array:",arr);
console.log("arr.findIndex(of 4)==>",output);

console.log("----------II-----------------------------------------");
var listTasks = [
    {
        id: 'abc',
        level: 0,
        taskname: 'code'

    },
    {
        id: 'a',
        level: 1,
        taskname: 'di cho'

    },
    {
        id: 'b',
        level: 1,
        taskname: 'an com'

    },
    {
        id: 'c',
        level: 1,
        taskname: 'code'

    },
    {
        id: 'de',
        level: 1,
        taskname: 'ngu'

    },
    {
        id: 'c',
        level: 1,
        taskname: 'chay bo'

    },
    {
        id: 'de',
        level: 1,
        taskname: 'di choi'

    }
]

var output = listTasks.findIndex(function(element){//element of array
    //console.log("Array:",element);
    console.log("Array:",listTasks);
    return element.taskname === 'di cho'; // findIndex automatically returns index of position í TRUE
})
console.log("listTasks.findIndex(of 'di cho')==>", output);

console.log("***********************************************************************");
console.log("10  *******************************************************************");
console.log("***********************************************************************");
console.log("filter: Search & return index by A defined function ---------");

var output = listTasks.filter(function(element){
    console.log("Array:",listTasks);
    return element.taskname === 'code';
})
console.log("listTasks.filter (of 'code')==>", output);

console.log("***********************************************************************");
console.log("11  *******************************************************************");
console.log("***********************************************************************");
console.log("REMOVE A ELEMENT OF ARRAY ---------");

console.log("----------Method I : SPLICE-----------");
function deleteTask(task_name){
    // find index of task
    var indexDelete = listTasks.findIndex(function (x){
        return x.taskname ===task_name
    })

    //delete by splice
    if(indexDelete !== -1){
        listTasks.splice(indexDelete,1)
    }
}
deleteTask('an com');
console.log("Splice task: 'ancom'==>", listTasks);

console.log("----------Method II : FILTER-----------");
function deleteTask2(task_name){
    // find tasks not having that task_name
    var returnArr = listTasks.filter(function (x){
        return x.taskname !==task_name;
    })

    listTasks = returnArr;
}
deleteTask2('di choi');
console.log("Splice task: 'di choi'==>", listTasks);

console.log("***********************************************************************");
console.log("12  *******************************************************************");
console.log("***********************************************************************");
console.log("Every of Array ---------");
//return true or false  after browsing all elements

const isBelowThreshold = (x) => x <= 39;
const array1 = [1, 30, 39, 29, 10, 13];
console.log(array1.every(isBelowThreshold));

console.log("***********************************************************************");
console.log("13  *******************************************************************");
console.log("***********************************************************************");
console.log("MORE PRACTICE FOR ARRAYS -------------");
console.log("problem 1:----------------------------");
// problem: x in Array_1 THEN x*x in Array_2 ??
// arr1 [7,2,2,8] => {7:1,2:2,8:1} key is value, value is no of appearance.
// delete value*value in arr2
var x = [1,2,3];
var y = [9,1,4,5];

function compare2arrays(arr1,arr2){
 
    if(arr1.length !== arr2.length) return false;

    for( var index = 0; index <arr1.length; index++){

        var indexInArr2= arr2.indexOf( arr1[index]**2 );

        if (indexInArr2 != -1) 
            arr2.splice(indexInArr2, 1);  
        else
            return false;
    }

    return arr2.length == 0;
}


//Way 2
/*
function compare2arrays(arr1,arr2){
    var x1 = {};
    var x2 = {};
    for( var index = 0; index <arr1.length; index++){
        var value = arr1[index];
        x1[value] == undefined? x1[value] =1 : x1[value] ++;
    }

    // 'abc' || 'def' => 'abc';  
    // false || 'def' => 'abc';  

    for( var index = 0; index <arr2.length; index++){
        var value = arr2[index];
        x2[value] == undefined? x2[value] =1 : x2[value] ++;
        
    }

    for(key in x1){
        numb = key**2;
        if(x2[numb] === undefined)  return false;
        else{
            if(x2[numb] !== x1[key]) return false;
        }
    }
    return true
}
*/
console.log(x,y,"==>",compare2arrays(x,y));

// problem: Same Text
// same_text: ' ' vs ' ' => true
// same_text: 'aaz' vs 'aza' => true
// same_text: 'rat' vs 'car' => true
console.log("problem 2:----------------------------");

function sameText(st1,st2){
 
    if(st1.length !== st2.length) return false;

    for( var index = 0; index <st1.length; index++){       
        if (st2.includes(st1[index])){
            st2 = st2.replace(st1[index],"");
            console.log(st2);
        }else
            return false       
    }

    return st2.length == 0;
}
console.log(sameText("aza","zaa"));

console.log("problem 3:----------STRING-------------");
//STRING
/* not use <input type='number> <==  Hack HTML */
/*
        !isNaN(str) ???
    ' '      is a number: Yes
    '123abc' is a number: No
*/
/*
        !isNaN(parseInt(str)) ???
    ' '      is a number: No
    '123abc' is a number: Yes
*/
//
// var str = prompt("input number:");
var str = "123";
if (str == parseInt(str) && !isNaN(parseInt(str)))
    console.log(str," Yes, is a Number.");


console.log("\nproblem 4:-ARRAY REDUCE method--------------------");
//STRING
/* browsing array by reduce */
var list = [
    {
        id: "a",
        price: 5000,
        quantity: 1
    },
    {
        id: "ab",
        price: 4000,
        quantity: 1
    },
    {
        id: "cc",
        price: 1000,
        quantity: 10
    }
]
/*
// CALCULATE SUM
var result = list.reduce(function(x,y){
    console.log("x:",x,"-y:",y);
    return x + y.price * y.quantity;
}, 0) 
*/

var init = {
    total: 0,
    qty: 0
}
var result = list.reduce(function(x,y){
    console.log("x:",x,"-y:",y);
    return {
        total: x.total + y.price * y.quantity,
        qty: x.qty + y.quantity
    }
}, init) 
console.log(result);

console.log("\nproblem 5:-SORT ARRAY--------------------");
//STRING
var arr = [1,12,432,27,7,10,78,9];
console.log("no parameter:",arr.sort())
arr.sort(function(a,b){ return a-b})

console.log("having function:",arr)

list.sort(function(a,b){
    if(a.price > b.price)
        return -1;
    else 
        return 1;
    return 0;
})
console.log("price sort:",list)