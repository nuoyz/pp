import React, { Component } from 'react';


const TIME = 3000

export default class Score extends React.Component {
    constructor(props) {
      super(props)

      this.state = {
        uiState: 'play',
        solfeggio: '多'
      }

      this.play = this.play.bind(this)
      this.timer = null
    }

    componentDidMount() {
      // listen to an event
      window.emitter.on('scoreUpdate', ({isError} = {}) => {
          if (isError) {
            this.clearTime()
            this.createTime()
          }
          this.forceUpdate()
      } )
    }
  
    createTime() {
      clearTimeout(this.timer)

      const random = parseInt(Math.random()*(7)+0,10)
      window.solfeggio = window.keyArray[random]
      this.setState({solfeggio: window.keyArray[random]})

      this.timer = setTimeout(() => {
        this.createTime()
      }, TIME)
    }

    clearTime() {
        clearTimeout(this.timer)
    }

    play() {
      console.log('play play')
      const {uiState} = this.state
      if (uiState === 'play') {
        window.score = 0 
        this.setState({uiState: 'stop'})
        this.createTime()

        //clearInterval(this.timer)
        // this.timer = setInterval(() => {
        //   const random = parseInt(Math.random()*(7)+0,10)
        //   console.log('random random', random)
        //   window.solfeggio = window.keyArray[random]
        //   this.setState({solfeggio: window.keyArray[random]})
        // }, TIME)
      } else {
        //clearInterval(this.timer)
        clearTimeout(this.timer)
        this.setState({uiState: 'play'})
      }
     
    }
    

    render() {
        const {uiState, solfeggio} = this.state

        return (
          <div className="sheet">
            <div className="sheet-header">
              <button className="play btn btn--a mbm" onClick={this.play}><span class="fa fa-headphones" aria-hidden="true"></span>{uiState}</button>   
              <h5 className="SH-score">分数： {window.score}</h5>
            </div>
            <div className="sheet-content-text">{solfeggio.value}</div>
         </div>
        )
    }
  }

  //<button className="SH-btn"  onClick={this.play}>{uiState}</button>
  //<div className="sheet-content">{solfeggio.value}</div>