import { useState } from "react";
import styles from "../styles/home.module.css";
import Filters from "./utils/filters";
import Candidates from "./utils/candidates";

const Home = () => {
  const [selectedTag, setSelectedTag] = useState<number | null>(0);

  const handleTagClick = (index: number) => {
    setSelectedTag(index);
  };

  return (
    <>
      <div className={styles["container"]}>
        {/* ---------------side panel-------------- */}
        <div className={styles["side-panel"]}>
          <div className={styles["panel-options"]}>
            <div className={styles["profile"]}></div>
            {Array.from({ length: 8 }, (_, index) => (
              <i
                key={index}
                className={`fa-solid fa-${iconNames[index]}`}
                onClick={() => handleTagClick(index)}
                style={{
                  backgroundColor: selectedTag === index ? "#E9EFFF" : "white",
                  color: selectedTag === index ? "#1D4ED8" : "",
                }}
              ></i>
            ))}
          </div>
          <div className={styles["panel-options"]}>
            <i
              className={`fa-solid fa-gear`}
              onClick={() => handleTagClick(15)}
              style={{
                backgroundColor: selectedTag === 15 ? "#E9EFFF" : "white",
                color: selectedTag === 15 ? "#1D4ED8" : "",
              }}
            ></i>
            <span className={styles["profile-2"]}>AS</span>
          </div>
        </div>

        {/* ---------View Port----------- */}
        <div className={styles["view-port"]}>
          <div className={styles["top"]}>
            <div className={styles["top-left"]}>
              <span>
                <h3>London Internship Program</h3>
                <p>London</p>
              </span>
            </div>
            <div className={styles["top-right"]}>
              <div className={styles["dropdown"]}>
                <button className={styles["dropbtn"]}>
                  Opportunity Browsing{" "}
                  <span>
                    <i className="fa-solid fa-angle-down"></i>
                  </span>
                </button>
                <div className={styles["dropdown-content"]}>
                  {Array.from({ length: 9 }, (_, index) => (
                    <a href="#">
                      <p>{opportunityBrowsing[index]}</p>
                      <p>{opportunityNum[index]}</p>
                    </a>
                  ))}
                </div>
              </div>

              <span className={styles["top-right-right"]}>
                <i className={`fa-solid fa-tag ${styles["top-icon"]}`}></i>
                <i
                  style={{ color: "#A80000" }}
                  className={`fa-solid fa-user-xmark ${styles["top-icon"]}`}
                ></i>
                <i
                  className={`fa-solid fa-user-check ${styles["top-icon"]}`}
                ></i>
                <i className={`fa-solid fa-user-pen ${styles["top-icon"]}`}></i>
                <i
                  className={`fa-regular fa-envelope ${styles["top-icon"]}`}
                ></i>
                <span className={styles["top-right-option"]}>
                  <span>Move to Video Interview</span>
                  <i className="fa-solid fa-chevron-down"></i>
                </span>
              </span>
            </div>
          </div>

          <div className={styles["bottom"]}>
            <div className={styles["bottom-left"]}>
              <div className={styles["search"]}>
                <i className="fa-solid fa-magnifying-glass"></i>
                <input
                  type="text"
                  placeholder="Search by name, edu, exp or #tag"
                />
                <span>
                  <i className="fa-solid fa-exclamation"></i>
                </span>
              </div>
              <Filters />
            </div>

            <div className={styles["bottom-right"]}>
              <div className={styles["bottom-right-container"]}>
                <div className={styles["candidates-info"]}>
                  <span className={styles["info-left"]}>
                    <input type="checkbox" />
                    <p>247 Candidates</p>
                  </span>

                  <span className={styles["info-right"]}>
                    <p>Qualified</p>
                    <hr />
                    <span className={styles["info-tally"]}>
                      <p>Task</p>
                      <p>25</p>
                    </span>
                    <hr />
                    <span className={styles["info-tally"]}>
                      <p>Disqualified</p>
                      <p>78</p>
                    </span>
                  </span>
                </div>
                {candidates.map((candidate) => (
                  <Candidates
                    name={candidate.name}
                    location={candidate.location}
                    degree={candidate.degree}
                    hashTags={candidate.hashTags}
                    eRefs={candidate.eRefs}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const candidates = [
  {
    name: "Aaliyah Sanderson",
    location: "Riyadh, Saudi Arabia",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    eRefs: ["New York", "Marketing", "London"],
  },
  {
    name: "John Doe",
    location: "Boston, USA",
    degree: "Bachelor - MIT (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    eRefs: ["New York", "Marketing", "London"],
  },
  {
    name: "Thomas Matt",
    location: "Edinburgh - UK",
    degree: "Bachelor - Harvard University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    eRefs: ["New York", "Marketing", "London"],
  },
  {
    name: "Kamilia Smith",
    location: "London, UK",
    degree: "Bachelor - Boston University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    eRefs: ["New York", "Marketing", "London"],
  },
  {
    name: "Roy Jade",
    location: "Cambridge, UK",
    degree: "Bachelor - Yale (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    eRefs: ["New York", "Marketing", "London"],
  },
  {
    name: "Ahmed Salman",
    location: "New York, USA",
    degree: "Bachelor - Cambridge University (2023 - 2023)",
    hashTags: ["top_candidate", "top_candidate"],
    eRefs: ["New York", "Marketing", "London"],
  },
];

const opportunityBrowsing = [
  "Applied",
  "Shortlisted",
  "Technical Interview",
  "Opportunity Browsing",
  "Video Interview I",
  "Video Interview II",
  "Video Interview III",
  "Offer",
  "Withdrawn",
];
const opportunityNum = [1745, 453, 123, 243, 25, 25, 25, 25, 25];

const iconNames = [
  "house",
  "users",
  "calendar-check",
  "share-nodes",
  "file-lines",
  "book-open",
  "angle-left",
  "heart",
];

export default Home;
