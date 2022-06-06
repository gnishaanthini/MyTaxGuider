import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  {
    title: 'Tax Assessment For Income Tax',
    path: '/taxAssessmentIncome',
    icon: <IoIcons.IoIosPaper />,
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text',
    // subNav: [
    //   {
    //     title: "Service 1",
    //     path: "/taxAssessmentVat",
    //     icon: <IoIcons.IoIosPaper />,
    //     cName: "sub-nav",
    //   },]
  },
  {
    title: 'Tax Assessment for VAT',
    path: '/taxAssessmentVat',
    icon: <IoIcons.IoIosPaper />,
    // icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'FAQ',
    path: '/faq',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  // {
  //   title: 'Chat Forum',
  //   path: '/chatforum',
  //   icon: <IoIcons.IoIosPaper />,
  //   cName: 'nav-text'
  // },
  
];