// 상품 데이터
const p1 = {
  title: '에어팟',
  price: 200000,
  desc: '에어팟으로 노래를 들어요.',
  image: 'https://www.apple.com/v/airpods/v/images/overview/airpods_3rd_gen__dhy5bknhvtqq_large.jpg'
};

const p2 = {
  title: '족발',
  price: 40000,
  desc: '냠냠쩝쩝 족발은 앞다리야.',
  image: 'https://i.namu.wiki/i/I63sEiy-8vUXVhV-I0IZiS9ntT0INuKXgBYAE3QqUvOlToSoEqSgpvEbUmxsFTXtoBRN4WJolyAFEAlDdeZFhQ.webp'
};

// 서버에서 전송된 JSON
const productList = {
  products: [
    p1,
    p2,
    {
      title: '요구르트',
      price: 500,
      desc: '요거어어어어어어르트',
      image: 'https://blisgo.com/wp-content/uploads/elementor/thumbs/%EC%9A%94%EA%B5%AC%EB%A5%B4%ED%8A%B8-%EB%B3%91-p5n5r18iqjwaho4l8dypfovtexj3hmml83x90jofls.jpg'
    }
  ],

  render(){
    const $prodList = document.createElement('ul');
    $prodList.classList.add('product-list');
    // 반복해서 li태그를 생성

    this.products.forEach(prod =>{
      const $prodLi = document.createElement('li');
      $prodLi.classList.add('product-item');
      $prodLi.innerHTML = `
        <div>
          <img src="${prod.image}" alt="${prod.title}">
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>${prod.price}원</h3>
            <p>${prod.desc}</p>
            <button>담기</button>
          </div>
        </div>
      `;

      $prodList.appendChild($prodLi);

    });

    // div#app 에 ul 추가
    document.getElementById('app').appendChild($prodList);

  }
};

productList.render();