import logo from './logo.svg';

import Navi from './Navi'
import ProductList from './ProductList';
import CategoryList from './CategoryList';
import { Container, Row, Col } from 'reactstrap';
import React, { Component } from 'react'
import alertify from "alertifyjs"
import { Route, Switch } from 'react-router-dom';
import notFound from "./notFound";
import CartList from './CartList';
import Form1 from './Form1';
import Form2 from './Form2';



export default class App extends Component {
  toggle = () => {
    this.setState({
      isOpen: this.state.isOpen
    });
  }

  state = { currentCategory: "", products: [], cart: [] };

  componentDidMount() {
    this.getProducts();
  }
  changeCategory = category => {
    this.setState({ currentCategory: category.categoryName });
    console.log(category);
    this.getProducts(category.id);
  };
  getProducts = categoryId => {
    let url = "http://localhost:3000/products";
    if (categoryId) {
      url += "?categoryId=" + categoryId.toString();
    }
    fetch(url)
      .then(response => response.json())
      .then(data => this.setState({ products: data }));
  }
  addToCart = (product) => {
    let newCart = this.state.cart;
    var addedItem = newCart.find(c => c.product.id === product.id);
    if (addedItem) {
      addedItem.quantity += 1;
    }
    else { newCart.push({ product: product, quantity: 1 }); }

    this.setState({ cart: newCart });
    alertify.success(product.productName + " added to cart", 2);
  }
  remove = (product) => {
    let newCart = this.state.cart.filter(c => c.product.id !== product.id)
    this.setState({ cart: newCart })
    alertify.error(product.productName + " deleted from cart", 2);
  }
  render() {
    let productInfo = { title: "Product List" };
    let categoryInfo = { title: "Category List" };
    return (
      <div >
        <Container>

          <Navi remove={this.remove} cart={this.state.cart} />
          <Row>
            <Col xs="3">
              <CategoryList currentCategory={this.state.currentCategory}
                changeCategory={this.changeCategory}
                info={categoryInfo} />
            </Col>

            <Col xs="9">
              <Switch>
                <Route exact path="/" render={ props=>(
                
                <ProductList
                {...props}
                  products={this.state.products}
                  addToCart={this.addToCart}
                  currentCategory={this.state.currentCategory} info={productInfo} />)
                  
                
                } />
                <Route exact path="/cart" render={ props=>(
                
                <CartList
                {...props}
                  cart={this.state.cart}
                  remove={this.remove}
                  />)
                  
                
                } />
                <Route path="/Form1" component ={Form1}></Route>
                <Route path="/Form2" component ={Form2}></Route>
                <Route  component={notFound} />

              
              </Switch>
             
              
            </Col>

          </Row>
        </Container>


      </div>
    );
  }
}







