import {Button, Space} from "antd";
import {DELETE_CUSTOMER_ROUTE, UPDATE_CUSTOMER_ROUTE} from "../constants";
import {NavLink} from "react-router-dom";

export const customerDataColumn = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: "id",
        sorter: (id1, id2) => id1.id - id2.id,
        render: (id) => <p className={"table-font"}>{id}</p>,
        width: "10%",
    },
    {
        title: 'Name',
        dataIndex: 'name',
        key: "name",
        render: (name) => <p style={{fontWeight: "bold"}} className={"table-font"}>{name}</p>,
        width: "30%",
    },
    {
        title: 'Email',
        dataIndex: 'email',
        render: (email) => <p className="table-font">{email}</p>,
        width: "30%",
        key: "email",
    },
    {
        title: 'Age',
        dataIndex: 'age',
        key: "age",
        width: "10%",
        render: (age) => <p className={"table-font"}>{age}</p>,
        sorter: (age1, age2) => age1.age - age2.age,
    },
    {
        title: "Action",
        dataIndex: "id",
        key: "action",
        render: (customerId) =>
            <Space size="middle">
                <Button type="primary">
                    <NavLink style={{color: "#fff"}} to={UPDATE_CUSTOMER_ROUTE}>Update customer</NavLink>
                </Button>
                <Button type="primary" danger>
                    <NavLink style={{color: "#fff"}} to={DELETE_CUSTOMER_ROUTE}>Delete customer</NavLink>
                </Button>
            </Space>
    },
    {
        title: "Employers IDs",
        dataIndex: "employers",
        key: "employers",
        render: (employers) => <p style={{fontWeight: "bold"}} className={"table-font"}>{String(employers)}</p>,
        width: "50%"
    },
];