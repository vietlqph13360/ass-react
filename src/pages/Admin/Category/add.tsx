import React from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Form, Input, Select, message } from 'antd'
import { useNavigate } from "react-router-dom";
import { createCategory } from "../../../api/category";

const AddCategoryPage: React.FC = () => {
	const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);

		try {
			await createCategory(values)
			message.success("Tạo mới thành công")
			navigate("/admin/categories")
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={14}>
					<Typography.Title level={5}>Thông tin danh mục</Typography.Title>
					<Form
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="key"
							labelCol={{ span: 24 }}
							label="Key danh mục"
							rules={[{ required: true, message: 'Key sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên danh mục"
							rules={[{ required: true, message: 'Tên danh mục' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới
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

export default AddCategoryPage