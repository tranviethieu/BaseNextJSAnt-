import { memo, useEffect, useMemo } from "react";

import CheckBox from "../CheckBox";
import { PropsTable } from "./interfaces";
import clsx from "clsx";
import styles from "./Table.module.scss";

function Table({
  data,
  column,
  classTable,
  onSetData,
  isNumericalOrder = false,
  isActiveThead = false,
}: PropsTable) {
  /*---------- Handle CheckBox ----------*/
  useEffect(() => {
    onSetData &&
      onSetData((prev: any[]) =>
        prev.map((item: any, index: number) => ({
          ...item,
          isChecked: false,
          index: index,
        }))
      );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleCheckAll = (e: any) => {
    const { checked } = e.target;
    onSetData &&
      onSetData((prev: any[]) =>
        prev.map((item: any) => ({ ...item, isChecked: checked }))
      );
  };

  const handleCheckRow = (e: any, i: any) => {
    const { checked } = e.target;
    onSetData &&
      onSetData((prev: any[]) =>
        prev.map((item: any, index: number) => {
          if (index === i) {
            return { ...item, isChecked: checked };
          }
          return item;
        })
      );
  };

  const isCheckedAll = useMemo(() => {
    return data.length > 0
      ? data.some((item: any) => item?.isChecked == false)
      : false;
  }, [data]);

  return (
    <div
      className={clsx(styles.container, {
        [styles.activeThead]: isActiveThead,
      })}
    >
      <table className={classTable}>
        <thead>
          <tr>
            {isNumericalOrder && <th>STT</th>}
            {column.map((v: any, i: number) => (
              <th
                className={clsx({
                  [styles.checkBox]: v.checkBox,
                  [styles.textEnd]: v.textAlign == "end",
                  [styles.textStart]: v.textAlign == "start",
                  [styles.textCenter]: v.textAlign == "center",
                })}
                key={i}
              >
                {v.checkBox ? (
                  <CheckBox
                    onChange={handleCheckAll}
                    checked={!isCheckedAll || false}
                  />
                ) : null}
                {v.title}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((v: any, i: number) => (
            <tr key={i}>
              {isNumericalOrder && <td>{i + 1}</td>}
              {column.map((y: any, j: number) => (
                <td key={j}>
                  <div
                    className={clsx(y.className, {
                      [styles.checkBox]: y.checkBox,
                    })}
                  >
                    {y.checkBox ? (
                      <CheckBox
                        onChange={(e: any) => handleCheckRow(e, i)}
                        checked={v.isChecked || false}
                      />
                    ) : null}
                    {y.render(v)}
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default memo(Table);
