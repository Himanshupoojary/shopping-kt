import { Avatar, Space, Table, Typography, Button, Flex,Row,Col } from "antd";
import { useEffect, useState } from "react";
import { getCustomers } from "../API";

import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import NewProd from "../pages/NewProd";
interface Customer {
  key: string;
  image: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: {
    address: string;
    city: string;
  };
}

function ProductManagement(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Customer[]>([]);

    useEffect(() => {
      setLoading(true);
      getCustomers().then((res) => {
        setDataSource(res.users);
        setLoading(false);
      });
    }, []);

  return (
   
    <Space size={20} direction="vertical">
      <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={4}>ProductManagement </Typography.Title>
      </Col>
      <Col>
      <Link to="/newprod">
        <Button type="primary">Create</Button>
        </Link>
      </Col>
    </Row>
      <Table
        loading={loading}
        columns={[
          {
            title: "Photo",
            dataIndex: "image",
            render: (link: string) => <Avatar src={link} />,
          },
          {
            title: "First Name",
            dataIndex: "firstName",
          },
          {
            title: "LastName",
            dataIndex: "lastName",
          },
          {
            title: "Email",
            dataIndex: "email",
          },
          {
            title: "Phone",
            dataIndex: "phone",
          },
          {
            title: "address",
            dataIndex: "address",
            render: (address) => (
              <span>
                {address.address}, {address.city}
              </span>
            ),
          },
        ]}
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
      <Routes>
        <Route path="/newprod" element={<NewProd />} />
      </Routes>
      
    </Space>
    
  );
}

export default ProductManagement;
