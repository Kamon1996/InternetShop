let find = false;
let products = [
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 1.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 2.99,
      description: `
      A quirky entertaining collection of geometric patterns for a light and easy distraction. Designed specifically to provide you with an effortless Sweet Escape.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 3.99,
      description: ` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nesciunt, velit.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 4.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 5.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },
   {
      imgUrl: 'img/LoveYourself.jpg',
      price: 6.99,
      description: `
      All the questions I received, resolved. My intention is that by the time you finish this new edition, not only will you be committed to loving yourself, you’ll know exactly how to do it. And, most importantly, how to make it last.`
   },

];

let busket = [];

const navLogo = document.querySelector('.logo');
const navSearch = document.querySelector('.search');
const navBusket = document.querySelector('.busket__ico');
const navLogin = document.querySelector('.in');
const navLogout = document.querySelector('.out');

const sectionProducts = document.querySelector('.products__grid');
const sectionBusket = document.querySelector('.section__busket')
const sectionRegister = document.querySelector('.section__register')
// const itemImg = document.querySelector('');
// const itemPrice = document.querySelector('');
// const itemDescription = document.querySelector('');
// const itemId = document.querySelector('');

// const itemCount = document.querySelector('');

let minusCount = document.querySelectorAll('.minus');
let plusCount = document.querySelectorAll('.plus');
let busketRegularCount = document.querySelectorAll('.busket__regular-count');



function displayProducts(arr) {
   sectionProducts.innerHTML = '';
   let newId = 0;
   arr.forEach(element => {
      sectionProducts.innerHTML += `
      <div id="${newId}" class="item">
         <img class="product__img" src="${element.imgUrl}" alt="">
         <h5>${element.price + ' $'}</h5>
         <p>${element.description}</p>
         <button class="to-busket__btn">To Busket</button>
         <div class="busket__regular hide">
            <div class="regular__button minus"><i class="fas fa-minus"></i></div>
            <div class="busket__regular-count">1</div>
            <div class="regular__button plus"><i class="fas fa-plus"></i></div>
         </div>
      </div>
      `
      newId++;
   });
}
displayProducts(products);

let productsNodes = document.querySelectorAll('.item');


function toBusketClick() {
   const toBusketBtn = document.querySelectorAll('.to-busket__btn');
   toBusketBtn.forEach((element, index) => {
      element.addEventListener("click", function () {
         if (find === true) {
            element.closest('.item').querySelector('.busket__regular-count').innerHTML = 1;
            busket.push(products[index]);
            busket[busket.length - 1].count = 1;
            busket[busket.length - 1].id = index;
            document.querySelector('.bucket__count').innerHTML++
            element.nextElementSibling.classList.toggle('hide');
            element.classList.toggle('hide');
         } else {
            return;
         }
      })
   })
}
toBusketClick();


navSearch.addEventListener("keyup", function () {
   productsNodes.forEach((element, index) => {
      if (!element.querySelector('p').innerHTML.toLowerCase().includes(navSearch.value.toLowerCase())) {
         productsNodes[index].classList.add('hide');
      } else if (productsNodes[index].classList.contains('hide')) {
         productsNodes[index].classList.toggle('hide');
      }
   });
})


function minusCountClick() {
   minusCount = document.querySelectorAll('.minus');
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
minusCountClick();


function plusCountClick() {
   plusCount = document.querySelectorAll('.plus');
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
plusCountClick();


navBusket.addEventListener("click", () => {
   if (document.querySelector('.bucket__count').innerHTML == 0) {
      return;
   } else {
      displayBusket();
   }
});


function displayBusket() {
   sectionBusket.innerHTML = '';
   sectionProducts.classList.toggle('hide');
   sectionBusket.classList.toggle('hide');
   busket.forEach(element => {
      sectionBusket.innerHTML += `
      <div class="busket__item">
         <input class="busket__checkbox" type="checkbox">
         <img class="busket__img" src="${element.imgUrl}" alt="">
         <div class="busket__description">${element.description}.</div>
         <div class="delete">Delete</div>
         <div class="busket__price">${element.price + ' $'}</div>
         <input class="busket__input" type="number" value="${element.count}">
      </div>
      `
   });
}

navLogo.addEventListener("click", () => {
   sectionProducts.classList.remove('hide');
   sectionBusket.classList.add('hide');
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

function navLogoutClick() {
   busketRegularCount = document.querySelectorAll('.busket__regular-count');
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
      sectionBusket.classList.add('hide');
      return find = false;
   })
}
navLogoutClick();








let usersData = [];

const signUpButton = document.querySelector('input[value="Sign Up"]');
const loginButton = document.querySelector('input[value=Login]');
const userName = document.querySelector('input[type="text"]')
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
         email.value == element.Email &
         password.value == element.Password
      ) {
         callBack('Login Successfully');
         setTimeout(function () {
            sectionRegister.classList.toggle('hide')
         }, 1000)
         navLogout.classList.toggle('hide');
         navLogin.classList.toggle('hide');
         return find = true;
      }
   })
   if (find === false) {
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