import React, { Component } from "react";
import Modal from "./Modal";

export default class ProductList extends Component {
  
  state = {
    carModal:  { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 1000 },
  }

  xemChiTiet = (CAR) => {
    this.setState({
      carModal:CAR
    })
    
  }

  render() {
    let {car} = this.props;
    return (
      <div className="col-3">
        <div className="card">
        <img className="card-img-top" src={car.img} alt="..." />
        <div className="card-body">
          <h4 className="card-title">{car.name}</h4>
          <p className="card-text">{car.price}</p>
          <button
            className="btn btn-success"
            data-toggle="modal"
            data-target={`#myModal${car.id}`}
            onClick={()=>{
              this.xemChiTiet(car);
            }}
          >
            Xem chi tiết
          </button>
          < Modal product={this.state.carModal} />
        </div>
      </div>
      </div>
    )
  }
}
