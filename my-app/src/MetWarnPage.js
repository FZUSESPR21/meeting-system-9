import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';

const { Content } = Layout;
const CreateWarnPage = () => {
    return (
        <Content>
        <div>请先登录！！！！！！！</div>
        </Content>
    );
};

export default withRouter(CreateWarnPage);