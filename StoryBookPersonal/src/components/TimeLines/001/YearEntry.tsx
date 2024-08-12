
import styles from './TimeLine.module.css';

export interface YearEntryProps {
    year: string;
    content: string[];
    isBig: boolean;
  }

const YearEntry: React.FC<YearEntryProps> = ({ year, content, isBig }) => {
  return (
    <div className={styles.entry}>
      <div className={`${styles.title} ${isBig ? styles.big : ''}`}>{year}</div>
      <div className={styles.body}>
        {content.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
      </div>
    </div>
  );
};

export default YearEntry;