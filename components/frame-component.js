import styles from "./frame-component.module.css";

const FrameComponent = ({ className = "" }) => {
  return (
    <div className={[styles.frameParent, className].join(" ")}>
      <div className={styles.button12Parent}>
        <div className={styles.button12}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector.svg"
          />
        </div>
        <div className={styles.login}>
          <img
            className={styles.systemIcon}
            loading="lazy"
            alt=""
            src="/system.svg"
          />
        </div>
      </div>
      <div className={styles.wrapper}>
        <a className={styles.a}>اخر الاخبار</a>
      </div>
      <div className={styles.frameWrapper}>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <div className={styles.parent}>
              <b className={styles.b}>جمعية الشرق</b>
              <div className={styles.frameDiv}>
                <div className={styles.ellipseParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.frameItem} />
                  <div className={styles.frameInner} />
                </div>
              </div>
            </div>
          </div>
          <div className={styles.div}>
            <div className={styles.div1}>
              <p className={styles.p}>
                <span>فازت اليوم جمعية الشرق بعديد من الجوائز المتسحقة.</span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.button14Wrapper}>
        <div className={styles.button14}>
          <img
            className={styles.arrowsIcon}
            loading="lazy"
            alt=""
            src="/arrows.svg"
          />
          <div className={styles.button14Child} />
          <div className={styles.container}>
            <b className={styles.b1}>اخر الاخبار</b>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
