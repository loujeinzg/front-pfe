import React from 'react';
import { MdPerson, MdOutlineConfirmationNumber, MdWork, MdHistory, MdChat } from 'react-icons/md';

export const SidebarData = [
  {
    title: 'Profile',
    path: '/UserProfile',
    icon: <MdPerson />,
    cName: 'nav-text'
  },
  {
    title: 'My Issues',
    path: '/MyTickets',
    icon: <MdOutlineConfirmationNumber />,
    cName: 'nav-text'
  },
  {
    title: 'My Projects',
    path: '/Projects',
    icon: <MdWork />,
    cName: 'nav-text'
  },
  {
    title: 'History',
    path: '/History',
    icon: <MdHistory />,
    cName: 'nav-text'
  },
  {
    title: 'Chat',
    path: '/Chat',
    icon: <MdChat />,
    cName: 'nav-text'
  }
];
