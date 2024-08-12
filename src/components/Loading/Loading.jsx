import styles from "./Loading.module.css"

function Loading () {

    return (
        <div className={styles.loading}>
            <img src="/Loading.svg" alt="" />
        </div>
    )
}

export default Loading