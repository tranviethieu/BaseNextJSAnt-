import { useContext } from "react";
import styles from "./Contacts.module.scss";
import { ContextDetailPhone, IContextDetailPhone } from "../../Context";
import { IDetailPhone } from "../../interface";
function Contacts() {
    const context = useContext<IContextDetailPhone>(ContextDetailPhone);

    const arrayContacts: Array<any> = [{name: 'Trần Việt Hiếu', numberPhone: '0385763666' }, {name: 'Trần Việt HH', numberPhone: '0385763555' }]
    const handleInforProfile = (name: string, phone: string)=>{
        context.setData((prevData: IDetailPhone) => ({ ...prevData,phoneNumber: phone, tabPhone: 'inforProfile' }))
    }
    return ( <div className={styles.midMain}>
        <h2>Liên hệ</h2>
        {/* <input type="text" /> */}
        <div className={styles.lists}>
            {arrayContacts.map((e, index)=>(<div key={index} className={styles.item} onClick={()=>{handleInforProfile(e.name, e.numberPhone)}}>{e.name}</div>))}
        </div>
    </div> );
}

export default Contacts;