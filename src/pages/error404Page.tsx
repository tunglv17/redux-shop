import { Result, Button } from 'antd';
import 'antd/dist/antd.css';
import { Link } from 'react-router-dom';
const Error404Page = () => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Sorry, the page you visited does not exist."
                extra={<Link to="/" ><Button type="primary">Back Home</Button> </Link>}
            />,
        </div>
    )
}

export default Error404Page
