import React from 'react';
import {
  getMergeSortAnimations,
  getQuickSortAnimations,
  getBubbleSortAnimations,
  getSelectionSortAnimations,
} from '../sortingAlgorithms/sortingAlgorithms.js';
import './SortingVisualizer.css';

const PRIMARY_COLOR = 'turquoise';
const SECONDARY_COLOR = 'red';

export default class SortingVisualizer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: [],
      keep: [],
      animationSpeed: 4,
      numberOfArrayBars: 150,
      tempAnimationSpeed: 4,
      tempNumberOfArrayBars: 150,
      sorting: false,
      countdown: 0,
    };
  }

  componentDidMount() {
    this.resetArray();
  }

  resetArray() {
    const array = [];
    for (let i = 0; i < this.state.numberOfArrayBars; i++) {
      array.push(randomIntFromInterval(5, 730));
    }
    this.setState({array, keep: array.slice(), countdown: 0});
  }

  getKeep() {
    const {keep, numberOfArrayBars} = this.state;
    const array = keep.slice(0, numberOfArrayBars);
    this.setState({array});
  }

  fixKeep() {
    const {array, numberOfArrayBars} = this.state;
    const keep = array.slice(0, numberOfArrayBars);
    this.setState({keep});
  }

  updateSettings() {
    const {tempAnimationSpeed, tempNumberOfArrayBars} = this.state;
    this.setState(
      {
        animationSpeed: tempAnimationSpeed,
        numberOfArrayBars: tempNumberOfArrayBars,
      },
      () => this.resetArray(),
    );
  }

  handleChange(event, key) {
    this.setState({[key]: parseInt(event.target.value) || 0});
  }

  startCountdown() {
    this.setState({countdown: 3}, () => {
      const countdownInterval = setInterval(() => {
        this.setState(prevState => {
          if (prevState.countdown === 1) {
            clearInterval(countdownInterval);
            this.resetArray();
            return {countdown: 0};
          } else {
            return {countdown: prevState.countdown - 1};
          }
        });
      }, 1000);
    });
  }

  handleSortCompletion() {
    this.setState({sorting: false});
    this.startCountdown();
  }

  mergeSort() {
    this.setState({sorting: true});
    this.getKeep();

    const animations = getMergeSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange = i % 3 !== 2;
      if (isColorChange) {
        const [barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        const color = i % 3 === 0 ? SECONDARY_COLOR : PRIMARY_COLOR;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else {
        setTimeout(() => {
          const [barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i === animations.length - 1) this.handleSortCompletion();
        }, i * this.state.animationSpeed);
      }
    }
  }

  quickSort() {
    this.setState({sorting: true});
    this.getKeep();

    const animations = getQuickSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange =
        animations[i][0] === 'comparison1' ||
        animations[i][0] === 'comparison2';
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i === animations.length - 1) this.handleSortCompletion();
        }, i * this.state.animationSpeed);
      }
    }
    this.fixKeep();
  }

  bubbleSort() {
    this.setState({sorting: true});
    this.getKeep();
    const animations = getBubbleSortAnimations(this.state.array);
    const animationSpeed = this.state.animationSpeed;

    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange =
        animations[i][0] === 'comparison1' ||
        animations[i][0] === 'comparison2';
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * animationSpeed);
      } else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
        }, i * animationSpeed);
      }
    }

    setTimeout(() => {
      this.handleSortCompletion();
    }, animations.length * animationSpeed);

    this.fixKeep();
  }

  selectionSort() {
    this.setState({sorting: true});
    this.getKeep();
    const animations = getSelectionSortAnimations(this.state.array);
    for (let i = 0; i < animations.length; i++) {
      const arrayBars = document.getElementsByClassName('array-bar');
      const isColorChange =
        animations[i][0] === 'comparison1' ||
        animations[i][0] === 'comparison2';
      if (isColorChange) {
        const color =
          animations[i][0] === 'comparison1' ? SECONDARY_COLOR : PRIMARY_COLOR;
        const [, barOneIdx, barTwoIdx] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        const barTwoStyle = arrayBars[barTwoIdx].style;
        setTimeout(() => {
          barOneStyle.backgroundColor = color;
          barTwoStyle.backgroundColor = color;
        }, i * this.state.animationSpeed);
      } else {
        setTimeout(() => {
          const [, barOneIdx, newHeight] = animations[i];
          const barOneStyle = arrayBars[barOneIdx].style;
          barOneStyle.height = `${newHeight}px`;
          if (i === animations.length - 1) this.handleSortCompletion();
        }, i * this.state.animationSpeed);
      }
    }
    this.fixKeep();
  }

  testSortingAlgorithms() {
    for (let i = 0; i < 100; i++) {
      const array = [];
      const length = randomIntFromInterval(1, 1000);
      for (let i = 0; i < length; i++) {
        array.push(randomIntFromInterval(-1000, 1000));
      }
      const javaScriptSortedArray = array.slice().sort((a, b) => a - b);
      const mergeSortedArray = getMergeSortAnimations(array.slice());
      console.log(arraysAreEqual(javaScriptSortedArray, mergeSortedArray));
    }
  }

  render() {
    const {
      array,
      tempAnimationSpeed,
      tempNumberOfArrayBars,
      sorting,
      countdown,
    } = this.state;

    return (
      <div className="container">
        <div className="array-container">
          {array.map((value, idx) => (
            <div
              className="array-bar"
              key={idx}
              style={{
                backgroundColor: PRIMARY_COLOR,
                height: `${value}px`,
                width: `${1100 / this.state.numberOfArrayBars}px`,
              }}></div>
          ))}
        </div>

        {countdown > 0 && (
          <div className="countdown">
            Resetting array in {countdown} second.
          </div>
        )}

        <div className="button-container">
          <button
            onClick={() => this.resetArray()}
            disabled={sorting || countdown}>
            Generate New Array
          </button>
          <button
            onClick={() => this.mergeSort()}
            disabled={sorting || countdown}>
            Merge Sort
          </button>
          <button
            onClick={() => this.quickSort()}
            disabled={sorting || countdown}>
            Quick Sort
          </button>
          <button
            onClick={() => this.bubbleSort()}
            disabled={sorting || countdown}>
            Bubble Sort
          </button>
          <button
            onClick={() => this.selectionSort()}
            disabled={sorting || countdown}>
            Selection Sort
          </button>
        </div>
        <div className="settings-container">
          <div>
            <label>Animation Speed (ms): </label>
            <input
              type="number"
              value={tempAnimationSpeed}
              onChange={e => this.handleChange(e, 'tempAnimationSpeed')}
            />
          </div>
          <div>
            <label>Number of Array Bars: </label>
            <input
              type="number"
              value={tempNumberOfArrayBars}
              onChange={e => this.handleChange(e, 'tempNumberOfArrayBars')}
            />
          </div>
          <button
            onClick={() => this.updateSettings()}
            disabled={sorting || countdown}>
            Update Settings
          </button>
        </div>
      </div>
    );
  }
}

// From https://stackoverflow.com/questions/4959975/generate-random-number-between-two-numbers-in-javascript
function randomIntFromInterval(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function arraysAreEqual(arrayOne, arrayTwo) {
  if (arrayOne.length !== arrayTwo.length) return false;
  for (let i = 0; i < arrayOne.length; i++) {
    if (arrayOne[i] !== arrayTwo[i]) {
      return false;
    }
  }
  return true;
}
