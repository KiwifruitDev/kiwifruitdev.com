import { Post } from './post';

export const categories = [
  {
    title: 'Ham Radio',
    description: 'Learn more about my ham radio activities.',
    path: '/posts/hamradio',
    excerpt: 'Explore the ham radio category for FSTV and SDR content.'
  },
  {
    title: 'Servers',
    description: 'View the current server posts and MOTD content.',
    path: '/posts/servers',
    excerpt: 'Explore server posts, including the Jazztronauts MOTD.'
  }
];

export const allPosts: Post[] = [
  new Post({
    title: 'How to receive Fast-Scan TV with an SDR (2022-11-25)',
    description: 'This guide will show you how to receive Fast-Scan TV (FSTV) with an SDR.',
    slug: 'how-to-fstv-sdr',
    category: 'hamradio',
    excerpt: 'Guide to receive FSTV using an SDR.',
    date: '2022-11-25'
  }),
  new Post({
    title: 'The Fast-Scan TV Chronicles',
    description: 'Join me as I explore the world of Fast-Scan Television.',
    slug: 'fstv-chronicles',
    category: 'hamradio',
    excerpt: 'A series of updates about fast-scan television.',
    date: '2022-11-21'
  }),
  new Post({
    title: "Kiwi's Jazztronauts",
    description: 'Hi, welcome to my Jazztronauts server! This is a simple server for anyone to explore the old gamemode.',
    slug: 'jazztronauts',
    category: 'servers',
    excerpt: 'Server details and MOTD for the Jazztronauts game server.'
  })
];
