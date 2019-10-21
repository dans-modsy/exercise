import React, {Component} from 'react';
import ProductsList from './components/products'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
          // TODO: put entire list in single component, products could be broken out into individual components depending on other UI requirements?
          <ProductsList products={this.state.products} />
        )
    }

    state = {
        products: []
    };

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
}

export default App;
