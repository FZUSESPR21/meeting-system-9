import React from 'react';
import { withRouter } from 'react-router-dom';
import { Layout } from 'antd';
import { Form, Input, InputNumber, Button, Select } from 'antd';
import './index.css';
const { Content } = Layout;

const { Option } = Select;
const layout = {
    labelCol: {
        span: 4,
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
const CreateReferFormPage = () => {
    const [form] = Form.useForm();

    const onGenderChange = (value) => {
        switch (value) {
            case '论坛一':
                form.setFieldsValue({
                    note: 'Hi, man!',
                });
                return;

            case '论坛二':
                form.setFieldsValue({
                    note: 'Hi, lady!',
                });
                return;

            case '论坛三':
                form.setFieldsValue({
                    note: 'Hi there!',
                });
        }
    };

    const onFinish = (values) => {
        console.log(values);
    };

    const onReset = () => {
        form.resetFields();
    };

    return (
        <Content>
        <br />

                       <div>
                 <p id="account-list">发布通知</p>
               </div>

               <hr />
               <br />
               <br />
               <br />
            <Form {...layout} form={form} name="control-hooks" onFinish={onFinish}>

                <Form.Item
                    name="gender"
                    label="分论坛名称："
                    rules={[
                        {
                            required: true,
                        },
                    ]}
                >
                    <Select
                        placeholder="Select a option and change input text above"
                        onChange={onGenderChange}
                        allowClear
                    >
                        <Option value="male">male</Option>
                        <Option value="female">female</Option>
                        <Option value="other">other</Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    noStyle
                    shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
                >
                    {({ getFieldValue }) =>
                        getFieldValue('gender') === 'other' ? (
                            <Form.Item
                                name="customizeGender"
                                label="Customize Gender"
                                rules={[
                                    {
                                        required: true,
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                        ) : null
                    }
                </Form.Item>
                <br />
                <br />
                <Form.Item name={['user', 'introduction']} label="通知内容：">
                    <Input.TextArea />
                </Form.Item>


                <br />
                <Form.Item {...tailLayout}>
                
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button htmlType="button" onClick={onReset}>
                        Reset
                    </Button>
                </Form.Item>
            </Form>
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
                <br />
                <br />
        </Content>
    );
};

export default withRouter(CreateReferFormPage);