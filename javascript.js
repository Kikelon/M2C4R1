class Producto {
    constructor(id, nombre, description, prize, image){
        this.id = id;
        this.nombre = nombre;
        this.description = description;
        this.prize = prize;
        this.image = image;
    }
};

class Item {
    constructor(id, nombre, quantity, prize, totalPrize){
        this.id = id;
        this.nombre = nombre;
        this.quantity = quantity;
        this.prize = prize;
        this.totalPrize = totalPrize
    }
};

let productos = [];
let producto = new Producto('AFGR32', 'Abrigo', 'Abrigo muy calentito', 120, './images/products/abrigo.webp');
productos.push(producto);
producto = new Producto('IFN45T', 'Camisa', 'Camisa de manga larga', 60, './images/products/camisa.webp');
productos.push(producto);
producto = new Producto('IS0MFD', 'Chaqueta', 'Chaqueta estilo leñador', 90, './images/products/chaqueta.webp');
productos.push(producto);
producto = new Producto('B4DC7Y', 'Jersey', 'Jersey navideño', 40, './images/products/jersey.webp');
productos.push(producto);
producto = new Producto('9GR5NK', 'Zueco', 'Zuecos de estar por casa', 35, './images/products/zueco.webp');
productos.push(producto);

let shoppingCart = [];

function loadItem(producto){
    document.getElementById("item-show").innerHTML += `<div class="card card-container">
                                                         <img src="${producto.image}" class="card-img-top" alt="...">
                                                         <div class="card-body">
                                                            <h5 class="card-title">${producto.nombre}</h5>
                                                            <p class="card-text">Descripción: ${producto.description}</p>
                                                            <p class="card-text">precio: ${producto.prize}€</p>
                                                            <button class="button-add" onclick="addItem('${producto.id}')">Agregar al carrito</button>
                                                      </div>
                                                     </div>`; 
};

function loadData(){
    for (let i=0; i<productos.length; i++)
    {
        loadItem(productos[i]);
    }
};

function addItem(id){
    console.log(shoppingCart);
    const index = shoppingCart.findIndex((element) => {
        return element.id === id;
    });
    const indexProducts = productos.findIndex((element) => {
        return element.id === id;
    });
    if (index == -1){
        const producto = new Item(id, productos[indexProducts].nombre, 1, productos[indexProducts].prize, productos[indexProducts].prize);
        shoppingCart.push(producto);
    } else {
        shoppingCart[index].quantity++;
        shoppingCart[index].totalPrize += shoppingCart[index].prize;
    }
    console.log(shoppingCart[index]);
    console.log(shoppingCart);
};


function mostrarCarrito()
{
    document.getElementById("basketBody").innerHTML = '';
    document.getElementById("totalCarrito").innerHTML = '';
    let total = 0;
    for(let i=0; i<shoppingCart.length; i++){
        document.getElementById("basketBody").innerHTML += `<tr>
                                                                <th scope="row">${i}</th>
                                                                <td>${shoppingCart[i].nombre}</td>
                                                                <td>${shoppingCart[i].quantity}</td>
                                                                <td>${shoppingCart[i].prize}€</td>
                                                                <td>${shoppingCart[i].totalPrize}€</td>
                                                            </tr>`;
        total += shoppingCart[i].totalPrize;
   }
   document.getElementById("totalCarrito").innerHTML += `<h4>Total de su compra: ${total}€</h4>`
}

function total(){
    window.alert("Gracias por su compra!");
    shoppingCart = [];
};
