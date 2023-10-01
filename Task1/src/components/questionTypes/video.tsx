import { useState } from "react";
import styles from "../../styles/questions.module.css";

interface type {
  onSave: (question: any) => void;
  onDelete: () => void;
}

const Video = (props: type | any) => {
  const handleDeleteButtong = () => {
    props.onDelete();
  };

  const [question, setQuestion] = useState<any>({
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "",
    question: "",
    choices: [],
    maxChoice: 0,
    disqualify: false,
    other: false,
  });

  return (
    <>
      <div className={styles["question"]}>
        <span className={styles["que-des"]}>
          <label>Question</label>
          <input type="text" placeholder="Type here" />
        </span>
        <textarea className={styles["text-area"]} />
        <span className={styles["vid-duration"]}>
          <input type="number" placeholder="Max duration of Video" />
          <select>
            <option value="" disabled selected>
              {"in (sec/min)"}
            </option>
            <option>Second</option>
            <option>Minute</option>
          </select>
        </span>
      </div>
      <div className={styles["delete-save-option"]}>
        <span onClick={handleDeleteButtong}>
          <i className="fa-solid fa-x"></i>
          <p>Delete question</p>
        </span>
        <button className={styles["save-button"]}>Save</button>
      </div>
    </>
  );
};

export default Video;
