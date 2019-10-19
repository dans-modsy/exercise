// src/components/productts.js

import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';
import '../css/products.css'

const Products = ({products}) => {
  function imgFormatter(cell, row) {
    if (!cell) {
      cell = ""
    }
    return (<span><img height='50' src={cell} /></span>)
  }

  function dollarFormatter(cell, row) {
    return ('$' + cell)
  }

  return (
    <BootstrapTable tableStyle={{height:'1000px'; table-layout:'fixed'}} data={products}>
    <TableHeaderColumn dataField="name" isKey dataSort={true}>Name</TableHeaderColumn>
    <TableHeaderColumn dataField="image" dataSort={false} dataFormat={imgFormatter}>Image</TableHeaderColumn>
    <TableHeaderColumn dataField="regularPrice" dataFormat={dollarFormatter} dataSort={true}>Price</TableHeaderColumn>
    <TableHeaderColumn dataField="longDescriptionHtml" dataSort={false}>Description</TableHeaderColumn>
   </BootstrapTable>
  )
};

export default Products
