import { t } from '../../../polyglot-modules/polyglot.js'
import React from "react"
import Details from "../component/Details"
import DetailOutcome from "../component/DetailOutcome"


const VerticalBars = () => {
    return(
        <section className="verticalBar-section">
            <div className="title"><h1>{t('transparency.barGraphic.title')}</h1></div>
            <Details subtitle={t('transparency.barGraphic.income.subtitle')}/>
            <DetailOutcome subtitle={t('transparency.barGraphic.outcome.subtitle')}/>
                <div className='btn-container'>
            <a  href={t('transparency.barGraphic.urldownload')} target="_blank">
        
                    <button className='btn'>
                    <span className='action-text'>{t('transparency.barGraphic.btn-text')}</span>
                    </button>
            </a>
                    </div>
        
            <style jsx>
           {`
            .verticalBar-section {
                display: flex;
                justify-content: space-around; 
                 width: 100%;
                 flex-flow: row wrap;
            }
            .title {
                width: 100%;
                margin: 20px;
                text-align: center;
            }
            .btn-container {
                display: flex;
                margin-top: 20px;
                justify-content: center;
                width: 100%;
            }
           `}
            </style>
        </section>
    )
}

export default VerticalBars