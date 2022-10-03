import {Button, Space} from "antd";
import {NavLink} from "react-router-dom";
import {DELETE_EMPLOYER_ROUTE, UPDATE_EMPLOYER_ROUTE} from "../constants";

export const employerDataColumn = [
    {
        title: 'Id',
        dataIndex: 'id',
        key: 'id',
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
        title: 'Address',
        dataIndex: 'address',
        key: "address",
        render: (address) => <p style={{fontWeight: "bold"}} className={"table-font"}>{address}</p>,
        width: "30%",
    },
    {
        title: "Action",
        dataIndex: "id",
        key: "action",
        render: () =>
            <Space size="middle">
                <Button type="primary">
                    <NavLink style={{color: "#fff"}} to={UPDATE_EMPLOYER_ROUTE}>Update employer</NavLink>
                </Button>
                <Button type="primary" danger>
                    <NavLink style={{color: "#fff"}} to={DELETE_EMPLOYER_ROUTE}>Delete employer</NavLink>
                </Button>
            </Space>
    },
    {
        title: "Customers IDs",
        dataIndex: "customers",
        key: "customers",
        render: (customers) => <p style={{fontWeight: "bold"}} className={"table-font"}>{String(customers)}</p>,
        width: "50%"
    },
]