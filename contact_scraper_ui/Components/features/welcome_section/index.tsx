import styles from "./welcome_section.module.scss";

const WelcomeSection = (): JSX.Element => {
  return (
    <>
      <header className={styles.introHeading}>Welcome to Contact-Scraper</header>
      <p className={styles.introNote}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa ipsam
        eveniet nemo deserunt at laborum aspernatur dolores saepe consequuntur
        qui optio quae animi repudiandae, vitae iure cupiditate minima id dicta!
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi
        omnis alias voluptatem officia reprehenderit laboriosam voluptatibus.
        Enim, nulla. Suscipit quo eligendi eum officia nobis impedit! Ipsam iste
        qui quis maiores.
      </p>
    </>
  );
};
export default WelcomeSection;
