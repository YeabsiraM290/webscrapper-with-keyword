import styles from "./background_image.module.scss";

const BackgroundImage = (): JSX.Element => {
  return (

<img
    className={styles.backgroundImg}
    src="/background.webp"
    alt=""
  />

 
  );
};
export default BackgroundImage;
