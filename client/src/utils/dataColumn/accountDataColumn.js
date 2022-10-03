import {Button, Space} from "antd";
import {DELETE_ACCOUNT_ROUTE} from "../constants";
import {NavLink} from "react-router-dom";

export const accountDataColumn = [
    {
        title: 'Acc. Id',
        dataIndex: 'id',
        key: "account id",
        sorter: (id1, id2) => id1.id - id2.id,
        render: (id) => <p className={"table-font"}>{id}</p>,
        width: "10%",
    },
    {
        title: "Acc. Number",
        dataIndex: "number",
        key: "number",
        render: (number) => <p style={{fontWeight: "bold"}} className={"table-font"}>{number}</p>,
        width: "30%",
    },
    {
        title: "Acc. Balance",
        dataIndex: "balance",
        key: "balance",
        render: (balance) => <p className={"table-font"}>{balance}</p>,
        width: "10%",
    },
    {
        title: "Currency",
        dataIndex: "currency",
        key: "currency",
        render: (currency) => <p className={"table-font"}>{currency}</p>,
        width: "10%",
    },
    {
        title: "Owner Id",
        dataIndex: "customerId",
        key: "customerId",
        sorter: (id1, id2) => id1.id - id2.id,
        render: (customer) => <p className={"table-font"}>{customer}</p>,
        width: "10%",
    },
    {
        title: "Action",
        dataIndex: "id",
        key: "action",
        render: () =>
            <Space size="middle">
                <Button type="primary" danger>
                    <NavLink to={DELETE_ACCOUNT_ROUTE}>Delete Account</NavLink>
                </Button>
            </Space>,
        width: "20%"
    }
]