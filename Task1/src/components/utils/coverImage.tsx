import { useState, ChangeEvent, useRef } from "react";
import styles from "../../styles/utils.module.css";
import { sign } from "crypto";

const CoverImage = (props: any) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(props.file);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setSelectedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleIconClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  return (
    <div className={`${styles["cover-form"]} ${styles["common-div"]}`}>
      <div className={styles["title"]}>
        <p>Upload cover image</p>
      </div>
      <div className={styles["cover-img"]}>
        {!selectedImage && (
          <div
            style={{ cursor: "pointer" }}
            onClick={handleIconClick}
            className={styles["upload"]}
          >
            <div>
              <i
                style={{ marginBottom: "5px", fontSize: "1.2rem" }}
                className="fa-solid fa-arrow-up-from-bracket"
              ></i>
            </div>
            <input
              style={{ display: "none" }}
              type="file"
              accept="image/*"
              ref={fileInputRef}
              onChange={handleImageChange}
            ></input>
            <p
              style={{
                marginBottom: "5px",
                fontSize: "90%",
                fontWeight: "bold",
              }}
            >
              Upload cover image
            </p>
            <p style={{ fontSize: "83%", color: "grey" }}>
              16:9 ratio is recommended. Max image size 1mb
            </p>
          </div>
        )}
        {selectedImage && (
          <div style={{ width: "100%", height: "100%" }}>
            <img
              src={selectedImage}
              alt="Preview"
              style={{ width: "100%", height: "100%" }}
            />
            <div
              style={{
                position: "relative",
                bottom: "3rem",
                width: "100%",
                height: "2.73rem",
                backgroundColor: "#fff",
                display: "flex",
                alignItems: "center",
                padding: "1rem",
              }}
            >
              <span
                onClick={() => setSelectedImage(null)}
                style={{
                  color: "#A80000",
                  fontWeight: "bold",
                  fontSize: "80%",
                  cursor: "pointer",
                }}
              >
                <i
                  style={{ marginRight: "12px", fontSize: "120%" }}
                  className="fa-solid fa-x"
                ></i>
                Delete & re-upload
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default CoverImage;
