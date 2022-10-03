import React, {useState} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {useActions} from "../hooks/useActions";
import {Button, Form, Select} from "antd";
import {rules} from "../utils/rules";
import {Option} from "antd/es/mentions";

const DeleteEmployer = () => {
    const {employers, loading, error} = useTypedSelector(state => state.employer);

    const {deleteEmployer} = useActions();

    const [id, setId] = useState<number>(0);

    const handleIdChange = (e: React.ChangeEvent<HTMLInputElement>) => setId(Number(e));

    const fetchDeleteCustomer = (e: React.MouseEvent<HTMLInputElement>) => deleteEmployer(id);

    if (loading) {
        return <Loading/>
    }

    if (error) {
        return <Error error={error}/>
    }

    return (
        <div className="container">
            <div className="title-wrapper">
                <h1>Delete Employer</h1>
            </div>

            <Form onFinish={fetchDeleteCustomer} className="form-data">
                <Form.Item label="Choose employer"
                           name="id"
                           rules={[rules.required('Choose employer!')]}
                >
                    <Select
                        placeholder={"Choose employer to delete"}
                        onChange={handleIdChange}
                        style={{width: "100%"}}
                    >
                        {employers?.map(employer =>
                            <Option key={String(employer.id)} value={String(employer.id)}>
                                Id: {employer.id}, Name: {employer.name}
                            </Option>
                        )}
                    </Select>
                </Form.Item>

                <Button type={"primary"} htmlType={"submit"} danger style={{width: "100%"}}>Delete Employer</Button>
            </Form>
        </div>
    );
};

export default DeleteEmployer;