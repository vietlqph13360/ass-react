import { PhoneOutlined, LaptopOutlined, TabletFilled, DatabaseOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import { MenuProps, Typography } from 'antd';
import { Input, Layout, Menu } from 'antd';
import React from 'react';
import { Link, Outlet } from 'react-router-dom'
import styled from 'styled-components';

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  { key: "products", icon: <AppstoreOutlined />, label: <Link to="/admin/products">Tất cả sản phẩm</Link> },
  {
    key: "categories", icon: <DatabaseOutlined />,
    label: <Link to="/admin/categories">Danh mục</Link>
  },
]

const { Search } = Input;

const App: React.FC = () => (
  <Layout>
    <HeaderCustom>
      <Typography.Title level={3} style={{ margin: 0, lineHeight: '40px', color: "#141313" }}>
        <Link to='/admin' style={{ color: '#fff'}}>
           Trang chủ 
        </Link>
      </Typography.Title>
      <Search
        placeholder="input search text"
        style={{ marginLeft: 100, width: 400 }}
      />
    </HeaderCustom>
    <Layout>
      <Sider
        collapsible={true}
        width={200}
        className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0, paddingTop: '20px' }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default App;