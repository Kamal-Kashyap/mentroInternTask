import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir3.module.css";

const MacBookAir3: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipse2Click = useCallback(() => {
    navigate("/macbook-air-4");
  }, [navigate]);

  return (
    <div className={styles.macbookAir3}>
      <img className={styles.macbookAir3Child} alt="" src="../ellipse-27.svg" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="../mask-group4@2x.png"
      />
      <div className={styles.macbookAir3Item} />
      <div className={styles.bookASession}>Book a session</div>
      <img className={styles.macbookAir3Inner} alt="" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-28.svg" />
      <img
        className={styles.macbookAir3Child1}
        alt=""
        src="../ellipse-28.svg"
        onClick={onEllipse2Click}
      />
      <img className={styles.arrowIcon} alt="" src="../arrow-2.svg" />
      <img className={styles.macbookAir3Child2} alt="" src="../arrow-2.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir3Child3} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir3Child4} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir3Child5} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir3Child6} alt="" src="../vector-3.svg" />
      <div className={styles.saumyaSingh}>Saumya Singh</div>
      <b className={styles.b}>5.0</b>
      <div className={styles.engineerRedhat}>
        Engineer @RedHat | Program Manager'20 @GirlScript | GHCI Scholar |
        International Open Source Award finalist by Red Hat | Winner SIH, 21U21
        Award | Google Connect Winner'19 | Mentor GCI
      </div>
      <div className={styles.softwareEngineerRed}>
        Software Engineer @Red Hat
      </div>
      <div className={styles.saumyaSingh1}>Saumya Singh</div>
      <div className={styles.rectangleDiv} />
    </div>
  );
};

export default MacBookAir3;
