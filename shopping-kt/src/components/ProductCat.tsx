import { Avatar, Space, Table, Typography, Button, Flex,Row,Col } from "antd";
import { useEffect, useState } from "react";
import { getCategories } from "../API";
import axios from "axios";
import { BrowserRouter as Router, Route, Routes,Link } from 'react-router-dom';
import NewProd from "../pages/NewProd";
interface Category {
  key: number;
  name: string;
  image: string;
}

function ProductCat(): JSX.Element {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataSource, setDataSource] = useState<Category[]>([]);

  useEffect(() => {
    setLoading(true);
    getCategories().then((res) => {
      setDataSource(res);
      setLoading(false);
    });
  }, []);
  const handleView = (record) => {
    // Handle view action
    console.log("View action for record:", record);
  };
  
  const handleEdit = (record) => {
    // Handle edit action
    console.log("Edit action for record:", record);
  };
  
  const handleDelete = async (record) => {
    try {
      // Send a DELETE request to the API endpoint with the category ID
      await axios.delete(`https://api.escuelajs.co/api/v1/categories/${record.id}`);
      console.log(`Category with ID ${record.id} deleted successfully`);
      
      setLoading(true); // Set loading state to true to display the loading spinner
    getCategories().then((res) => {
      setDataSource(res);
      setLoading(false); // Set loading state to false after updating the data source
    });
  } catch (error) {
    console.error("Error deleting category:", error);
  }
  };
  
  return (
   
    <Space size={20} direction="vertical">
      <Row justify="space-between" align="middle">
      <Col>
        <Typography.Title level={4}>Category Management </Typography.Title>
      </Col>
      <Col>
      <Link to="/NewCat">
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
            title: "Category Name",
            dataIndex: "name",
          },
         
          {
            title: 'Action',
            key: 'action',
            render: (text, record) => (
              <span>
                <Button type="primary" onClick={() => handleView(record)}>View</Button>
                <Button type="default" onClick={() => handleEdit(record)}>Edit</Button>
                <Button type="default" onClick={() => handleDelete(record)}>Delete</Button>
              </span>
            ),
          },
        ]
        
      }
        dataSource={dataSource}
        pagination={{ pageSize: 5 }}
      />
      <Routes>
        <Route path="/newprod" element={<NewProd />} />
      </Routes>
      
    </Space>
    
  );
}

export default ProductCat;
