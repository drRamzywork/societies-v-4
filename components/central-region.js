import styles from "./central-region.module.css";

const CentralRegion = ({ className = "" }) => {
  return (
    <div className={[styles.centralRegion, className].join(" ")}>
      <div className={styles.riyadhRegion}>
        <div className={styles.riyadhCity}>
          <b className={styles.b}>الرياض</b>
        </div>
        <div className={styles.easternRegion}>
          <div className={styles.easternRegionInner}>
            <div className={styles.wrapperGroupParent}>
              <div className={styles.wrapperGroup}>
                <img className={styles.groupIcon} alt="" src="/group-1.svg" />
              </div>
              <img
                className={styles.frameChild}
                loading="lazy"
                alt=""
                src="/frame-47.svg"
              />
              <div className={styles.asir}>
                <b className={styles.b1}>عسير</b>
              </div>
            </div>
          </div>
          <b className={styles.b2}>الشرق</b>
        </div>
      </div>
    </div>
  );
};

export default CentralRegion;
