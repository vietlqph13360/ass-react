import axios from 'axios'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'
import LogoImage from '../../assets/images/logo.png'
import { login } from '../../features/user/userSlice'

type Props = {}

type SigninType = {
  email: string,
  password: string
}

const Login = (props: Props) => {
  const { register, handleSubmit, formState: {errors} } = useForm<SigninType>()
  const navigate = useNavigate();
  const dispatch = useDispatch()

  const onSubmit: SubmitHandler<SigninType> = async (dataInput) => {
    try {
      const {data} = await axios.post("http://localhost:8000/api/signin", dataInput)
     
      dispatch(login(data))
        navigate("/")
    } catch (error) {
      console.log(error)
    }
  } 

  return (  
    <Container>
      <div className=" items-center flex h-[100vh]">
        <div className="border border-gray-300 flex m-auto w-[800px] rounded-[10px]">
          <div className=" w-[600px] h-[500px] bg-[#fff] ">
          <form onSubmit={handleSubmit(onSubmit)} className="my-12 mx-14"> 
            <div className="px-4 py-2 bg-white space-y-6 sm:p-6">
              <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Email</label>
                  <input type="text" {...register("email", { required: true })} className="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                  <div className="text-red-600">{errors.email?.type === 'required' && "This field is required"}</div>
                  </div>
              </div>
              <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-3">
                  <label className="block text-sm font-medium text-gray-700">Password</label>
                  <input type="password" {...register("password", { required: true })} className="py-2 px-2 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 mt-1 block w-full sm:text-sm border border-gray-300 rounded-md" />
                  <div className="text-red-600">{errors.password?.type === 'required' && "This field is required"}</div>
                  </div>
              </div>
              <div>
              <button
                type="submit"
                className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#FF424E] hover:bg-[#d64e57] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                Login
              </button>
              <div className="text-lg text-center my-4">
                Hãy đăng nhập bằng
              </div>
              <div className='flex px-[100px]'>
                <img className='w-[50px] mr-4' src="https://s3-alpha-sig.figma.com/img/3739/446b/026d49c9ef6b8b3d77a50cc01529a894?Expires=1660521600&Signature=Y4WZQQ2IcOLv7DHsyO4ca1DCTgsZokYxDmB9pJUw-uNbrEOnPhBWJBu8k1LIydtemTHJ4MQMlKeCnYZKFY1YZchlBUaBzi2v8u3sNdPj9-oubqj692~PKyyjknrzZaT5-NWZvJw1nzTtgg6aQ0orr-ER-eBtwG7pG7T3IZXCZ85q3O-8XW4atuxCfTRQs1R5sJS4AewmNjJPaCk1Asjt6JIZ8WeQboa-zh9JYgWuKHFEnI~aoVy8uOYa9SAsGDyg9fiSD1WxkiK9s6EMrof4EtKGwNUs6cqhzsbeiGeiUoJFCcbMy2kwgA7OLQ1YMPmKEqpYZHHOqI4Tb4Is1vOsxw__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
                <img className='w-[50px]' src="https://s3-alpha-sig.figma.com/img/e82c/9104/aa8f45b63056c3c151668a2acd75e019?Expires=1660521600&Signature=WSFRa87EXzIAREVOK6Wb2WZv7biOGhPm-sd5HE-mxnYvWQrVoabMr5wwkDz8rRSWwAWXKVCcodCfFjBigV2Ca2TWYyh8E78XUi7zQLAw8N~zvDZ-BVy7JhqZxBrUF1Q52HLNOdwDsoN-8zXKPq6kDKjkfbzdDTv0kKruq-EDUiZm0jlOVH-v6n~1dwW2nuWt~EUdyOpxaapPC7NoVUxY-tiLzNkkeeH-t~dfRKUJmSEkmDxK6LHtnqt9Y4E6fQTwcnejaxC07w~FGefLXH9lDGJcv0TH4vi-il3vp157bTN~iEGNOiUwGpT~8SXd-s73sGM4sazS95fn9vlsmkDG7g__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA" alt="" />
              </div>
              <div>
              </div>
            </div>
            </div>
          </form>
          </div>
          <div className="bg-[#f8f8f8]  w-[350px] flex items-center px-8">
            <img src={LogoImage} alt="" className='w-full' />
          </div>
        </div>
      </div>
    </Container>
  )
}

const Container = styled.div`
  margin: auto;
  background: #E5E5E5;
`

export default Login