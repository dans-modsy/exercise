// src/components/productts.js

import React from 'react'
import Table from 'react-bootstrap/Table';


const Products = ({products}) => {
  return (
    <div>
      <center><h1>Product List</h1></center>
      <table striped="true" border="1">
      <thead>
        <tr>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        <th>Name</th>
        </tr>
      </thead>


      <tbody>
      {products.map((product) => (
        <tr>

          <td>
            {product.name}
          </td>
          <td>
            <img src={product.thumbnailImage}/>
          </td>
          <td>
            <p class="card-text">{product.regularPrice}</p>
          </td>
          <td>
            <p class="card-text">{product.longDescriptionHtml}</p>
          </td>

        </tr>
      ))}
      </tbody>
      </table>
    </div>

  )
};

export default Products
