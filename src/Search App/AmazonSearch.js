import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import { data } from './data';

function AmazonSearch() {
  const [contacts, setContacts] = useState(data);
  const [search, setSearch] = useState('');


  return (
    <div>
      <Container>
        <h1 className='text-center mt-4'>Amazon Sales Data</h1>
        <Form>
          <InputGroup className='my-3'>

            {/* onChange for search */}
            <Form.Control
              onChange={(e) => setSearch(e.target.value)}
              placeholder='Search for sales data'
            />
          </InputGroup>
        </Form>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Unique Id</th>
              <th>Product Name</th>
              <th>Category</th>
              <th>Selling Price</th>
              <th>About Product</th>
              <th>Product Specification</th>
              <th>Shipping Weight</th>
              <th>Image</th>
              <th>Variants</th>
              <th>Product url</th>
              <th>Is it Amazon Seller</th>

            </tr>
          </thead>
          <tbody>
            {data
              .filter((item) => {
                return search.toLowerCase() === ''
                  ? item
                  : item.first_name.toLowerCase().includes(search);
              })
              .map((item, index) => (
                <tr key={index}>
                  <td>{item.first_name}</td>
                  <td>{item.last_name}</td>
                  <td>{item.email}</td>
                  <td>{item.phone}</td>
                </tr>
              ))}
          </tbody>
        </Table>
      </Container>
    </div>
  );
}

export default AmazonSearch;