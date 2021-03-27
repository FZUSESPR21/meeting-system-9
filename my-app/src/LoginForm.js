import React, { useState } from 'react';
import { Popconfirm, Checkbox, Button, Modal, Form, Input } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
import './index.css';
import { withRouter } from 'react-router-dom';
import './LoginForm.css';
import { TreeSelect } from 'antd';
import cookie from 'react-cookies';
import Http from "axios";
const treeData = [
    {
        title: 'Node1',
        value: '0-0',
        key: '0-0',
        children: [
            {
                title: 'Child Node1',
                value: '0-0-0',
                key: '0-0-0',
            },
        ],
    },
    {
        title: 'Node2',
        value: '0-1',
        key: '0-1',
        children: [
            {
                title: 'Child Node3',
                value: '0-1-0',
                key: '0-1-0',
            },
            {
                title: 'Child Node4',
                value: '0-1-1',
                key: '0-1-1',
            },
            {
                title: 'Child Node5',
                value: '0-1-2',
                key: '0-1-2',
            },
        ],
    },
];

const { SHOW_PARENT } = TreeSelect;
const layout = {
    labelCol: {
        span: 8,
    },
    wrapperCol: {
        span: 16,
    },
};

const tailLayout = {
    wrapperCol: {
        offset: 8,
        span: 16,
    },
};

const onFinish = (values) => {
    console.log('Success:', values);
};

const onRegisterFinish = (values) => {
    console.log('Success:', values);
};

const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
};

const GetResponse = () => {
    const axios = require('axios');

    // Make a request for a user with a given ID
    axios.get("http://zhenglinxuan.top:666/api/v1/login")
        .then(function (response) {
            // handle success
            if(response.Msg=="Success")
            cookie.save("loginState", "true", { path: "/" });
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        })
        .finally(function () {
            // always executed
        });

}

class CreateRegisterForm extends React.Component {
    state = {
        value: ['0-0-0'],
    };

    onChange = value => {
        console.log('onChange ', value);
        this.setState({ value });
    };

    render() {
        const tProps = {
            treeData,
            value: this.state.value,
            onChange: this.onChange,
            treeCheckable: true,
            showCheckedStrategy: SHOW_PARENT,
            placeholder: 'Please select',
            style: {
                width: '100%',
            },
        };
        return (
            <Form
                {...layout}
                name="basic"
                initialValues={{
                    remember: true,
                }}
                onFinish={onRegisterFinish}
                onFinishFailed={onFinishFailed}
            >
                <Form.Item
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item {...tailLayout} name="id">
                    <TreeSelect {...tProps} />
                </Form.Item>
                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                </Button>
                </Form.Item>
            </Form>
        )

    }
}

const CreateLoginForm = () => {
    // const [contant, setContant] = useState("");
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };
    return (
        <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
        >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                    prefix={<LockOutlined className="site-form-item-icon" />}
                    type="password"
                    placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Button type="primary" htmlType="submit" className="login-form-button" onClick={GetResponse}>
                    Log in
                </Button>
                Or
                <Button type="link"
                    onClick={() => {
                        setVisible(true);
                        // setContant(value);
                        // console.log(contant);
                    }}>
                    现在注册！
                </Button>
                <CollectionCreateRegisterForm
                    visible={visible}
                    onCreate={onCreate}
                    onCancel={() => {
                        setVisible(false);
                    }}
                />
            </Form.Item>
        </Form>
    )
};

const CollectionCreateLoginForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <CreateLoginForm />
        </Modal>
    );
};


const CollectionCreateRegisterForm = ({ visible, onCreate, onCancel }) => {
    const [form] = Form.useForm();
    return (
        <Modal
            visible={visible}
            title="Create a new collection"
            okText="Create"
            cancelText="Cancel"
            onCancel={onCancel}
            onOk={() => {
                form
                    .validateFields()
                    .then((values) => {
                        form.resetFields();
                        onCreate(values);
                    })
                    .catch((info) => {
                        console.log('Validate Failed:', info);
                    });
            }}
        >
            <CreateRegisterForm />
        </Modal>
    );
};

const LoginButton = () => {
    const [visible, setVisible] = useState(false);
    const onCreate = (values) => {
        console.log('Received values of form: ', values);
        setVisible(false);
    };
    return (
        <div id="login-button">
            <Button
                key="1"
                type="text"
                onClick={() => {
                    setVisible(true);
                }}
            >
                <p id="login-button-text">
                    登录
                </p>
            </Button>
            <CollectionCreateLoginForm
                visible={visible}
                onCreate={onCreate}
                onCancel={() => {
                    setVisible(false);
                }}
            />

        </div>
    );
}

const QuitAccount = () => {
    cookie.save("loginState", "false", { path: "/" })
}

const IsLogin = () => {
    if (cookie.load("loginState") == "true") {
        return (<div id="account-button">
            <Popconfirm title="确定退出账号吗？" okText="Yes" cancelText="No" onConfirm={() => {
                     QuitAccount();
                  }   
                }>
                <Button type='text' 
                
                >Delete</Button>
            </Popconfirm>
        </div>);
    }
    else {
        return (<LoginButton />);
    }
}

const CollectionsPage = () => {

    return (
        <IsLogin />

    );
}

export default withRouter(CollectionsPage);
