import React, { useState } from "react";
import { Button, Form, Input, message, Select, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { useDispatch, useSelector } from "react-redux";
import { addNewProducts } from "../../../redux/product/action";
import { useHistory } from "react-router";
import { RootState } from "../../../redux/store";
const AddProducts = () => {
    const listCategory = useSelector(
        (state: RootState) => state.listCategory.category
    );
    const [name, setName] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState("");
    const [rate, setRate] = useState(0);

    const dispatch = useDispatch();
    const history = useHistory();
    const [form] = Form.useForm();
    const [requiredMark, setRequiredMarkType] = useState("");

    const onRequiredTypeChange = ({ requiredMarkValue }: any) => {
        setRequiredMarkType(requiredMarkValue);
    };
    const normFile = (e: any) => {
        console.log("Upload event:", e);
        if (Array.isArray(e)) {
            return e;
        }
        return e && e.fileList;
    };
    const { TextArea } = Input;
    const onHandleSubmit = () => {
        dispatch(
            addNewProducts({
                name: name,
                category: category,
                price: price,
                description: description,
                image: image,
                rate: rate,
            })
        );
        history.push("/admin/product");
        message.success("Success");
    };
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
                    <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
                </Form.Item>
                <Form.Item label="Price" rules={[{ required: true }]}>
                    <Input
                        type="number"
                        placeholder="Price"
                        onChange={(e) => setPrice(e.target.value)}
                    />
                </Form.Item>
                <Form.Item label="Category">
                    <Select onChange={(e) => setCategory(e)}>
                        {listCategory.map((item: any) => {
                            return (
                                <Select.Option value={item.id}>{item.name}</Select.Option>
                            )
                        })}
                    </Select>
                </Form.Item>
                <Form.Item label="Rate">
                    <Select onChange={(e) => setRate(e)}>
                        <Select.Option value={0}>Yếu</Select.Option>
                        <Select.Option value={1}>Kém</Select.Option>
                        <Select.Option value={2}>Trung Bình</Select.Option>
                        <Select.Option value={3}>Khá</Select.Option>
                        <Select.Option value={4}>Giỏi</Select.Option>
                        <Select.Option value={5}>Xuất Sắc</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item
                    name="Image"
                    label="Image"
                    valuePropName="fileList"
                    getValueFromEvent={normFile}
                    extra=""
                >
                    <Upload
                        name="logo"
                        action="/upload.do"
                        listType="picture"
                        onChange={(e) => setImage(e.file.name)}
                    >
                        <Button icon={<UploadOutlined />}>Click to upload</Button>
                    </Upload>
                </Form.Item>
                <Form.Item label="Description" rules={[{ required: true }]}>
                    <TextArea
                        rows={4}
                        placeholder="Description"
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </Form.Item>
                <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                    <Button type="primary" onClick={onHandleSubmit}>
                        Submit
                    </Button>
                </Form.Item>
            </Form>
        </div>
    );
};

export default AddProducts;
