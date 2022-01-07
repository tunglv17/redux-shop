import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import { Table, Space, Button } from "antd";
import "antd/dist/antd.css";
import { Link } from "react-router-dom";
import { typeCategory } from "../../../type/product";
import { removeCategory } from "../../../redux/category/action";

const AdminCategory = () => {
  const dispatch = useDispatch();
  const listCategory = useSelector(
    (state: RootState) => state.listCategory.category
  );

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
    },
    {
      title: "Action",
      key: "action",
      render: (_: any, item: typeCategory) => (
        <Space size="middle">
          <Button type="primary">
            <Link to={`category/edit/${item.id}`}>Edit</Link>
          </Button>
          <Button onClick={() => dispatch(removeCategory(item.id))}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];
  return (
    <div>
      <Table rowKey={"id"} columns={columns} dataSource={listCategory} />
    </div>
  );
};

export default AdminCategory;
