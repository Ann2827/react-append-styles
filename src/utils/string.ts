export const arrToStr = (arr: string[] | string, splitter = ', '): string => {
  return typeof arr === 'string' ? arr : arr.filter((item) => Boolean(item)).join(splitter);
};

export const toLowercase = (string: string, splitter = '-'): string => {
  if (!string) return '';

  const index: number = string.search(new RegExp('[A-Z]'));
  if (index < 0) return string;
  return (
    arrToStr([string.slice(0, index), string[index].toLowerCase()], splitter) +
    toLowercase(string.slice(index + 1), splitter)
  );
};
