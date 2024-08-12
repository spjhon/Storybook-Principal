// TimeLine.js
import styles from './TimeLine.module.css';
import YearEntry, {YearEntryProps} from './YearEntry';

export interface TimeLineProps {
    timelineData: YearEntryProps[]; // Define los props necesarios para TimeLine
  }

const TimeLine: React.FC<TimeLineProps> = ({timelineData}) => {
  return (
    <div className={styles.timeline}>
      <div className={styles.entries}>
        {timelineData.map((entry: YearEntryProps, index: number) => (
          <YearEntry
            key={index}
            year={entry.year}
            content={entry.content}
            isBig={entry.isBig}
          />
        ))}
      </div>
    </div>
  );
};

export default TimeLine;