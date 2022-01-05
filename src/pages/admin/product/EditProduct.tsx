import React, { useEffect, useState } from 'react'
import { useParams, useHistory } from 'react-router-dom';
import { Button, Form, Input, Select, Upload } from "antd";
import { UploadOutlined } from '@ant-design/icons';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { getProducts, updateProduct } from '../../../redux/product/action';
import { typeProduct } from '../../../type/product';
const EditProducts = () => {
    const listProducts = useSelector((state: RootState) => state.listProduct.products);


    const [name, setName] = useState("")
    const [category, setCategory] = useState("")
    const [price, setPrice] = useState("")
    const [image, setImage] = useState("")
    const [description, setDescription] = useState("")
    const [rate, setRate] = useState(0)
    const { id }: any = useParams();
    const history = useHistory();
    const dispatch = useDispatch()
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState("");

    const onRequiredTypeChange = ({ requiredMarkValue }: any) => {
        setRequiredMarkType(requiredMarkValue);
    };
    const normFile = (e: any) => {
        console.log('Upload event:', e);

        if (Array.isArray(e)) {
            return e;
        }

        return e && e.fileList;
    };
    useEffect(() => {
        const getProductById = async () => {
            if (id && listProducts) {
                const product: typeProduct[] = await listProducts.filter(
                    (product: typeProduct) => product.id === id
                );
                setName(product[0].name);
                setCategory(product[0].category);
                setRate(product[0].rate);
                setDescription(product[0].description)
                setPrice(product[0].price);
                setImage(product[0].image);
            }
        };
        if (listProducts) {
            getProductById();
        } else {
            dispatch(getProducts);
        }
    }, [listProducts]);

    const handleSubmit = () => {
        dispatch(updateProduct({
            id: id,
            name: name,
            category: category,
            price: price,
            image: image,
            description: description,
            rate: rate
        }))
        history.push('/admin/product');
    }
    return (
        <div>
            <Form
                form={form}
                layout="vertical"
                initialValues={{
                    requiredMarkValue: requiredMark,
                }}
                onValuesChange={onRequiredTypeChange}
            >
                <Form.Item label="Name" rules={[{ required: true }]}>
                    <Input value={name} onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Category" rules={[{ required: true }]}>
                    <Input value={category} onChange={(e) => setCategory(e.target.value)} />
                </Form.Item>
                <Form.Item label="Price" rules={[{ required: true }]}>
                    <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
                </Form.Item>
                <Form.Item label="Description" rules={[{ required: true }]}>
                    <Input value={description} onChange={(e) => setDescription(e.target.value)} />
                </Form.Item>
                <Form.Item
                    name="Image"
                    label="Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra=""
                >
                    <Upload name="logo" action="/upload.do" listType="picture" onChange={(e) => setImage(e.file.name)}>
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Rate">
                    <Select value={rate} onChange={(e) => setRate(e)}>
                        <Select.Option value={0}>Yếu</Select.Option>
                        <Select.Option value={1}>Kém</Select.Option>
                        <Select.Option value={2}>Trung Bình</Select.Option>
                        <Select.Option value={3}>Khá</Select.Option>
                        <Select.Option value={4}>Giỏi</Select.Option>
                        <Select.Option value={5}>Xuất Sắc</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" onClick={handleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    )
}

export default EditProducts