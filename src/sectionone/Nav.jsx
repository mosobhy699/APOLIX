
import React from 'react'
import styles from "./nav.module.css"
import avatar from "../assets/Alexander-75x75.png"
const Nav = () => {
    return (
        <div className='flex items-center ml-6'>
            <ul className='text-xl flex items-center gap-1 flex-wrap mr-4 z-50'>
                <li className={styles.bar} style={{ borderRadius: "36px" }} ><a>Process Mining</a>
                    <div className={styles.menubox} >
                        <ul >
                            <li className={styles.menu}>What is Process Mining</li>
                            <li className={styles.menu}>Demo</li>
                        </ul>
                    </div>
                </li>
                <li className={styles.bar} style={{ borderRadius: "36px" }} ><a>Solutions</a>

                </li>
                <li className={styles.bar} style={{ borderRadius: "36px" }} ><a>Career</a>
                    <div className={styles.menubox} >
                        <ul >
                            <li className={styles.menu}>Career</li>
                            <li className={styles.menu}>Culture</li>
                            <li className={styles.menu}>Job Opening</li>
                        </ul>
                    </div>
                </li>
                <li className={styles.bar} style={{ borderRadius: "36px" }} ><a>Company</a>
                    <div className={styles.menubox} >
                        <ul >
                            <li className={styles.menu}>About Us</li>
                            <li className={styles.menu}>Team</li>
                            <li className={styles.menu}>Content</li>
                        </ul>
                    </div>
                </li>
                <li className={styles.bar} style={{ borderRadius: "36px" }} ><a>Resorces</a>
                    <div className={styles.menubox} >
                        <ul >
                            <li className={styles.menu}>White Paper</li>
                        </ul>
                    </div>
                </li>
            </ul>
            <div className={styles.parent}>
                <button className={styles.btn}>Schedule a demo <img src={avatar} alt="" className={styles.avatar} />
                </button>

            </div>
        </div>

    )
}

export default Nav