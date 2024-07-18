export const debounce = (func: Function, timeParam: number) => {
  const time = timeParam || 100 // 100 by default if no param
  let timer: ReturnType<typeof setTimeout>

  return function (event: Event | ResizeObserverEntry[]) {
    if (timer) clearTimeout(timer)
    timer = setTimeout(func, time, event)
  }
}
