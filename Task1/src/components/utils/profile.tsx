import { useEffect, useState } from "react";
import styles from "../../styles/utils.module.css";
import FieldType1 from "../reuasble fileds/fieldType1";

import Paragraph from "../questionTypes/paragraph";
import MCQ from "../questionTypes/mcq";
import Video from "../questionTypes/video";
import Dropdown from "../questionTypes/dropdown";
import Binary from "../questionTypes/binary";

import Question from "../reuasble fileds/Question";

interface ProfileInfo {
  profile: any;
  updateFormData: (profileData: any) => void;
}

const Profile = (profile: ProfileInfo) => {
  const [showAddQue, setAddQue] = useState(false);
  const [queType, setQueType] = useState("");

  const [starEducation, setStarEducation] = useState<any>(
    profile.profile.education.mandatory
  );
  const [showEducation, setShowEducation] = useState<any>(
    profile.profile.education.show
  );

  const [starExperience, setStarExperience] = useState<any>(
    profile.profile.experience.mandatory
  );
  const [showExperience, setShowExperience] = useState<any>(
    profile.profile.experience.show
  );

  const [starResume, setStarResume] = useState<any>(
    profile.profile.resume.mandatory
  );
  const [showResume, setShowResume] = useState<any>(
    profile.profile.resume.show
  );

  const [questions, setQuestions] = useState<any>(
    profile.profile.profileQuestions
  );

  const handleAddButton = () => {
    setAddQue(true);
  };

  const handleCheckboxChange = (x: number) => {
    if (x == 1) {
      setStarEducation(!starEducation);
      const updatedProfileData = { ...profile.profile };
      updatedProfileData.education.mandatory = !starEducation;
      profile.updateFormData(updatedProfileData);
    } else if (x == 2) {
      setStarExperience(!starExperience);
      const updatedProfileData = { ...profile.profile };
      updatedProfileData.experience.mandatory = !starExperience;
      profile.updateFormData(updatedProfileData);
    } else if (x == 3) {
      setStarResume(!starResume);
      const updatedProfileData = { ...profile.profile };
      updatedProfileData.resume.mandatory = !starResume;
      profile.updateFormData(updatedProfileData);
    }
  };

  const handleSwitchChange = (x: number) => {
    if (x == 1) {
      setShowEducation(!showEducation);
      const updatedProfileData = { ...profile.profile };
      updatedProfileData.education.show = !showEducation;
      profile.updateFormData(updatedProfileData);
    } else if (x == 2) {
      setShowExperience(!showExperience);
      const updatedProfileData = { ...profile.profile };
      updatedProfileData.experience.show = !showExperience;
      profile.updateFormData(updatedProfileData);
    } else if (x == 3) {
      setShowResume(!showResume);
      const updatedProfileData = { ...profile.profile };
      updatedProfileData.resume.show = !showResume;
      profile.updateFormData(updatedProfileData);
    }
  };

  const handleOnSave = (question: any) => {
    setQuestions([...questions, question]);
    const updateProfileData = { ...profile.profile };
    updateProfileData.profileQuestions = [...questions, question];

    profile.updateFormData(updateProfileData);
  };

  return (
    <div className={`${styles["profile"]} ${styles["common-div"]}`}>
      <div className={styles["title"]}>
        <p>Profile</p>
      </div>
      <div className={styles["form"]}>
        <div className={styles["form-default"]}>
          <FieldType1
            title="Education"
            subTitle=""
            checkTitle="Mandatory"
            checked={showEducation}
            internal={starEducation}
            onCheckboxChange={() => handleCheckboxChange(1)}
            onSwitch={() => handleSwitchChange(1)}
          />
          <FieldType1
            title="Experience"
            subTitle=""
            checkTitle="Mandatory"
            checked={showExperience}
            internal={starExperience}
            onCheckboxChange={() => handleCheckboxChange(2)}
            onSwitch={() => handleSwitchChange(2)}
          />
          <FieldType1
            title="Resume"
            subTitle=""
            checkTitle="Mandatory"
            checked={showResume}
            internal={starResume}
            onCheckboxChange={() => handleCheckboxChange(3)}
            onSwitch={() => handleSwitchChange(3)}
          />
          {questions.map(
            (que: any, key: any) => key > 0 && <Question key={key} question={que} />
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
                <Video
                  onSave={handleOnSave}
                  onDelete={() => setAddQue(false)}
                />
              ) : queType == "Dropdown" ? (
                <Dropdown
                  onSave={handleOnSave}
                  onDelete={() => setAddQue(false)}
                />
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

export default Profile;
