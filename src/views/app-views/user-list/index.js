import React, {useEffect} from 'react';
import {Card, message, Table} from 'antd'
import AvatarStatus from "../../../components/shared-components/AvatarStatus";
import {DogSVG} from "../../../assets/svg/icon";
import CustomIcon from "../../../components/util-components/CustomIcon";
import {useDispatch, useSelector} from "react-redux";
import {fetchUsers} from "../../../redux/actions";
import {withRouter} from "react-router-dom";

const UserList = (props) => {
    console.log(props)
    const {history,match} = props
    const dispatch = useDispatch()
    const users = useSelector(state => state.users.users)
    useEffect(()=>{
        if(users.length <1){
            const key = 'updatable';
            message.loading({ content: 'Updating...', key });
            dispatch(fetchUsers())
            setTimeout(() => {
                message.success({ content: 'Done!', key, duration: 2 });
            }, 1000);
        }
    },[])

    const columns = [
        {
            title: 'User',
            dataIndex: 'name',
            render: (text, record) => (
                <div className="d-flex">
                    <AvatarStatus src={'https://cdn0.iconfinder.com/data/icons/female-styles/500/woman-runner-bg-256.png'} name={record.name} subTitle={record.email}/>
                </div>
            ),
            sorter: {
                compare: (a, b) => {
                    a = a.name.toLowerCase();
                    b = b.name.toLowerCase();
                    return a > b ? -1 : b > a ? 1 : 0;
                },
            },
        },
        {
            title: 'Address',
            dataIndex: 'address',
            render: (text, record) => (
                <div className="d-flex">
                    <div>{record.address.city}</div>
                    <div>{record.address.street}</div>
                </div>
            ),
        },
        {
            title: 'Website',
            dataIndex: 'website',
            render: (text, record) => (
                <div className="d-flex">
                    <div>{record.company.name}</div>
                    <div>{record.website}</div>
                </div>
            ),
        },
        {
            title: 'Pets',
            dataIndex: 'pets',
            render: (text, record) => (
                <div className="d-flex" >
                    <CustomIcon svg={DogSVG}/>
                </div>
            ),
        },
    ]
    return (
        <Card>
            <Table columns={columns}
                   onRow={(elm) => {
                       return {
                           onClick: e => {
                               e.preventDefault()
                               history.push(`${match.url}/${elm.id}`)
                           }
                       };
                   }}
                   dataSource={users} rowKey='id' />
        </Card>
    );
};

export default withRouter(UserList);