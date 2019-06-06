const prop = (obj: Object, ...args: (string | number)[]): any =>
  args.reduce((acc: any, val) => (acc ? acc[val] : undefined), obj) || {};

const isEmpty = (obj: Object): boolean => {
  if (typeof obj === 'object') {
    return Object.keys(obj).length === 0;
  }
  return true;
};

export {
  prop,
  isEmpty,
};
