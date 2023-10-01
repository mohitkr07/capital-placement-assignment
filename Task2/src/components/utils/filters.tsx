import styles from "../../styles/utils.module.css";

const Filters = () => {
  return (
    <div className={styles["filters"]}>
      <span className={styles["filter-title"]}>
        <p style={{ fontWeight: "bold" }}>Filters</p>
        <p>0 Selected</p>
      </span>
      {Array.from({ length: 5 }, (_, index) => (
        <span className={styles["filter-type"]}>
          <span>
            <i className="fa-regular fa-file-lines"></i>
            <p style={{ marginLeft: "12px" }}>{filters[index]}</p>
          </span>
          <i style={{paddingRight: "20px", fontSize: "80%"}} className="fa-solid fa-angle-down"></i>
        </span>
      ))}
    </div>
  );
};

const filters = [
  "Personal Information",
  "Education",
  "Work Experinec",
  "Activity Filter",
  "Advanced Filter",
];

export default Filters;
