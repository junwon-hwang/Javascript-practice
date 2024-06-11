import  Product  from "./components/Product.js";
import ProductItem from "./components/ProductItem.js";

// 상품 데이터
const p1 = new Product('에어팟',200000,'에어팟으로 노래를 들어요.','https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg');
const p2 = new Product('족발',40000,'냠냠쩝쩝 족발은 앞다리야.','https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp')


// 서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2,
    new Product('요구르트',500,'요거어어어어어어르트','https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9A%94%EA%B5%AC%EB%A5%B4%ED%8A%B8-%EB%B3%91-p5n5r18iqjwaho4l8dypfovtexj3hmml83x90jofls.jpg'),
    new Product('쿼터파운더 치즈버거',10000,'쿼팥치 먹고싶다','https://image.fnnews.com/resource/media/image/2024/02/01/202402011816242243_l.jpg')
  ],

  render(){
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성

    this.products.forEach(prod =>{

      const product = new ProductItem(prod);

      $prodList.appendChild(product.render());

    });

    // div#app 에 ul 추가
    document.getElementById('app').appendChild($prodList);

  }
};

productList.render();