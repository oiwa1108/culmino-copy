import styles from '../../styles/form.module.scss';

const ErrorList: React.FC<{ errors: string[] }> = ({ errors }) => {
  return (
    <>
      {errors.length > 0 && (
        <div className={styles.error_item}>
          {errors.map((text) => (
            <div className={styles.error_text}>{text}</div>
          ))}
        </div>
      )}
    </>
  );
};

export default ErrorList;
