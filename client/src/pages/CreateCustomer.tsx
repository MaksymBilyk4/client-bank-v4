import React, {FC, useState} from 'react';
import {useActions} from "../hooks/useActions";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";

const CreateCustomer: FC = () => {
    const {loading, error} = useTypedSelector(state => state.customer);

    const {createCustomer} = useActions();

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [age, setAge] = useState<number>(0);
    const [password, setPassword] = useState<string>("");
    const [phoneNumber, setPhoneNumber] = useState<string>("");

    const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const onEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => setEmail(e.target.value);
    const onAgeChange = (e: React.ChangeEvent<HTMLInputElement>) => setAge(Number(e.target.value));
    const onPasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value);
    const onPhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => setPhoneNumber(e.target.value);

    const fetchCustomer = (e: React.MouseEvent<HTMLButtonElement>) => createCustomer(name, email, age, password, phoneNumber);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <>
            <div className="container" style={{marginBottom: 400}}>
                <div className={"title-wrapper"}>
                    <h1>Create customer</h1>
                </div>

                <Form className="form-data" onFinish={fetchCustomer}>
                    <Form.Item label="Name" name={"name"} rules={[rules.required('Please input customer`s name')]}>
                        <Input value={name}
                               min={3}
                               max={32}
                               onChange={onNameChange}
                               placeholder="Enter customer`s name"
                        />
                    </Form.Item>

                    <Form.Item label="Email" name={"email"} rules={[rules.required('Please input customer`s email')]}>
                        <Input value={email}
                               min={5}
                               max={60}
                               onChange={onEmailChange}
                               placeholder="Enter customer`s email"
                               type={"email"}
                        />
                    </Form.Item>

                    <Form.Item label="Age" name={"age"} rules={[rules.required('Please input customer`s age')]}>
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

                    <Button htmlType={"submit"} type={"primary"}>Create customer</Button>
                </Form>
            </div>
        </>
    );
};

export default CreateCustomer;