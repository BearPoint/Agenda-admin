export function debounce(func: (arg: any) => void, delay: number) {
  let timeoutId: number;

  return function (this: any, ...args: any[]) {
    clearTimeout(timeoutId);
    timeoutId = window.setTimeout(() => func.apply(this, args), delay);
  };
}