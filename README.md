<img width="1916" height="873" alt="image" src="https://github.com/user-attachments/assets/5899c2e4-65ed-47c9-bca1-b6d8506bf916" />

# Product Management System (CRUD) - JavaScript

A simple **Product Management System** built with **Vanilla JavaScript** that allows users to manage products using **CRUD operations (Create, Read, Update, Delete)**.

The application stores product data in the browser using **localStorage**, so the data remains saved even after refreshing the page.

---

## Features

- Create new products
- Update existing products
- Delete individual products
- Delete all products at once
- Create multiple products using **count**
- Automatic **total price calculation**
- Search products by **title**
- Search products by **category**
- Data persistence using **localStorage**

---

## Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage API

---

## Project Structure
│
├── crud.html
├── style.css
├── main.js
└── README.md


---

## How It Works

### Create Product
Users enter the following product information:

- Title
- Price
- Taxes
- Ads
- Discount
- Count
- Category

The system automatically calculates the **total price**.

If **count > 1**, multiple products will be created at once.

---

### Read Products
All stored products are displayed dynamically in a table.

---

### Update Product
Clicking **Update** loads the product data into the input fields so it can be edited.

---

### Delete Product
Each product row has a **Delete** button to remove it from the list.

---

### Delete All
If products exist, a **Delete All** button appears to remove all products.

---

### Search Products
Users can search products by:

- Title
- Category

The results update dynamically while typing.

---

## Data Storage

Products are stored in the browser using: localStorage


### Example product object

```javascript
{
  title: "iphone",
  price: "500",
  taxes: "50",
  ads: "20",
  discount: "10",
  total: "560",
  count: "1",
  category: "phone"
}
```

---

## Clone the repository

```bash
git clone https://github.com/0xElghobashy/product-management-crud-js.git
```

Open the project folder.

Open `crud.html` in your browser.

No installation or dependencies required.
No installation or dependencies required.
