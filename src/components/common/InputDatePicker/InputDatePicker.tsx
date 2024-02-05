import { HiOutlineCalendar } from "react-icons/hi";
import DatePicker from "~/components/common/DatePicker";
import Moment from "react-moment";
import { PropsInputDatePicker } from "./interfaces";
import TippyHeadless from "@tippyjs/react/headless";
import clsx from "clsx";
import styles from "./InputDatePicker.module.scss";
import { useState } from "react";

function InputDatePicker({
  date,
  setDate,
  placeholder = "Chọn ngày",
  label,
  onClick,
  disabled = false,
}: PropsInputDatePicker) {
  const [open, setOpen] = useState(false);

  return (
    <TippyHeadless
      maxWidth={"100%"}
      interactive
      visible={open}
      onClickOutside={() => setOpen(false)}
      placement="bottom"
      render={(attrs) => (
        <DatePicker
          onClose={() => setOpen(false)}
          onSetValue={setDate}
          value={date}
          open={open}
          onClick={() => {
            onClick;
            setOpen(false);
          }}
        />
      )}
    >
      <div
        className={clsx(styles.main)}
        onClick={() => {
          if (disabled) {
            return null;
          } else {
            setOpen(!open);
          }
        }}
      >
        {label ? <label className={styles.label}>{label}</label> : null}
        <div
          className={clsx(styles.container, {
            [styles.show]: open,
            [styles.disabled]: disabled,
          })}
        >
          {date ? (
            <Moment format="DD/MM/YYYY" date={date} />
          ) : (
            <p
              className={clsx(styles.textValue, {
                [styles.placeholder]: !date,
              })}
            >
              {placeholder}
            </p>
          )}
          <HiOutlineCalendar color="rgb(122, 122, 122)" size={20} />
        </div>
      </div>
    </TippyHeadless>
  );
}

export default InputDatePicker;
