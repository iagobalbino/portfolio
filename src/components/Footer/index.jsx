import styles from './Footer.module.css';

const Footer = ({ author, href }) => {
  return (
    <footer className={styles.footer}>
      {/* <p>{author}</p> */}
      <a href={href} target='_blank'>{author}</a>
    </footer>
  );
};

export default Footer;