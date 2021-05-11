/* This component is used to hold all basis info for someones profile above the navigation */
import styles from '../styles/ProfileInfo.module.css'

const ProfileInfo = () => {
    return (
        <div className={styles.profileBlock}>
            <img src='/samplePFP.jpg' alt='profile picture' className={styles.pfp}></img>
            <section>
                <h2>Melissia Hirtle</h2>
                <h3 className={styles.at}>@melissia-hirtle-794768</h3>
                <h3 className={styles.adress}>Toronto, Ontario, CA</h3>
            </section>
            <secion>
                <ul className={styles.occupations}>
                    <li>
                        Hairstylist
                    </li>
                    <li>
                        Service Business Owner or Principal
                    </li>
                </ul>
            </secion>
        </div>
    )
}

export default ProfileInfo
