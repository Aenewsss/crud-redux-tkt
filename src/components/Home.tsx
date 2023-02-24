import { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import { IStore, IUser } from "../store/types/types";
import SkeletonLoader from "./SkeletonLoader";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ButtonDropdown from "./ButtonDropdown";
import ButtonAddUser from "./ButtonAddUser ";
import { useThunk } from "../hooks/useThunk";
import UsersList from "./UsersList";

const Home = () => {

    return (
        <div className="mt-5 d-flex flex-column">
            <div className="d-flex justify-content-between">
                <h1 className="display-5">List of users</h1>
                <ButtonAddUser />
            </div>
            <UsersList />
        </div>
    );
}

export default Home;