import React, {useEffect, useState} from 'react';
import {withRouter} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Avatar, Button, Col, Form, Input, message, Row, Upload} from "antd";
import Flex from "../../../components/shared-components/Flex";
import {UserOutlined} from "@ant-design/icons";
import {ROW_GUTTER} from "../../../constants/ThemeConstant";
import {fetchUsers} from "../../../redux/actions";

const UserPage = (props) => {
    const id = props.match.params.id
    const user = useSelector(state => state.users.users.find(user => user.id == id))
    const [state, setState] = useState(user)
    const avatarEndpoint = 'https://www.mocky.io/v2/5cc8019d300000980a055e76'
    const [avatarUrl, setAvaUrl] = useState('/img/avatars/thumb-6.jpg')
    useEffect(() => {
        setState(user)
    }, [user])
    const getBase64 = (img, callback) => {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(img);
    }
    const onUploadAvatar = info => {
        const key = 'updatable';
        if (info.file.status === 'uploading') {
            message.loading({content: 'Uploading...', key, duration: 1000});
            return;
        }
        if (info.file.status === 'done') {
            getBase64(info.file.originFileObj, imageUrl =>
                setAvaUrl(imageUrl),
            );
            message.success({content: 'Uploaded!', key, duration: 1.5});
        }
    }
    const onRemoveAvatar = () => {
        setAvaUrl('')
    }
    const onFinish = values => {
        const key = 'updatable';
        message.loading({content: 'Updating...', key});
        setTimeout(() => {
            setState({
                name: values.name,
                email: values.email,
                username: values.username,
                companyName: values.companyName,
                website: values.website,
                suite: values.suite,
                city: values.city,
                street: values.street,
            })
            message.success({content: 'Done!', key, duration: 2});
        }, 1000);
    }
    const onFinishFailed = errorInfo => {
        console.log('Failed:', errorInfo);
    };

    const {name, username, email, address: {street, suite, city}, website, company: {companyName = name}} = user

    return <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <Avatar size={90} src={avatarUrl} icon={<UserOutlined/>}/>
                <div className="ml-md-3 mt-md-0 mt-3">
                    <Upload onChange={onUploadAvatar} showUploadList={false} action={avatarEndpoint}>
                        <Button type="primary">Change Avatar</Button>
                    </Upload>
                    <Button className="ml-2" onClick={onRemoveAvatar}>Remove</Button>
                </div>
            </Flex>
            <div className="mt-4">
                <Form
                    name="basicInformation"
                    layout="vertical"
                    initialValues={
                        {
                            'name': name,
                            'username': username,
                            'email': email,
                            'city': city,
                            'street': street,
                            'suite': suite,
                            'website': website,
                            'companyName': companyName,
                        }
                    }
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                >
                    <Row>
                        <Col xs={24} sm={24} md={24} lg={16}>
                            <Row gutter={ROW_GUTTER}>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Name"
                                        name="name"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your name!',
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Username"
                                        name="username"
                                        rules={[
                                            {
                                                required: true,
                                                message: 'Please input your username!'
                                            },
                                        ]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Email"
                                        name="email"
                                        rules={[{
                                            required: true,
                                            type: 'email',
                                            message: 'Please enter a valid email!'
                                        }]}
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="City"
                                        name="city"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Street"
                                        name="street"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={24}>
                                    <Form.Item
                                        label="Suite"
                                        name="suite"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Website"
                                        name="website"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                                <Col xs={24} sm={24} md={12}>
                                    <Form.Item
                                        label="Company name"
                                        name="companyName"
                                    >
                                        <Input/>
                                    </Form.Item>
                                </Col>
                            </Row>
                            <Button type="primary" htmlType="submit">
                                Save Change
                            </Button>
                        </Col>
                    </Row>
                </Form>
            </div>
        </>
};

export default withRouter(UserPage)