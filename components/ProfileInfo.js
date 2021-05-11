/* This component is used to hold all basis info for someones profile above the navigation */
import styles from '../styles/ProfileInfo.module.css'
import Link from 'next/link'
import Nav from './Nav'

const ProfileInfo = () => {
    return (
        <>
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
            <Nav />
            <div className='apointments'>
                <Link href=''>
                <a>Book Now</a>
                </Link>
                <Link href=''>
                <a>Message</a>
                </Link>
                <Link href=''>
                <a>Directions</a>
                </Link>
            </div>
      </>
    )
}

export default ProfileInfo
