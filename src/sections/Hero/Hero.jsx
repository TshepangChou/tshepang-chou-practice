import styles from './HeroStyle.module.css';
import heroImg from '../../assets/Untitled design.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? twitterLight : twitterDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
  return (
    <section id='hero' className={styles.container}>
       <div className={styles.colorModeContainer}>
            <img className={styles.hero} src={heroImg} alt="profile picture" />
            <img className={styles.colorMode} src={themeIcon} alt="Color Mode Icon" onClick={toggleTheme} />
        </div>
        <div className={styles.info}>
            <h1>Tshepang <br/>Chou</h1>
            <h2>Frontend Developer</h2>
            <span>
                <a href="https://www.instagram.com/tshepang.chou/" target='_blank'>
                    <img src={instagramIcon} alt="instagram icon" />
                </a>
                <a href="https://www.linkedin.com/in/tshepang-chou-b6b014215/" target='_blank'>
                    <img src={linkedinIcon} alt="linkedin icon" />
                </a>
                <a href="https://github.com/TshepangChou" target='_blank'>
                    <img src={githubIcon} alt="github icon" />
                </a>
            </span>
            <p className={styles.description}>With a passion for developing modern Web Apps for Commercial Businesses.</p>
            <a href={CV}>
                <button className="hover" download>Resume</button>
            </a>
        </div>
    </section>
  )
}
export default Hero