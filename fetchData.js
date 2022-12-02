const url = "https://api.escuelajs.co/api/v1/products/";

// //fetch data

// //bus
// console.log("bus");

// //bread
// fetch(url)
//     .then((response) => console.log(response.json(), "response"))
//     .then((data) => console.log(data, "bread"))
//     .catch((error) => console.log(error));


// //coffee
// console.log("coffee");

// //shopping
// console.log("shopping")



//axios-package
// axios.get(url)
// .then((response) => console.log(response.data, "data"))
// .catch((error) => console.log(error));



fetch(url).then((response) => response.json())
.then((data) => displayData(data))
.catch((error) => console.log(data));


//function to display the data
function displayData(productList){
//const productList = data;
productList.map((item) => {
    const productItem = `
    <p> Name: ${item.title}</p>
    <img id = "productImg" src = ${item.category.image} alt=${item.title}/>
    <p>Description: ${item.description}</p>
    `;

    const productItemContainer = document.createElement("div");
    productItemContainer.innerHTML = productItem;

    const productListContainer = document.getElementById("productList");
    productListContainer.append(productItemContainer);
});
}

//Add return when using curly brackets
// fetch(url).then((response) => {
//     return response.json();
// });  