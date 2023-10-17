import React from 'react'
import styles from './Chart.module.css'
import {BiFile} from 'react-icons/bi'
import ColumnChart from './ColumnChart'
import CircleChart from './CIrcleChart'
import {BiSearch} from 'react-icons/bi'


const Chart = () =>{

    return (
        <div className={styles.chart}>
           <div className={styles.chart1}>
             <div>Hello Shahrukh</div>
             <div>
             <div style={{backgroundColor:'#F2EFFF', display:'flex', alignItems:'center'}} ><BiSearch /><input style={{border:"1px solid white",  backgroundColor:'#F2EFFF'}} placeholder='Search'/></div>
             </div>
           </div>
           <div className={styles.chart2}>
             <div className={styles.chart22}>
                <div><BiFile/></div>
                <div className={styles.chart23}>
                    <p>Earning</p>
                    <strong>$198k</strong>
                    <p><span style={{color:"blue"}}>🠑37.8%</span>this month</p>
                </div>
             </div>
             <div className={styles.chart22}>
                <div><BiFile/></div>
                <div className={styles.chart23}>
                    <p>Earning</p>
                    <strong>$198k</strong>
                    <p><span style={{color:"red"}}>🠗37.8%</span>this month</p>
                </div>
             </div>
             <div className={styles.chart22}>
                <div><BiFile/></div>
                <div className={styles.chart23}>
                    <p>Earning</p>
                    <strong>$198k</strong>
                    <p><span style={{color:"red"}}>🠗37.8%</span>this month</p>
                </div>
             </div>
             <div className={styles.chart22}>
                <div><BiFile/></div>
                <div className={styles.chart23}>
                    <p>Earning</p>
                    <strong>$198k</strong>
                    <p><span style={{color:"blue"}}>🠑37.8%</span>this month</p>
                </div>
             </div>
           </div>
           <div className={styles.chart3}>
              <div className={styles.chart31}>
                 <ColumnChart/>
              </div>
              <div className={styles.chart32}>
                <CircleChart/>
              </div>
           </div>
           <div className={styles.chart4}> 
              <div className={styles.chart41}>
                <div><strong>Product Sell</strong></div>
                <div  style={{display:'flex'}}>
                    <div style={{backgroundColor:'#F2EFFF', display:'flex', alignItems:'center'}} ><BiSearch /><input style={{border:"1px solid white",  backgroundColor:'#F2EFFF'}} placeholder='Search'/></div>
                    <div style={{margin:'2px 10px', backgroundColor:'#F2EFFF'}}>Last30 days{" "}˅</div>
                </div>
              </div>
              <div className={styles.chart42}>
                 <div>Product Name</div>
                 <div style={{display:'flex', width:'25%', justifyContent:'space-between', }}>
                    <div>Stock</div>
                    <div>Price</div>
                    <div>Total Sales</div>
                 </div>
              </div>
              <div style={{borderBottom:'1px solid #F5EFFF'}}></div>
              <div className={styles.chart43}>
                 <div style={{display:'flex', }}>
                    <div>
                       <img width='60px' src="https://media.gettyimages.com/id/175702596/photo/2013-summer-tca-tour-day-13.webp?s=1024x1024&w=gi&k=20&c=6hdtzZBeeAy6hegt8c53TtwkGsU2sdvUza6vdk83WzA=" alt="Keanu Reeves" />

                    </div>
                    <div style={{marginLeft:'5px'}}>
                        <strong style={{lineHeight:'0'}}>Abstract 3D</strong>
                        <p style={{lineHeight:'0',marginTop:'5px'}}>learn insum color learn epsum color</p>
                    </div>
                 </div>
                 <div style={{display:'flex', width:'30%', justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{}}>32 in stock</div>
                    <div>$45.99</div>
                    <div>23</div>
                  </div>
                </div>
                <div className={styles.chart43}>
                 <div style={{display:'flex', }}>
                    <div>
                       <img width='60px' src="https://media.gettyimages.com/id/175702596/photo/2013-summer-tca-tour-day-13.webp?s=1024x1024&w=gi&k=20&c=6hdtzZBeeAy6hegt8c53TtwkGsU2sdvUza6vdk83WzA=" alt="Keanu Reeves" />

                    </div>
                    <div style={{marginLeft:'5px'}}>
                        <strong style={{lineHeight:'0'}}>Abstract 3D</strong>
                        <p style={{lineHeight:'0',marginTop:'5px'}}>learn insum color learn epsum color</p>
                    </div>
                 </div>
                 <div style={{display:'flex', width:'30%', justifyContent:'space-between',alignItems:'center'}}>
                    <div style={{}}>32 in stock</div>
                    <div>$45.99</div>
                    <div>23</div>
                  </div>
                </div>
              <div className={styles.chart44}></div>
           </div>
        </div>
    )
}

export default Chart