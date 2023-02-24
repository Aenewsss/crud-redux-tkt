import { FC } from "react";
import { useThunk } from "../hooks/useThunk";
import Spinner from "./Spinner";
import { removeUser } from "../store";

const ButtonDeleteUser: FC<any> = ({ user }) => {

    const [doRemoveUser, isRemovingUser, removingUserError] = useThunk(removeUser)

    const handleDelete = () => doRemoveUser(user)

    return <div className="d-flex">
        <button className="btn btn-default border-0 p-0 fw-bold fs-4 text-danger" onClick={handleDelete}>
            {isRemovingUser
                ? <Spinner />
                : <span>X</span>
            }
        </button>
        {removingUserError && <p>Error removing user...</p>}

    </div>

}

export default ButtonDeleteUser;