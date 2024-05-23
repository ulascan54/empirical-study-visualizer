export function getMergeSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSortHelper(
  mainArray,
  startIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  if (startIdx === endIdx) return;
  const middleIdx = Math.floor((startIdx + endIdx) / 2);
  mergeSortHelper(auxiliaryArray, startIdx, middleIdx, mainArray, animations);
  mergeSortHelper(auxiliaryArray, middleIdx + 1, endIdx, mainArray, animations);
  doMerge(mainArray, startIdx, middleIdx, endIdx, auxiliaryArray, animations);
}

function doMerge(
  mainArray,
  startIdx,
  middleIdx,
  endIdx,
  auxiliaryArray,
  animations,
) {
  let k = startIdx;
  let i = startIdx;
  let j = middleIdx + 1;
  while (i <= middleIdx && j <= endIdx) {
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      animations.push([k, auxiliaryArray[i]]);
      mainArray[k++] = auxiliaryArray[i++];
    } else {
      animations.push([k, auxiliaryArray[j]]);
      mainArray[k++] = auxiliaryArray[j++];
    }
  }
  while (i <= middleIdx) {
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    mainArray[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    mainArray[k++] = auxiliaryArray[j++];
  }
}

export function getQuickSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  quickSortHelper(array, 0, array.length - 1, animations);
  return animations;
}

function quickSortHelper(mainArray, startIdx, endIdx, animations) {
  if (startIdx < endIdx) {
    const pivotIdx = partition(mainArray, startIdx, endIdx, animations);
    quickSortHelper(mainArray, startIdx, pivotIdx - 1, animations);
    quickSortHelper(mainArray, pivotIdx + 1, endIdx, animations);
  }
}

function partition(mainArray, startIdx, endIdx, animations) {
  let pivotIdx = startIdx;
  const pivotValue = mainArray[endIdx];
  for (let i = startIdx; i < endIdx; i++) {
    animations.push(['comparison1', i, endIdx]);
    animations.push(['comparison2', i, endIdx]);
    if (mainArray[i] <= pivotValue) {
      animations.push(['swap', i, mainArray[pivotIdx]]);
      animations.push(['swap', pivotIdx, mainArray[i]]);
      [mainArray[i], mainArray[pivotIdx]] = [mainArray[pivotIdx], mainArray[i]];
      pivotIdx++;
    }
  }
  animations.push(['swap', pivotIdx, mainArray[endIdx]]);
  animations.push(['swap', endIdx, mainArray[pivotIdx]]);
  [mainArray[pivotIdx], mainArray[endIdx]] = [
    mainArray[endIdx],
    mainArray[pivotIdx],
  ];
  return pivotIdx;
}

export function getBubbleSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  let n = array.length;
  let swapped;
  do {
    swapped = false;
    for (let i = 1; i < n; i++) {
      animations.push(['comparison1', i - 1, i]);
      animations.push(['comparison2', i - 1, i]);
      if (array[i - 1] > array[i]) {
        animations.push(['swap', i - 1, array[i]]);
        animations.push(['swap', i, array[i - 1]]);
        [array[i - 1], array[i]] = [array[i], array[i - 1]];
        swapped = true;
      }
    }
    n--;
  } while (swapped);
  return animations;
}

export function getSelectionSortAnimations(array) {
  const animations = [];
  if (array.length <= 1) return array;
  const n = array.length;
  for (let i = 0; i < n - 1; i++) {
    let minIdx = i;
    for (let j = i + 1; j < n; j++) {
      animations.push(['comparison1', j, minIdx]);
      animations.push(['comparison2', j, minIdx]);
      if (array[j] < array[minIdx]) {
        minIdx = j;
      }
    }
    animations.push(['swap', i, array[minIdx]]);
    animations.push(['swap', minIdx, array[i]]);
    [array[i], array[minIdx]] = [array[minIdx], array[i]];
  }
  return animations;
}
