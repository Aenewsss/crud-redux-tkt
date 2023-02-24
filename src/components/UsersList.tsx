import { useSelector } from "react-redux";
import { IStore, IUser } from "../store/types/types";
import { useThunk } from "../hooks/useThunk";
import { useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ButtonDropdown from "./ButtonDropdown";
import { fetchUsers } from "../store";

const UsersList = () => {
    const { data } = useSelector((store: IStore) => store.users);

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    useEffect(() => { doFetchUsers() }, [doFetchUsers]);

    const renderedUser = data.map((user: IUser) => {
        if (isLoadingUsers) return <SkeletonLoader />
        return (
            <div key={user.id} className="p-3 border rounded-3 mt-5 d-flex justify-content-between">
                <div className="d-flex gap-4 ms-4">
                    <ButtonDeleteUser user={user} />
                    <p className="fs-2 m-0 fw-light">{user.name}</p>
                </div>
                <ButtonDropdown user={user} />
            </div>
        )
    })

    return (
        <>
            {
                loadingUsersError
                    ? <p>Error fetching data...</p>
                    : renderedUser
            }
        </>
    )
}

export default UsersList;