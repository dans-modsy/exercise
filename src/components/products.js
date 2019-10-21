import React from 'react'
import {BootstrapTable, TableHeaderColumn} from 'react-bootstrap-table';
import 'react-bootstrap-table/dist/react-bootstrap-table-all.min.css';

class ProductsList extends React.Component {
   imgFormatter(cell, row) {
    if (!cell) {
      cell = ""
    }
    return (<span><img alt="" height='100' src={cell} /></span>)
  }

   dollarFormatter(cell, row) {
    return ('$' + cell)
  }

  onScroll(e) {
    if (e.target.scrollTop >= (e.target.scrollHeight - e.target.offsetHeight)) {
      alert('fetch next page.')
    }
  }

  // load products upon component mounting.  set to local state for display availability.
  // TODO: modify api url params dynamically for dynamic search and paging?
  componentDidMount() {
    fetch('https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=all&apiKey=mPlbr5GXMVkagVgzwT7T2V5X')
        .then(res => res.json())
        .then((data) => {
          this.setState({ products: data.products })
        })
        .catch(console.log)
  }

  render() {
    // use bootstrap table for extended table layout and functionality options.
    // TODO: display one product per line in list or display multiple products in single line (tile layout)?
    return (
      <div id="tableContainer" onScroll={this.onScroll}>
      <BootstrapTable id="table1" data={this.props.products} tableStyle={{height:'1000px'}}>
      <TableHeaderColumn tdStyle={{whiteSpace:'normal'}} dataField="name" isKey dataSort={true}>Name</TableHeaderColumn>
      <TableHeaderColumn dataField="image" dataSort={false} dataFormat={this.imgFormatter}>Image</TableHeaderColumn>
      <TableHeaderColumn dataField="regularPrice" dataFormat={this.dollarFormatter} dataSort={true}>Price</TableHeaderColumn>
      <TableHeaderColumn  dataField="longDescriptionHtml" tdStyle={{whiteSpace:'normal'}} dataSort={false}>Description</TableHeaderColumn>
     </BootstrapTable>
     </div>
   )
 }
}

export default ProductsList
