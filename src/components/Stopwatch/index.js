// Write your code here

import {Component} from 'react'
import './index.css'

class Stopwatch extends Component {
  state = {
    isTimerRunning: false,
    timeElapsedInSeconds: 0,
  }

  componentWillUnmount() {
    clearInterval(this.timeInterval)
  }

  renderSeconds = () => {
    const {timeElapsedInSeconds} = this.state
    const seconds = Math.floor(timeElapsedInSeconds % 60)
    if (seconds < 10) {
      return `0${seconds}`
    }
    return seconds
  }

  renderMinutes = () => {
    const {timeElapsedInSeconds} = this.state
    const minutes = Math.floor(timeElapsedInSeconds / 60)

    if (minutes < 10) {
      return `0${minutes}`
    }
    return minutes
  }

  onClickResetBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false, timeElapsedInSeconds: 0})
  }

  onClickStopBtn = () => {
    clearInterval(this.timeInterval)
    this.setState({isTimerRunning: false})
  }

  updateTimer = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  onClickStartBtn = () => {
    this.timeInterval = setInterval(this.updateTimer, 1000)
    this.setState({isTimerRunning: true})
  }

  render() {
    const {isTimerRunning} = this.state
    const time = `${this.renderMinutes()}:${this.renderSeconds()}`
    return (
      <div className="bg-App-container">
        <div className="stopwatch-main-container">
          <div className="stopwatch-text-div">
            <h1 className="heading">Stopwatch</h1>
            <div className="stopwatch-card">
              <div className="logo-title">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
                  className="logo"
                  alt="stopwatch"
                />
                <h1 className="title">Timer</h1>
              </div>
              <h1 className="timer">{time}</h1>

              <div className="buttons-container">
                <button
                  type="button"
                  className="start-btn"
                  disabled={isTimerRunning}
                  onClick={this.onClickStartBtn}
                >
                  Start
                </button>
                <button
                  type="button"
                  className="stop-btn"
                  onClick={this.onClickStopBtn}
                >
                  Stop
                </button>
                <button
                  type="button"
                  className="reset-btn"
                  onClick={this.onClickResetBtn}
                >
                  Reset
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default Stopwatch
