import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

const MainContentContainer = ({ children }: Props) => {
  return (
    <div className='flex-auto bg-white dark:bg-neutral-900 rounded lg:max-w-[820px]'>
      {children}
    </div>
  );
};

export default MainContentContainer;
