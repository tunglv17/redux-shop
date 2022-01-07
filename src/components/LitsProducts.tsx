import { Rate } from 'antd';
import React from 'react'
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../redux/store';
import { typeProduct } from '../type/product';
import Filter from './Filter';
const ListProducts = () => {
    const listProducts = useSelector((state: RootState) => state.listProduct.products);
    return (
        <div>
            <div className="products">
                <Filter />
                <div className="list-product">
                    <div className="product-item">
                        {listProducts.slice(0, 6).map((item: typeProduct, index: any) => {
                            return (
                                <div className="item" key={index}>
                                    <div className="img">
                                        <img src="./img/Image.png" />
                                    </div>
                                    <div className="sub-product">
                                        <div className="title">
                                            <div className="product-name">
                                                <Link to={`/${item.id}`}> <h4 className="title-heading">{item.name}</h4></Link>
                                                <h4 className="category">{item.category}</h4>
                                            </div>
                                            <p className="price">$:{item.price}</p>
                                        </div>
                                        <div className="hehe">
                                            <div className="rating">
                                                <Rate value={item.rate} disabled />,
                                            </div>
                                            <div className="cart">
                                                <img src="./img/Add to Cart Button.png" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}

                    </div>
                    <div className="pagination">
                        <a href="#">»</a>
                        <a href="#">6</a>
                        <a href="#">5</a>
                        <a href="#">4</a>
                        <a href="#">3</a>
                        <a href="#">2</a>
                        <a href="#">1</a>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ListProducts
