import React, { useState } from 'react';
import Table from 'react-bootstrap/Table';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';

import { data } from './data';

function AmazonSearch() {
    const [amazondata, setAmazondata] = useState(data);
    const [search, setSearch] = useState('');

    function filterBy(data, filters = {}) {
        // Set up the specific defaults that will show everything:
        const defaults = {
          AboutProduct: null,
          ProductSpecification: ,
          TechnicalDetails: ,
    
        }
      
       
        };
      }

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
                            <th>Technical Details</th>
                            <th>Shipping Weight</th>
                            <th>Product Dimensions</th>
                            <th>Image</th>
                            <th>Variants</th>
                            <th>Product url</th>
                            <th>Is it Amazon Seller</th>
                            <th>About Detaisl</th>

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
                                <tr key={item.index}>
                                    <td>{item.UniqueId}</td>
                                    <td>{item.ProductName}</td>
                                    <td>{item.Category}</td>
                                    <td>{item.SellingPrice}</td>
                                    <td>{item.AboutProduct}</td>
                                    <td>{item.ProductSpecification}</td>
                                    <td>{item.TechnicalDetails}</td>
                                    <td>{item.ShippingWeight}</td>
                                    <td>{item.ProductDimensions}</td>
                                    <td>{item.Image}</td>
                                    <td>{item.Variants}</td>
                                    <td>{item.Producturl}</td>
                                    <td>{item.IsitAmazonSeller}</td>
                                </tr>
                            ))}
                    </tbody>
                </Table>
            </Container>
        </div>
    );
}

export default AmazonSearch;