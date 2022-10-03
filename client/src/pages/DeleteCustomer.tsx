import React, {FC, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Button, Form, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";

const DeleteCustomer: FC = () => {
    const {customers, loading, error} = useTypedSelector(state => state.customer);

    const {deleteCustomer} = useActions();

    const [id, setId] = useState<number>(0);

    const handleIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => setId(Number(e));

    const fetchDeleteCustomer = (e: React.MouseEvent<HTMLButtonElement>) => deleteCustomer(id);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1>Delete Account</h1>
            </div>

            <Form onFinish={fetchDeleteCustomer} className="form-data">
                <Form.Item label="Choose customer"
                           name="customerId"
                           rules={[rules.required('Choose customer!')]}
                >
                    <Select
                        placeholder={"Choose customer to delete"}
                        onChange={handleIdChange}
                        style={{width: "100%"}}
                    >
                        {customers?.map(customer =>
                            <Option key={String(customer.id)} value={String(customer.id)}>
                                Id: {customer.id}, Name: {customer.name}
                            </Option>
                        )}
                    </Select>
                </Form.Item>

                <Button type={"primary"} htmlType={"submit"} danger style={{width: "100%"}}>Delete Customer</Button>
            </Form>
        </div>
    );
};

export default DeleteCustomer;