import React, { Component } from 'react'
import ProductList from './ProductList'

export default class ExerciseCarStore extends Component {

    products = [
        { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
        { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 2000 },
        { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 3000 },
        { id: 4, name: 'Steel car', img: './images/products/steel-car.jpg', price: 4000 }
    ];


    renderSanPham = () => {
        return this.products.map((product,index) =>{
            return (
                <ProductList key={index} car={product}/>
            )
        })
        }


    render() {
        return (
            <div>
                <h3 className="py-5 px-5">DANH SÁCH XE</h3>
                <div className="row">
                    {this.renderSanPham()}
                </div>
            </div>
        )
    }
}
