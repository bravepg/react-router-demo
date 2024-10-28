import { useEffect } from 'react';

export default function Demo2() {
  console.log('Demo1 render');

  useEffect(() => {
    console.log('Demo1 加载');

    return () => {
      console.log('Demo1 卸载');
    };
  }, []);

  return <>Demo1</>;
}
