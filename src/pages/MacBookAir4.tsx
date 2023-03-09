import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir4.module.css";

const MacBookAir4: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipse2Click = useCallback(() => {
    navigate("/macbook-air-5");
  }, [navigate]);

  return (
    <div className={styles.macbookAir4}>
      <img className={styles.macbookAir4Child} alt="" src="../ellipse-27.svg" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="../mask-group1@2x.png"
      />
      <div className={styles.macbookAir4Item} />
      <div className={styles.bookASession}>Book a session</div>
      <img className={styles.macbookAir4Inner} alt="" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-28.svg" />
      <img
        className={styles.macbookAir4Child1}
        alt=""
        src="../ellipse-28.svg"
        onClick={onEllipse2Click}
      />
      <img className={styles.arrowIcon} alt="" src="../arrow-2.svg" />
      <img className={styles.macbookAir4Child2} alt="" src="../arrow-2.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir4Child3} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir4Child4} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir4Child5} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir4Child6} alt="" src="../vector-3.svg" />
      <div className={styles.keshavBathla}>Keshav Bathla</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.keshavBathla1}>Keshav Bathla</div>
      <b className={styles.b}>5.0</b>
      <div className={styles.aCuriousLearner}>
        A curious learner, on a way to become a kickass developer who writes
        Python, Java, Javascript and Go | Software Engineer @Groww | Ex-Software
        Engineer @Grofers | Tech Consultant | Freelancer | Open Source Developer
        | Coding Instructor
      </div>
      <div className={styles.sde1Groww}>SDE-1 @Groww</div>
    </div>
  );
};

export default MacBookAir4;
