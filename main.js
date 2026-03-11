let title = document.getElementById('title');
let price = document.getElementById('price');
let taxes = document.getElementById('taxes');
let ads = document.getElementById('ads');
let discount = document.getElementById('discount');
let total = document.getElementById('total');
let count = document.getElementById('count');
let category = document.getElementById('category');

let mood = 'create' ;
let temp  ;

// get total
function getTotal(){
  if(price.value != ''){
    let result = (+price.value + +taxes.value + +ads.value ) - +discount.value // if you put + before the string it turns into a number
    total.innerHTML = result ;
    total.style.background = '#10567c' 
  }else{
    total.innerHTML = '' ;
    total.style.background = '#e96868' 

  }
}

// create product & update Product

let dataPro = localStorage.product ? JSON.parse(localStorage.product) : [] ; // if you didn't create first part will give you an error because the localStorage.product will be an undefined value

submit.onclick = function() {
  let newPro = {
    title:title.value.toLowerCase(),
    price:price.value,
    taxes:taxes.value,
    ads:ads.value,
    discount:discount.value,
    total:total.innerHTML,
    count:count.value,
    category:category.value.toLowerCase(),
  }

  // دا الجزء اللي بيضيف منتجات جديدة فمش هنشغله الا لو كان المود كريات
  if (mood == 'create') {
    if (title.value!= ''&& price.value!= ''&& category.value!=''&&newPro.count<100){
      if (newPro.count > 1)
      {
        for(let i=0;i<newPro.count;i++){
          dataPro.push(newPro)
        }
      }else {
        dataPro.push(newPro)
      }      
      clearInputs()
    }

  }else{
    // ------ first way to update ------
    // dataPro[temp].title = title.value;
    // dataPro[temp].price = price.value;
    // dataPro[temp].taxes = taxes.value;
    // dataPro[temp].ads = ads.value;
    // dataPro[temp].discount = discount.value;
    // dataPro[temp].category = category.value;

    dataPro[temp]= newPro // -------- second way to update --------
    mood = 'create' ;
    submit.innerHTML = 'Create'
    count.style.display = 'block'
    }
  localStorage.setItem('product' , JSON.stringify(dataPro))

  showData() // will read the data when we click on submit button
}

// clear inputs

function clearInputs() {
  title.value = '' ;
  price.value = '' ;
  taxes.value = '' ;
  ads.value = '' ;
  discount.value = '' ;
  total.innerHTML = '' ;
  count.value = '' ;
  category.value = '' ;
}

// Show Data

function showData() {
  getTotal() // عشان اللون بتاع الزرار يتغير بعد ميعرض الداتا
  let table = '';
  for (let i=0 ; i<dataPro.length ; i++) {
    table+= `
      <tr>
        <td>${i+1}</td>
        <td>${dataPro[i].title}</td>
        <td>${dataPro[i].price}</td>
        <td>${dataPro[i].taxes}</td>
        <td>${dataPro[i].ads}</td>
        <td>${dataPro[i].discount}</td>
        <td>${dataPro[i].total}</td>
        <td>${dataPro[i].category}</td>
        <td><button onclick="updateData(${i})" id="update">update</button></td>
        <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
      </tr>
    `
  }
  document.getElementById('tbody').innerHTML = table ;
  if (dataPro.length > 0){
    document.getElementById('deleteAll').innerHTML = `<button onclick='deleteAll()'>Delete All (${dataPro.length})</button>`

  }else {
    document.getElementById('deleteAll').innerHTML = ""
  }
}
showData() // we call the function here to read data when the page reloaded


// delete element
function deleteData(i) {
  dataPro.splice(i,1)
  localStorage.product = JSON.stringify(dataPro);
  showData()
}

//delete all
function deleteAll(){
  localStorage.clear();
  dataPro.splice(0) // will remove form the first index to the last index in the array
  showData()
}

// Update Data
function updateData(i){
  title.value = dataPro[i].title
  price.value = dataPro[i].price
  taxes.value = dataPro[i].taxes
  ads.value = dataPro[i].ads
  discount.value = dataPro[i].discount
  category.value = dataPro[i].category
  getTotal()
  count.style.display = 'none'
  submit.innerHTML = 'Update'
  mood = 'update'
  temp = i
  scroll({
    top: 0,
    behavior: "smooth"
  })
}

// change mood

let searchMood = 'title'

function getSearchMood(id){
  let search = document.getElementById('search')
  if (id == 'searchTitle')
  {
    searchMood = 'title'
    search.focus() // will put the cursor in the search element
    
  }else {
    searchMood = 'category'
    search.focus()
  }
  search.placeholder = 'search by ' + searchMood

  search.value = '';
  showData()
}

function searchData(value){
  let table = '' ;

  for (let i=0; i<dataPro.length ; i++) {
  
  if(searchMood == 'title'){
    if (dataPro[i].title.includes(value.toLowerCase()))
    {
      table+= `
        <tr>
          <td>${i}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button onclick="updateData(${i})" id="update">update</button></td>
          <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>
      `
    }
  }else{
    if (dataPro[i].category.includes(value.toLowerCase()))
    {
      table+= `
        <tr>
          <td>${i}</td>
          <td>${dataPro[i].title}</td>
          <td>${dataPro[i].price}</td>
          <td>${dataPro[i].taxes}</td>
          <td>${dataPro[i].ads}</td>
          <td>${dataPro[i].discount}</td>
          <td>${dataPro[i].total}</td>
          <td>${dataPro[i].category}</td>
          <td><button onclick="updateData(${i})" id="update">update</button></td>
          <td><button onclick="deleteData(${i})" id="delete">delete</button></td>
        </tr>`
    }
  }
  }
  document.getElementById('tbody').innerHTML = table ;
}

//------------- clean data -------------
// we will control the user input
