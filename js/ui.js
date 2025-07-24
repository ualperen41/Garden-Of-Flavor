// Arayüzden eleman çekme işlemi bir obje içinde yap

const uiElements = {
    menuList:document.querySelector("#menu-list"),
};

// Menu elemanını render edicek fonksiyon

const renderMenuCard = (data) => {
  // Dışarıdan alınan data'nın içerisindeki her elemanı dön ve bir html oluştur.Oluşturulan bu html'i uiElements içerisindeki menuList'in Html'i olarak belirle
  uiElements.menuList.innerHTML = data
uiElements.menuList.innerHTML =  data.map((item) => `<a  href ="../detail.html?id=${item.id}"class="col-md-6 col-lg-4 mb-4 text-decoration-none">
          <div class="card menu-card">
            <!-- Top -->
             <div class="position-relative">
                <img
                  src="${item.img}"
                  class="card-img-top "
                  alt="menu-image"
                />
                <span class="badge bg-success position-absolute top-0 start-0 m-3 px-3 py-2 text-capitalize menu-card-badge">${item.category}</span>
                <span class="badge bg-white text-success fw-bold position-absolute top-0 end-0 m-3 px-3 py-2 menu-card-price">$${item.price.toFixed(2)}</span>
             </div>
             <!-- Body -->
              <div class="card-body">
<h5 class="card-title fw-bold text-success mb-2">${item.title}</h5>
              </div>
          </div>
          
         </a>`).join("")

         // renderMenuCard fonksiyonuna verilen data bir dizidir.Bu dizinin dönülmesi ile elde edilen elemansa yine bir dizidir.Bu elde edilen dizi arayüze aktarıldığında elemanlar arasındaki "," arayüzde bozulmaya sebep olur çünkü dizi elemanları "," ile ayrılır.Bu bozulmayı düzeltmek içinse dizinin elemanları join metodu kullanarak boşluğa göre böleriz.
};

export {uiElements,renderMenuCard};