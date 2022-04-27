import React from 'react'
import { useState } from 'react'
import { ListGroup, ListGroupItem } from 'reactstrap'

function Category(props) {
    const [categories, setCategories] = useState([
        { id: 1, name: 'Tümü' },
        { id: 2, name: 'Meyve' },
        { id: 3, name: 'Sebze' },
        { id: 4, name: 'Şarküteri' },
        { id: 5, name: 'Kişisel Bakım' },
    ]);

    

    const { info, setC, sC} = props
    return (
        <div>
            <h3>{info.title}</h3>
            <ListGroup>
                {
                    categories.map(category => (
                        <ListGroupItem onClick={setC} style={{cursor: 'pointer'}} key={category.id}>{category.name}</ListGroupItem>
                    ))
                }
            </ListGroup>
        </div>
    )
}

export default Category