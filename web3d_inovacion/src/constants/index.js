import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  canon,
  hccomm,
  gptlac,
  pfizer,
  loyalty,
  hsc,
  cheve,
  campeones,
  osde,
  wab,
  vendedor
} from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "tech",
      title: "Tech",
    },
    
  ];
  
  const services = [
    {
      title: "Web Development",
      icon: web,
    },
    {
      title: "Mobile Development",
      icon: mobile,
    },
    {
      title: "E-commerce",
      icon: backend,
    },
    {
      title: "AR Development",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "Three JS",
      icon: threejs,
    },
    {
      name: "git",
      icon: git,
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
    {
      title: "React.js Developer",
      company_name: "Starbucks",
      icon: starbucks,
      iconBg: "#383E56",
      date: "March 2020 - April 2021",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "React Native Developer",
      company_name: "Tesla",
      icon: tesla,
      iconBg: "#E6DEDD",
      date: "Jan 2021 - Feb 2022",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Web Developer",
      company_name: "Shopify",
      icon: shopify,
      iconBg: "#383E56",
      date: "Jan 2022 - Jan 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Full stack Developer",
      company_name: "Meta",
      icon: meta,
      iconBg: "#E6DEDD",
      date: "Jan 2023 - Present",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "Yo Soy Canon",
      description:
        "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "mongodb",
          color: "green-text-gradient",
        },
        {
          name: "tailwind",
          color: "pink-text-gradient",
        },
      ],
      image: canon,
      source_code_link: "https://github.com/",
      stack: [
       {
        name: "PHP",
       }, 
       {
        name: "HTML5",
       }, 
       {
        name: "CSS",
       }, 
       {
        name: "BootStrap",
       }, 
       {
        name: "ECMAScript 6+",
       }, 
       {
        name: "AWS",
       }
      ]
    },
    {
      name: "Health Care Communication",
      description:
        "We created a freee program that provides timely follow-ups and exclusive bonus to our patients. Through the use of their benefits card, they can receive a few months of free treatment. We comunicate through different channels.",
      tags: [
        {
          name: "react",
          color: "blue-text-gradient",
        },
        {
          name: "restapi",
          color: "green-text-gradient",
        },
        {
          name: "scss",
          color: "pink-text-gradient",
        },
      ],
      image: hccomm,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "GPTLAG SHELL 2021",
      description:
        "A incentives program for Shell, which was created with the aim of promoting integration at all levels of the different organizations within our network and recognizing the great work of our entire team. From our entrepreneurs, regional managers, station managers, shift supervisors to our specialists.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: gptlac,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "Pfizer Conmigo",
      description:
        "Personalized offers, detailed analysis, and effective customer collaboration. Technological innovation driving strong and fruitful healthcare relationships.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: pfizer,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "App Loyalty meseros y centros de consumo",
      description:
        "Waiter platform enabling detailed analysis of establishment sales, suggesting data-driven strategies for enhancing business performance.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: loyalty,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]

    },
    {
      name: "Heineken Sociedad Cervecera",
      description:
        "Increase the productivity of our customers through the Sociedad Cervecera loyalty program. With added value benefits for waiters",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: hsc,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "CheveJuntos Heineken",
      description:
        "An ecommerce platform featuring sections for offers and data analysis, designed to benefit customers. The platform provides a user-friendly shopping experience, along with valuable insights to help customers make informed decisions and maximize their benefits from the available offers.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: cheve,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "Liga de campeoNES",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: campeones,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "Whats App Business",
      description:
        "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: wab,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "C3 Platform",
      description:
        "Real-time services with integrated third parties. Helpdesk coordinates patient transfers, provides 24/7 virtual and phone assistance, appointment reminders (CRM-Farma), and medical support from nutritionists and psychologists.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
    {
      name: "Vendedor Tercero",
      description:
        "Generates product sales but does not belong to Nestlé's sales force. Recommends top-of-mind products to consumers. Promotes products based on convenience and knowledge when a customer searches for a product. Suggests and reminds customers of product promotions. Responsible for product replenishment, care, and material execution.",
      tags: [
        {
          name: "nextjs",
          color: "blue-text-gradient",
        },
        {
          name: "supabase",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
      ],
      image: vendedor,
      source_code_link: "https://github.com/",
      stack: [
        {
         name: "PHP",
        }, 
        {
         name: "HTML5",
        }, 
        {
         name: "CSS",
        }, 
        {
         name: "BootStrap",
        }, 
        {
         name: "ECMAScript 6+",
        }, 
        {
         name: "AWS",
        }
      ]
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };