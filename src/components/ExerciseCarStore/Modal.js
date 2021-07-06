import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    let { product } = this.props;
    console.log("check", product);
    return (
      <div>
        <div className="modal fade" id={`myModal${product.id}`}>
          <div className="modal-dialog modal-sm">
            <div className="modal-content">
              {/* Modal Header */}
              <div className="modal-header">
                <h4 className="modal-title">{product.name}</h4>
                <button type="button" className="close" data-dismiss="modal">
                  ×
                </button>
              </div>
              {/* Modal body */}
              <div className="modal-body">
                <img style={{ width: "100%" }} src={product.img} alt="..."></img>
              </div>
              {/* Modal footer */}
              <div className="modal-footer">
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-dismiss="modal"
                >
                  Close
                </button>
                <button className="btn btn-primary">Save</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
