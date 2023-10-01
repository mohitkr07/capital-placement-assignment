import styles from "../../styles/utils.module.css";

interface candidate {
  name: string;
  location: string;
  degree: string;
  hashTags: string[];
  eRefs: string[];
}

const Candidates = (props: candidate) => {
  return (
    <div className={styles["candidate"]}>
      <input type="checkbox" />

      <span className={styles["profile"]}>AS</span>
      <div className={styles["about"]}>
        <h4>{props.name}</h4>
        <p>{props.location}</p>
        <p>{props.degree}</p>
        <span>
          {props.hashTags.map((item) => (
            <p>{item}</p>
          ))}
        </span>
        <span>
          {props.eRefs.map((item) => (
            <p>{item}</p>
          ))}
        </span>
      </div>
    </div>
  );
};

export default Candidates;
