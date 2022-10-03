import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {useActions} from "../hooks/useActions";
import {Button, Form, Input, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";
import {Currency} from "../types/currency";

const CreateAccount: FC = () => {
    const {customers, loading, error} = useTypedSelector(state => state.customer);
    const {createAccount} = useActions();

    const [customerId, setCustomerId] = useState<number>(0);
    const [currency, setCurrency] = useState<string>("");
    const [balance, setBalance] = useState<number>(0.00);

    const handleCustomerId = (e: React.ChangeEvent<HTMLSelectElement>) => setCustomerId(+e);
    // @ts-ignore
    const handleCurrencyChange = (e: React.ChangeEvent<HTMLSelectElement>) => setCurrency(e);
    const handleBalanceChange = (e: React.ChangeEvent<HTMLInputElement>) => setBalance(+e.target.value);

    const fetchAccount = () => createAccount(customerId, currency, balance);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <Form className="form-data" onFinish={fetchAccount}>
                <div className="title-wrapper">
                    <h1>Create Account</h1>
                </div>

                <Form.Item label="Customer" name={"customerId"} rules={[rules.required('Please choose customer')]}>
                    <Select placeholder={"Select customer for account creating"} onChange={handleCustomerId}
                            style={{width: "100%"}}>
                        {
                            customers?.map(customer =>
                                <Option key={String(customer.id)} value={String(customer.id)}>
                                    Id: {customer.id}, Name: {customer.name}
                                </Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Form.Item label="Currency" name="currency" rules={[rules.required('Please choose currency')]}>
                    <Select placeholder={"Select account currency"} onChange={handleCurrencyChange}
                            style={{width: "100%"}}>
                        <Option key={Currency.USD} value={Currency.USD}>
                            {Currency.USD}
                        </Option>

                        <Option key={Currency.EUR} value={Currency.EUR}>
                            {Currency.EUR}
                        </Option>

                        <Option key={Currency.UAH} value={Currency.UAH}>
                            {Currency.UAH}
                        </Option>

                        <Option key={Currency.GBP} value={Currency.GBP}>
                            {Currency.GBP}
                        </Option>

                        <Option key={Currency.CHF} value={Currency.CHF}>
                            {Currency.CHF}
                        </Option>
                    </Select>
                </Form.Item>

                <Form.Item label={"Balance"} name="balance" rules={[rules.required('Please input balance')]}>
                    <Input
                        value={balance}
                        type={"number"}
                        onChange={handleBalanceChange}
                        style={{width: "100%"}}
                        placeholder={"Balance"}
                    />
                </Form.Item>

                <Button style={{marginBottom: "500px"}} htmlType={"submit"} type={"primary"}>Create Account</Button>
            </Form>
        </div>
    );
};

export default CreateAccount;