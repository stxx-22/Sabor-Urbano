const CONFIG = {
  whatsappNumber: "573001234567", // Cambia esto por el número real, con indicativo de país y sin +
  address: "Barranquilla, Colombia"
};

// Fotografías externas de menús y restaurantes. Cada producto tiene una URL diferente.
// No se utilizan imágenes de Wikipedia. Verifica permisos antes de publicar comercialmente.
const IMG = {
  salchipapaCostena: "https://img0.didiglobal.com/static/soda_public/do1_Qa1WEiirL9tzlSepZDZP",
  salchipapaChoributi: "https://img0.didiglobal.com/static/soda_public/img_07d9e5be5b0743ea596083bb85118c6b.jpg4_3",
  salchipapaTrifasica: "https://img0.didiglobal.com/static/soda_public/do1_2LgWSLriExhDfTWVIf88",
  salchipapaGratinada: "https://img0.didiglobal.com/static/soda_public/img_82921efde296ab021f121baa79ded894.jpeg",
  salchipapaPremium: "https://img0.didiglobal.com/static/soda_public/img_f12b4712311dbd86968fe31ee8fd60a5.jpeg",
  perroSencillo: "https://img0.didiglobal.com/static/soda_public/img_ba9a7837be59d07db0c1114e4af745ea.jpg",
  perroGemelo: "https://pedilo.nyc3.digitaloceanspaces.com/2020/09/sippote_doble_salchicha.jpg",
  choriPerro: "https://sumerlabs.com/sumer-app-90b8f.appspot.com/product_photos%2F05c4e1b4f8daaf7b482d4fd272a64987%2Fdf97ce60-ce56-11ec-b813-8539cdee2134?alt=media&token=bdd2d57f-8d89-4b3f-a6ba-9ba419d5d882",
  perroSuizo: "https://img0.didiglobal.com/static/soda_public/do1_BwLpF61tYVUvrIYAbCuz",
  mazorcaPollo: "https://img0.didiglobal.com/static/soda_public/img_4b89fb007eaffade1b8932bafc693134.jpg",
  mazorcaMixta: "https://img0.didiglobal.com/static/soda_public/img_57eb1bdbab57ebce780d7ae9f81a8ab1.jpeg",
  desgranadoCosteno: "https://img0.didiglobal.com/static/soda_public/do1_k4auhRB2milIAxtDgMz7",
  desgranadoCarnes: "https://img0.didiglobal.com/static/soda_public/img_2bf66dea5f31c7abf9d3a7808338d0d1.JPG",
  hamburguesa: "https://img0.didiglobal.com/static/soda_public/img_a2b88d82a33a049a56687d3abe8ab191.jpg4_3",
  sandwich: "https://img0.didiglobal.com/static/soda_public/img_bcadf5273d98472f05cb02a93d261111.jpeg",
  patacon: "https://tropicalbites.co/_next/image?dpl=dpl_Xdp6GvTSyo9wFE8XsTh69fkzpmME&q=75&url=%2Fmedia%2Fclover%2Fpatacon-tropical.webp&w=3840",
  alitas: "https://img0.didiglobal.com/static/soda_public/do1_9WaMHDyyMmXUedZNJQ8t",
  pizza: "https://img0.didiglobal.com/static/soda_public/do1_Ib4h2vuqXD1rfrpGeNRX",
  gaseosa: "https://img0.didiglobal.com/static/soda_public/img_fb8ce18a124b3ae30d125117f3da5fba.jpeg",
  avena: "https://www.tasteatlas.com/images/ingredients/1653d85aeb9d4a05866be2d91ee49095.jpg",
  bebidas: "https://cdn.sanity.io/images/omvn0o2l/production/329db22a6b17d2a359313884f72f9bbf89a45dd5-1376x768.jpg?auto=format&q=75&w=800"
};

const products = [
  {id:1,name:"Salchipapa Costeña",category:"salchipapas",desc:"Papas francesas, salchicha, queso costeño, lechuga, chongo y salsas de la casa.",tag:"SABOR CARIBE",image:IMG.salchipapaCostena,variants:[["Personal",19000],["Mediana",27000],["Grande",35000],["Familiar",45000]]},
  {id:2,name:"Salchipapa Choributi",category:"salchipapas",desc:"Salchicha, chorizo, butifarra, queso costeño, papita chongo y salsas.",tag:"CHORIZO + BUTIFARRA",image:IMG.salchipapaChoributi,variants:[["Personal",22000],["Mediana",30000],["Grande",39000]]},
  {id:3,name:"Salchipapa Trifásica",category:"salchipapas",desc:"Salchicha, chorizo y butifarra con queso costeño, papas y salsa de la casa.",tag:"TRES SABORES",image:IMG.salchipapaTrifasica,variants:[["Personal",24000],["Grande",34000],["Para compartir",47000]]},
  {id:4,name:"Salchipapa Gratinada",category:"salchipapas",desc:"Papas, pollo, chorizo, butifarra y queso fundido gratinado.",tag:"EXTRA QUESO",image:IMG.salchipapaGratinada,variants:[["Personal",26000],["Grande",37000],["Familiar",52000]]},
  {id:5,name:"Salchipapa Premium",category:"salchipapas",desc:"Pollo, carne, salchicha, chorizo, tocineta, queso, maíz y salsas.",tag:"LA SALVAJADA",image:IMG.salchipapaPremium,variants:[["Personal",32000],["Grande",45000],["Para compartir",59000]]},
  {id:6,name:"Perro Sencillo",category:"perros",desc:"Pan suave, salchicha, queso costeño, papita chongo y salsas.",tag:"EL CLÁSICO",image:IMG.perroSencillo,variants:[["Sencillo",12000],["A la plancha",14000],["Con extra queso",16000]]},
  {id:7,name:"Perro Gemelo",category:"perros",desc:"Doble salchicha, queso costeño, papita chongo y salsa tártara.",tag:"DOBLE SALCHICHA",image:IMG.perroGemelo,variants:[["Gemelo",16000],["Gemelo gratinado",20000],["Gemelo con tocineta",23000]]},
  {id:8,name:"Chori Perro",category:"perros",desc:"Chorizo dorado, queso, papita chongo y salsas de la casa.",tag:"CON CHORIZO",image:IMG.choriPerro,variants:[["Chori sencillo",19000],["Chori especial",24000],["Chori gratinado",28000]]},
  {id:9,name:"Perro Suizo",category:"perros",desc:"Salchicha suiza, mozzarella, queso costeño y salsa de la casa.",tag:"SALCHICHA SUIZA",image:IMG.perroSuizo,variants:[["Suizo",22000],["Suizo doble",28000],["Suizo premium",33000]]},
  {id:10,name:"Mazorca Desgranada",category:"mazorcas",desc:"Maíz dulce, pollo, queso costeño, papita chongo y salsa de la casa.",tag:"MAÍZ + QUESO",image:IMG.mazorcaPollo,variants:[["Sencilla",19000],["Con pollo",25000],["Grande",32000]]},
  {id:11,name:"Mazorca Mixta",category:"mazorcas",desc:"Maíz, pollo, chorizo, butifarra, queso costeño y queso fundido.",tag:"BIEN CARGADA",image:IMG.mazorcaMixta,variants:[["Mediana",27000],["Grande",35000],["Premium",43000]]},
  {id:12,name:"Desgranado Costeño",category:"desgranados",desc:"Bollo limpio, maíz, queso costeño, chongo y salsas de la casa.",tag:"TRADICIÓN CARIBE",image:IMG.desgranadoCosteno,variants:[["Sencillo",20000],["Especial",28000],["Grande",35000]]},
  {id:13,name:"Desgranado 4 Carnes",category:"desgranados",desc:"Pollo, carne, chorizo, butifarra, bollo, queso y papita chongo.",tag:"CUATRO CARNES",image:IMG.desgranadoCarnes,variants:[["Personal",29000],["Grande",39000],["Para compartir",52000]]},
  {id:14,name:"Hamburguesa Urbana",category:"hamburguesas",desc:"Pan artesanal, vegetales frescos, queso y salsas. Escoge tu combinación.",tag:"ARMA TU BURGER",image:IMG.hamburguesa,variants:[["Carne & Tocineta",25000],["Pollo & Tocineta",24000],["Doble carne",32000],["Dos pisos carne",39000],["Carne, pollo & queso",35000]]},
  {id:15,name:"Sándwich Especial",category:"sandwiches",desc:"Pollo, jamón, queso fundido, vegetales y salsa de la casa.",tag:"FULL RELLENO",image:IMG.sandwich,variants:[["Personal",22000],["Especial",30000],["Combo",37000]]},
  {id:16,name:"Patacón Relleno",category:"patacones",desc:"Patacón crocante, carne desmechada, queso y salsas.",tag:"SABOR COSTEÑO",image:IMG.patacon,variants:[["Sencillo",22000],["Mixto",30000],["Especial",38000]]},
  {id:17,name:"Alitas BBQ",category:"alitas",desc:"Alitas bañadas en salsa BBQ con papas y salsa para acompañar.",tag:"BBQ",image:IMG.alitas,variants:[["4 unidades",18000],["6 unidades",26000],["10 unidades",39000]]},
  {id:18,name:"Pizza Urbana",category:"pizzas",desc:"Pizza horneada con mozzarella. Elige el sabor que más te guste.",tag:"RECIÉN HORNEADA",image:IMG.pizza,variants:[["Jamón y queso · Personal",22000],["Hawaiana · Personal",24000],["Pizza perro · Personal",25000],["Pepperoni · Personal",25000],["Pollo · Personal",25000],["Especial 4 carnes · Personal",29000],["Hawaiana · Familiar",49000],["Pepperoni · Familiar",52000]]},
  {id:19,name:"Gaseosa",category:"bebidas",desc:"Bien fría para acompañar tu comida favorita.",tag:"BIEN FRÍA",image:IMG.gaseosa,variants:[["250 ml",3500],["400 ml",5000],["1.5 litros",10000]]},
  {id:20,name:"Avena Colombiana",category:"bebidas",desc:"Avena cremosa con canela, servida bien fría.",tag:"TRADICIONAL",image:IMG.avena,variants:[["Vaso",6000],["Botella personal",9000],["Litro",16000]]},
  {id:21,name:"Jugos de Frutas",category:"bebidas",desc:"Bebidas refrescantes inspiradas en sabores tradicionales.",tag:"REFRESCANTE",image:IMG.bebidas,variants:[["Jugo de corozo",7000],["Jugo de tamarindo",7000],["Limonada natural",6000],["Limonada de coco",10000]]}
];

// Evita accidentalmente asignar la misma fotografía a dos tarjetas.
const imageUrls = products.map(p => p.image);
if (new Set(imageUrls).size !== imageUrls.length) console.warn("Hay imágenes repetidas en el catálogo.");

let cart = [];
const money = n => new Intl.NumberFormat("es-CO", {style:"currency",currency:"COP",maximumFractionDigits:0}).format(n);
const grid = document.getElementById("productGrid");
const drawer = document.getElementById("drawer");
const overlay = document.getElementById("overlay");

function renderProducts(filter = "todos") {
  const list = filter === "todos" ? products : products.filter(p => p.category === filter);
  grid.innerHTML = list.map(p => `
    <article class="product">
      <div class="product-photo">
        <img src="${p.image}" alt="${p.name}" loading="lazy" referrerpolicy="no-referrer">
        <span class="tag">${p.tag}</span>
      </div>
      <div class="product-body">
        <h3>${p.name}</h3><p>${p.desc}</p>
        <label class="variant-label" for="variant-${p.id}">ESCOGE TU VERSIÓN</label>
        <select class="variant-select" id="variant-${p.id}" data-variant="${p.id}">
          ${p.variants.map((v,i) => `<option value="${i}">${v[0]} · ${money(v[1])}</option>`).join("")}
        </select>
        <div class="product-action"><b class="price" id="price-${p.id}">${money(p.variants[0][1])}</b><button class="add" data-add="${p.id}" aria-label="Agregar ${p.name}" type="button">+</button></div>
      </div>
    </article>`).join("");
}
function renderCart() {
  const count = cart.reduce((s,p)=>s+p.qty,0);
  const total = cart.reduce((s,p)=>s+p.price*p.qty,0);
  document.getElementById("cartCount").textContent = count;
  document.getElementById("cartTotal").textContent = money(total);
  document.getElementById("cartItems").innerHTML = cart.length ? cart.map((p,i)=>`
    <div class="cart-row"><div><b>${p.name} · ${p.variant}</b><small>${money(p.price)} c/u</small></div><div class="qty"><button data-qty="-1" data-index="${i}" aria-label="Restar" type="button">−</button><b>${p.qty}</b><button data-qty="1" data-index="${i}" aria-label="Sumar" type="button">+</button></div></div>`).join("") : `<p class="empty">Tu pedido está vacío. ¡Vamos a llenarlo! 🍟</p>`;
}
function toast(message) { const t=document.getElementById("toast"); t.textContent=message; t.classList.add("show"); window.setTimeout(()=>t.classList.remove("show"),2200); }
function addProduct(id) {
  const p=products.find(x=>x.id===id); const select=document.getElementById(`variant-${id}`); const v=p.variants[Number(select.value)]; const key=`${id}-${select.value}`; const existing=cart.find(x=>x.key===key);
  if(existing) existing.qty++; else cart.push({key,id,name:p.name,variant:v[0],price:v[1],qty:1});
  renderCart(); toast(`${p.name} agregado al pedido`);
}
function openCart() { drawer.classList.add("open"); overlay.classList.add("show"); drawer.setAttribute("aria-hidden","false"); }
function closeCart() { drawer.classList.remove("open"); overlay.classList.remove("show"); drawer.setAttribute("aria-hidden","true"); }
function wa(text) { return `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`; }

document.getElementById("filters").addEventListener("click",e=>{const b=e.target.closest("[data-filter]");if(!b)return;document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");renderProducts(b.dataset.filter);});
grid.addEventListener("change",e=>{const s=e.target.closest("[data-variant]");if(!s)return;const p=products.find(x=>x.id===Number(s.dataset.variant));document.getElementById(`price-${p.id}`).textContent=money(p.variants[Number(s.value)][1]);});
grid.addEventListener("click",e=>{const b=e.target.closest("[data-add]");if(b)addProduct(Number(b.dataset.add));});
document.getElementById("openCart").addEventListener("click",openCart);
document.getElementById("closeCart").addEventListener("click",closeCart);
overlay.addEventListener("click",closeCart);
document.getElementById("cartItems").addEventListener("click",e=>{const b=e.target.closest("[data-qty]");if(!b)return;const i=Number(b.dataset.index);cart[i].qty+=Number(b.dataset.qty);if(cart[i].qty<=0)cart.splice(i,1);renderCart();});
document.getElementById("checkout").addEventListener("click",()=>{if(!cart.length)return toast("Agrega algo rico primero.");if(CONFIG.whatsappNumber==="573001234567")return toast("Configura el WhatsApp real en script.js.");const lines=cart.map(p=>`• ${p.qty} x ${p.name} (${p.variant}) — ${money(p.qty*p.price)}`).join("\n");const total=cart.reduce((s,p)=>s+p.qty*p.price,0);window.open(wa(`¡Hola! Quiero hacer este pedido:\n\n${lines}\n\nTotal estimado: ${money(total)}\n\n¿Me confirman disponibilidad y domicilio?`),"_blank","noopener");});
document.getElementById("contactWhatsApp").addEventListener("click",e=>{e.preventDefault();if(CONFIG.whatsappNumber==="573001234567")return toast("Configura el WhatsApp real en script.js.");window.open(wa("¡Hola! Quiero conocer el menú de Sabor Urbano."),"_blank","noopener");});
document.getElementById("addressText").textContent=CONFIG.address;
document.getElementById("year").textContent=new Date().getFullYear();
const hamburger=document.getElementById("hamburger");const nav=document.getElementById("nav");
hamburger.addEventListener("click",()=>{const opened=nav.classList.toggle("open");hamburger.setAttribute("aria-expanded",String(opened));});
nav.querySelectorAll("a").forEach(a=>a.addEventListener("click",()=>{nav.classList.remove("open");hamburger.setAttribute("aria-expanded","false");}));
document.addEventListener("error",e=>{if(e.target.tagName==="IMG"){e.target.classList.add("image-error");e.target.alt="Fotografía no disponible";}},true);
renderProducts();renderCart();
