import { useState } from "react";
import { Button, Form, Input, message } from "antd";
import { useDispatch } from "react-redux";
import { addNewCategory } from "../../../redux/category/action";
import { useHistory } from "react-router";
const AddCategory = () => {
    const [name, setName] = useState("");
    const [requiredMark, setRequiredMarkType] = useState("");
    const [form] = Form.useForm();
    const dispatch = useDispatch();
    const history = useHistory();
    const onRequiredTypeChange = ({ requiredMarkValue }: any) => {
        setRequiredMarkType(requiredMarkValue);
    };
    const onHandleSubmit = () => {
        dispatch(
            addNewCategory({
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
                    <Input placeholder="Name" onChange={(e) => setName(e.target.value)} />
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

export default AddCategory;
