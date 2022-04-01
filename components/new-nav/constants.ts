export const CONTAINER_VARIANTS = {
    open: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.04,
        delayChildren: 0.1,
        staggerDirection: -1,
      },
    },
    closed: {
      opacity: 0,
      y: 10,
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  export const CHILD_VARIANTS = {
    open: {
      y: 0,
      opacity: 1,
      scale: 1,
    },
    closed: {
      y: 25,
      opacity: 0,
      scale: 0.8,
    },
  };
  
  export const EXTERNAL_LINKS = [
    {
      label: 'GitHub',
      href: 'https://github.com/Maufive',
      icon: (
        <GithubIcon
          className="h-5 w-5 fill-transparent stroke-2"
          aria-hidden="true"
        />
      ),
    },
    {
      label: 'Twitter',
      href: 'https://twitter.com/albinssonniklas',
      icon: (
        <TwitterIcon
          className="h-5 w-5 fill-transparent stroke-2"
          aria-hidden="true"
        />
      ),
    },
    {
      label: 'Email',
      href: 'mailto:albinssonniklas@gmail.com',
      icon: <AtSymbolIcon className="h-5 w-5" aria-hidden="true" />,
    },
  ];