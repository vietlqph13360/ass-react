import axios from 'axios'
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import styled from 'styled-components';
import { addCart } from '../../features/cart/cartSlice';
import ListProduct from '../../components/ListProduct';
import { ProductType } from '../../types/Product';

type Props = {}

const ProductPage = (props: Props) => {
  const [ product, setProduct ] = useState<any>({
    name: "",
    category: "",
    price: 0,
    img: "",
    desc: "",
  })
  const [otherProducts, setOtherProducts] = useState<ProductType[]>([]);
  const [ count, setCount ] = useState<number>(1)
  const { id } = useParams()
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const notify = () => toast("Successfully");
  
  useEffect(() => {
    const getProduct = async () => {
      const {data} = await axios.get(`http://localhost:8000/products/${id}`)
      setProduct(data)
      const {data: otherProduct} = await axios.get(`http://localhost:8000/products?category=${data.category}&_limit=4`)
      setOtherProducts(otherProduct)
    }
    getProduct()
  }, [])

  const downQuantity = () => {
    if (count <= 1) return
    setCount(count - 1) 
  }

  const upQuantity = () => {
    setCount(count + 1) 
  }

  const addCartProduct = async () => {
    const newCart = {
      ...product,
      quantity: count
    }
    dispatch(addCart(newCart))
    notify()
  }

  return (
    <Container>
      <div className="py-6">
        <section className="mt-2 text-gray-700 body-font overflow-hidden bg-white">
          <div className="container py-16 mx-auto">
            <div className="lg:w-4/5 mx-auto flex justify-between flex-wrap">
              <img className="lg:w-1/3 w-full object-cover object-center rounded border border-gray-200" src={product.image}/>
              <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{product.name}</h1>
                <div className="flex mb-4"></div>
               
                <div className="flex mt-6 pb-5 mb-5">
                  <span className="mr-3 w-[100px] items-center flex">Quantity</span>
                  <div className="title-font font-medium text-2xl text-gray-900">
                    <div className="flex justify-center ">
                      <svg onClick={() => downQuantity()} id="down-quantity" className="fill-current text-gray-600 w-3" viewBox="0 0 448 512"><path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" /></svg>
                      <input value={count} id="quantity" className="mx-2 border text-center w-8" type="text" defaultValue={1} />
                      <svg onClick={() => upQuantity()} id="up-quantity" className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
                        <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className="flex mt-6 pb-5 mb-5">
                  <span className="mr-3 w-[100px] flex items-center">Price</span>
                  <div className="flex justify-evenly">
                  <div className="text-[#D70018] mr-4 text-lg">{product.saleOffPrice} đ</div>
                </div>
                </div>
                <button onClick={() => addCartProduct()} className="flex mt-10 text-white bg-[#d70018] border-0 py-2 px-6 focus:outline-none rounded">Thêm vào giỏ hàng</button>
              </div>
            </div>
          </div>
        </section>
        <ListProduct title="Sản phẳm tương tự" products={otherProducts} />
      </div>
    </Container>
  )
}

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`

export default ProductPage