import Navi from './components/Navi';
import './App.css';
import Product from './components/Product';
import Category from './components/Category';
import { useState } from 'react'
import { Container, Row, Col } from 'reactstrap';
import Basket from './components/Basket';

function App() {

  const [tBasket, setTBasket] = useState(
    {
      basketInfo: {
        isEmpty: true,
        totalPrice: 0,
        totalCount: 0,
      },
      basketItems: []
    }
  );

  function addItem(e, a) {
    if (Number(e.stock) > 1) {
      e.stock = parseInt(e.stock) - 1;
    } else {
      console.log('Stokta yok');
      e.stock = 'Stokta Yok'
    }
    console.log(e.stock)
    console.log(e)
    setTBasket({
      basketInfo: {
        isEmpty: false,
        totalPrice: tBasket.basketInfo.totalPrice + Number(e.price),
        totalCount: tBasket.basketInfo.totalCount + 1,
      },
      basketItems: [...tBasket.basketItems, e]
    });
  }

  const [basket, setBasket] = useState([false]);

  function addToBasket(e) {
    setBasket(!basket);
  }
  const [selectedCategory, setSelectedCategory] = useState('Tümü');

  function setC(e) {
    setSelectedCategory(e.target.textContent);
  }


  const categoryInfo = {
    title: 'Kategoriler',
  }
  const productInfo = {
    title: 'Ürünler',
    catName: selectedCategory,
    funca: addItem,
  };

  return (
    <div className="App">
      <Container>
        <Row>
          <Navi sC={addToBasket} />
        </Row>
        <Row>
          <Col xs='3'>
            <Category sC={selectedCategory} setC={setC} info={categoryInfo} />
          </Col>
          <Col xs='9'>
            <Product info={productInfo} />
          </Col>
        </Row>
      </Container>
      <Basket tBasket={tBasket} b={basket} />
    </div>
  );
}

export default App;
