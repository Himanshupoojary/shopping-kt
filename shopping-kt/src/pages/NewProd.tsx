import React from 'react';
import type { FormProps } from 'antd';
import { Button, Form, Input, Select } from 'antd';
import axios from 'axios'; // Import axios library

type FieldType = {
  productname?: string;
  productcateg: string;
  username1: string;
  username2: string;
};

// Make the onFinish function asynchronous by marking it as async
const onFinish: FormProps<FieldType>['onFinish'] = async (values) => {
  try {
    // Use await inside the asynchronous function
    await axios.post('https://api.escuelajs.co/api/v1/products/', { name: categoryName });
    setCategoryName(''); // Clear the input field after submission
  } catch (error) {
    console.error('Error creating category:', error);
  }
};

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = (errorInfo) => {
  console.log('Failed:', errorInfo);
};

const NewProd: React.FC = () => (
  <Form
    name="basic"
    labelCol={{ span: 9.5 }}
    wrapperCol={{ span: 16 }}
    style={{ maxWidth: 600 }}
    initialValues={{ remember: true }}
    onFinish={onFinish}
    onFinishFailed={onFinishFailed}
    autoComplete="off"
  >
    <Form.Item<FieldType>
      label="Product Name"
      name="productname"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item<FieldType>
      label="Product Category"
      name="productCat"
      rules={[{ required: true, message: 'Please input your password!' }]}
    >
      <Select
        defaultValue="men"
        style={{ width: 120 }}
        options={[
          { value: 'men', label: 'men' },
          { value: 'women', label: 'women' },
          { value: 'kids', label: 'kids' },
        ]}
      />
    </Form.Item>

    <Form.Item<FieldType>
      label="Product Name"
      name="username1"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>
    <Form.Item<FieldType>
      label="Product Name"
      name="username2"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Input />
    </Form.Item>

    <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
      <Button type="primary" htmlType="submit">
        Submit
      </Button>
    </Form.Item>
  </Form>
);

export default NewProd;
