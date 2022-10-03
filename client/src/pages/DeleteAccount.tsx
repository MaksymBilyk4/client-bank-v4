import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {useActions} from "../hooks/useActions";
import {Button, Form, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";

const DeleteAccount: FC = () => {
    const {accounts, loading, error} = useTypedSelector(state => state.account);

    const {deleteAccount, getAccounts} = useActions();

    const [accountId, setAccountId] = useState<number>(0);
    const [customerId, setCustomerId] = useState<number>(0);

    const handleAccountId = (e: React.ChangeEvent<HTMLSelectElement>) => setAccountId(+e);
    const fetchDeleteAccount = () => {
        deleteAccount(customerId, accountId);
        getAccounts();
    };

    useEffect(() => {
        const account = accounts.filter(a => a.id === accountId)[0];
        setCustomerId(account?.customerId);
    }, [accountId, accounts]);

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

            <Form className="form-data" onFinish={fetchDeleteAccount}>
                <Form.Item label="Account" name={"id"} rules={[rules.required('Please choose account')]}>
                    <Select placeholder={"Choose account to delete"} style={{width: "100%"}} onChange={handleAccountId}>
                        {
                            accounts?.map(account =>
                                <Option key={String(account.id)} value={String(account.id)}>
                                    Id: {account.id}, Number: {account.number}, Customer: {account.customerId}
                                </Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Button type={"primary"} htmlType={"submit"} danger style={{width: "100%"}}>Delete Account</Button>
            </Form>
        </div>
    );
};

export default DeleteAccount;