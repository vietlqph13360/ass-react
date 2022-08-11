import { useState } from "react"
import { useDispatch } from "react-redux"
import { addCart, deleteCart } from "../features/cart/cartSlice"
import { ProductType } from "../types/Product"
import CloseIcon from "../assets/images/photo_2022-08-05_09-02-01.jpg"

type Props = {
  product: {
    product: ProductType,
    quantity: number,
  }
}

const ProductCartItem = ({product}: ProductType) => {
  const [ count, setCount ] = useState<number>(product.quantity)
  const dispatch = useDispatch()

  const downQuantity = () => {
    if (count <= 1) return
    setCount(count - 1)
    const newProduct = {...product}
    newProduct.quantity = count
    console.log(newProduct)
    dispatch(addCart(newProduct))
  }

  const upQuantity = () => {
    setCount(count + 1)
    const newProduct = {...product}
    newProduct.quantity = count
    console.log(newProduct)
    dispatch(addCart(newProduct))
  }

  const remove = (id: number) => {
    console.log(id)
    dispatch(deleteCart(id))
  }

  return (
    <div className='flex mb-4'>
      <div className='w-[300px]'>
        <img className='w-full' src={product.image} alt="" />
      </div>
      <div className='ml-8 flex-1'>
        <div className='text-2xl my-2 flex justify-between'>
          <div>{product.name}</div>
          <div className='mr-2  flex'>
            <img className="m-auto" src={CloseIcon} onClick={() => remove(product.id)} />
          </div>
        </div>
        <div className="flex justify-between my-2  w-[200px]">
          <div className="text-[#D70018] mr-4 text-lg">{product.originalPrice}đ</div>
          <div className="text-[#707070] text-base leading-[30px]">{product.saleOffPrice}đ</div>
        </div>
        <div className='flex my-4'>
          <div>Chọn số lượng</div>
          <div className="flex border-[1px] rounded ml-4">
            <button className="w-6 rounded bg-white" onClick={() => downQuantity()}>-</button>
            <input className="w-16 border-t-1 border-b-1 text-center" value={count}/>
            <button className="w-6 rounded bg-white" onClick={() => upQuantity()}>+</button>
          </div>
        </div>
        <div className="bg-[#E5E7EB] p-3 my-2">
        <div>- Chương trình khuyến mại:</div>
        <div>Dịch vụ phòng chờ hạng thương gia tại sân bay</div>
        <div>Ưu đãi Galaxy gift lên đến 1.700.000đ (VieON VIP HBO GO, Zing MP3, Phúc Long, Galaxy Play)</div>
        </div>
      </div>
    </div>
  )
}

export default ProductCartItem