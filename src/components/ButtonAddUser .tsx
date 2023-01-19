import { FC } from "react";

const ButtonAddUser: FC<any> = () => {

    const handleAdd = () => {
    }

    return <button className="btn btn-default border border-purple rounded-3 p-0 fw-bold me-2 text-purple" onClick={handleAdd}>ADD USER ➕</button>

}
 
export default ButtonAddUser;