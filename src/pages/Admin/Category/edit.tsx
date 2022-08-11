import React, { useEffect } from "react";
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import { createProduct, editProduct, getAll, getProduct } from "../../../api/product";
import { useNavigate, useParams } from "react-router-dom";
import { editCategory, getCategory } from "../../../api/category";

const EditCategoryPage: React.FC = () => {
	const {id} = useParams()
	const navigate = useNavigate()
  const [form] = Form.useForm();

	const onFinish = async (values: any) => {
		try {
			await editCategory(id, values)
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
    const data = await getCategory(Number(id))
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
				<Col span={14}>
					<Typography.Title level={5}>Thông tin danh mục</Typography.Title>
					<Form
            form={form}
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
							rules={[{ required: true, message: 'Key danh mục không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên danh mục"
							rules={[{ required: true, message: 'Tên danh mục không được trống' }]}
						>
							<Input size="large" />
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

export default EditCategoryPage