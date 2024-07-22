import { FaHome, FaShare, FaShoppingBasket, FaPen, FaScrewdriver, FaUser, FaVoicemail, FaInstagram, FaTwitter, FaYoutube, FaLinkedin, FaGithub } from 'react-icons/fa'

export const NAVLINKS = [
    {
        link: 'Home',
        path: '/',
        icon: <FaHome />
    },
    {
        link: 'Projects',
        path: '/projects',
        icon: <FaShare />
    },
    {
        link: 'Boutique',
        path: '/boutique',
        icon: <FaShoppingBasket />
    },
    {
        link: 'Writing',
        path: '/writing',
        icon: <FaPen />
    },
    {
        link: 'Stack',
        path: '/stack',
        icon: <FaScrewdriver />
    },
    {
        link: 'About',
        path: '/about',
        icon: <FaUser />
    },
    {
        link: 'Contact',
        path: '/contact',
        icon: <FaVoicemail />
    }
]


export const follow = [
    {
        link: 'Twitter',
        path: 'https://twitter.com/andrewjgill',
        icon: <FaTwitter />
    },
    {
        link: 'Instagram',
        path: 'https://www.instagram.com/andrewjgill/',
        icon: <FaInstagram />
    },
    {
        link: 'Github',
        path: 'https://github.com/andrewjgill',
        icon: <FaGithub />
    },
    {
        link: 'YouTube',
        path: 'https://www.youtube.com/channel/UC7QY7j3Z6',
        icon: <FaYoutube />
    },
    {
        link: 'LinkedIn',
        path: 'https://www.linkedin.com/in/andrewjgill',
        icon: <FaLinkedin />
    }
]