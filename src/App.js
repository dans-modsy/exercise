import React, {Component} from 'react';
import Products from './components/products'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
    render() {
        return (
             <Products products={this.state.products} />
        )
    }

    state = {
        products: []
    };

    // load products upon component mounting.  set to local state for display availability.
    componentDidMount() {
        fetch('https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)?format=json&show=all&apiKey=mPlbr5GXMVkagVgzwT7T2V5X')
            .then(res => res.json())
            .then((data) => {
              console.log(data.products)
              this.setState({ products: data.products })
            })
            .catch(console.log)
    }
}

export default App;
