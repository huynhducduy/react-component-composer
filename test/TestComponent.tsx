import * as React from 'react';

export default function TestComponent({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div>{children}</div>;
}
