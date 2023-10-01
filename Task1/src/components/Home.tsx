import { useEffect, useState } from "react";
import CoverImage from "./utils/coverImage";
import PersonalInfo from "./utils/personalInfo";
import Profile from "./utils/profile";
import AdditionalQ from "./utils/additionalQ";

import styles from "../styles/Home.module.css";

const Home = () => {
  const [listColor, setColor] = useState("#00635B");

  const [applicationForm, setApplicationForm] = useState({});

  const [formData, setFormData] = useState<any>();
  const [personalInfo, setPersonalInfo] = useState<any>();
  const [profile, setProfile] = useState<any>();
  const [additionalQue, setAdditionalQue] = useState<any>();

  // Fetch Data
  const fetchApplicationForm = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:4010/api/260.92998504742457/programs/sunt/application-form`
      );
      if (response.ok) {
        const data = await response.json();
        setFormData(data);
        setProfile(data.data.attributes.profile);
        setPersonalInfo(data.data.attributes.personalInformation);
        setAdditionalQue(data.data.attributes.customisedQuestions);
      } else {
        console.error("Error fetching application form:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching application form:", error);
    }
  };

  // Update Data
  const updateApplicationForm = async () => {
    try {
      const response = await fetch(
        `http://127.0.0.1:4010/api/260.92998504742457/programs/sunt/application-form`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );
      if (response.ok) {
        console.log("Application form data updated successfully.");
      } else {
        console.error("Error updating application form:", response.statusText);
      }
    } catch (error) {
      console.error("Error updating application form:", error);
    }
  };

  useEffect(() => {
    fetchApplicationForm();
  }, []);

  const undateFormData = async (personalInfo: any) => {
    const updatedFormData = { ...formData };
    updatedFormData.data.attributes.personalInformation = personalInfo;
    
    setFormData(updatedFormData);
    await updateApplicationForm();
    console.log(formData)
  };

  const undateFormData2 = async (profileData: any) => {
    const updatedFormData = { ...formData };
    updatedFormData.data.attributes.profile = profileData;
    setFormData(updatedFormData);
    await updateApplicationForm();
    console.log(formData)
  };

  const updateAdditional = async (additionalData: any) => {
    const updatedFormData = { ...formData };
    updatedFormData.data.attributes.customisedQuestions = additionalData;

    setFormData(updatedFormData);
    console.log(formData);
    await updateApplicationForm();
  };

  const testModify = async () => {
    const updatedData = { ...formData };

    updatedData.data.attributes.profile.profileQuestions[0].question =
      "What is Your name?";
    const q = updatedData.data.attributes.profile.profileQuestions[0];
    q.question = "How are you?";
    updatedData.data.attributes.personalInformation.personalQuestions.push(q);
    updatedData.data.attributes.personalInformation.personalQuestions.push(q);
    updatedData.data.attributes.personalInformation.personalQuestions.push(q);
    updatedData.data.attributes.personalInformation.personalQuestions.push(q);

    setFormData(updatedData);
    await updateApplicationForm();
    await fetchApplicationForm();
    console.log("test", formData);
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["side-bar"]}>
        <div className={styles["navigation"]}>
          <i className="fa-solid fa-bars"></i>
          <i onClick={testModify} className="fa-solid fa-house"></i>
          <i className="fa-regular fa-rectangle-list"></i>
        </div>
      </div>
      <div className={styles["view-port"]}>
        <div className={styles["steps"]}>
          <ul className={styles["steps-list"]}>
            <li>Program Details</li>
            <li style={{ backgroundColor: listColor, color: "#fff" }}>
              Application Form
            </li>
            <li>Workflow</li>
            <li>Preview</li>
          </ul>
        </div>
        <div className={styles["info"]}>
          {formData && <CoverImage />}
          {personalInfo && (
            <PersonalInfo updateFormData={undateFormData} data={personalInfo} />
          )}
          {profile && (
            <Profile updateFormData={undateFormData2} profile={profile} />
          )}
          {additionalQue && (
            <AdditionalQ
              updateFormData={updateAdditional}
              additionalQuestions={additionalQue}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default Home;
