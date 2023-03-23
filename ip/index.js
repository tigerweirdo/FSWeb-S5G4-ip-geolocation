//axios import buraya gelecek
import axios from "axios";
var benimIP;


// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl(){
	await axios({
		method: 'get',
		url: 'https://apis.ergineer.com/ipadresim',
	})
	.then(function (response) {
		return response.data
	})
	.then(function (a) {
		benimIP=a
	});
}				
// ------------ değiştirmeyin --------------


/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/<ipniz>
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/



//kodlar buraya gelecek
function cardInfo(info) {
	const newCard = document.createElement("div");
	newCard.classList.add("card");

	const image = document.createElement("img");
	image.setAttribute("src", info.ülkebayrağı)

	const card = document.createElement("div");
	card.classList.add("card-info");

	const iPAdress = document.createElement("h3");
	iPAdress.classList.add("ip");

	const country = document.createElement("p");
	country.classList.add("ulke");

	const LatLong = document.createElement("p");

	const city = document.createElement("p");

	const time = document.createElement("p");

	const money = document.createElement("p");

	const isp = document.createElement("p");


	newCard.append(image, card);

	card.append(iPAdress);
	card.append(country);
	card.append(LatLong);
	card.append(city);
	card.append(time);
	card.append(money);
	card.append(isp);


	iPAdress.textContent = info.sorgu;
	country.textContent = `${info.ülke} (${info.ülkeKodu})`
	LatLong.textContent = `Enlem: ${info.enlem}  Boylam: ${info.boylam}`;
	city.textContent = `şehir: ${info.şehir}`;
	time.textContent = `Saat dilimi: ${info.saatdilimi}`;
	money.textContent = `Para birimi: ${info.parabirimi}`;
	isp.textContent = `ISP: ${info.isp}`;

	return newCard;
}

const newCard = document.querySelector(".cards");


const connect = async function () {
	await ipAdresimiAl();
	axios
		.get("https://apis.ergineer.com/ipgeoapi/" + benimIP)
		.then((res) => {
			newCard.append(cardInfo(res.data));
		})
};

connect();
