// components
import Link from 'next/link';
import ThemeSwitcher from './theme-switcher';
// libraries
import { FC, memo } from 'react';
import { motion } from 'framer-motion';
// hooks
import useCursor from '@hooks/use-cursor';
// context
import { useGlobalContext } from 'context/root-context';
// styles
import { DesktopNavWrapper, List, ListItem, Line } from './navigation.styles';

const navbarLinks = [
  {
    id: 0,
    label: 'Home',
    path: '/',
  },
  {
    id: 1,
    label: 'Showcase',
    path: '/#showcase',
  },
  {
    id: 2,
    label: 'Introduction',
    path: '/#introduction',
  },
  {
    id: 4,
    label: 'Contact',
    path: '/#contact',
  },
];

const MotionListItem = motion.custom(ListItem);

const BottomNavigation: FC = memo(() => {
  const { activePath } = useGlobalContext();
  const onCursor = useCursor();

  return (
    <DesktopNavWrapper component='nav' className='desktop'>
      <List>
        {navbarLinks.map((link) => (
          <Link key={link.id} href={link.path}>
            <MotionListItem
              layoutId={link.label}
              className={activePath === link.path ? 'selected' : ''}
              animate
              whileHover={{
                scale: 1.113,
                rotate: -3,
                transition: navTextTransition,
              }}
              whileTap={{
                scale: 0.875,
                rotate: -6,
                transition: navTextTransition,
              }}
              onMouseEnter={() => onCursor('hovered')}
              onMouseLeave={() => onCursor('default')}>
              {link.label}
            </MotionListItem>
          </Link>
        ))}
        <ListItem style={{ cursor: 'default' }}>
          <Line />
        </ListItem>
        <ListItem
          style={{ padding: 0 }}
          onMouseEnter={() => onCursor('hovered')}
          onMouseLeave={() => onCursor('default')}>
          <ThemeSwitcher />
        </ListItem>
      </List>
    </DesktopNavWrapper>
  );
});

const navTextTransition = {
  type: 'spring',
  damping: 16,
  stiffness: 200,
  staggerChildren: 0.06,
};

export default BottomNavigation;
