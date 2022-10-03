import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {useActions} from "../hooks/useActions";
import {Button, Form, Input, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";

const TransferMoney: FC = () => {
    const {accounts, loading, error} = useTypedSelector(state => state.account);
    const {transfer} = useActions();

    const [toNumber, setToNumber] = useState<string>("");
    const [fromNumber, setFromNumber] = useState<string>("");
    const [amount, setAmount] = useState<number>(0.00);

    // @ts-ignore
    const handleToNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setToNumber(e);
    // @ts-ignore
    const handleFromNumber = (e: React.ChangeEvent<HTMLSelectElement>) => setFromNumber(e);
    const handleAmount = (e: React.ChangeEvent<HTMLInputElement>) => setAmount(+e.target.value);

    const fetchTransfer = () => transfer(toNumber, fromNumber, amount);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1>Transfer money</h1>
            </div>

            <Form onFinish={fetchTransfer} className="form-data">
                <Form.Item label="Choose FROM account" name="fromAccount" rules={[rules.required('Please choose FROM account!')]}>
                    <Select placeholder="Select account" onChange={handleFromNumber} style={{width: "100%"}}>
                        {
                            accounts?.map(account =>
                                <Option key={String(account.id)} value={String(account.number)}>
                                    Id: {account.id}, Acc number: {account.number}, Balance: {account.balance} {account.currency}
                                </Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Form.Item label="Choose TO account" name="toAccount" rules={[rules.required('Please choose TO account!')]}>
                    <Select placeholder="Select account" onChange={handleToNumber} style={{width: "100%"}}>
                        {
                            accounts?.map(account =>
                                <Option key={String(account.id)} value={String(account.number)}>
                                    Id: {account.id}, Acc number: {account.number}, Balance: {account.balance} {account.currency}
                                </Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Form.Item name={"amount"} label={"Input how much money you want to to transfer"} rules={[rules.required("Please enter amount of money")]}>
                    <Input
                        value={amount}
                        onChange={handleAmount}
                        style={{width: "100%"}}
                        placeholder="Enter amount of money"
                        type={"number"}
                    />
                </Form.Item>

                <Button style={{width: "100%"}} htmlType={"submit"} type={"primary"}>Transfer</Button>
            </Form>

        </div>
    );
};

export default TransferMoney;