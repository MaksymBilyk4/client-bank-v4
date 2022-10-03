import React, {FC, useEffect} from 'react';
import {useTypedSelector} from "../hooks/useTypedSelector";
import "../utils/css/home.css";
import {Table} from "antd";
import {customerDataColumn} from "../utils/dataColumn/customerDataColumn";
import {accountDataColumn} from "../utils/dataColumn/accountDataColumn";
import Loading from "../components/Loading";
import Error from "../components/Error";
import {useActions} from "../hooks/useActions";
import {employerDataColumn} from "../utils/dataColumn/employerDataColumn";

const Home: FC = () => {
    const customerState = useTypedSelector(state => state.customer);
    const accountState = useTypedSelector(state => state.account);
    const employerState = useTypedSelector(state => state.employer);

    const {getCustomers, getAccounts, getEmployers} = useActions();

    useEffect(() => {
        getCustomers();
        getAccounts();
        getEmployers();
    }, []);

    const onChange = (pagination: any, filters: any, sorter: any, extra: any) => {
        console.log('params', pagination, filters, sorter, extra);
    }

    if (customerState.loading || accountState.loading || employerState.loading) {
        return <Loading/>
    }

    if (customerState.error) {
        return <Error error={customerState.error}/>
    }

    if (accountState.error) {
        return <Error error={accountState.error}/>
    }

    if (employerState.error) {
        return <Error error={employerState.error}/>
    }

    return (
        <>
            <div className="container">
                <div className={"page-title"}>
                    <h1>Customers</h1>
                </div>

                <div>
                    <Table columns={customerDataColumn} dataSource={customerState.customers} onChange={onChange}/>
                </div>

                <div className={"page-title"}>
                    <h1>Customers` account</h1>
                </div>

                <div>
                    <Table columns={accountDataColumn} dataSource={accountState.accounts} onChange={onChange}/>
                </div>

                <div className={"page-title"}>
                    <h1>Employers</h1>
                </div>

                <div>
                    <Table columns={employerDataColumn} dataSource={employerState.employers} onChange={onChange}></Table>
                </div>
            </div>
        </>
    );
};

export default Home;