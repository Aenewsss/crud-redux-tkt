import { FC } from "react";
import Spinner from "./Spinner";
import { useThunk } from "../hooks/useThunk";
import { addUser } from "../store";

const ButtonAddUser: FC<any> = () => {

    const [doAddUser, isCreatingUser, creatingUserError] = useThunk(addUser);

    const handleAdd = () => doAddUser();

    return (
        <div>
            <button className={`btn btn-default border border-dark rounded-3 p-3 fw-bold text-dark`} onClick={handleAdd}>
                {isCreatingUser
                    ? <Spinner />
                    : <span>ADD USER <span className="fs-3">+</span></span>
                }
            </button>
            {creatingUserError && <p>Error creating user...</p>}
        </div>
    )
}

export default ButtonAddUser;