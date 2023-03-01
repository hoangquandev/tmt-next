import React, { useEffect, useState } from 'react'
import styles from '@/styles/Topbar.module.css'
const Topbar = () => {
    const [topbar, setTopbar] = useState('')
    useEffect(() => {
        const callAPI = async () => {
            try {
                const res = await fetch(
                    `https://themoderntouch.glitch.me/v1/logo`
                );
                const data = await res.json();
                setTopbar(data[0])
            } catch (err) {
                console.log(err);
            }
            // console.log(topbar);
        };
        callAPI()
    }, [])
    // console.log(topbar);
    return (
        <div className={styles.container}>
            <div className={styles.topbar}>
                <div className={styles.info}>{topbar.email}</div>
                <div className={styles.slogan}>
                    <img src={topbar.slogan} alt='slogan' />
                </div>
                <div className={styles.info}>
                    <div>{topbar.tel}</div>
                    <div className={styles.language}>EN</div>
                </div>
            </div>
        </div>
    )
}

export default Topbar