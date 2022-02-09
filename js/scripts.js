let authorized = true;
let products = [
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 11.99,
      description: `
   All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be...`
   },
   {
      imgUrl: 'img/2.jpg',
      price: 13.93,
      description: `
   It Ends With Us: The most heartbreaking novel you'll ever read: The most heartbreaking novel you'll ever read.`
   },
   {
      imgUrl: 'img/3.jpg',
      price: 14.08,
      description: `
   Seven Husbands of Evelyn Hugo : Tiktok made me buy it!`
   },
   {
      imgUrl: 'img/4.jpg',
      price: 13.71,
      description: `
   Ugly Love
When Tate Collins finds airline pilot Miles Archer passed out in front of her apartment door, it is definitely not love at first sight.`
   },
   {
      imgUrl: 'img/5.jpg',
      price: 11.98,
      description: `
   The Love Hypothesis : Tiktok made me buy it! The romcom of the year!`
   },
   {
      imgUrl: 'img/6.jpg',
      price: 12.64,
      description: `
   Fast 800 Keto : *The Number 1 Bestseller* Eat well, burn fat, manage your weight long-term.`
   },
   {
      imgUrl: 'img/7.jpg',
      price: 12.85,
      description: `
   The Midnight Library : The No.1 Sunday Times bestseller and worldwide phenomenon.`
   },
   {
      imgUrl: 'img/8.jpg',
      price: 13.71,
      description: `
   Verity : The thriller that will capture your heart and blow your mind.`
   },
   {
      imgUrl: 'img/9.jpg',
      price: 21.10,
      description: `
   The Kids.
Hannah Lowe taught for a decade in an inner-city London sixth form. At the heart of this book...`
   },
   {
      imgUrl: 'img/10.jpg',
      price: 12.23,
      description: `
   Open Water : Winner of the Costa First Novel Award 2021.`
   },
   {
      imgUrl: 'img/11.jpg',
      price: 11.22,
      description: `
   Loki: A Bad God's Guide to Being Good.`
   },
   {
      imgUrl: 'img/12.jpg',
      price: 13.94,
      description: `
   1979 : The unmissable first thriller in an electrifying, brand-new series from the Queen of Crime.`
   },
   {
      imgUrl: 'img/13.jpg',
      price: 14.11,
      description: `
   Light Perpetual : 'Heartbreaking . . . a boundlessly rich novel.' Telegraph.`
   },
   {
      imgUrl: 'img/14.jpg',
      price: 29.66,
      description: `
   Otherlands : A World in the Making.The best book on the history of life on Earth I have ever read' Tom Holland`
   },
];

function addIdCount() {
   products.forEach((element, index) => {
      if (element.count > 1) {
         return;
      } else {
         element.count = 1;
      }
      element.id = index;
   })
}
addIdCount();

let busket = [];

const navLogo = document.querySelector('.logo');
const navSearch = document.querySelector('.search');
const navBusket = document.querySelector('.busket__ico');
const navLogin = document.querySelector('.in');
const navLogout = document.querySelector('.out');

const sectionProducts = document.querySelector('.products__grid');
const divBusket = document.querySelector('.busket__products')
const sectionRegister = document.querySelector('.section__register')
// const itemImg = document.querySelector('');
// const itemPrice = document.querySelector('');
// const itemDescription = document.querySelector('');
// const itemId = document.querySelector('');

// const itemCount = document.querySelector('');

let toBusketBtn
let minusCount
let plusCount
let busketRegularCount
let productsNodes

let newId = 0;
function displayProducts(arr) {
   sectionProducts.innerHTML = '';
   arr.forEach(element => {
      sectionProducts.innerHTML += `
      <div id="${newId}" class="item">
         <img class="product__img" src="${element.imgUrl}" alt="">
         <input class="item__price" type="text" placeholder="Price" value="${element.price + ' €'}">
         <textarea class="item__description" type="text" maxlength="120" placeholder="Description"
         required>${element.description}</textarea>
         <button class="to-busket__btn">To Busket</button>
         <div class="busket__regular hide">
            <div class="regular__button minus"><i class="fas fa-minus"></i></div>
            <div class="busket__regular-count">${element.count}</div>
            <div class="regular__button plus"><i class="fas fa-plus"></i></div>
         </div>
      </div>
      `
      newId++;
   });
   toBusketBtn = document.querySelectorAll('.to-busket__btn');
   minusCount = document.querySelectorAll('.minus');
   plusCount = document.querySelectorAll('.plus');
   busketRegularCount = document.querySelectorAll('.busket__regular-count');
   productsNodes = document.querySelectorAll('.item');
}
displayProducts(products);

function eventToBusketBtn() {
   toBusketBtn.forEach((element, index) => {
      element.addEventListener("click", function () {
         if (authorized === true) {
            busket.push(products[index]);
            busket[busket.length - 1].count = 1;
            busket[busket.length - 1].id = index;
            busket[busket.length - 1].checked = true;
            document.querySelector('.bucket__count').innerHTML++
            element.nextElementSibling.classList.toggle('hide');
            element.classList.toggle('hide');
         } else {
            return;
         }
      })
   })
}
eventToBusketBtn();



navSearch.addEventListener("keyup", function () {
   productsNodes.forEach((element, index) => {
      if (!element.querySelector('.item__description').innerHTML.toLowerCase().includes(navSearch.value.toLowerCase())) {
         productsNodes[index].classList.add('hide');
      } else if (productsNodes[index].classList.contains('hide')) {
         productsNodes[index].classList.toggle('hide');
      }
   });
})





function eventMinusCount() {
   minusCount.forEach(function (element, index) {
      element.addEventListener("click", () => {
         element.nextElementSibling.innerHTML--;
         if (element.nextElementSibling.innerHTML <= 0) {
            element.nextElementSibling.innerHTML = 1;
            element.closest('.busket__regular').classList.toggle('hide');
            element.closest('.busket__regular').previousElementSibling.classList.toggle('hide');
            busket = busket.filter(value => value.id != index);
         } else {
            busket.map(function (value) {
               if (value.id === index) {
                  value.count--;
               }
            })
         }
         document.querySelector('.bucket__count').innerHTML--
      })
   })
}
eventMinusCount();



function eventPlusCount() {
   plusCount.forEach(function (element, index) {
      element.addEventListener("click", () => {
         busket.map(function (value) {
            if (value.id === index) {
               value.count++;
            }
         })
         document.querySelector('.bucket__count').innerHTML++
         element.previousElementSibling.innerHTML++;
      })
   })
}
eventPlusCount();




navBusket.addEventListener("click", () => {
   if (document.querySelector('.bucket__count').innerHTML == 0) {
      return;
   } else {
      displayBusket();
      fullPriceCount();
   }
});


function displayBusket() {
   divBusket.innerHTML = ``;
   sectionProducts.classList.toggle('hide');
   document.querySelector('.busket__main').classList.toggle('hide');
   busket.forEach(element => {
      divBusket.innerHTML += `
      <div class="busket__item" id="${element.id}">
         <input class="busket__checkbox" type="checkbox" ${element.checked ? 'checked' : ''}>
         <img class="busket__img" src="${element.imgUrl}" alt="">
         <div class="busket__description">${element.description}.</div>
         <div class="delete">Delete</div>
         <div class="busket__price">${element.price + ' $'}</div>
         <input class="busket__input" type="number" value="${element.count}">
      </div>
      `
   });
   document.querySelectorAll('.busket__checkbox').forEach((element, index) => {
      element.addEventListener("click", () => {
         busket[index].checked = !busket[index].checked;
         fullPriceCount();
      })
   })
}




navLogo.addEventListener("click", () => {
   sectionProducts.classList.remove('hide');
   document.querySelector('.busket__main').classList.add('hide');
})


navLogin.addEventListener("click", (event) => {
   sectionRegister.classList.toggle('hide');
   signUp.classList.remove('hide');
   loginButton.classList.remove('hide');
   email.classList.remove('hide');
   password.classList.remove('hide');
   formTitle.innerHTML = 'Login';
   formTitle.classList.add('title');
})

navLogout.addEventListener("click", () => {
   navLogin.classList.toggle('hide');
   navLogout.classList.toggle('hide');
   toBusketBtn.forEach(function (element) {
      element.classList.remove('hide');
   })
   busketRegularCount.forEach(function (element) {
      element.innerHTML = 1;
   })
   document.querySelectorAll('.busket__regular').forEach(function (element) {
      element.classList.add('hide');
   })
   busket = [];
   document.querySelector('.bucket__count').innerHTML = 0;
   sectionProducts.classList.remove('hide');
   document.querySelector('.busket__main').classList.add('hide');
   return authorized = false;
})



function fullPriceCount() {
   let fullPrice = 0;
   busket.forEach(element => {
      if (element.checked === true) {
         fullPrice += element.count * element.price;
      }
   })
   document.querySelector('.full-price').innerHTML = `${fullPrice.toFixed(2)} €`;
}

function fullBusketCount() {
   let fullCount = 0;
   busket.forEach(element => {
      if (element.checked === true) {
         fullCount += element.count;
      }
   })
   document.querySelector('.bucket__count').innerHTML = fullCount;
}

const addNewBookbtn = document.querySelector('.book-add');
const addToshop = document.querySelector('.book__add-to-shop');
const addNewBookModal = document.querySelector('.book-add__form')

addNewBookbtn.addEventListener("click", function () {
   addNewBookModal.classList.toggle('hide');
   console.log(document.querySelector('.new__book-add').classList.toggle('fixed'))
})

let regImgUrl = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/

addToshop.addEventListener("click", function (e) {
   e.preventDefault();
   if (
      (
         document.querySelector('.imgurl-add').value == '' ||
         !regImgUrl.test(document.querySelector('.imgurl-add').value)
      ) ||
      document.querySelector('.price-add').value == '' ||
      document.querySelector('.description-add').value == ''
   ) {
      return;
   } else {
      products.push({
         imgUrl: document.querySelector('.imgurl-add').value,
         price: document.querySelector('.price-add').value,
         description: document.querySelector('.description-add').value,
      })
      document.querySelector('.description-add').value = '';
      document.querySelector('.price-add').value = '';
      document.querySelector('.imgurl-add').value = '';
      addIdCount();
      displayProducts(products);
      eventToBusketBtn();
      eventMinusCount();
      eventPlusCount();
   }
})




let usersData = [{
   email: "admin@gmail.com",
   password: "admin"
}];

const signUpButton = document.querySelector('input[value="Sign Up"]');
const loginButton = document.querySelector('input[value=Login]');
const userName = document.querySelector('input[name="login"]')
const email = document.querySelector('input[type="email"]')
const password = document.querySelector('input[type="password"]')
const formTitle = document.querySelector('h2')
const signUp = document.querySelector('.sign__up')
const tryAgain = document.querySelector('.try__again')


const regEmail = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

// const regPassword = /(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z!@#$%^&*]{6,}/g;

if (localStorage.getItem('usersData')) {
   usersData = JSON.parse(localStorage.getItem('usersData'));
}

function callBack(message) {         // Alert function
   userName.classList.add('hide');
   signUpButton.classList.add('hide');
   signUp.classList.add('hide');
   loginButton.classList.add('hide');
   email.classList.add('hide');
   password.classList.add('hide');
   formTitle.innerHTML = message;
   formTitle.classList.remove('title');
   formTitle.classList.add('call__back');
}

function checkEmailAndLogin() {      // Checking email and login function
   let check = false;
   usersData.forEach(function (element) {
      if (
         email.value == element.Email ||
         userName.value == element.NameSurname
      ) {
         check = true;
         return;
      }
   })
   return check;
}


//=====================SignUp===========================//

signUp.addEventListener("click", function (event) {  // Don't have acc? =>
   event.preventDefault();                         //Go to  Sign in Form
   signUp.classList.add('hide');
   loginButton.classList.add('hide');
   userName.classList.remove('hide');
   signUpButton.classList.remove('hide');
   formTitle.innerHTML = 'Sign Up'
   userName.value = email.value = password.value = '';
})

//=====================SignUpButton===========================//


signUpButton.addEventListener("click", function (event) {
   event.preventDefault();
   let newUser = {
      NameSurname: userName.value,
      Email: email.value,
      Password: password.value
   }
   if (                                         // If user don't put text in some area
      userName.value == '' ||
      email.value == '' ||
      password.value == '' ||
      !regEmail.test(email.value)              // If email is wrong!
   ) {
      return;
   } else if (checkEmailAndLogin() === true) {  // If username or password is already used
      callBack('This username or email is already used');
      tryAgain.classList.remove('hide');
   } else {
      console.log(checkEmailAndLogin())       // Push to arr and save in localStorage   
      usersData.push(newUser);
      localStorage.setItem('usersData', JSON.stringify(usersData));
      userName.value = '';
      signUp.classList.remove('hide');
      loginButton.classList.remove('hide');
      userName.classList.add('hide');
      signUpButton.classList.add('hide');
      formTitle.innerHTML = 'Login'
   }
})

//=====================LoginButton===========================//

loginButton.addEventListener("click", function (event) {
   event.preventDefault();
   if (usersData.length === 0) {
      console.log(usersData.length)
      callBack('Invalid Email or Password');
      tryAgain.classList.remove('hide');
   }
   if (                              // If user don't put text in some area
      email.value == '' ||
      password.value == '' ||
      (!regEmail.test(email.value))   // If email is wrong!
   ) {
      return;
   }
   usersData.forEach(function (element) {  // Search this email  
      if (                                 //  and password in arr                
         email.value == element.Email &&
         password.value == element.Password
      ) {
         callBack('Login Successfully');
         setTimeout(function () {
            sectionRegister.classList.toggle('hide')
         }, 1000)
         navLogout.classList.toggle('hide');
         navLogin.classList.toggle('hide');
         return authorized = true;
      }
      // if (
      //    email.value == "admin@gmail.com" &&
      //    password.value == "admin"
      // ) {
      //    document.querySelector('.new__book-add').classList.toggle('hide');
      // }
   })
   if (authorized === false) {
      callBack('Invalid Email or Password');
      tryAgain.classList.remove('hide');
   }
})

//=====================TryAgain===========================//


tryAgain.addEventListener("click", function (event) {
   event.preventDefault();
   signUp.classList.remove('hide');
   loginButton.classList.remove('hide');
   userName.classList.add('hide');
   signUpButton.classList.add('hide');
   formTitle.innerHTML = 'Login'
   tryAgain.classList.add('hide');
   email.classList.remove('hide');
   password.classList.remove('hide');
   formTitle.classList.remove('call__back');
   formTitle.classList.add('title');
})
