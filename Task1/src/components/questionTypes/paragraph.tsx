import { useState } from "react";
import styles from "../../styles/questions.module.css";

interface type {
  onSave: (question: any) => void;
  onDelete: () => void;
}

const Paragraph = (props: type) => {
  const handleDeleteButtong = () => {
    props.onDelete();
  };

  const [question, setQuestion] = useState<any>({
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "Paragraph",
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
            value={question.question}
            onChange={(e) => {
              setQuestion({ ...question, question: e.target.value });
            }}
            placeholder="Type here"
          />
        </span>
      </div>
      <div className={styles["delete-save-option"]}>
        <span onClick={handleDeleteButtong}>
          <i className="fa-solid fa-x"></i>
          <p>Delete question</p>
        </span>
        <button
          onClick={() => props.onSave(question)}
          className={styles["save-button"]}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default Paragraph;
