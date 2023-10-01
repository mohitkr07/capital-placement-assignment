import { useState } from "react";
import styles from "../../styles/utils.module.css";

interface fieldProps {
  title: string;
  subTitle: string;
  checkTitle: string;
  checked: boolean;
  internal: boolean;
  onCheckboxChange: () => void;
  onSwitch: () => void;
}

const FieldType1 = (props: fieldProps) => {
  return (
    <div>
      <span className={styles["input-check-toggle"]}>
        <label className={styles["field-name"]}>
          {props.title}{" "}
          <p style={{ fontSize: "85%", fontWeight: "lighter" }}>
            {props.subTitle}
          </p>
        </label>
        <span className={styles["checkbox-span"]}>
          <input
            checked={props.internal}
            onChange={props.onCheckboxChange}
            type="checkbox"
          />
          <p>{props.checkTitle}</p>
        </span>
        
        <span className={styles["toggle-hide"]}>
          <label className={styles["switch"]}>
            <input
              onChange={props.onSwitch}
              checked={!props.checked}
              type="checkbox"
            />
            <span className={`${styles["slider"]} ${styles["round"]}`}></span>
          </label>
          <p>{props.checked ? "Hide" : "Show"}</p>
        </span>
      </span>
    </div>
  );
};

export default FieldType1;
