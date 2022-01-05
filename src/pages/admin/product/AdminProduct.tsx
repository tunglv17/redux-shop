import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { Table, Space, Button, Rate, Image } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
import { removeProducts } from '../../../redux/product/action';
import { typeProduct } from '../../../type/product';

const AdminProduct = () => {
    const dispatch = useDispatch();
    const listProducts = useSelector((state: RootState) => state.listProduct.products);

    const columns = [
        {
            title: 'STT',
            dataIndex: 'stt',
            key: "stt",
        },
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
        },
        {
            title: 'Image',
            dataIndex: 'image',
            key: 'image',
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
            title: 'Rate',
            dataIndex: 'rate',
            key: 'rate',
            render: (rate: number) => <Rate value={rate} disabled />,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Action',
            key: 'action',
            render: (_: any, item: typeProduct) => (
                <Space size="middle">
                    <Button type="primary">
                        <Link to={`product/edit/${item.id}`}>Edit</Link>
                    </Button>
                    <Button onClick={() => dispatch(removeProducts(item.id))}>
                        Delete
                    </Button>
                </Space>
            )
        },
    ];
    return (
        <div>
            <Table rowKey={'id'} columns={columns} dataSource={listProducts} />
        </div>
    )
}

export default AdminProduct
