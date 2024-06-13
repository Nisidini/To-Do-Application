

import s from "../sideBar/sideBar.module.css"

function SideBar(){
    return(
        <>
        <div className={s.sideBarContnainer}>
            <div className={s.container}>Home</div>
            <div className={s.calender}>Calender</div>
        </div>
        </>
    );
}

export default SideBar;