import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Forms'
      },

      {
        id: 'all-forms',
        title: 'All Forms',
        icon: <Users size={20} />,
        navLink: '/form/allforms'
      },

      {
        id: 'buid-form',
        title: 'Build Form',
        icon: <Users size={20} />,
        navLink: '/form/buildform'
      },

      {
        id: 'reports',
        title: 'Reports',
        icon: <Users size={20} />,
        navLink: '/form/reports'
      },

      {
        id: 'formsettings',
        title: 'Settings',
        icon: <Settings size={20} />,
        navLink: '/form/settings'
      }


    ]         