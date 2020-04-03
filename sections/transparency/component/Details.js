import React, {Component} from 'react';
import {Bar, defaults} from 'react-chartjs-2';
import { t } from '../../../polyglot-modules/polyglot.js'


class Details extends Component {
    constructor(props) {
      super(props);
    }

    componentWillMount(){
      this.setData()
    }

    componentWillReceiveProps(nextProps){
      if (nextProps && nextProps.currentLang && this.props.currentLang != nextProps.currentLang){
        this.setData()
        this.setState({ currentLang: nextProps.currentLang })
      }
    }

    setData(){
      this.setState({data: {
          labels: [0,1,2,3,4].map(i => {
            return t(`transparency.incomeByYearGraphic.years.${i}`)
          }),
          datasets: [
            {
              label: t("transparency.incomeByYearGraphic.labels.0"),
              backgroundColor: '#219EFF',
              borderColor: '#219EFF',
              borderWidth: 1,
              hoverBackgroundColor: '#219EFF',
              hoverBorderColor: '#219EFF',
              data: [0, 2019402.49,330325.30, 678800, 3710207.54]
            },
            {
              label: t("transparency.incomeByYearGraphic.labels.1"),
              backgroundColor: '#5ce175',
              borderColor: '#5ce175',
              borderWidth: 1,
              hoverBackgroundColor: '#5ce175',
              hoverBorderColor: '#5ce175',
              data: [1497115.69, 933012.19, 1346284.39, 2630485.26, 7935275.84]
            }
          ]//end data.datasets
        }}//end data
      )
    }

    render() {
        const chartOptions = {
        maintainAspectRatio: false,
        responsive: true,
          scales: {
            yAxes: [
              {
                ticks: {
                  callback: function(value) {
                    return '$' + value.toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
                }
                  }
              }
            ]
        },
          tooltips: {
            callbacks: {
              label: function (tooltipItem, data) {
                var tooltipValue = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
                return '$' + parseInt(tooltipValue).toFixed(0).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
              }
            }
          }

        }
        const {data} = this.state;
        const {subtitle} = this.props;
        return (
            <div className="details-container">
              <div className="subtitle">{subtitle}</div>
              <div className="details-graphic">
                    <Bar
                      data={data}
                      width={650}
                     height={300}
                     options={chartOptions}


                    />
                    </div>
                    <style jsx>

                    {`
                    .details-container {
                      min-width: 0
                    }
                   .details-graphic {
                      position: relative;
                     /*  height: 70vh;
                      width: 40vw; */
                      margin-right: 25px;
                      min-width: 0
                   }
                    .subtitle {
                      text-align: center;
                    }

                    @media (min-width: 780px) and (max-width: 1400px) {
                      .details-container {
                        margin-bottom: 20px;
                      }


                    .details-graphic {
                      margin: 0 0 20px 0;
                       height: 60vh;
                      width: 65vw;
                    }
                    }
                    @media (min-width: 341px) and (max-width: 780px) {
                      .details-container {
                        margin-bottom: 5px;
                      }


                    .details-graphic {
                      margin: 0 0 5px 0;
                       height: 40vh;
                      width: 85vw;
                    }
                     }


                    `}

                    </style>
                  </div>
        )
    }
}

export default Details
