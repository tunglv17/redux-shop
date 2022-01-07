import { Image } from "antd";
import "antd/dist/antd.css";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import HeaderWebsite from "../components/Header";
import { getProducts } from "../redux/product/action";
import { RootState } from "../redux/store";
import "./SingleItem.css";
import { typeProduct } from "./../type/product";
const ProductDetail = () => {
  const [productItem, setProductItem] = useState<typeProduct>();
  const dispatch = useDispatch();
  const listProducts = useSelector(
    (state: RootState) => state.listProduct.products
  );
  const { id }: any = useParams();
  useEffect(() => {
    const getProductById = async () => {
      if (id && listProducts) {
        await listProducts.map((item: any) => {
          if (item.id === id) setProductItem(item);
        });
      }
    };

    if (listProducts) {
      getProductById();
    } else {
      dispatch(getProducts);
    }
  }, [listProducts]);
  return (
    <div>
      <HeaderWebsite />
      <div className="singleItem">
        <Image
          width={400}
          src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
        />
        <div className="singleItem__details">
          <p className="details__title">
            Name :{productItem && productItem.name}
          </p>
          <p className="details__description">
            Description :{productItem && productItem.description}
          </p>
          <p className="details__price">$ {productItem && productItem.price}</p>
          <button className="details__addBtn">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
