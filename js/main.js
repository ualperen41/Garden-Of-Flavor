import getMenu from "./api.js";
import { renderMenuCard } from "./ui.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Api isteği at
  const menuData = await getMenu();

  // Hangi sayfada olduğumuza karar ver.Eğer ana sayfadaysak buna göre işlemler detay sayfasında ise buna göre işlemler yapacağız
  if (window.location.pathname.includes("/index.html")) {
   renderMenuCard(menuData);
  } else {
    console.log(`Detay sayfası`);
  }
});
