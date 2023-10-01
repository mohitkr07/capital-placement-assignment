import styles from "../../styles/utils.module.css";


const Question = (props: any) => {
  return (
    <div className={styles["question-field"]}>
      <p>{props.question.type}</p>
      <span>
        <p>
          {props.question.question}
        </p>
        <i className="fa-solid fa-pencil"></i>
      </span>
    </div>
  );
};

export default Question;
