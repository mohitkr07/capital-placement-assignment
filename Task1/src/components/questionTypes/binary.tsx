import { useState } from "react";
import styles from "../../styles/questions.module.css";

interface binaryData {
  onSave: (question: any) => void;
  onDelete: () => void;
}

const Binary = (props: binaryData | any) => {
  const handleDeleteButtong = () => {
    props.onDelete();
  };

  const [question, setQuestion] = useState<any>({
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "YesNo",
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
          <input
            type="text"
            name="prompt"
            value={question.question}
            onChange={(e) => {
              setQuestion({ ...question, question: e.target.value });
            }}
            placeholder="Type here"
          />
        </span>

        <span style={{ marginTop: "1rem" }} className={styles["enable-option"]}>
          <input
            type="checkbox"
            checked={question.disqualify}
            onChange={(e) => {
              setQuestion({ ...question, disqualify: e.target.checked });
            }}
            name="disqualify"
          />
          <p>Disqualify candidate if the answer is no</p>
        </span>
      </div>
      <div className={styles["delete-save-option"]}>
        <span onClick={handleDeleteButtong}>
          <i className="fa-solid fa-x"></i>
          <p>Delete question</p>
        </span>
        <button onClick={()=>props.onSave(question)} className={styles["save-button"]}>
          Save
        </button>
      </div>
    </>
  );
};

export default Binary;
