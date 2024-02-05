import {PropsHistoryCallRecent} from './interfaces';
import styles from './HistoryCallRecent.module.scss';
import { SiBoardgamegeek } from "react-icons/si";
import PopupPhone from '~/components/common/PopupPhone';
import { useSelector } from 'react-redux';
import { RootState, store } from '~/redux/store';
import {setPhoneCheck} from '~/redux/reducer/user';

function HistoryCallRecent({}: PropsHistoryCallRecent) {
	const{phoneCheck} = useSelector((state: RootState) => state.user);
	const handlePhone = ()=>{
		store.dispatch(setPhoneCheck(!phoneCheck))
	}
	return <div className={styles.container}>
		<div onClick={handlePhone}>open</div>
		<PopupPhone onClose={()=>{}} open={phoneCheck}/>
		<address>aaaa</address>
	</div>;
}

export default HistoryCallRecent;
