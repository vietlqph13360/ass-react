import React, {useEffect, useState} from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import styled from "styled-components";
import { Typography, Button, Table, Switch, Select, message } from 'antd';
import { Link } from 'react-router-dom'
import type { ColumnsType } from 'antd/es/table';
import { deleteProduct, editProduct, getAll } from "../../../api/product";
import { getAll as getCategories } from "../../../api/category";
import { Option } from "antd/lib/mentions";
const { Paragraph } = Typography

interface DataType {
    id: number;
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}


const ProductAdminPage = () => {
    
    const onChange = async (id: any, checked: boolean) => {
        await editProduct(id, {status: checked})
    
        const newProduct = products.map(product => {
            if (product.id === id) {
                product.status = checked
            }
            return product
        })
        message.success("Thay đổi trạng thái thành công")
        setProducts(newProduct)
        setDataTable(newProduct)
    };
        
    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Giá khuyến mãi',
            dataIndex: 'saleOffPrice',
            key: 'saleOffPrice',
        },
        {
            title: 'Ảnh',
            dataIndex: 'image',
            key: 'image',
            render: (text) => (
              <img src={`${text}`} alt="" style={{ maxWidth: '200px'}}/>
            ),
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description',
            render: text => <div style={{ maxWidth: '600px'}}>{text}</div>,
        },
        {
            title: 'Ẩn/hiện',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => <Switch defaultChecked onChange={() => onChange(record.id, !text)} checked={text} />,
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span style={{display: 'flex', minWidth: '60px', padding: '0 10px', justifyContent: "space-between"}}>
                    <Link to={`/admin/products/edit/${record.id}`}><EditOutlined/></Link>
                    <div>
                        <DeleteOutlined onClick={() => onDelete(record.id)} />
                    </div>
                </span>
            ),
        },
    ];

    const [products, setProducts] = useState([])
    const [dataTable, setDataTable] = useState([])
	const [categories, setCategorys] = React.useState<any[]>([])

    const getAllProducts = async () => {
        const {data} = await getAll() 

        setProducts(data)

        setDataTable(data)
    }

    const getAllCategories = async () => {
		const {data} = await getCategories()
		setCategorys(data)
	}

    const changeStatusProduct = async (id: number, status: boolean) => {
    } 

    useEffect(() => {        
        getAllProducts()
        getAllCategories()
    }, [])


    const handleFilter = (value: string) => {
        console.log(value, products);
        if (value == "all") {
            console.log(value);
            return setDataTable(products)
        } else {
            const filterData = products.filter((item: any) => item.category == value)
            setDataTable(filterData)
        }
    };

    const onDelete = async (id: number) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            try {
                await deleteProduct(id)
                const newData = dataTable.filter((item: any) => item.id !== id)
                setDataTable(newData)
            } catch (error) {
                return error
            }
        }
    }
    

    return (
        <>
            <Breadcrumb>
                <Typography.Title level={4} style={{ margin: 0, lineHeight: '40px' }}>
                    Tất cả sản phẩm
                </Typography.Title>
                <Filter>
                    <Typography.Title level={4} style={{ margin: 0, lineHeight: '40px' }}>
                        Bộ lọc
                    </Typography.Title>
                    <Select
                        style={{ width: '40%', marginLeft: '20px' }} 
                        size="large"
                        onChange={handleFilter}
                    >
                        <Option value="all">All</Option>
                        {categories.map((category) => {
                            return (
                                <Option value={category.name}>{category.name}</Option>
                            )
                        })}
                    </Select>
                </Filter>
                <Link to="/admin/products/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table columns={columns} dataSource={dataTable} />
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin: 20px 0;
`

const Filter = styled.div`
    display: flex;
    flex: 1;
    margin: 0 80px;
    justify-content: flex-start;
`

export default ProductAdminPage