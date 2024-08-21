import styles from './PaperCard.module.css';

const PaperCard = () => {
  return (
    <div>
      <div className={styles.upperSection}></div>
      <div className={styles.lowerSection}></div>
      <div className={styles.card}></div>
      <div className={styles.cardLowerOverlap}></div>
      <div className={styles.cardShadowLightBlur}></div>
      <div className={styles.cardShadowHeavyBlur}></div>
    </div>
  );
};

export default PaperCard;