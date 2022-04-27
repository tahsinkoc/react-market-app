import React from 'react'
import { Table, Button } from 'reactstrap'
function Product(props) {



    const [products, setProducts] = React.useState(
        [
            { id: 1, name: 'Erik', price: '600.00', category: 'Meyve', stock: 10, pCount: 0 },
            { id: 2, name: 'Elma', price: '5.00', category: 'Meyve', stock: 10, pCount: 0 },
            { id: 3, name: 'Salatalık', price: '14.00', category: 'Sebze', stock: 5, pCount: 0 },
            { id: 4, name: 'Marul', price: '24.00', category: 'Sebze', stock: 10,  pCount: 0 },
            { id: 5, name: 'Sucuk', price: '49.00', category: 'Şarküteri', stock: 5, pCount: 0 },
            { id: 6, name: 'Pastırma', price: '100.00', category: 'Şarküteri', stock: 10, pCount: 0 },
            { id: 7, name: 'Diş Fırçası', price: '15.00', category: 'Kişisel Bakım', stock: 5, pCount: 0 },
            { id: 8, name: 'Diş Macunu', price: '23.00', category: 'Kişisel Bakım', stock: 10, pCount: 0 },
        ]
    );


    const { info } = props

    function checkCat() {

        if (info.catName == 'Tümü') {
            return products
        }
        else if (info.catName) {
            return products.filter(p => p.category === info.catName)
        }
    }

    return (
        <div>
            <h3>{info.title}</h3>
            <h4>{info.catName}</h4>
            <Table striped hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Ürün Adı</th>
                        <th>Fiyat</th>
                        <th>Kategori</th>
                        <th>Stok</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        checkCat().map(product => (
                            <tr key={product.id}>
                                <th scope="row">{product.id}</th>
                                <td>{product.name}</td>
                                <td>{product.price} TL</td>
                                <td>{product.category}</td>
                                <td>{product.stock}</td>
                                <td><Button onClick={() => info.funca(product, this)} data-pr={product.price} color='info' style={{ color: '#fff' }}>Sepete Ekle</Button></td>
                            </tr>
                        ))
                    }
                </tbody>
            </Table>
        </div>
    )
}

export default Product