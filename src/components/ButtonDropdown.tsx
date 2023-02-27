import { FC, useEffect, useState } from "react";

export enum iconEnum {
    open = '⬆️',
    closed = '⬇️'
}

const ButtonDropdown: FC<any> = ({ user, setExpanded }) => {

    const [icon, setIcon] = useState(iconEnum.closed);

    const dropdownClicked = () => changeIcon();

    function changeIcon() {
        if (icon === iconEnum.closed) {
            setExpanded(true)
            setIcon(iconEnum.open)
        } else {
            setIcon(iconEnum.closed)
            setExpanded(false)
        }
    }

    return <button onClick={dropdownClicked} className="btn btn-default border-0 fs-2 p-0 me-4">{icon}</button>
}

export default ButtonDropdown;