import React from 'react'
import styles from './Mainpage.module.css'
import {AiOutlineHome,AiFillBank} from 'react-icons/ai'
import {BiChevronRight, BiChevronDown} from 'react-icons/bi'
import Chart from '../ChartPage/Chart'

const MainPage = () =>{

    return (
        <div className={styles.main}>
             <div className={styles.sidebar}>
                    <div className={styles.firstSidebar}>
                        <div><AiFillBank/></div>
                        <div><strong>Dashboard</strong></div>
                    </div>
                  <div>
                        <div className={styles.middleSidebar}>
                            <div><AiFillBank/></div>
                            <div>Dashboard</div>
                            <div><BiChevronRight/></div>
                        </div>
                        <div className={styles.middleSidebar}>
                            <div><AiFillBank/></div>
                            <div>Product</div>
                            <div><BiChevronRight/></div>
                        </div>
                        <div className={styles.middleSidebar}>
                            <div><AiFillBank/></div>
                            <div>Customers</div>
                            <div><BiChevronRight/></div>
                        </div>
                        <div className={styles.middleSidebar}>
                            <div><AiFillBank/></div>
                            <div>Income</div>
                            <div><BiChevronRight/></div>
                        </div >
                        <div className={styles.middleSidebar}>
                            <div><AiFillBank/></div>
                            <div>Promote</div>
                            <div><BiChevronRight/></div>
                        </div>
                        <div className={styles.middleSidebar}>
                            <div><AiFillBank/></div>
                            <div>Help</div>
                            <div><BiChevronRight/></div>
                        </div>
                  </div>
                  <div className={styles.lastSidebar}>
                      <div>
                        <img src="https://media.gettyimages.com/id/175702596/photo/2013-summer-tca-tour-day-13.webp?s=1024x1024&w=gi&k=20&c=6hdtzZBeeAy6hegt8c53TtwkGsU2sdvUza6vdk83WzA=" alt="Keanu Reeves" />
                      </div>
                      <div>
                        <strong><p>Enovo</p></strong>
                        <p>Project Manager</p>
                      </div>
                      <div><BiChevronDown/></div>
                  </div>
             </div>
             <div className={styles.chartName}>
                  <Chart/>
             </div>
        </div>
    )
}

export default MainPage 