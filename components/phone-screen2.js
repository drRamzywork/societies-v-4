import styles from "./phone-screen2.module.css";

const PhoneScreen2 = ({ className = "" }) => {
  return (
    <div className={[styles.phoneScreen, className].join(" ")}>
      <div className={styles.northernRegion}>
        <div className={styles.wrapperGroup}>
          <img className={styles.groupIcon} alt="" src="/group.svg" />
        </div>
        <b className={styles.b}>الجوف</b>
      </div>
      <b className={styles.b1}>قاسم</b>
      <b className={styles.b2}>حائل</b>
      <b className={styles.b3}>تبوك</b>
      <img className={styles.phoneScreenChild} alt="" src="/group-75235.svg" />
    </div>
  );
};

export default PhoneScreen2;
