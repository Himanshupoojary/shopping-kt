import React, { useState } from "react";
import type { FormProps } from "antd";
import { Button, Form, Input } from "antd";
import axios from "axios";
import { useNavigate } from 'react-router-dom';


type FieldType = {
  name: string;
  image: number;
};
// https://placeimg.com/640/480/any
const NewCat: React.FC = () => {
  const [form] = Form.useForm();
  const [loading, setLoading] = useState<boolean>(false);
  const navigateTo = useNavigate();

  const onFinish: FormProps<FieldType>["onFinish"] = async (values) => {
    setLoading(true);
    try {
      await axios.post("https://api.escuelajs.co/api/v1/categories/", {
        name: values.name,
        image: values.image,
      });
      form.resetFields();
      navigateTo('/category')
    } catch (error) {
      console.error("Error creating category:", error);
    } finally {
      setLoading(false);
    }
  };

  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Form
      form={form}
      name="basic"
      labelCol={{ span: 9.5 }}
      wrapperCol={{ span: 16 }}
      style={{ maxWidth: 600 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Category Name"
        name="name"
        rules={[{ required: true, message: "Please input category name" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Category image"
        name="image"
        rules={[{ required: true, message: "Please input your image string" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="primary" htmlType="submit" loading={loading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default NewCat;
