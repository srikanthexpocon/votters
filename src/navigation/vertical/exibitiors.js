import { Info, User, Users, Copy, ExternalLink, Book, FileText, CreditCard, Settings } from 'react-feather'

export default [

    {
        header: 'Exibitiors'
      },

      {
        id: 'all-exibitiors',
        title: 'All Exibitiors',
        icon: <Users size={20} />,
        navLink: '/exibitiors/basic'
      },

      {
        id: 'add-exibitiors',
        title: 'Add Exibitior',
        icon: <Users size={20} />,
        navLink: '/exibitiors/Addexibitiors'
      }
      

    ]      