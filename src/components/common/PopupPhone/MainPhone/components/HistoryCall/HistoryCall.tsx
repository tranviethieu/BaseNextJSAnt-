import { useContext } from "react";
import { ContextDetailPhone, IContextDetailPhone } from "../../Context";

function HistoryCall() {
    const context = useContext<IContextDetailPhone>(ContextDetailPhone);
    return ( <><div>{context.data?.phoneNumber}</div></> );
}

export default HistoryCall;