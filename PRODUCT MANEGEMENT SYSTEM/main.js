// splice (strat,count,add)
// slice (star,end)
// let askemail=prompt('enter you email')
// document.write('updata')
let tilte =document.getElementById('title');
let price =document.getElementById('price');
let taxis =document.getElementById('taxis');
let ads =document.getElementById('ads');
let discount =document.getElementById('discount');
let total =document.getElementById('total');
let count =document.getElementById('count');
let category =document.getElementById('category');
let submit =document.getElementById('submit');
//console.log(tilte,price,taxis,ads,discount,total,count,submit,category)

let mode='create';
let temp;

//create total
function getTotal(){
    let result= (+price.value+ +taxis.value+ +ads.value)- +discount.value;
    total.innerHTML=result;
    total.style.background='#2422EF';
    total.style.width='100%';
    
    
}
let datapro;
if(localStorage.Product !=null){
    datapro=JSON.parse(localStorage.Product) ;
}else{
    datapro=[];
}

submit.onclick=function(){
    let newproo={
        tilte:tilte.value.toLowerCase(),
        price: price.value,
        taxis: taxis.value,
        ads: ads.value,
        discount: discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value.toLowerCase(),
    }
    if(tilte.value!='' && price.value!='' && category.value!=''){
        if(mode==='create'){
        if(newproo.count>1){
        for(let i=0;i<newproo.count;i++){
            datapro.push(newproo);
        }
        }else{
        datapro.push(newproo)};
    }else{
        datapro[temp]=newproo;
        mode='create';
        submit.innerHTML='Create'
        count.style.display='block'
    }
    clearData ()
}else{

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
taxis.value='';
ads.value='';
discount.value='';
total.innerHTML='';
count.value='';
category.value='';
}
//read
function readData()
{
    getTotal();

    table='';
    for(let i=0;i<datapro.length;i++){
        table+=`
        <tr>
            <td>${i}</td>
            <td>${datapro[i].tilte}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxis}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updataData(${i})" id="update">updata</button></td>
            <td><button onclick="dataDel(${i})"  id="delete">delete</button></td>
        </tr>
    `
    }

document.getElementById('tbody').innerHTML=table;
let btndelete=document.getElementById('deleteall');

if(datapro.length>0){
btndelete.innerHTML=`
<button onclick="deleteAll()">delete All(${datapro.length})</button>
`
}else{
    btndelete.innerHTML='';
}
}
readData();
//count
//delete
function dataDel(i){
datapro.splice(i,i );
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
taxis.value=datapro[i].taxis;
ads.value=datapro[i].ads;
discount.value=datapro[i].discount;
category.value=datapro[i].category;
getTotal()
count.style.display='none'
submit.innerHTML='Update'
mode='update';
temp=i;
scroll({
    top:0,
    behavior:'smooth'
})
}

let searchmode='title';

function getMode(id){
    let search=document.getElementById('search')
    if(id=='seacrhTitle'){
        searchmode='title'
        search.placeholder='Search by Title'
    }else{
        searchmode='category'
        search.placeholder='Search by Category'
    }
    search.focus()
    search.value='';
    readData();
}

function searchData(value){
    let table='';
if(searchmode=='title'){
    for(let i=0;i<datapro.length;i++){
        if(datapro[i].tilte.includes(value.toLowerCase())){
            table+=`
            <tr>
            <td>${i}</td>
            <td>${datapro[i].tilte}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxis}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updataData(${i})" id="update">updata</button></td>
            <td><button onclick="dataDel(${i})"  id="delete">delete</button></td>
            </tr>
    `
    }
    

        }

}else{
    for(let i=0;i<datapro.length;i++){
        if(datapro[i].category.includes(value.toLowerCase())){
            table+=`
            <tr>
            <td>${i}</td>
            <td>${datapro[i].tilte}</td>
            <td>${datapro[i].price}</td>
            <td>${datapro[i].taxis}</td>
            <td>${datapro[i].ads}</td>
            <td>${datapro[i].discount}</td>
            <td>${datapro[i].total}</td>
            <td>${datapro[i].category}</td>
            <td><button onclick="updataData(${i})" id="update">updata</button></td>
            <td><button onclick="dataDel(${i})"  id="delete">delete</button></td>
            </tr>
    `
    }
    
        }
}
document.getElementById('tbody').innerHTML=table;
}
// search