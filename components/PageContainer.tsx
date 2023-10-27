import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainContentContainer = ({ children }: Props) => {
  return <div className='shadow flex-auto bg-white dark:bg-neutral-900 rounded'>{children}</div>;
};

export default MainContentContainer;
