import React from 'react';
import { UserOutlined, SearchOutlined } from '@ant-design/icons';
import { AutoComplete as AutuCompleteAnt, Input } from 'antd';
import styled from 'styled-components';

const AutoComplete: React.FC = () => (
    <AutuCompleteAnt
        dropdownClassName="certain-category-search-dropdown"
        dropdownMatchSelectWidth={500}
        style={{width: 500}}
    >
        <WrapperInput size="large" placeholder="tìm kiếm" prefix={<SearchOutlined />} />
    </AutuCompleteAnt>
);

const WrapperInput = styled(Input)`
    border: none;
    border-radius: 10px;
    width: 500px;
`

export default AutoComplete;