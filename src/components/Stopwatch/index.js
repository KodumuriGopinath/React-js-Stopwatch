// Write your code here
import {Component} from 'react'

import './index.css'

const initialState = {
  isTimeRunning: false,
  timeElapsedInSeconds: 0,
  timeLimitInMinutes: 0,
}

class StopWatch extends Component {
  state = initialState

  componentWillUnmount() {
    this.clearTimerInterval()
  }

  clearTimerInterval = () => clearInterval(this.intervalId)

  incrementTimeElapsedInSeconds = () => {
    this.setState(prevState => ({
      timeElapsedInSeconds: prevState.timeElapsedInSeconds + 1,
    }))
  }

  getElapsedSecondsInTimeFormat = () => {
    const {timeElapsedInSeconds, timeLimitInMinutes} = this.state
    const totalRemainingSeconds = timeLimitInMinutes * 60 + timeElapsedInSeconds

    const minutes = Math.floor(totalRemainingSeconds / 60)
    const seconds = Math.floor(totalRemainingSeconds % 60)
    const stringifiedMinutes = minutes > 9 ? minutes : `0${minutes}`
    const stringifiedSeconds = seconds > 9 ? seconds : `0${seconds}`

    return `${stringifiedMinutes}:${stringifiedSeconds}`
  }

  onStartTimer = () => {
    this.IntervalId = setInterval(this.incrementTimeElapsedInSeconds, 1000)
  }

  onResetTimer = () => {
    this.clearTimerInterval()
    this.setState(initialState)
  }

  onStopTimer = () => {
    clearInterval(this.IntervalId)
  }

  render() {
    return (
      <div className="bg-container">
        <h1 className="stopwatch-heading">Stopwatch</h1>
        <div className="card-container">
          <div className="img-and-timer">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopwatch"
              className="stopwatch-img"
            />
            <p className="timer">Timer</p>
          </div>
          <h1>{this.getElapsedSecondsInTimeFormat()}</h1>
          <div className="buttons-container">
            <button
              className="start-button"
              onClick={this.onStartTimer}
              type="button"
            >
              Start
            </button>
            <button
              className="stop-button"
              onClick={this.onStopTimer}
              type="button"
            >
              Stop
            </button>
            <button
              className="reset-button"
              onClick={this.onResetTimer}
              type="button"
            >
              Reset
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default StopWatch
