import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {useActions} from "../hooks/useActions";
import {Customer} from "../types/customer";
import {Button, Form, Input, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";

const UpdateCustomer: FC = () => {
    const {customers, loading, error} = useTypedSelector(state => state.customer);

    const {updateCustomer, getCustomerById, getCustomers} = useActions();

    const [id, setId] = useState<number>(0);
    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [customer, setCustomer] = useState<Customer | null>(null);
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const handleCustomer = (e: React.ChangeEvent<HTMLSelectElement>) => setId(+e);
    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(+e.target.value);
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);


    const fetchCustomer = async (e: React.MouseEvent<HTMLButtonElement>) => {
        const response = await getCustomerById(id);
        console.log(response)
        // @ts-ignore
        setCustomer(response);
    };

    const fetchUpdateCustomer = (e: React.MouseEvent<HTMLButtonElement>) => {
        updateCustomer(
            customer?.id,
            name || customer?.name,
            email || customer?.email,
            age || customer?.age,
            customer?.accounts || [],
            password || customer?.password,
            phoneNumber || customer?.phoneNumber
        );
        getCustomers();
    };

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1>Update Customer</h1>
            </div>

            <Form onFinish={fetchCustomer} className={"form-data"}>
                <Form.Item
                    label="Choose customer"
                    name="customer"
                    rules={[rules.required('Please select customer!')]}
                >
                    <Select placeholder="Select customer to update"
                            style={{width: "100%"}} onChange={handleCustomer}>
                        {
                            customers?.map((e, index) =>
                                <Option
                                    key={String(e.id)}
                                    value={String(e?.id)}
                                >
                                    Id: {e?.id}, Name: {e?.name}
                                </Option>
                            )
                        }
                    </Select>
                </Form.Item>

                <Button htmlType={"submit"} type={"primary"}>Submit</Button>
            </Form>

            {customer &&
                <Form className="form-data" onFinish={fetchUpdateCustomer}>
                    <Form.Item label="Name" name={"name"}>
                        <Input value={name}
                               min={3}
                               max={32}
                               onChange={onNameChange}
                               placeholder="Enter customer`s name"
                        />
                    </Form.Item>

                    <Form.Item label="Email" name={"email"}>
                        <Input value={email}
                               min={5}
                               max={60}
                               onChange={onEmailChange}
                               placeholder="Enter customer`s email"
                               type={"email"}
                        />
                    </Form.Item>

                    <Form.Item label="Age" name={"age"}>
                        <Input value={age}
                               style={{width: "100%"}}
                               onChange={onAgeChange}
                               placeholder="Enter customer`s age"
                               type={"number"}
                        />
                    </Form.Item>

                    <Form.Item label="Password" name={"password"} rules={[rules.required('Please input customer`s password')]}>
                        <Input value={password}
                               style={{width: "100%"}}
                               onChange={onPasswordChange}
                               placeholder="Enter customer`s password"
                               type={"text"}
                               min={3}
                        />
                    </Form.Item>

                    <Form.Item label="Phone Number" name={"phone_number"} rules={[rules.required('Please input customer`s phone nuber')]}>
                        <Input value={phoneNumber}
                               style={{width: "100%"}}
                               onChange={onPhoneNumberChange}
                               placeholder="Enter customer`s phone number"
                               type={"text"}
                               min={3}
                        />
                    </Form.Item>

                    <Button htmlType={"submit"} type={"primary"}>Update customer</Button>
                </Form>
            }
        </div>
    );
};

export default UpdateCustomer;