import {Menu, Row} from "antd";
import {
    BankOutlined,
    DeleteOutlined, DownloadOutlined,
    FolderAddOutlined,
    HomeOutlined, PlusOutlined, ReloadOutlined,
    SolutionOutlined,
    TeamOutlined, TransactionOutlined, UploadOutlined,
    UserAddOutlined,
    UserDeleteOutlined,
    UserSwitchOutlined
} from "@ant-design/icons";
import {NavLink} from "react-router-dom";
import {
    CREATE_ACCOUNT_ROUTE,
    CREATE_CUSTOMER_ROUTE, CREATE_EMPLOYER_ROUTE, DELETE_ACCOUNT_ROUTE,
    DELETE_CUSTOMER_ROUTE, DELETE_EMPLOYER_ROUTE,
    HOME_ROUTE, TRANSFER_MONEY_ROUTE, UP_MONEY_ROUTE,
    UPDATE_CUSTOMER_ROUTE, UPDATE_EMPLOYER_ROUTE, WITHDRAW_MONEY_ROUTE
} from "../utils/constants";
import {FC} from "react";

const Navbar: FC = () => {
    const {SubMenu} = Menu;

    return (
        <>
            <div>
                <Row justify="end">
                    <Menu className="header-navbar" mode="horizontal" selectable={false}
                          style={{
                              background: "#fff",
                              width: "100%",
                              lineHeight: "70px",
                              display: "flex",
                              justifyContent: "center",
                              fontSize: "19px"
                          }}>
                        <Menu.Item key="main" icon={<HomeOutlined/>}>
                            <NavLink to={HOME_ROUTE}>Home</NavLink>
                        </Menu.Item>
                        <SubMenu key="customers" icon={<TeamOutlined/>} title={"Customers"}>
                            <Menu.ItemGroup title={"Customers"}>
                                <Menu.Item key="deleteCustomers" icon={<UserDeleteOutlined/>}>
                                    <NavLink to={DELETE_CUSTOMER_ROUTE}>Delete Customer</NavLink>
                                </Menu.Item>
                                <Menu.Item key="createCustomer" icon={<UserAddOutlined/>}>
                                    <NavLink to={CREATE_CUSTOMER_ROUTE}>Create Customer</NavLink>
                                </Menu.Item>
                                <Menu.Item key="updateCustomer" icon={<UserSwitchOutlined/>}>
                                    <NavLink to={UPDATE_CUSTOMER_ROUTE}>Update Customer</NavLink>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu key="accounts" icon={<SolutionOutlined/>} title={"Accounts"}>
                            <Menu.ItemGroup title={"Accounts"}>
                                <Menu.Item key="createAccount" icon={<FolderAddOutlined/>}>
                                    <NavLink to={CREATE_ACCOUNT_ROUTE}>Create Account</NavLink>
                                </Menu.Item>
                                <Menu.Item key="deleteAccount" icon={<DeleteOutlined/>}>
                                    <NavLink to={DELETE_ACCOUNT_ROUTE}>Delete Account</NavLink>
                                </Menu.Item>
                                <Menu.Item key="upMoney" icon={<UploadOutlined/>}>
                                    <NavLink to={UP_MONEY_ROUTE}>Up to Account</NavLink>
                                </Menu.Item>
                                <Menu.Item key="withdrawMoney" icon={<DownloadOutlined/>}>
                                    <NavLink to={WITHDRAW_MONEY_ROUTE}>Withdraw from Account</NavLink>
                                </Menu.Item>
                                <Menu.Item key="transferMoney" icon={<TransactionOutlined/>}>
                                    <NavLink to={TRANSFER_MONEY_ROUTE}>Transfer money</NavLink>
                                </Menu.Item>
                            </Menu.ItemGroup>
                        </SubMenu>
                        <SubMenu title={"Employers"} key={"employers"} icon={<BankOutlined/>}>
                            <Menu.Item key="employers" icon={<PlusOutlined/>}>
                                <NavLink to={CREATE_EMPLOYER_ROUTE}>Create employer</NavLink>
                            </Menu.Item>
                            <Menu.Item key="deleteEmployers" icon={<DeleteOutlined />}>
                                <NavLink to={DELETE_EMPLOYER_ROUTE}>Delete employer</NavLink>
                            </Menu.Item>
                            <Menu.Item key="updateEmployers" icon={<ReloadOutlined/>}>
                                <NavLink to={UPDATE_EMPLOYER_ROUTE}>Update employer (здесь можно добавить запись в таблицу customers_employers)</NavLink>
                            </Menu.Item>
                        </SubMenu>
                    </Menu>
                </Row>
            </div>

        </>
    );
};

export default Navbar;