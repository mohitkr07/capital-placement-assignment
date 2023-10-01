import { useEffect, useState } from "react";
import CoverImage from "./utils/coverImage";
import PersonalInfo from "./utils/personalInfo";
import Profile from "./utils/profile";
import AdditionalQ from "./utils/additionalQ";

import styles from "../styles/Home.module.css";
import { abort } from "process";

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
      // yaml endpoint
      // http://127.0.0.1:4010/api/405.6457059118799/programs/laborum/application-form

      const response = await fetch(
        `https://e2f0497c-962a-4f8f-8a2c-b2a43f049ce3.mock.pstmn.io/capital-placement`
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
      // yaml endpoint
      // http://127.0.0.1:4010/api/983.6877336280635/programs/sapiente/application-form
      const response = await fetch(
        `https://e2f0497c-962a-4f8f-8a2c-b2a43f049ce3.mock.pstmn.io/capital-placement`,
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
    console.log(formData);
  };

  const undateFormData2 = async (profileData: any) => {
    const updatedFormData = { ...formData };
    updatedFormData.data.attributes.profile = profileData;
    setFormData(updatedFormData);
    await updateApplicationForm();
    console.log(formData);
  };

  const updateAdditional = async (additionalData: any) => {
    const updatedFormData = { ...formData };
    updatedFormData.data.attributes.customisedQuestions = additionalData;

    setFormData(updatedFormData);
    console.log(formData);
    await updateApplicationForm();
  };

  return (
    <div className={styles["container"]}>
      <div className={styles["side-bar"]}>
        <div className={styles["navigation"]}>
          <i className="fa-solid fa-bars"></i>
          <i className="fa-solid fa-house"></i>
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
            <div className={styles["selected"]}></div>
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
