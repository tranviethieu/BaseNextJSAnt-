import { Fragment, useEffect, useRef, useState } from "react";
import { IDetailPhone, PopupMainPhone } from "./interface";
import styles from "./MainPhone.module.scss"
import clsx from 'clsx';
import { Calculator, Call, CloseCircle, ProfileCircle } from "iconsax-react";
import { BsClockHistory } from "react-icons/bs";
import { RiDeleteBackFill } from "react-icons/ri";
import CallIn from "./components/CallIn";
import { ContextDetailPhone } from "./Context";
import HistoryCall from "./components/HistoryCall";
import CallOut from "./components/CallOut";
import InforProfile from "./components/InforProfile/InforProfile";
import Contacts from "./components/Contacts";

function MainPhone({onClose, dragMove  }: PopupMainPhone) {
    const [loading, setLoading] = useState<boolean>(false);
    const [timePhone, setTimePhone] = useState<string>('');
    const [data, setData] = useState<IDetailPhone>({tabPhone: 'callIn', phoneNumber: ''});
    useEffect(() => {
      const updateCurrentTime = () => {
        const currentTime = new Date();
        setTimePhone(`${currentTime.getHours()}:${currentTime.getMinutes().toString().padStart(2, '0')}`);
      };
      updateCurrentTime();
      const intervalId = setInterval(updateCurrentTime, 60000);
      return () => clearInterval(intervalId);
    }, []);
   
    return ( <Fragment>
        <div className={clsx(styles.phone)}>
        <div className={styles.buttons}>
            {/* <div className={styles.left}>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
                <div className={styles.button}></div>
            </div>
            <div className={styles.right}>
                <div className={styles.button}></div>
            </div> */}
        </div>
        <div className={styles.camera} ></div>
            <div className={styles.screenContainer} > 
            <div className={styles.bg1} >
            <div className={styles.timePhone}>{timePhone}</div>
            <ContextDetailPhone.Provider value={{data, setData}}>
                {data.tabPhone == 'callIn' ? (<CallIn />): null}
                {data.tabPhone == 'callOut' ? (<CallOut />): null}
                {data.tabPhone == 'history' ? (<HistoryCall />): null}
                {data.tabPhone == 'contacts' ? (<Contacts />): null}
                {data.tabPhone == 'inforProfile' ? (<InforProfile />): null}
            </ContextDetailPhone.Provider>

              <div className={clsx(styles.bottomMain, {[styles.disableCls]: data?.tabPhone == 'callOut'})} onMouseDown={dragMove}>
                  <div className={clsx(styles.tabPhone, {[styles.active]:data.tabPhone == 'contacts'})} onClick={()=>{setData((prevData) => ({ ...prevData, tabPhone: 'contacts' }))}}>
                    <ProfileCircle size="28"/>
                    <p>liên hệ</p>
                  </div>
                  <div className={clsx(styles.tabPhone, {[styles.active]:data.tabPhone == 'history'})} onClick={()=>{setData((prevData) => ({ ...prevData, tabPhone: 'history' }))}}>
                    <BsClockHistory  size="28"/>
                    <p>Lịch sử</p>
                  </div>
                  <div className={clsx(styles.tabPhone, {[styles.active]:data.tabPhone == 'callIn'})} onClick={()=>{setData((prevData) => ({ ...prevData, tabPhone: 'callIn' }))}}>
                    <Calculator size="28"/>
                    <p>Bàn phím</p>
                  </div>
                  <div className={styles.tabPhone} onClick={onClose}>
                    <CloseCircle size="28" color="#C73536"/>
                    <p style={{ color: '#C73536' }}>Đóng lại</p>
                  </div>
              </div>
               
            </div>
              </div>              
              <div className={styles.notchContainer} tabIndex={0} >
                <div className={styles.notch} >
                    <div className={styles.content}>
                        <div className={styles.left}>
                            <div className={styles.title}></div>
                            <div className={styles.text}></div>
                        </div>
                        {/* <div className={styles.right}></div>
                            <div className={styles.bar}>
                                <div className={styles.duration}></div>
                            </div> */}
                    </div>
                </div>
            </div>
            <div className={styles.notchBlur} onMouseDown={dragMove}></div>
        </div>
    </Fragment> );
}

export default MainPhone;