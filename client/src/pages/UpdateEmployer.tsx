import React, {FC, useEffect, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import {Employer} from "../types/employer";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Button, Checkbox, Form, Input, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";
import type {CheckboxValueType} from 'antd/es/checkbox/Group';
import {Customer} from "../types/customer";

const UpdateEmployer: FC = () => {
    const {employers, loading, error} = useTypedSelector(state => state.employer);
    const {customers} = useTypedSelector(state => state.customer);

    const {updateEmployer, getEmployers, getEmployerById} = useActions();

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");
    const [customersId, setCustomersIds] = useState<number[]>([]);
    const [employer, setEmployer] = useState<Employer | null>(null);


    const handleIdChange = (e: React.ChangeEvent<HTMLSelectElement>) => setId(+e);
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value);
    const handleCustomersIds = (cid: any) => {setCustomersIds([+cid])}
    const fetchEmployer = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const response = await getEmployerById(id);
        console.log(response);

        // @ts-ignore
        setEmployer(response);
    }

    const fetchUpdateEmployer = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateEmployer(
            employer?.id,
            name || employer?.name,
            address || employer?.address,
            customersId || employer?.customers
        );
        getEmployers();
    }

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1>Update Employer</h1>
            </div>

            <Form onFinish={fetchEmployer} className="form-data">
                <Form.Item
                    label="Choose employer"
                    name="employer"
                    rules={[rules.required('Please select employer!')]}
                >
                    <Select placeholder="Select employer to update"
                            style={{width: "100%"}} onChange={handleIdChange}>
                        {
                            employers?.map((e, index) =>
                                <Option
                                    key={String(e?.id)}
                                    value={String(e?.id)}
                                >
                                    Id: {e?.id}, Name: {e?.name}, Address: {e?.address}
                                </Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Button htmlType={"submit"} type={"primary"}>Submit</Button>
            </Form>

            {employer &&
                <Form className={"form-data"} onFinish={fetchUpdateEmployer}>
                    <Form.Item label="Name" name={"name"}>
                        <Input value={name}
                               min={3}
                               max={32}
                               onChange={handleNameChange}
                               placeholder="Enter employer`s name"
                        />
                    </Form.Item>

                    <Form.Item label="Address" name={"address"}>
                        <Input value={address}
                               min={3}
                               max={32}
                               onChange={handleAddressChange}
                               placeholder="Enter employer`s address"
                        />
                    </Form.Item>

                    <Form.Item label="Customers" name="customers">
                        <Select placeholder="Select customer to add"
                                style={{width: "100%"}} onChange={handleCustomersIds}>
                            {
                                customers?.map((e) =>
                                    <Option
                                        key={String(e?.id)}
                                        value={String(e?.id)}
                                    >
                                        Id: {e?.id}, Name: {e?.name}, Address: {e?.email}
                                    </Option>
                                )
                            }
                        </Select>
                    </Form.Item>

                    <Button type={"primary"} htmlType={"submit"}>Update Customer</Button>
                </Form>
            }
        </div>
    );
};

export default UpdateEmployer;