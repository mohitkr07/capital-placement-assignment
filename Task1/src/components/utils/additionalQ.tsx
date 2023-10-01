import { useState } from "react";
import styles from "../../styles/utils.module.css";

import Paragraph from "../questionTypes/paragraph";
import MCQ from "../questionTypes/mcq";
import Video from "../questionTypes/video";
import Dropdown from "../questionTypes/dropdown";
import Binary from "../questionTypes/binary";

import Question from "../reuasble fileds/Question";

interface AdditionalQ {
  additionalQuestions: any;
  updateFormData: (additionalData: any) => void;
}

const AdditionalQ = (additional: AdditionalQ) => {
  const [showAddQue, setAddQue] = useState(false);

  const [questions, setQuestions] = useState<any[]>(
    additional.additionalQuestions
  );
  const [queType, setQueType] = useState("");

  const handleOnSave = (question: any) => {
    setQuestions([...questions, question]);

    additional.updateFormData([...questions, question]);
  };

  const handleAddButton = () => {
    setAddQue(true);
  };


  return (
    <div className={`${styles["personal-info"]} ${styles["common-div"]}`}>
      <div className={styles["title"]}>
        <p>Additional Question</p>
      </div>
      <div className={styles["form"]}>
        <div className={styles["form-default"]}>
          <div className={styles["question"]}>
            {additional.additionalQuestions.map((item: any, key: any) => {
              return key>0 && <Question key={key} question={item} />;
            })}
            {showAddQue && (
              <>
                <div className={styles["question"]}>
                  <span className={styles["que-type"]}>
                    <label>Type</label>
                    <select
                      onChange={(e) => setQueType(e.target.value)}
                      name="type"
                    >
                      <option value="Paragraph">Paragraph</option>
                      <option value="Short">Short answer</option>
                      <option value="Yes/No">Yes/No</option>
                      <option value="Dropdown">Dropdown</option>
                      <option value="MCQ">Multiple choice</option>
                      <option value="Date">Date</option>
                      <option value="Number">Number</option>
                      <option value="File">File upload</option>
                      <option value="Video">Video question</option>
                    </select>
                  </span>
                </div>
                {queType == "Yes/No" ? (
                  <Binary
                    onSave={handleOnSave}
                    onDelete={() => setAddQue(false)}
                  />
                ) : queType == "Paragraph" ? (
                  <Paragraph onSave={handleOnSave} onDelete={() => setAddQue(false)} />
                ) : queType == "MCQ" ? (
                  <MCQ onSave={handleOnSave} onDelete={() => setAddQue(false)} />
                ) : queType == "Video" ? (
                  <Video onSave={handleOnSave} onDelete={() => setAddQue(false)} />
                ) : queType == "Dropdown" ? (
                  <Dropdown onSave={handleOnSave} onDelete={() => setAddQue(false)} />
                ) : (
                  <Paragraph onSave={handleOnSave} onDelete={() => setAddQue(false)} />
                )}
              </>
            )}
          </div>
          <span onClick={handleAddButton} className={styles["add-que"]}>
            <i className="fa-solid fa-plus" />
            <p>Add a question</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default AdditionalQ;
