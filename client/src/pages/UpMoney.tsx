import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Button, Form, Input, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";

const UpMoney: FC = () => {
    const {accounts, loading, error} = useTypedSelector(state => state.account);
    const {up} = useActions();

    const [number, setNumber] = useState<string>("");
    const [amount, setAmount] = useState<number>(0.00);

    // @ts-ignore
    const handleNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setNumber(e);
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(+e.target.value);

    const fetchUp = () => up(number, amount);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1>Up to account</h1>
            </div>

            <Form className="form-data" onFinish={fetchUp}>
                <Form.Item label="Choose account number" name="number" rules={[rules.required('Please choose account number!')]}>
                    <Select placeholder="Select account number" onChange={handleNumber} style={{width: "100%"}}>
                        {accounts?.map(account =>
                            <Option key={String(account.id)} value={String(account.number)}>
                                Id: {account.id}, Number: {account.number}, Balance: {account.balance} {account.currency}
                            </Option>
                        )}
                    </Select>
                </Form.Item>

                <Form.Item label="Amount" name="amount" rules={[rules.required('Please type amount!')]}>
                    <Input
                        placeholder="Amount"
                        value={amount}
                        type={"number"}
                        style={{width: "100%"}}
                        onChange={handleAmount}
                    />
                </Form.Item>

                <Button style={{width: "100%"}} htmlType={"submit"} type={"primary"}>Up</Button>
            </Form>
        </div>
    );
};

export default UpMoney;