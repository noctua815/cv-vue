export const debounce = (func, timeParam) => {
  const time = timeParam || 100 // 100 by default if no param
  let timer
  return function (event) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, time, event)
  }
}
