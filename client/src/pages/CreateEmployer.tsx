import React, {FC, useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useActions} from "../hooks/useActions";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";

const CreateEmployer: FC = () => {
    const {employers, loading, error} = useTypedSelector(state => state.employer);
    const {createEmployer} = useActions();

    const [name, setName] = useState<string>("");
    const [address, setAddress] = useState<string>("");

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value);
    const handleAddressChange = (e: React.ChangeEvent<HTMLInputElement>) => setAddress(e.target.value);

    const fetchEmployer = () => createEmployer(name, address);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <Form className="form-data" onFinish={fetchEmployer}>
                <div className="title-wrapper">
                    <h1>Create Employer</h1>
                </div>

                <Form.Item label={"Name"} name="name" rules={[rules.required('Please input name')]}>
                    <Input
                        value={name}
                        type={"text"}
                        onChange={handleNameChange}
                        style={{width: "100%"}}
                        placeholder={"Name"}
                    />
                </Form.Item>

                <Form.Item label={"Address"} name="address" rules={[rules.required('Please input address')]}>
                    <Input
                        value={address}
                        type={"text"}
                        onChange={handleAddressChange}
                        style={{width: "100%"}}
                        placeholder={"Address"}
                    />
                </Form.Item>

                <Button style={{marginBottom: "500px"}} htmlType={"submit"} type={"primary"}>Create Employer</Button>
            </Form>
        </div>
    );
};

export default CreateEmployer;