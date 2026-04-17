// ===== LISTA COMPLETA DE PRODUTOS =====
const products = [
  {
    name: "Teclado Gamer RGB",
    price: 169.90,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_770602-MLA99491800276_112025-F.webp"
  },
  {
    name: "Mouse Gamer RGB",
    price: 99.00,
    img: "https://m.media-amazon.com/images/I/51EBglsGc+L._AC_SX679_.jpg"
  },
  {
    name: "Cadeira Gamer",
    price: 550.00,
    img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTggjzcJEdH1bv3-u6Ca3XXoNNQDwfJEay6sU7g2UJBKuhxU7rtztoqHZBMoK6Ky2bIWWV0qT0lcyoQ7K3KUFKulmBUUAxGrkwkmGMUalv_P2eOMfZahoVjVMM"
  },
  {
    name: "Headset Gamer",
    price: 139.99,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_829386-MLA96710594255_102025-F.webp"
  },
  {
    name: "WebCam Full HD",
    price: 70.00,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcR9y96dJhVnJEBc2MLrws-ojsPUqv2LDPnSrQwvqk2vF1oMQL4NOWk7euhlsZc_X9wnXr_LkS0GMeu9Wqu4-nuaHD231CffQQ"
  },
  {
    name: "Placa de vídeo GTX 1660",
    price: 1200.00,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_639206-MLA95402322430_102025-F.webp"
  },
  {
    name: "Processador Ryzen 5 3600",
    price: 1000.00,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_978522-MLB54921613096_042023-F.webp"
  },
  {
    name: "Memória RAM 16GB",
    price: 400.00,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_918850-MLA99933307707_112025-F.webp"
  },
  {
    name: "Mousepad Gamer RGB",
    price: 50.00,
    img: "https://http2.mlstatic.com/D_NQ_NP_2X_784287-MLA91976539163_092025-F.webp"
  },
  {
    name: "Mesa para Computador",
    price: 295.99,
    img: "https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcQuwmDFlshCOpvGxMScwh_gsqKFE2WTRGGTrSlo3-tpRncydT5n0xvP6vnNl4WJa5OepArmPrvYKs4FR_-7QVwfuwF9qij3EQ"
  }
];

let cart = [];

// ===== RENDER PRODUTOS =====
function renderProducts() {
  const container = document.getElementById("products");
  container.innerHTML = "";

  products.forEach(p => {
    container.innerHTML += `
      <div class="card" onclick="openProduct('${p.name}', ${p.price}, '${p.img}')">
        <img src="${p.img}">
        <h3>${p.name}</h3>
        <p>R$${p.price.toFixed(2)}</p>
      </div>
    `;
  });
}

// ===== ABRIR PRODUTO =====
function openProduct(name, price, img) {
  document.getElementById("products").style.display = "none";

  const detail = document.getElementById("productDetail");
  detail.style.display = "flex";

  detail.innerHTML = `
    <img src="${img}" style="width:350px">
    <div>
      <h2>${name}</h2>
      <p>R$${price.toFixed(2)}</p>
      <p>Produto gamer de alta qualidade.</p>
      <button onclick="addToCart('${name}', ${price})">COMPRAR</button>
    </div>
  `;
}

// ===== ADICIONAR AO CARRINHO =====
function addToCart(name, price) {
  cart.push({ name, price });

  renderCart();

  // MOSTRA CARRINHO
  document.getElementById("sidebar").style.display = "block";

  // VOLTA PRO INÍCIO
  document.getElementById("productDetail").style.display = "none";
  document.getElementById("products").style.display = "grid";
}

// ===== RENDER CARRINHO =====
function renderCart() {
  const cartEl = document.getElementById("cartItems");
  const totalEl = document.getElementById("total");

  if (cart.length === 0) {
    cartEl.innerHTML = "Nada adicionado";
    totalEl.innerHTML = "";
    return;
  }

  cartEl.innerHTML = "";
  let total = 0;

  cart.forEach(item => {
    cartEl.innerHTML += `<p>${item.name} - R$${item.price.toFixed(2)}</p>`;
    total += item.price;
  });

  totalEl.innerHTML = `Total: R$ ${total.toFixed(2)}`;
}

// ===== FINALIZAR COMPRA =====
function finalizarCompra() {
  document.getElementById("paymentBox").style.display = "block";
}

// ===== PAGAMENTO =====
function selectPayment(type) {
  const el = document.getElementById("paymentContent");

  if (type === "pix") {
    el.innerHTML = `
      <h4>Pagamento via PIX</h4>
      <img src="https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=pix">
    `;
  }

  if (type === "boleto") {
    el.innerHTML = `
      <h4>Boleto Bancário</h4>
      <p>Código de barras:</p>
      <img src="https://barcode.tec-it.com/barcode.ashx?data=23793381286000000012345678901234567890123456&code=Code128">
    `;
  }

  if (type === "card") {
    el.innerHTML = `
      <h4>Cartão</h4>
      <input placeholder="Número do cartão"><br>
      <input placeholder="Nome"><br>
      <input placeholder="Validade"><br>
      <input placeholder="CVV"><br>
      <button>Finalizar</button>
    `;
  }
}

// ===== VOLTAR PARA INÍCIO =====
document.getElementById("logo").onclick = () => {
  document.getElementById("products").style.display = "grid";
  document.getElementById("productDetail").style.display = "none";
};

// ===== INICIAR =====
renderProducts();
renderCart();

// LOGO → voltar pro início
document.getElementById("logo").onclick = () => {
  document.getElementById("sidebar").style.display = "none";
  document.getElementById("products").style.display = "grid";
  document.getElementById("productDetail").style.display = "none";
};

// BOTÃO X → fechar carrinho
document.getElementById("closeCart").onclick = () => {
  document.getElementById("sidebar").style.display = "none";
};
