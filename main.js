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


//create total
function getTotal(){
    let result= (+price.value+ +taxis.value+ +ads.value)- +discount.value;
    total.innerHTML=result;
    total.style.background='#040'
    
    
}
let datapro;
if(localStorage.prduct !=null){
    datapro=JSON.parse(localStorage.prduct) ;
}else{
    datapro=[];
}

submit.onclick=function(){
    let newproo={
        tilte:title.value,
        price: price.value,
        taxis: taxis.value,
        ads: ads.value,
        discount: discount.value,
        total:total.innerHTML,
        count:count.value,
        category:category.value,
    }
    datapro.push(newproo);
    localStorage.setItem('Product' ,JSON.stringify(datapro))
    console.log(datapro);
    clearData ()
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
//count
//delete
// updata
// search