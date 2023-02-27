import { useSelector } from "react-redux";
import { IStore, IUser } from "../store/types/types";
import { useThunk } from "../hooks/useThunk";
import { useEffect } from "react";
import SkeletonLoader from "./SkeletonLoader";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ButtonDropdown from "./ButtonDropdown";
import { fetchUsers } from "../store";
import UserPanel from "./UserPanel";

const UsersList = () => {
    const { data } = useSelector((store: IStore) => store.users);

    const [doFetchUsers, isLoadingUsers, loadingUsersError] = useThunk(fetchUsers);

    useEffect(() => { doFetchUsers() }, [doFetchUsers]);

    const renderedUser = data.map((user: IUser) => {
        if (isLoadingUsers) return <SkeletonLoader />
        return <UserPanel user={user} />
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