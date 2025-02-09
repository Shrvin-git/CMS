//* Cms -> Content Management System
const usersWrapperElem = document.querySelector('.table-body_users')
const productsWrapperElem = document.querySelector('#table-body_products')
const userPagination = document.querySelector('.users-pagination')
const productPagination = document.querySelector('.products-pagination')
const usersData = document.querySelector('.users-data')
const productData = document.querySelector('.products-data')
const showAllProductsData = document.querySelector('#products-data')
const latestUsers = document.querySelector('.lasted-users')
const lastProductsWrapper = document.querySelector('#lasted-products')


let productsPage = 1
let usersPage = 1;
let itemsOnPage = 5;



const data = {
  users: [
    { id: 1, name: "پیمان احمدی", username: "Peyman", email: "peyman@gmail.com", password: "peyman1212", },
    { id: 2, name: "ملورین شهسانی", username: "Melorin", email: "Melorin@gmail.com", password: "Melorin1212", },
    { id: 3, name: "شروین داوودی", username: "Shevrin", email: "Shevrin@gmail.com", password: "Shevrin1212", },
    { id: 4, name: "مهدی طایی", username: "Mahdi", email: "Mahdi@gmail.com", password: "Mahdi1212", },
    { id: 5, name: "محمد همتی", username: "Mohammad", email: "mohammad@gmail.com", password: "Mohammad1212", },
    { id: 6, name: "سوگند جعفری", username: "Sogand", email: "Sogand@gmail.com", password: "Sogand1212", },
    { id: 7, name: "سارا صالحی", username: "Sara", email: "Sara@gmail.com", password: "Sara1212", },
    { id: 8, name: "میلاد حردانی", username: "Milad", email: "Milad@gmail.com", password: "Milad1212", },
    { id: 9, name: "سلنا مرادی", username: "Selena", email: "Selena@gmail.com", password: "Selena1212", },
    { id: 10, name: "علی انصاریان", username: "Alireza", email: "Alireza@gmail.com", password: "Alireza1212", },
    { id: 11, name: "رضا همتی ", username: "Rexa", email: "Rexa@gmail.com", password: "Rexa1212", },
    { id: 12, name: "عباس داوودی", username: "Abbas", email: "Abbas@gmail.com", password: "Abbas1212", },
    { id: 13, name: "سایه علیمردانی", username: "Sayeh", email: "Sayeh@gmail.com", password: "Sayeh1212", },

  ],

  products: [
    { id: 1, title: "1 کفش ورزشی", price: 2000000, slug: "nike-sport-shoe", },
    { id: 2, title: "2 کفش ورزشی", price: 5000000, slug: "nike-sport-shoe", },
    { id: 3, title: "3 کفش ورزشی", price: 1750000, slug: "nike-sport-shoe", },
    { id: 4, title: "4 کفش ورزشی", price: 800000, slug: "nike-sport-shoe", },
    { id: 5, title: "5 کفش ورزشی", price: 985000, slug: "nike-sport-shoe", },
    { id: 6, title: "6 کفش ورزشی", price: 3250000, slug: "nike-sport-shoe", },
    { id: 7, title: "7 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 8, title: "8 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 9, title: "9 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 10, title: "10 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 11, title: "11 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 12, title: "12 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 13, title: "13 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    { id: 14, title: "14 کفش ورزشی", price: 5050000, slug: "nike-sport-shoe", },
    
  ],
};

// * Set Users in Local Storage
function setUsersInLocal() {
  localStorage.setItem('users', JSON.stringify(data.users));
}
// * Set Products in Local Storage
function setProductsInLocal() {
  localStorage.setItem('products', JSON.stringify(data.products))
}
// * Get Users & Products in Local Storage
function getLocal() {
  let usersLocal = JSON.parse(localStorage.getItem('users'));
  let productsLocal = JSON.parse(localStorage.getItem('products'));

  if (usersLocal) {
    data.users = usersLocal;
  }
  if (productsLocal) {
    data.products = productsLocal;
  }

  usersPagination(data.users)
  productsPagination(data.products)


  lastUsersInWebsite(data.users)
  lastProductsInWebsite(data.products)
}

// * Add Users in CMS
function usersPagination(users) {

  let startIndex = (usersPage - 1) * itemsOnPage; // 6
  let lastIndex = startIndex + itemsOnPage; // 9  

  let sliceInUsersArray = users.slice(startIndex, lastIndex)


  if (usersWrapperElem) {
    usersWrapperElem.innerHTML = ''
    sliceInUsersArray.forEach(function (user) {
      usersWrapperElem.insertAdjacentHTML('beforeend',
        `
      <div class="tableRow">
        <p class="user-fullName">${user.name}</p>
        <p class="user-username">${user.username}</p>
        <p class="user-email">${user.email}</p>
        <p class="user-password">${user.password}</p>
        <div class="product-manage">
          <button class="edit-btn">
            <!-- Edit icon -->
            <i class="fas fa-edit"></i>
          </button>
          <button class="remove-btn">
            <!-- Ban icon -->
            <i class="fas fa-ban"></i>
          </button>
        </div>
      </div>
    `
      )
    })

    usersData.innerHTML = data.users.length
  }

}
function buttonsGenerate(users, itemsOnPage) {



  if (userPagination) {

    let button = Math.ceil(users.length / itemsOnPage)
    userPagination.innerHTML = ''
    for (let i = 0; i < button; i++) {
      userPagination.insertAdjacentHTML('beforeend',
        `
      <span onclick="changePageHandler(${i + 1})" tabindex="1" class="page">${i + 1}</span>
      `
      )
    }


  }

}
function changePageHandler(userSelectedPage) {

  document.querySelector('.users-pagination').addEventListener('click', function (e) {
    if (e.target.classList.contains('page')) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      page = parseInt(e.target.innerText);
      usersPagination(data.users);
    }
  });

  usersPage = userSelectedPage

  usersPagination(data.users)
}
buttonsGenerate(data.users, itemsOnPage)

// * Add Product in CMS
function productsPagination(products) {

  let startIndex = (productsPage - 1) * itemsOnPage; // 6
  let lastIndex = startIndex + itemsOnPage; // 9  

  let sliceInProductsArray = products.slice(startIndex, lastIndex)
  if (productsWrapperElem) {
    productData.innerHTML = products.length
    productsWrapperElem.innerHTML = ''
    sliceInProductsArray.forEach(function (product) {
      productsWrapperElem.insertAdjacentHTML('beforeend',
        `
        <div class="tableRow">
            <p class="product-title">${product.title}</p>
            <p class="product-price">${product.price.toLocaleString()}</p>
            <p class="product-shortName">${product.slug}</p>
            <div class="product-manage">
              <button class="edit-btn" onclick="editProducts(${product.id})">
                <!-- Edit icon -->
                <i class="fas fa-edit"></i>
              </button>
              <button class="remove-btn">
                <!-- Delete fas icon -->
                <i class="fas fa-trash-alt"></i>
              </button>
            </div>
          </div>
        `
      )
    })
  }
}
function productsBtnGenerate(products, itemsOnPage) {

  if (productPagination) {
    let button = Math.ceil(products.length / itemsOnPage)
    productPagination.innerHTML = ''
    for (let i = 0; i < button; i++) {
      productPagination.insertAdjacentHTML('beforeend',
        `
        <span onclick="changeProductsPageHandler(${i + 1})" tabindex="1" class="page">${i + 1}</span>
        `
      )
    }
  }
}
function changeProductsPageHandler(userSelectedPage) {
  productsPage = userSelectedPage

  document.querySelector('.products-pagination').addEventListener('click', function (e) {
    if (e.target.classList.contains('page')) {
      document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
      e.target.classList.add('active');
      page = parseInt(e.target.innerText);
      usersPagination(data.users);
    }
  });
  productsPagination(data.products)
}
productsBtnGenerate(data.products, itemsOnPage)

// * Last Users +5
function lastUsersInWebsite(lastUsers) {
  let startIndex = lastUsers.length - 5
  let lastIndex = lastUsers.length

  let lastItems = lastUsers.slice(startIndex, lastIndex)
  if (latestUsers) {
    latestUsers.innerHTML = ''
    lastItems.forEach(function (items) {
      latestUsers.insertAdjacentHTML('beforeend',
        `
        <article>
              <!-- user icon -->
              <span class="icon-card">
                <i class="fa-solid fa-user"></i>
              </span>
              <!-- user data -->
              <div>
                <p class="user-name">${items.name}</p>
                <p class="user-email">${items.email}</p>
              </div>
            </article>
        `
      )
    })
    usersData.innerHTML = data.users.length
  }
}


// * Last Products +5
function lastProductsInWebsite(lastProducts) {

  let startIndex = lastProducts.length - 5
  let lastIndex = lastProducts.length

  let lastItems = lastProducts.slice(startIndex, lastIndex)
  if (lastProductsWrapper) {
    lastProductsWrapper.innerHTML = ''
    lastItems.forEach(function (lastProduct) {
      lastProductsWrapper.insertAdjacentHTML('beforeend',
        `
        <div class="tableRow">
              <p class="product-title">${lastProduct.title}</p>
              <p class="product-price">${lastProduct.price.toLocaleString()}</p>
              <p class="product-shortName">${lastProduct.slug}</p>
              <div class="product-manage">
                <button class="edit-btn">
                  <!-- Edit icon -->
                  <i class="fas fa-edit"></i>
                </button>
                <button class="remove-btn">
                  <!-- Delete fas icon -->
                  <i class="fas fa-trash-alt"></i>
                </button>
              </div>
            </div>
        `
      )
    })
    productData.innerHTML = lastProducts.length
    showAllProductsData.innerHTML = lastProducts.length

  }
}


// * Edit Product 
function editProducts(productID) {
  let findProduct = data.products.find(function (product) {
    return product.id === productID
  })

  console.log(findProduct.price == '20');
  setProductsInLocal()
}














window.addEventListener('load', function () {
  if (!JSON.parse(localStorage.getItem('users'))) {
    setUsersInLocal();
  }
  if (!JSON.parse(localStorage.getItem('products'))) {
    setProductsInLocal();
  }
  setUsersInLocal();
  setProductsInLocal();
  getLocal();
});
const toggleMenu = document.querySelector(".toggle-sidebar");
toggleMenu.addEventListener("click", function () {
  document.querySelector(".sidebar").classList.toggle("open");
});




