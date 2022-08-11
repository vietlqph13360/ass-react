import { Button, Select, Switch, Typography } from "antd";
import Table, { ColumnsType } from "antd/lib/table";
import React, { useEffect, useState } from "react";
import { EditOutlined, DeleteOutlined, PlusOutlined } from '@ant-design/icons';
import { Link } from "react-router-dom";
import { deleteCategory, getAll } from "../../../api/category";
import { Option } from "antd/lib/mentions";
import styled from "styled-components";


interface DataType {
    id: number;
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}

const onChange = (checked: boolean) => {
    console.log(`switch to ${checked}`);
};

const CategoriesPage = () => {
        
    const columns: ColumnsType<DataType> = [
        {
            title: 'Tên danh mục',
            dataIndex: 'name',
            key: 'name',
            render: text => <div>{text}</div>,
        },
        {
            title: 'Ẩn/hiện',
            dataIndex: 'status',
            key: 'status',
            render: text => <Switch defaultChecked onChange={onChange} checked={text} />,
        },
        {
            title: 'Thao tác',
            dataIndex: 'action',
            key: 'action',
            render: (text, record) => (
                <span style={{display: 'flex', minWidth: '60px', padding: '0 10px', justifyContent: "space-between"}}>
                    <Link to={`/admin/categories/edit/${record.id}`}><EditOutlined/></Link>
                    <div>
                        <DeleteOutlined onClick={() => onDelete(record.id)} />
                    </div>
                </span>
            ),
        },
    ];

    const [products, setProducts] = useState([])
    const [dataTable, setDataTable] = useState([])

    const getAllProducts = async () => {
        const {data} = await getAll() 

        setProducts(data)

        setDataTable(data)
    }

    useEffect(() => {        
        getAllProducts()
    }, [])


    const handleFilter = (value: string) => {
        console.log(value, products);
        const filterData = products.filter((item: any) => item.category == value)
        setDataTable(filterData)
    };

    const onDelete = async (id: number) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa?')) {
            try {
                await deleteCategory(id)
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
                    Tất cả danh mục
                </Typography.Title>
                <Link to="/admin/categories/add">
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

export default CategoriesPage