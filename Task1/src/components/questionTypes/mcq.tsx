import { useState } from "react";
import styles from "../../styles/questions.module.css";

interface type {
  onSave: (question: any) => void;
  onDelete: () => void;
}
const MCQ = (props: type) => {
  const handleDeleteButtong = () => {
    props.onDelete();
  };

  const [question, setQuestion] = useState<any>({
    id: "497f6eca-6276-4993-bfeb-53cbbbba6f08",
    type: "MultipleChoice",
    question: "",
    choices: [],
    maxChoice: 0,
    disqualify: false,
    other: false,
  });

  const [choice, setChoice] = useState<any>();

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
            placeholder="type here"
          />
        </span>

        <span className={styles["choice"]}>
          <label style={{ marginLeft: "25px", fontSize: "80%" }}>Choice</label>

          <span className={styles["choices"]}>
            {question.choices.map((item: any, key: any) => (
              <div key={key} style={{ display: "flex" }}>
                <i
                  style={{ marginRight: "12px" }}
                  className="fa-solid fa-list"
                ></i>
                <input

                  type="text"
                  value={item}
                  onChange={(e) => {
                    const updatedChoices = [...question.choices];
                    updatedChoices[key] = e.target.value;
                    setQuestion({ ...question, choices: updatedChoices });
                  }}
                  placeholder="Type here"
                />
              </div>
            ))}


            <span>
              <i
                style={{ marginRight: "12px" }}
                className="fa-solid fa-list"
              ></i>
              <input
                type="text"
                value={choice}
                onChange={(e) => setChoice(e.target.value)}
                placeholder="Type here"
              />
              <i
                style={{ margin: "15px" }}
                onClick={() => {
                  const updatedQuestion = { ...question };
                  updatedQuestion.choices.push(choice);
                  setQuestion(updatedQuestion);
                  setChoice("");
                }}
                className="fa-solid fa-plus"
              ></i>
            </span>
          </span>
        </span>

        <span className={styles["enable-option"]}>
          <input
            type="checkbox"
            checked={question.other}
            onChange={(e) => {
              setQuestion({ ...question, other: e.target.checked });
            }}
          />
          <p>Enable "Other" option</p>
        </span>

        <span className={styles["max-choice"]}>
          <label style={{ fontSize: "80%" }}>Max choice allowed</label>
          <input
            type="number"
            value={question.maxChoice}
            onChange={(e) => {
              setQuestion({ ...question, maxChoice: e.target.value });
            }}
            placeholder="Enter nuber of choice allowed here"
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

export default MCQ;
