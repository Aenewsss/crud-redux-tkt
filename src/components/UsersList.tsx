import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../store";
import { IStore, IUser } from "../store/types/types";
import SkeletonLoader from "./SkeletonLoader";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ButtonDropdown from "./ButtonDropdown";
import ButtonAddUser from "./ButtonAddUser ";

const UsersList = () => {

    const dispatch = useDispatch();

    const { isLoading, data, error } = useSelector((store: IStore) => {
        return store.users;
    })

    useEffect(() => {
        dispatch(fetchUsers());
    }, []);

    if (isLoading) return <SkeletonLoader />

    if (error) return <p>Error fetching data...</p>

    const renderedUser = data.map((user: IUser) => {
        return (
            <div className="border rounded-3 border-info mt-5 d-flex justify-content-between" key={user.id}>
                <div className="d-flex gap-4 ms-4">
                    <ButtonDeleteUser user={user} />
                    <p className="fs-2 m-0 fw-light">{user.name}</p>
                </div>
                <ButtonDropdown user={user} />
            </div>
        )
    })

    return (
        <div className="mt-5 d-flex flex-column">
            <div className="d-flex justify-content-between">
                <h1 className="display-5">List of users</h1>
                <ButtonAddUser />
            </div>
            {renderedUser}
        </div>
    );
}

export default UsersList;