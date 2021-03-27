import React from 'react';
import { withRouter } from 'react-router-dom';
import 'antd/dist/antd.css';
import './index.css';
import { Upload, message, Layout, Button, Input, Space } from 'antd';
import {
    UploadOutlined,
} from '@ant-design/icons';
import { createBrowserHistory } from 'history';

const history = createBrowserHistory({
    forceRefresh: true
  });

const props = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
    headers: {
        authorization: 'authorization-text',
    },
    onChange(info) {
        if (info.file.status !== 'uploading') {
            console.log(info.file, info.fileList);
        }
        if (info.file.status === 'done') {
            message.success(`${info.file.name} file uploaded successfully`);
        } else if (info.file.status === 'error') {
            message.error(`${info.file.name} file upload failed.`);
        }
    },
};

const { Search } = Input;

const { Content } = Layout;

const onSearch = value => {
    console.log(value);
    history.push({ pathname: '/SearchPaperList' })
};

const CreateSearchPage = () => {

    return (
        <div>
            <Content
                className="site-layout-background"
                style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                }}
            >
                <img id="homePage-img" src="./img/6.png" alt="" />
                <Space id="homePage-search-button" >
                    <Search placeholder="input search text" style={{ width: 420 }} onSearch={onSearch.bind(this)} enterButton />
                </Space>
                <div id="homePage-upload">
                    <Upload {...props} >
                        <Button icon={<UploadOutlined />}>Click to Upload</Button>
                    </Upload>
                </div>
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
                <br />
            </Content>
        </div>
    );
};

export default withRouter(CreateSearchPage);