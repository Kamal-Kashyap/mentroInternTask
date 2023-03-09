import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir5.module.css";

const MacBookAir5: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipse2Click = useCallback(() => {
    navigate("/macbook-air-6");
  }, [navigate]);

  return (
    <div className={styles.macbookAir5}>
      <img className={styles.macbookAir5Child} alt="" src="../ellipse-27.svg" />
      <img
        className={styles.macbookAir5Item}
        alt=""
        src="../ellipse-31@2x.png"
      />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="../mask-group2@2x.png"
      />
      <div className={styles.macbookAir5Inner} />
      <div className={styles.bookASession}>Book a session</div>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-34.svg" />
      <div className={styles.ankita}>Ankita</div>
      <div className={styles.ankita}>Ankita</div>
      <div className={styles.ankita2}>Ankita</div>
      <img className={styles.macbookAir5Child1} alt="" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-28.svg" />
      <img
        className={styles.macbookAir5Child2}
        alt=""
        src="../ellipse-28.svg"
        onClick={onEllipse2Click}
      />
      <img className={styles.arrowIcon} alt="" src="../arrow-2.svg" />
      <img className={styles.macbookAir5Child3} alt="" src="../arrow-2.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir5Child4} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir5Child5} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir5Child6} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir5Child7} alt="" src="../vector-3.svg" />
      <div className={styles.mlEngineerFirework}>ML Engineer @Firework</div>
      <div
        className={styles.workingMyWay}
      >{`Working my way to build the world's future product. Machine Learning Engineer, Data and Technology Evangelist I breathe in developing software with intelligence. I have been involved with startups like DailyHunt, Firework Hq, MagilHub to build the AI end of their products. `}</div>
      <b className={styles.b}>5.0</b>
    </div>
  );
};

export default MacBookAir5;
