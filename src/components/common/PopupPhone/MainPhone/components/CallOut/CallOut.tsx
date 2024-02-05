import { useContext, useRef} from "react";
import styles from "./CallOut.module.scss";
import { ContextDetailPhone, IContextDetailPhone } from "../../Context";
import { IDetailPhone } from "../../interface";

function CallOut() {
    const inputRef = useRef(null);``
    const context = useContext<IContextDetailPhone>(ContextDetailPhone);
    const handleCallOut = () =>{
      if(context.data?.phoneNumber){
        context.setData((prevData: IDetailPhone) => ({ ...prevData, tabPhone: 'callIn' }))
      }
     
    }
    return (<div className={styles.midMain}>
        <input type="text" name="phoneNumber" ref={inputRef} className={styles.inputPhoneCls} value={context.data?.phoneNumber}/>
        
        <div className={styles.divCallFlex}>
          <div className={styles.callIn}>
            <div onClick={handleCallOut} style={{cursor: 'pointer'}}>
                <svg xmlns="http://www.w3.org/2000/svg" width="74" height="73" viewBox="0 0 74 73" fill="none">
              <circle cx="37" cy="36.5" r="36.5" fill="red"/>
              <path d="M55.6494 48.155V48.1479C55.6494 48.1479 49.5318 42.0373 49.528 42.0343C49.043 41.549 48.2673 41.5595 47.7901 42.0375L44.9741 44.8651C43.8794 45.9601 42.4678 44.9884 39.7582 42.779C37.9655 41.3172 35.9029 39.3514 34.1145 37.1353C32.8594 35.5803 31.7496 33.9474 32.8961 32.8011C32.8991 32.7981 35.7237 29.9809 35.7231 29.9779L35.7253 29.972C36.2322 29.4651 36.183 28.6886 35.7202 28.2251V28.2181C35.7202 28.2181 29.4257 21.9315 29.4222 21.9277C28.9372 21.4427 28.1617 21.4535 27.6843 21.9309L24.8475 24.7676C23.6789 26.2303 21.0815 33.2011 32.2165 44.6149C43.9466 56.6394 51.5158 54.0672 52.8189 52.7104C52.8189 52.7104 55.6527 49.9102 55.6527 49.9075L55.6551 49.9018C56.162 49.3946 56.1121 48.6187 55.6494 48.155Z" fill="white"/>
              </svg>
            </div>
          </div>
        </div>
      </div>);
}

export default CallOut;