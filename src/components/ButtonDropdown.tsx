import { FC, useEffect, useState } from "react";

enum iconEnum {
    open = '⬆️',
    closed = '⬇️'
}


const ButtonDropdown: FC<any> = ({user}) => {

    const [icon, setIcon] = useState(iconEnum.closed);
    
    function dropdownClicked(){
        changeIcon();
        alert(user.id)
    }

    function changeIcon(){
        if(icon === iconEnum.closed) setIcon(iconEnum.open)
        else setIcon(iconEnum.closed)
    }

    return <button onClick={dropdownClicked} className="btn btn-default border-0 fs-2 p-0 me-4">{icon}</button>
}
 
export default ButtonDropdown;