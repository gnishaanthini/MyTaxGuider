import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import * as MdIcons from "react-icons/md";
import * as RiIcons from 'react-icons/ri';

export const SidebarData = [
  {
    title: 'Home',
    path: '/home',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  
  
  {
    title: 'Self Assessment of Tax',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Tax Assessment For Income Tax',
        path: '/SelfTaxAssessment/taxAssessmentIncome',
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
        path: '/SelfTaxAssessment/taxAssessmentVat',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
    ]
  },

  {
    title: 'Tax Rules and Regulations',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Income Tax',
        path: '/rnr/IncomeR',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
      },
      {
        title: 'Value Added Tax',
        path: '/rnr/VatR',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Simplified VAT',
        path: '/rnr/SvatR',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Tourist VAT Refund Scheme',
        path: '/rnr/TvrsR',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Pay as You Earn Tax',
        path: '/rnr/PayeR',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Economic Service Charge',
        path: '/rnr/EscR',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
    ]
  },
  {
    title: 'Tax Guidelines',
    path: '',
    icon: <IoIcons.IoIosPaper />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,

    subNav: [
      {
        title: 'Income Tax',
        path: '/Guidlines/IncomeTax',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text',
      },
      {
        title: 'Value Added Tax',
        path: '/Guidlines/ValueAddedTax',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Simplified VAT',
        path: '/Guidlines/SimpleValueAddedTax',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Tourist VAT Refund Scheme',
        path: '/Guidlines/TouristVatRefund',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Pay as You Earn Tax',
        path: '/Guidlines/Paye',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
      {
        title: 'Economic Service Charge',
        path: '/Guidlines/EconomicServiceCharge',
        icon: <IoIcons.IoIosPaper />,
        // icon: <IoIcons.IoIosPaper />,
        cName: 'nav-text'
      },
    ]
  },


  

];