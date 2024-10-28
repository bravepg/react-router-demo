import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Demo2() {
  const location = useLocation();
  console.log('location', location);
  console.log('Demo2 render');

  useEffect(() => {
    console.log('Demo2 加载');

    return () => {
      console.log('Demo2 卸载');
    };
  }, []);

  return <>Demo2</>;
}
