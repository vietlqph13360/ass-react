import axios from 'axios'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { RootState } from '../../app/rootReducer'
import ProductCartItem from '../../components/ProductCartItem'

type Props = {}

const CartPage = (props: Props) => {
  const products = useSelector((state: RootState) => state.cart.value)

  console.log(products);

  const total = products.reduce((previousValue, currentValue) => {
    return previousValue + currentValue.saleOffPrice * currentValue.quantity
  }, 0)

  return (
    <Container>
      <div  className='text-3xl text-[#D70018] text-center mb-6' >
        Giỏ hàng
      </div>
      <div>
        {products.map(product => {
          return (
            <ProductCartItem product={product}/>
          )
        })}
      </div>
      <div className='flex text-xl text-[#000] my-8 justify-between' >
        <div>Tổng tiền tạm tính</div>
        <div>{total}đ</div>
      </div>
      <div className='text-center text-[#fff] text-lg bg-[#D70018] rounded-[10px] py-4 mb-2'>
        Tiến hành đặt sản phẩm
      </div>
      <div className='text-center text-[#D70018] text-lg border-[1px] border-rose-600 rounded-[10px] py-4 mb-2'>
        <Link to="/">
          Chọn thêm sản phẩm khác
        </Link>
      </div>
    </Container>  
  )
}

const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 40px 200px;
`

export default CartPage