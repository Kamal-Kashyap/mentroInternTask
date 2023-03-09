import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir1.module.css";

const MacBookAir1: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipse2Click = useCallback(() => {
    navigate("/macbook-air-2");
  }, [navigate]);

  return (
    <div className={styles.macbookAir1}>
      <img className={styles.macbookAir1Child} alt="" src="../ellipse-27.svg" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="../mask-group5@2x.png"
      />
      <img
        className={styles.centreImageIcon}
        alt=""
        src="../centre-image.svg"
      />
      <div className={styles.iAmPrankur}>
        I am Prankur Gupta, I am working as a Software Development Engineer at
        Amazon. I can guide you throughout your preparation phase. Trust me when
        I tell you this I know the exact recipe to crack the coding interview
        rounds of top companies for the SDE role.
      </div>
      <div className={styles.sdeAmazon}>SDE @Amazon</div>
      <div className={styles.prankurGupta}>{`Prankur Gupta `}</div>
      <b className={styles.b}>{`4.9 `}</b>
      <div className={styles.macbookAir1Item} />
      <div className={styles.bookASession}>Book a session</div>
      <div className={styles.prankurGupta1}>Prankur Gupta</div>
      <img
        className={styles.macbookAir1Inner}
        alt=""
        src="../rectangle-34.svg"
      />
      <img className={styles.rectangleIcon} alt="" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-28.svg" />
      <img
        className={styles.macbookAir1Child1}
        alt=""
        src="../ellipse-28.svg"
        onClick={onEllipse2Click}
      />
      <img className={styles.arrowIcon} alt="" src="../arrow-2.svg" />
      <img className={styles.macbookAir1Child2} alt="" src="../arrow-2.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir1Child3} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir1Child4} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir1Child5} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir1Child6} alt="" src="../vector-7.svg" />
    </div>
  );
};

export default MacBookAir1;
