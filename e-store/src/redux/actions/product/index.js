import * as actionTypes from './types'
import axios from 'axios'

const productCategories = [
  {
    Id: 1,
    Category: 'Kids',
    SubCategory: [
      {
        Id: 1,
        Name: 'Dresses',
      },
      {
        Id: 2,
        Name: 'Jacket',
      },
    ],
  },
  {
    Id: 2,
    Category: 'Men',
    SubCategory: [
      {
        Id: 1,
        Name: 'TShirt',
      },
      {
        Id: 2,
        Name: 'Jacket',
      },
    ],
  },
]

const product = [
  {
    Id: 1,
    imageSrc: require('../../../assets/img/shop/shop-1.jpg'),
    name: 'Product 1',
    price: '$10.00',
  },
  {
    Id: 2,
    imageSrc: require('../../../assets/img/shop/shop-2.jpg'),
    name: 'Product 2',
    price: '$20.00',
  },
  {
    Id: 3,
    imageSrc: require('../../../assets/img/shop/shop-3.jpg'),
    name: 'Product 3',
    price: '$25.00',
  },
]

export const getProductCategories = () => async (dispatch) => {
  let tempCat = []
  await axios({
    method: 'get',
    url: 'http://localhost:5000/product/api/getCategories',
  })
    .then((res) => {
      console.log('RESPONSE FROM API', res.data)

      let parentCat = res.data.data.filter((x) => x.parentcategoryid === null)

      parentCat.map((item) => {
        let t = {
          Id: item.id,
          Category: item.category,
          SubCategory: res.data.data
            .filter((x) => x.parentcategoryid === item.id)
            .map((y) => {
              return {
                Id: y.id,
                Name: y.category,
              }
            }),
        }
        return tempCat.push(t)
      })
    })
    .catch((err) => {
      console.log('RESPONSE ERROR', err)
    })

  dispatch({
    type: actionTypes.PRODUCT_CATEGORY,
    data: tempCat,
  })
}

export const getProducts = () => async (dispatch) => {
  dispatch({
    type: actionTypes.PRODUCT,
    data: product,
  })
}
