// Arayüzden eleman çekme işlemi bir obje içinde yap

const uiElements = {
  menuList: document.querySelector("#menu-list"),
  categoryButtons: document.querySelectorAll(".category-button"),
  detailContainer: document.querySelector("#detail-container"),
};

// Menu elemanını render edicek fonksiyon

const renderMenuCard = (data) => {
  // Dışarıdan alınan data'nın içerisindeki her elemanı dön ve bir html oluştur.Oluşturulan bu html'i uiElements içerisindeki menuList'in Html'i olarak belirle

  uiElements.menuList.innerHTML = data
    .map(
      (item) => `<a  href ="../detail.html?id=${
        item.id
      }"class="col-md-6 col-lg-4 mb-4 text-decoration-none">
          <div class="card menu-card">
            <!-- Top -->
             <div class="position-relative">
                <img
                  src="${item.img}"
                  class="card-img-top "
                  alt="menu-image"
                />
                <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 text-capitalize menu-card-badge">${
                  item.category
                }</span>
                <span class="badge bg-white text-success fw-bold position-absolute top-0 end-0 m-3 px-3 py-2 menu-card-price">$${item.price.toFixed(
                  2
                )}</span>
             </div>
             <!-- Body -->
              <div class="card-body">
<h5 class="card-title fw-bold text-success mb-2">${item.title}</h5>
              </div>
          </div>
          
         </a>`
    )
    .join("");

  // renderMenuCard fonksiyonuna verilen data bir dizidir.Bu dizinin dönülmesi ile elde edilen elemansa yine bir dizidir.Bu elde edilen dizi arayüze aktarıldığında elemanlar arasındaki "," arayüzde bozulmaya sebep olur çünkü dizi elemanları "," ile ayrılır.Bu bozulmayı düzeltmek içinse dizinin elemanları join metodu kullanarak boşluğa göre böleriz.
};

// Deatil container içöeriğini dinamik şekilde render layacak fonksiyon
const renderDetailPage = (product) => {
  //uiElement içerisindeki detaiDontainer html içeriğini belirle

  uiElements.detailContainer.innerHTML = `<section class="container my-5 shadow" style="max-width: 1100px;">
        
         <div class="d-flex align-items-center justify-content-between mt-5 gap-2 py-3 px-2">
          <a href="./index.html" class="text-success fs-4"><i class="bi bi-house-fill"></i
          ></a>

          <div class="detail-breadcurmb ms-2">
            <span class="text-muted">detail /</span>
            <span class="text-muted">${product.category} /</span>
            <span >${product.title}</span>
            
          </div>
         </div>

        
          <div class="row p-5 g-5 align-items-center">
            <div class="col-12 col-md-5 mb-4">
              <img src="${
                product.img
              }" alt="detail-image" class="img-fluid rounded-4 w-100 shadow detail-img">
            </div>
            <div class="col-12 col-md-7 mb-4">
              <h2 class="fw-bold text-success mb-3">${product.title}</h2>
              <div class="mb-3">
                <span class="badge bg-warning text-dark fs-6 px-3 py-2 text-capitalize me-2">${
                  product.category
                }</span>
                <span class="badge bg-light text-success fs-6 px-3 py-2 text-capitalize">Price: $${product.price.toFixed(
                  2
                )}</span>
              </div>
              <p class="lead text-muted mb-4">
               ${product.desc}
              world. Simply irresistible!
              </p>
              <button class="btn btn-success shadow px-4 py-2 fw-semibold">
                Order Now
              </button>
            </div>
          </div>

      </section>`;
};

//Ürün bulunamadığında rürün bulunamadığı içeriği render edlicek fonk
const renderNotFound = () => {
  uiElements.detailContainer.innerHTML = `<section class ="container my-5" style="max-width:800px">
<div class="text-center">
<img src="https://cdn-icons-png.flaticon.com/512/2748/2748558.png" class="img-fluid mb-4"/>
<h2 class="text-danger fw-bold fs-1">Product not founded !</h2>
<p class="text-muted mb-4 lead">The product you are looking is not available !</p>
<a href="./index.html" class="btn btn-danger px-3 py-2 shadow fw-bold">Go to home page</a>
</div>
</section>`;
};

export { uiElements, renderMenuCard, renderDetailPage, renderNotFound };
