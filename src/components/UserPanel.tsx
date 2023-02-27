import { useState } from "react";
import ButtonDeleteUser from "./ButtonDeleteUser";
import ButtonDropdown from "./ButtonDropdown";
import AlbumsList from "./AlbumsList";

const UserPanel = ({ user }) => {

    const [expanded, setExpanded] = useState(false);

    return (
        <div className="p-3 border rounded-3 mt-5">
            <div key={user.id} className={`d-flex justify-content-between ${expanded && 'border-bottom pb-2'}`}>
                <div className="d-flex gap-4 ms-4">
                    <ButtonDeleteUser user={user} />
                    <p className="fs-2 m-0 fw-light">{user.name}</p>
                </div>
                <ButtonDropdown setExpanded={setExpanded} user={user} />
            </div>
            {expanded && <AlbumsList user={user}/>}
        </div>

    )
}

export default UserPanel;