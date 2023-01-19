import { FC } from "react";

const ButtonDeleteUser: FC<any> = ({user}) => {

    const handleDelete = () => {
        alert(user.id)
    }

    return <button className="btn btn-default border-0 p-0" onClick={handleDelete}>❌</button>

}
 
export default ButtonDeleteUser;