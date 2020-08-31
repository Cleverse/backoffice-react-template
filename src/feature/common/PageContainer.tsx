import React from 'react';

export const PageContainer: React.FunctionComponent<{ className?: string }> = ({
  children,
  className = ''
}) => {
  return <div className={'w-full min-h-full ' + className}>{children}</div>;
};
