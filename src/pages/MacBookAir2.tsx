import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./MacBookAir2.module.css";

const MacBookAir2: FunctionComponent = () => {
  const navigate = useNavigate();

  const onEllipse2Click = useCallback(() => {
    navigate("/macbook-air-3");
  }, [navigate]);

  return (
    <div className={styles.macbookAir2}>
      <img className={styles.macbookAir2Child} alt="" src="../ellipse-27.svg" />
      <img
        className={styles.maskGroupIcon}
        alt=""
        src="../mask-group3@2x.png"
      />
      <img
        className={styles.macbookAir2Item}
        alt=""
        src="../ellipse-251@2x.png"
      />
      <img
        className={styles.macbookAir2Inner}
        alt=""
        src="../ellipse-311@2x.png"
      />
      <div className={styles.sauravPal}>Saurav Pal</div>
      <div className={styles.rectangleDiv} />
      <div className={styles.bookASession}>Book a session</div>
      <div className={styles.prankurGupta}>Prankur Gupta</div>
      <img className={styles.rectangleIcon} alt="" src="../rectangle-34.svg" />
      <img className={styles.macbookAir2Child1} alt="" />
      <img className={styles.ellipseIcon} alt="" src="../ellipse-28.svg" />
      <img
        className={styles.macbookAir2Child2}
        alt=""
        src="../ellipse-28.svg"
        onClick={onEllipse2Click}
      />
      <img className={styles.arrowIcon} alt="" src="../arrow-2.svg" />
      <img className={styles.macbookAir2Child3} alt="" src="../arrow-2.svg" />
      <img className={styles.vectorIcon} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir2Child4} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir2Child5} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir2Child6} alt="" src="../vector-3.svg" />
      <img className={styles.macbookAir2Child7} alt="" src="../vector-73.svg" />
      <b className={styles.b}>5.0</b>
      <div className={styles.sde2Amazon}>SDE-2 @Amazon</div>
      <div className={styles.iAmA}>
        I am a Senior Software Developer American Express. Have been
        passionately solving Leetcode, HackerRank, Codechef, Codeforces
        problems, and enthusiastically solving problems with the analysis of
        space.
      </div>
    </div>
  );
};

export default MacBookAir2;
