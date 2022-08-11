import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import UploadImage from "../../../components/Product/UploadImage";
import { createProduct, editProduct, getAll, getProduct } from "../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import { useQuery } from "react-query";

const { TextArea } = Input
const { Option } = Select;

const EditProductPage: React.FC = () => {
	const {id} = useParams()
	const navigate = useNavigate()
  const [form] = Form.useForm();

	const onFinish = async (values: any) => {
		try {
			await editProduct(id, values)
			message.success("Tạo mới thành công")
			navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	const onFinishFailed = (err: any) => {
		return err
	};

  const onFill = (data: any) => {
    form.setFieldsValue({...data});
  };

  const fetchData =  async () => {
    const data = await getProduct(Number(id))
    onFill(data?.data);
  }

  useEffect(() => {
    fetchData()
  }, [])
	
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={3} style={{ margin: 0 }}>
          Chỉnh sửa
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={20}>
				{/* <Col span={10}>
					<UploadImage />
				</Col> */}
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
            form={form}
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
									rules={[{ required: true, message: 'Giá sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Giá sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							<Col span={12}>
								<Form.Item
                  name="category"
									label="Phân loại"
									rules={[{ required: true }]}
								>
									<Select
                    style={{ width: '100%' }} 
                    size="large"
                  >
										<Option value="phone">Điện thoại</Option>
										<Option value="laptop">Laptop</Option>
										<Option value="accessories" disabled>
											Phụ kiện
										</Option>
										<Option value="tablet">Máy tính bảng</Option>
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

export default EditProductPage