// Api a istek atacak fonksiyon


const getMenu = async () => {
    try {
 // Api a istek at
    const response = await fetch("../db.json");

    // Api dan gelem veriyi JSON dan Js nesnesine çevir
    const data = await response.json();

    console.log(data.menu);

    // Gelen veri içerisindeki menü yü return et
    return data.menu;
    } catch (error) {
        console.log(`Api Hatası: ${error}`);

        // Eğer hata varsa geriye boş bir dizi döner
        return [];
    };
    
   
};

export default getMenu;