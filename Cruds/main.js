// splice (strat,count,add)
// slice (star,end)
// let askemail=prompt('enter you email')
// document.write('updata')
let tilte =document.getElementById('title');
let price =document.getElementById('price');
let taxis =document.getElementById('taxis');
let submit =document.getElementById('submit');
let total =document.getElementById('total');

//console.log(tilte,price,taxis,ads,discount,total,count,submit,category)

let mode='create';
let temp;

//create total
let datapro;
if(localStorage.Product !=null){
    datapro=JSON.parse(localStorage.Product) ;
}else{
    datapro=[];
}

submit.onclick=function(){
    let newproo={
        tilte:tilte.value,
        price: price.value,
    }
    
    if(tilte.value!='' && price.value!='' ){
        if(mode==='create'){
            datapro.push(newproo);
    clearData ()
    
}else{
        datapro[temp]=newproo;
        mode='create';
        submit.innerHTML='أضافة'
        clearData ()
    }
}
    localStorage.setItem('Product' ,JSON.stringify(datapro))
    readData()
}
//craete product
//save localstroge
//clear all
function clearData (){
tilte.value='';
price.value='';
}
//read
function readData()
{
    getTotal()
    table='';
    for(let i=0;i<datapro.length;i++){
        table+=`
        <tr>
            <td>${i+1}</td>
            <td>${datapro[i].tilte}</td>
            <td>${datapro[i].price}</td>
            <td><button onclick="updataData(${i})" id="update">تعديل</button></td>
            <td><button onclick="dataDel(${i})"  id="delete">مسح</button></td>
        </tr>
    `
    }

document.getElementById('tbody').innerHTML=table;
let btndelete=document.getElementById('deleteall');

if(datapro.length>0){
btndelete.innerHTML=`
<button onclick="deleteAll()">مسح الكل(${datapro.length})</button>
`
}else{
    btndelete.innerHTML='';
}
}
readData();
//count
//delete
function dataDel(i){
    if(i==0){
        deleteAll()
    }
datapro.splice(i,i);
localStorage.Product=JSON.stringify(datapro);
readData();
}
function deleteAll(){
    localStorage.clear();
    datapro.splice(0)
    readData();
}

function updataData(i){
tilte.value=datapro[i].tilte;
price.value=datapro[i].price;
submit.innerHTML='تعديل'
mode='update';
temp=i;
scroll({
    top:0,
    behavior:'smooth'
})
}
let xx;
function getTotal(){
    let result=0;
    for(i=0;i<datapro.length;i++){
result+= +datapro[i].price;
    }
    total.innerHTML=result;
    total.style.background='#2422EF';
    total.style.width='100%';
}
getTotal()