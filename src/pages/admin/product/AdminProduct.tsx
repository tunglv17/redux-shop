import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Table, Space, Button, Rate, Image, Typography, message } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { removeProducts } from "../../../redux/product/action";
import { typeCategory, typeProduct } from "../../../type/product";
const { Title } = Typography;
const AdminProduct = () => {
  const dispatch = useDispatch();
  const listProducts = useSelector(
    (state: RootState) => state.listProduct.products
  );
  const listCategory: typeCategory[] = useSelector(
    (state: RootState) => state.listCategory.category
  );

  const getNameCatetoId = (listCate: typeCategory[], idCateProd: string) => {
    const nameCate = listCate.filter((cate) => cate.id === idCateProd);
    return nameCate ? nameCate[0].name : "";
  };
  const handleDelete = (id: string) => {
    dispatch(removeProducts(id))
  }


  const columns = [
    {
      title: "STT",
      dataIndex: "stt",
      key: "stt",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (name: string) => <Title level={4}>{name}</Title>,
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
      render: (category: string) => (
        <Title level={4}>
          {listCategory ? getNameCatetoId(listCategory, category) : ""}
        </Title>
      ),
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: () => (
        <Image
          width={80}
          src={
            "https://image.iventurecard.com/images/attractions/attraction_2716_main_5ad93f488496e.jpg"
          }
        />
      ),
    },
    {
      title: "Rate",
      dataIndex: "rate",
      key: "rate",
      render: (rate: number) => <Rate value={rate} disabled />,
    },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, item: typeProduct) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={`product/edit/${item.id}`}>Edit</Link>
          </Button>
          <Button onClick={() => handleDelete(item.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table rowKey={"id"} columns={columns} dataSource={listProducts} />
    </div>
  );
};

export default AdminProduct;
