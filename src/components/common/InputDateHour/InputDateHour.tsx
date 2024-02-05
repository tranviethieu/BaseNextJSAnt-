import { TbClock } from "react-icons/tb";
import DatePicker from "~/components/common/DatePicker";
import Moment from "react-moment";
import { PropsInputDateHour } from "./interfaces";
import TippyHeadless from "@tippyjs/react/headless";
import clsx from "clsx";
import styles from "./InputDateHour.module.scss";
import { useState } from "react";
import ListDateHour from "./ListDateHour";

function InputDateHour({
  hour,
  setHour,
  placeholder = "Chọn giờ",
  label,
}: PropsInputDateHour) {
  const [open, setOpen] = useState(false);

  return (
    <TippyHeadless
      maxWidth={"100%"}
      interactive
      visible={open}
      onClickOutside={() => setOpen(false)}
      placement="bottom"
      render={(attrs) => (
        <ListDateHour
          hour={hour}
          setHour={setHour}
          onClose={() => setOpen(false)}
        />
      )}
    >
      <div className={styles.main} onClick={() => setOpen(!open)}>
        {label ? <label className={styles.label}>{label}</label> : null}
        <div className={clsx(styles.container, { [styles.show]: open })}>
          {hour ? (
            <>{hour}</>
          ) : (
            <p
              className={clsx(styles.textValue, {
                [styles.placeholder]: !hour,
              })}
            >
              {placeholder}
            </p>
          )}
          <TbClock color="rgb(122, 122, 122)" size={20} />
        </div>
      </div>
    </TippyHeadless>
  );
}

export default InputDateHour;
