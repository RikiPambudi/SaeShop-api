const user = {
  id: 1,
  name: 'Riki Setiyo Pambdudi',
  username: 'rikisetiyo22',
  email: 'Rikisetiyopambudi@gmail.com',
  address: {
    street: 'Perumahan Cahaya Darussalam 3',
    suite: 'B5 No. 3',
    city: 'Bekasi Timur',
    zipcode: '92998',
    geo: {
      lat: '-37.3159',
      lng: '81.1496',
    },
  },
  phone: '081554579425',
  website: 'https://id.linkedin.com/in/riki-setiyo-pambudi',
  company: {
    name: '-',
    catchPhrase: '-',
    bs: '-',
  },
}

const product = {
  productId: 1,
  name: 'Barebones Gaming System AMD Ryzen 9',
  price: 'Rp. 20,000,000',
  review: '5',
  countReview: 14.534,
  reviewer: [
    {
      reviewerName: 'Riki Setiyo Pambudi',
      reviewMessage:
        'Produk: Barang pesanan sesuai dengan deskripsi, pengiriman cepat, packing rapi, barang tidak rusak, terima kasih',
      reviewDate: '2021-08-01',
    },
  ],
  description:
    'AMD - Ryzen 9 9900X ( 3 Thn ) PREDATOR Hermes RGB 32GB (2x16GB) DDR5 7200MHz Black ( Lifetime ) Lexar - Lexar NM1090 1TB with Heatsink M.2 2280 PCIe Gen 5×4 NVMe SSD ( 5Thn ) NZXT - C1200 Gold Matte Black 1200 Watt 80 Plus Gold | PA-2G1BB-EU ( 10Thn )',
}

const productList = [
  {
    id: 1,
    name: 'Barebones Gaming System AMD Ryzen 9',
    price: 20000000,
    image: 'https://i.ebayimg.com/images/g/xgQAAOSw4QlnAxFf/s-l500.jpg',
  },
  {
    id: 2,
    name: 'Ikan Cupang',
    price: 400000,
    image: 'https://www.blibli.com/friends-backend/wp-content/uploads/2023/02/B100138-cover-scaled.jpg',
  },
  {
    id: 3,
    name: 'Laptop Asus ROG',
    price: 36000000,
    image: 'https://cdn0-production-images-kly.akamaized.net/t6ZTLCdJ6b8sqdmj3_T79RAxVUc=/640x360/smart/filters:quality(75):strip_icc():format(webp)/kly-media-production/medias/1739680/original/043025800_1508036887-rog-strix.jpg',
  },
]

const loginSuccess = {
  message: 'Login success',
  isSuccess: true,
  code: 200,
}

const loginFailed = {
  message: 'Login Failed',
  isSuccess: false,
  code: 401,
}

export { user, product, loginSuccess, loginFailed, productList }
