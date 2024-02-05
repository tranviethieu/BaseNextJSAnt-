import React, {Fragment, useRef} from 'react';
import clsx from 'clsx';
import style from './PopupPhone.module.scss';
import Portal from '../Portal';

import MainPhone from './MainPhone';

/*===========> INTERFACE <==========*/
interface props {
	open: boolean;
	notOutside?: boolean;
	onClose: () => void;
	children?: React.ReactNode;
	[props: string]: any;
}

/*===========> MAIN COMPONENT <==========*/
function PopupPhone({open, onClose, children}: props) {
	const divRef = useRef<HTMLDivElement>(null);
	const dragMouseDown = (e: React.MouseEvent) => {
		e.preventDefault();
		if (divRef.current) {
		  const rect = divRef.current.getBoundingClientRect();
		  var pos3 = e.clientX;
		  var pos4 = e.clientY;
	
		  const elementDrag = (e: MouseEvent) => {
			e.preventDefault();
			const pos1 = pos3 - e.clientX;
			const pos2 = pos4 - e.clientY;
			pos3 = e.clientX;
			pos4 = e.clientY;
	
			if (divRef.current) {
			  divRef.current.style.top = `${divRef.current.offsetTop - pos2}px`;
			  divRef.current.style.left = `${divRef.current.offsetLeft - pos1}px`;
			}
		  };
	
		  const closeDragElement = () => {
			document.onmouseup = null;
			document.onmousemove = null;
		  };
	
		  document.onmouseup = closeDragElement;
		  document.onmousemove = elementDrag;
		}
	  };
	
	return (
		<Fragment>
			{open && (
				<Portal>
					<div ref={divRef} className={style.main}>
						{/* <div className={style.move} onMouseDown={dragMouseDown}></div>  */}
						<MainPhone
           				 onClose={onClose} dragMove={dragMouseDown} />
						 </div>
				</Portal>
			)}
		</Fragment>
	);
}

export default PopupPhone;
