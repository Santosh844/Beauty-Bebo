document.getElementById("bt1").addEventListener("click",bt1);
function bt1() {
    alert
}
 
 var data = [
     {
         <imgage_url = "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/5/4/54_2.jpg"/>
         
             
             <p>Price &#x20b9; 980</p>
     }
     {
         <imgage_url = "https://www.beautybebo.com/pub/media/catalog/product/cache/37253e89591b79b38c00254331932999/t/h/th1.jpg"
                 />
             
             <p>Price &#x20b9; 400</p>
     },
     
 ];



  showProducts(data)

 function sorting() {
     var price = document.querySelector("#filter").value;
     if (price == "lowest") {
         var com = data.sort(function (a, b) {
             return a.MRP - b.MRP
         })
     }
     if (price == "highest") {
         var com = data.sort(function (a, b) {
             return b.MRP - a.MRP
         })
     }

     if (price == "asc") {
         var com = data.sort(function (a, b) {
             return a.type > b.type ? 1 : b.type > a.type ? -1 : 0
         })
     }

     if (price == "des") {
         var com = data.sort(function (a, b) {
             return a.type > b.type ? -1 : b.type > a.type ? 1 : 0
         })
     }


     showProducts(com)
 }


 var cartarr = JSON.parse(localStorage.getItem("data")) || []
 var favarr = JSON.parse(localStorage.getItem("favdata")) || []


 function showProducts(productArray) {
     document.querySelector("#rimages").innerHTML = ''
     productArray.map(function (item) {
         var imgs = document.createElement("img");
         imgs.setAttribute("src", item.image_url);
         imgs.setAttribute("id", "imageSizing");

         var type = document.createElement("p");
         type.textContent = item.type;
         type.setAttribute("class", "paraStyle");

         var description = document.createElement("p");
         description.textContent = item.dsc;
         description.setAttribute("class", "paraStyle1");

         var x = document.createElement("div");
         x.setAttribute("id", "x");

         var price = document.createElement("span");
         price.textContent = "$" + item.MRP;
         price.setAttribute("class", "pricing");

         var disc = document.createElement("span");
         disc.textContent = "$" + item.discount;
         disc.setAttribute("id", "discStyle");

         var discPer = document.createElement("span");
         discPer.textContent = item.discountPercentage + "% OFF";
         discPer.setAttribute("id", "discPerStyle");

         x.append(price, disc, discPer);

         var btn = document.createElement("button");
         btn.textContent = "Add To Cart";

         var imgDiv = document.createElement("div");
         imgDiv.setAttribute("id", "img");

         var btnsDiv = document.createElement("div");
         btnsDiv.setAttribute("id", "btnsDiv")

         var cart = document.createElement("button");
         cart.addEventListener("click", function () {
             addToCart(item)
         })
         cart.setAttribute("id", "AddToCart")
         cart.textContent = "Add To Cart";

         var btnfav = document.createElement("button")
         btnfav.textContent = "Add to Fav";
         btnfav.setAttribute("id", "favBtn")
         btnfav.addEventListener("click", function () {
             fav(item)
         })

         btnsDiv.append(cart, btnfav);

         imgDiv.append(imgs, type, description, x, btnsDiv);

         document.getElementById("rimages").append(imgDiv);
        
     });

     
 }

 function addToCart(item) {
     if (cartarr.includes(item)) {
         alert("already add to chart")
     }
     else {
         alert("Added");
         window.location.href="cart.html"
     }
     cartarr.push(item)
     localStorage.setItem("datas", JSON.stringify(cartarr))
 }
 

 function fav(item) {
     if (favarr.includes(item)) {
         alert("already added to wishlist")
     }
     else {
         alert("Added to wishlist")
     }
     favarr.push(item)
     localStorage.setItem("favdata", JSON.stringify(favarr))
 }