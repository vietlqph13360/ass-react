import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import UploadImage from "../../../components/Product/UploadImage";
import { createProduct } from "../../../api/product";
import { useNavigate } from "react-router-dom";
import UploadTest from "../../../components/Product/UploadTest";
import { getAll } from "../../../api/category";

const { TextArea } = Input
const { Option } = Select;

const AddProductPage: React.FC = () => {
	const navigate = useNavigate()
	const [categories, setCategorys] = React.useState<any[]>([])
	const onFinish = async (values: any) => {
		const product = {
			...values,
			status: true,
		}

		try {
			const data = await createProduct(product)
			message.success("Tạo mới thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};

	const getAllCategories = async () => {
		const {data} = await getAll()
		setCategorys(data)
	}

	useEffect(() => {
		getAllCategories()
	}, [])

	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				{/* <Col span={10}>
					<UploadImage />
				</Col> */}
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="originalPrice"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[
										{ required: true, message: 'Giá sản phẩm' },
									]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, type: "number", min: 0, message: 'Giá sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="category"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{categories.map((category) => {
											return (
												<Option value={category.name}>{category.name}</Option>
											)
										})}
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="image"
							labelCol={{ span: 24 }}
							label="Ảnh"
							rules={[{ required: true, message: 'Ảnh' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const Label = styled.div`
	font-size: 13px;
`

export default AddProductPage