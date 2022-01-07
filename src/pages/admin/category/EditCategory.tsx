import { useEffect, useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router";
import { RootState } from "../../../redux/store";
import { typeCategory } from "../../../type/product";
import { getCategory, updateCategory } from "../../../redux/category/action";
const EditCategory = () => {
    const listCategory = useSelector(
        (state: RootState) => state.listCategory.category
    );
    const [name, setName] = useState("");
    const { id }: any = useParams();
    const [requiredMark, setRequiredMarkType] = useState("");
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const onRequiredTypeChange = ({ requiredMarkValue }: any) => {
        setRequiredMarkType(requiredMarkValue);
    };
    useEffect(() => {
        const getProductById = async () => {
            if (id && listCategory) {
                const product: typeCategory[] = await listCategory.filter(
                    (cate: typeCategory) => cate.id === id
                );
                setName(product[0].name);
            }
        };
        if (listCategory) {
            getProductById();
        } else {
            dispatch(getCategory);
        }
    }, [listCategory]);

    const onHandleSubmit = () => {
        dispatch(
            updateCategory({
                id: id,
                name: name,
            })
        );
        history.push("/admin/category");
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
                    <Input
                        value={name}
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
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

export default EditCategory;
