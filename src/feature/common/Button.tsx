import React from 'react';
import { Button } from 'antd';

export const PrimaryButton = ({ children, className, ...restProps }: any) => (
  <Button
    className={'w-40 h-12 rounded-lg text-base' + ` ${className}`}
    {...restProps}
  >
    {children}
  </Button>
);

export const TextButton = ({ children, className, ...restProps }: any) => (
  <button
    className={'w-40 h-12 rounded-lg text-base' + ` ${className}`}
    {...restProps}
  >
    {children}
  </button>
);
