import { createCampaign, dashboard, logout, payment, profile, nft, message } from '../assets';

export const navlinks = [
  {
    name: 'dashboard',
    imgUrl: dashboard,
    link: '/',
  },
  {
    name: 'campaign',
    imgUrl: createCampaign,
    link: '/create-campaign',
  },
  {
    name: 'escrow',
    imgUrl: payment,
    link: '/escrow',
  },
  {
    name: 'community',
    imgUrl: message,
    link: '/community',
  },
  {
    name: 'nft',
    imgUrl: nft,
    link: '/nft',
  },
  {
    name: 'profile',
    imgUrl: profile,
    link: '/profile',
  },
  {
    name: 'logout',
    imgUrl: logout,
    link: '/',
    disabled: true,
  },
];
