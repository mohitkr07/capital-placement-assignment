import React, { useEffect } from "react";
import { useState } from "react";
import styles from "../../styles/utils.module.css";
import FieldType1 from "../reuasble fileds/fieldType1";

import Paragraph from "../questionTypes/paragraph";
import MCQ from "../questionTypes/mcq";
import Video from "../questionTypes/video";
import Dropdown from "../questionTypes/dropdown";
import Binary from "../questionTypes/binary";
import Question from "../reuasble fileds/Question";

interface PersonalInfoProps {
  data: any;
  updateFormData: (personalData: any) => void;
}

const PersonalInfo = (personalInfo: PersonalInfoProps) => {
  const [showAddQue, setAddQue] = useState(false);
  const [queType, setQueType] = useState("");
  const handleAddButton = () => {
    setAddQue(true);
  };

  //
  const [fData, setFData] = useState<any>({
    starPhone: personalInfo.data.phoneNumber.internalUse,
    showPhone: personalInfo.data.phoneNumber.show,

    starNationality: personalInfo.data.nationality.internalUse,
    showNationality: personalInfo.data.nationality.show,

    starCurrentResidence: personalInfo.data.currentResidence.internalUse,
    showCurrentResidence: personalInfo.data.currentResidence.show,

    starIdNumber: personalInfo.data.idNumber.internalUse,
    showIdNumber: personalInfo.data.idNumber.show,

    starDateOfBirth: personalInfo.data.dateOfBirth.internalUse,
    showDateOfBirth: personalInfo.data.dateOfBirth.show,

    starGender: personalInfo.data.gender.internalUse,
    showGender: personalInfo.data.gender.show,
  });

  const [questions, setQuestions] = useState<any[]>(
    personalInfo.data.personalQuestions
  );

  const handleOnSave = (question: any) => {
    setQuestions([...questions, question]);

    const updatedPersonalData = { ...personalInfo.data };
    updatedPersonalData.personalQuestions = [...questions, question];

    personalInfo.updateFormData(updatedPersonalData);
  };

  const handleCheckboxChange = (x: number) => {
    if (x == 1) {
      setFData({ ...fData, starPhone: !fData.starPhone });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.phoneNumber.internalUse = !fData.starPhone;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 2) {
      setFData({ ...fData, starNationality: !fData.starNationality });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.nationality.internalUse = !fData.starNationality;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 3) {
      setFData({ ...fData, starCurrentResidence: !fData.starCurrentResidence });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.currentResidence.internalUse =
        !fData.starCurrentResidence;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 4) {
      setFData({ ...fData, starIdNumber: !fData.starIdNumber });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.idNumber.internalUse = !fData.starIdNumber;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 5) {
      setFData({ ...fData, starDateOfBirth: !fData.starDateOfBirth });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.dateOfBirth.internalUse = !fData.starDateOfBirth;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 6) {
      setFData({ ...fData, starGender: !fData.starGender });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.gender.internalUse = !fData.starGender;
      personalInfo.updateFormData(updatedProfileData);
    }
  };

  const handleSwitchChange = (x: number) => {
    if (x == 1) {
      setFData({ ...fData, showPhone: !fData.showPhone });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.phoneNumber.show = !fData.showPhone;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 2) {
      setFData({ ...fData, showNationality: !fData.showNationality });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.nationality.show = !fData.showNationality;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 3) {
      setFData({ ...fData, showCurrentResidence: !fData.showCurrentResidence });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.currentResidence.show = !fData.showCurrentResidence;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 4) {
      setFData({ ...fData, showIdNumber: !fData.showIdNumber });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.idNumber.show = !fData.showIdNumber;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 5) {
      setFData({ ...fData, showDateOfBirth: !fData.showDateOfBirth });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.dateOfBirth.show = !fData.showDateOfBirth;
      personalInfo.updateFormData(updatedProfileData);
    } else if (x == 6) {
      setFData({ ...fData, showGender: !fData.showGender });
      const updatedProfileData = { ...personalInfo.data };
      updatedProfileData.gender.show = !fData.showGender;
      personalInfo.updateFormData(updatedProfileData);
    }
  };

  const handleProfileQuestion = (x: string) => {
    if (x == "question") {
    }
  };

  return (
    <div className={`${styles["personal-info"]} ${styles["common-div"]}`}>
      <div className={styles["title"]}>
        <p>Personal Information</p>
      </div>
      <div className={styles["form"]}>
        <div className={styles["form-default"]}>
          <input
            className={styles["input-text-form"]}
            type="text"
            placeholder="First Name"
          />
          <input
            className={styles["input-text-form"]}
            type="text"
            placeholder="Last Name"
          />
          <input
            className={styles["input-text-form"]}
            type="email"
            placeholder="Email"
          />
          <FieldType1
            title="Phone"
            subTitle="(without dial code)"
            checkTitle="Internal"
            checked={fData.showPhone}
            internal={fData.starPhone}
            onCheckboxChange={() => handleCheckboxChange(1)}
            onSwitch={() => handleSwitchChange(1)}
          />
          <FieldType1
            title="Nationality"
            subTitle=""
            checkTitle="Internal"
            checked={fData.showNationality}
            internal={fData.starNationality}
            onCheckboxChange={() => handleCheckboxChange(2)}
            onSwitch={() => handleSwitchChange(2)}
          />
          <FieldType1
            title="Current Residence"
            subTitle=""
            checkTitle="Internal"
            checked={fData.showCurrentResidence}
            internal={fData.starCurrentResidence}
            onCheckboxChange={() => handleCheckboxChange(3)}
            onSwitch={() => handleSwitchChange(3)}
          />
          <FieldType1
            title="ID Number"
            subTitle=""
            checkTitle="Internal"
            checked={fData.showIdNumber}
            internal={fData.starIdNumber}
            onCheckboxChange={() => handleCheckboxChange(4)}
            onSwitch={() => handleSwitchChange(4)}
          />
          <FieldType1
            title="Date of Birth"
            subTitle=""
            checkTitle="Internal"
            checked={fData.showDateOfBirth}
            internal={fData.starDateOfBirth}
            onCheckboxChange={() => handleCheckboxChange(5)}
            onSwitch={() => handleSwitchChange(5)}
          />
          <FieldType1
            title="Gender"
            subTitle=""
            checkTitle="Internal"
            checked={fData.showGender}
            internal={fData.starGender}
            onCheckboxChange={() => handleCheckboxChange(6)}
            onSwitch={() => handleSwitchChange(6)}
          />
          {questions.map(
            (que: any, key) => key > 0 && <Question key={key} question={que} />
          )}
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
                <Paragraph
                  onSave={handleOnSave}
                  onDelete={() => setAddQue(false)}
                />
              ) : queType == "MCQ" ? (
                <MCQ onSave={handleOnSave} onDelete={() => setAddQue(false)} />
              ) : queType == "Video" ? (
                <Video onSave={handleOnSave} onDelete={() => setAddQue(false)} />
              ) : queType == "Dropdown" ? (
                <Dropdown onSave={handleOnSave} onDelete={() => setAddQue(false)} />
              ) : (
                <Paragraph
                  onSave={handleOnSave}
                  onDelete={() => setAddQue(false)}
                />
              )}
            </>
          )}
          <span onClick={handleAddButton} className={styles["add-que"]}>
            <i className="fa-solid fa-plus" />
            <p>Add a question</p>
          </span>
        </div>
      </div>
    </div>
  );
};

export default PersonalInfo;
