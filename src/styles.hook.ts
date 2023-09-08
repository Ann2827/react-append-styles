import React from 'react';

import { appendStyles } from './append';

const makeClasses = (...data: Parameters<typeof appendStyles>) => {
  return (notAppend = false) => {
    const refData = React.useRef<Parameters<typeof appendStyles>>([...data]);
    const [styleClasses, setStyleClasses] = React.useState<{ [p: string]: string }>({});

    React.useEffect(() => {
      if (notAppend || Object.keys(refData.current[0]).length === 0) return;

      const { remove, classes } = appendStyles(...refData.current);
      setStyleClasses(classes);
      return () => remove();
    }, [notAppend]);
    return styleClasses;
  };
};

export default makeClasses;
