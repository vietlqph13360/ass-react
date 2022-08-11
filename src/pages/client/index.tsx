import React, { useEffect, useState } from "react";
import { Row, Col, Carousel } from 'antd'
import HomeMenu from "../../components/Home/Menu";
import styled from "styled-components";
import Banner1 from "../../assets/images/banner1.png";
import Banner2 from "../../assets/images/banner2.png";
import Banner3 from "../../assets/images/banner3.png";
import Banner4 from "../../assets/images/banner4.png";
import axios from "axios";
import { Link } from "react-router-dom";
import ListProduct from "../../components/ListProduct";
import { ProductType } from "../../types/Product";
import { RootState } from "../../app/rootReducer";
import { useSelector } from "react-redux";
import phone from "../../assets/images/phone.svg";
import ListBanner from "../../components/ListBanner";

const HomePage = () => {	
  const products: ProductType[] = useSelector((state: RootState) => state.products.value)
	const [product, setProduct] = useState<ProductType[]>([])
  const [newProduct, setNewProduct] = useState<ProductType[]>([])
  const [title, setTitle] = useState<string>('Điện thoại nổi bật nhất')

	useEffect(() => {
    const getNewProduct = async () => {
      const {data} = await axios.get(`http://localhost:8000/products?limit=4`)
			setProduct(data)
      setNewProduct(data)
    }
    getNewProduct()
  }, [])

	const selectCategoryProduct = async (category: string) => {
		const {data} = await axios.get(`http://localhost:8000/products?category=${category}`)
		setNewProduct(data)
	}

	return (
		<>
			<Container>
				<Row>
					<Col span={6}>
						<div>
							<div className="py-4 flex justify-between" onClick={() => selectCategoryProduct("phone")}>
								<div className="flex">
									<div className="min-w-[40px] flex m-auto">
										<svg width="15" height="25" viewBox="0 0 15 25" fill="none" xmlns="http://www.w3.org/2000/svg">
											<path d="M2.80486 0.609756H12.1951C13.2927 0.609756 14.2683 1.58537 14.2683 2.68293V22.1951C14.2683 23.2927 13.2927 24.2683 12.1951 24.2683H2.80486C1.7073 24.2683 0.731689 23.2927 0.731689 22.1951V2.68293C0.731689 1.58537 1.7073 0.609756 2.80486 0.609756Z" stroke="#231F20" stroke-width="1.07" stroke-miterlimit="10"/>
										</svg>
									</div>
									<div className="text-lg min-w-[120px]">Điện thoại</div>
								</div>
								<div className="flex m-auto">
									<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.69991 14.0625C1.46962 14.0625 1.23922 13.971 1.06372 13.7878C0.712158 13.4216 0.712158 12.8284 1.06372 12.4622L5.82866 7.50001L1.06372 2.53799C0.712158 2.17178 0.712158 1.57852 1.06372 1.21231C1.41528 0.8461 1.98481 0.8461 2.33638 1.21231L7.73638 6.83731C8.08794 7.20352 8.08794 7.79678 7.73638 8.16299L2.33638 13.788C2.16116 13.9717 1.93053 14.0625 1.69991 14.0625Z" fill="black"/>
									</svg>
								</div>
							</div>
							<div className="py-4 flex" onClick={() => selectCategoryProduct("tablet")}>
								<div className="flex">
									<div className="min-w-[40px] flex m-auto">
										<svg width="23" height="15" viewBox="0 0 23 15" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M21.3905 0.976425C21.4747 0.976425 21.6431 1.0606 21.6431 1.22895V13.266H1.69356V1.22895C1.69356 1.14478 1.77773 0.976425 1.94608 0.976425H21.3905ZM21.3905 0.134674H1.94608C1.35686 0.134674 0.851807 0.639725 0.851807 1.22895V14.1919H22.569V1.22895C22.569 0.639725 22.0639 0.134674 21.3905 0.134674C21.4747 0.134674 21.3905 0.134674 21.3905 0.134674Z" fill="#231F20"/>
										</svg>
									</div>
									<div className="text-lg min-w-[120px]">Laptop</div>
								</div>
								<div className="flex m-auto">
									<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.69991 14.0625C1.46962 14.0625 1.23922 13.971 1.06372 13.7878C0.712158 13.4216 0.712158 12.8284 1.06372 12.4622L5.82866 7.50001L1.06372 2.53799C0.712158 2.17178 0.712158 1.57852 1.06372 1.21231C1.41528 0.8461 1.98481 0.8461 2.33638 1.21231L7.73638 6.83731C8.08794 7.20352 8.08794 7.79678 7.73638 8.16299L2.33638 13.788C2.16116 13.9717 1.93053 14.0625 1.69991 14.0625Z" fill="black"/>
									</svg>
								</div>
							</div>
							<div className="py-4 flex" onClick={() => selectCategoryProduct("watch")}>
								<div className="flex">
									<div className="min-w-[40px] flex m-auto">
										<svg width="21" height="25" viewBox="0 0 21 25" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.31673 0.565613H17.5701C18.8145 0.565613 19.9457 1.58371 19.9457 2.94118V22.0588C19.9457 23.3032 18.9276 24.4344 17.5701 24.4344H3.31673C2.07238 24.4344 0.941162 23.4163 0.941162 22.0588V2.94118C1.05428 1.69683 2.07238 0.565613 3.31673 0.565613Z" stroke="#231F20" stroke-width="1.07" stroke-linecap="round" stroke-linejoin="round"/>
										</svg>
									</div>
									<div className="text-lg min-w-[120px]">Máy tính bảng</div>
								</div>
								<div className="flex m-auto">
									<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.69991 14.0625C1.46962 14.0625 1.23922 13.971 1.06372 13.7878C0.712158 13.4216 0.712158 12.8284 1.06372 12.4622L5.82866 7.50001L1.06372 2.53799C0.712158 2.17178 0.712158 1.57852 1.06372 1.21231C1.41528 0.8461 1.98481 0.8461 2.33638 1.21231L7.73638 6.83731C8.08794 7.20352 8.08794 7.79678 7.73638 8.16299L2.33638 13.788C2.16116 13.9717 1.93053 14.0625 1.69991 14.0625Z" fill="black"/>
									</svg>
								</div>
							</div>
							<div className="py-4 flex" onClick={() => selectCategoryProduct("accessory")}>
								<div className="flex">
									<div className="min-w-[40px] flex auto">
										<svg width="16" height="17" viewBox="0 0 16 17" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M3.44175 1.34885H12.5115C14.0231 1.34885 15.1859 2.51164 15.1859 4.02327V13.093C15.1859 14.6047 14.0231 15.7675 12.5115 15.7675H3.44175C1.93012 15.7675 0.767334 14.6047 0.767334 13.093V4.02327C0.767334 2.51164 1.93012 1.34885 3.44175 1.34885Z" stroke="#231F20" stroke-miterlimit="10"/>
										</svg>
									</div>
									<div className="text-lg min-w-[120px]">Đồng hồ</div>
								</div>
								<div className="flex m-auto">
									<svg width="8" height="15" viewBox="0 0 8 15" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M1.69991 14.0625C1.46962 14.0625 1.23922 13.971 1.06372 13.7878C0.712158 13.4216 0.712158 12.8284 1.06372 12.4622L5.82866 7.50001L1.06372 2.53799C0.712158 2.17178 0.712158 1.57852 1.06372 1.21231C1.41528 0.8461 1.98481 0.8461 2.33638 1.21231L7.73638 6.83731C8.08794 7.20352 8.08794 7.79678 7.73638 8.16299L2.33638 13.788C2.16116 13.9717 1.93053 14.0625 1.69991 14.0625Z" fill="black"/>
									</svg>
								</div>
							</div>
						</div>
					</Col>
					<Col span={18}>
						<Carousel autoplay>
							<Slider src={Banner1}/>
							<Slider src={Banner2}/>
							<Slider src={Banner3}/>
							<Slider src={Banner4}/>
						</Carousel>
					</Col>
				</Row>
        <Row className="mt-[40px]">
          <Col className="flex mt-4 flex-wrap">
						<ListProduct title="Sản phẩm nổi bật nhất" products={newProduct} />
          </Col>
        </Row>

				<div className="mt-[40px]">
          <div className="text-2xl">PHỤ KIỆN</div>
					<ListBanner/>
				</div>

				<div className="mt-[40px]">
          <div className="text-2xl">CHUYÊN TRANG THƯƠNG HIỆU</div>

					<Row className="my-4">
						<Col className="px-2" span={6}>
							<img className="rounded-[8px]"  src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/samsung.png" alt="" />
						</Col>
						<Col className="px-2" span={6}>
							<img className="rounded-[8px]" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/apple.png" alt="" />
						</Col>
						<Col className="px-2" span={6}>
							<img className="rounded-[8px]" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/SIS asus.png" alt="" />
						</Col>
						<Col className="px-2" span={6}>
							<img className="rounded-[8px]" src="https://cdn2.cellphones.com.vn/x/https://dashboard.cellphones.com.vn/storage/xiaomi.png" alt="" />
						</Col>
					</Row>
				</div>
			</Container>
		</>
	)
}

const Container = styled.div`
    max-width: 1200px;
    margin: auto;
`
	const Slider = styled.img`
		/* height: 300px;
		color: '#fff',;
		text-align: center;
		background-color: #364d79; */
	`

export default HomePage