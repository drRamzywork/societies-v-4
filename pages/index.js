import Head from "next/head";
import FrameComponent from "../components/frame-component";
import styles from "./index.module.css";

const PhoneScreen = () => {
  return (
    <div className={styles.phoneScreen}>
      <FrameComponent />
      <div className={styles.parent}>
        <b className={styles.b}>المملكة العربية</b>
        <b className={styles.b1}>الجوف</b>
      </div>
      <div className={styles.frameParent}>
        <main className={styles.wireframe10Parent}>
          <img
            className={styles.wireframe10}
            alt=""
            src="/wireframe--10@2x.png"
          />
          <b className={styles.b2}>مكة المكرمة</b>
          <b className={styles.b3}>قاسم</b>
          <b className={styles.b4}>حائل</b>
          <b className={styles.b5}>تبوك</b>
          <b className={styles.b6}>المدينة المنوة</b>
        </main>
        <img
          className={styles.logoIcon}
          loading="lazy"
          alt=""
          src="/logo@2x.png"
        />
        <div className={styles.wrapperUntitled1LeAutoX2}>
          <img
            className={styles.untitled1LeAutoX2ColoredIcon}
            alt=""
            src="/untitled1-le-auto-x2-colored-tonedremovebgpreview-le-auto-x2-colored-toned-1-1@2x.png"
          />
        </div>
      </div>
      <img
        className={styles.untitled1LeAutoX2ColoredIcon1}
        alt=""
        src="/untitled1-le-auto-x2-colored-tonedremovebgpreview-1@2x.png"
      />
      <img
        className={styles.untitled1LeAutoX2ColoredIcon2}
        alt=""
        src="/untitled1-le-auto-x2-colored-tonedremovebgpreview-le-auto-x2-colored-toned-1@2x.png"
      />
      <div className={styles.phoneScreenInner}>
        <div className={styles.frameGroup}>
          <div className={styles.frameWrapper}>
            <div className={styles.group}>
              <b className={styles.b722}>الرياض</b>
              <div className={styles.wrapper}>
                <b className={styles.b8}>الشرق</b>
              </div>
            </div>
          </div>
          <div className={styles.container}>
            <b className={styles.b9}>عسير</b>
            <div className={styles.frame}>
              <b className={styles.b10}>نجران</b>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.socialWrapper}>
        <div className={styles.social}>
          <img
            className={styles.facebookIcon}
            loading="lazy"
            alt=""
            src="/facebook.svg"
          />
          <img
            className={styles.twitterIcon}
            loading="lazy"
            alt=""
            src="/twitter.svg"
          />
          <img
            className={styles.snapchatIcon}
            loading="lazy"
            alt=""
            src="/snapchat@2x.png"
          />
          <img
            className={styles.youtubeIcon}
            loading="lazy"
            alt=""
            src="/youtube.svg"
          />
          <img className={styles.instagramIcon} alt="" src="/instagram.svg" />
        </div>
      </div>
    </div>
  );
};

export default PhoneScreen;
