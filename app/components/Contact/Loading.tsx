import styles from '/styles/loading.module.css'

export default function Loading() {
  return (
    <div className="spinner-container">
      <div className={styles.loading_spinner}></div>
    </div>
  )
}
