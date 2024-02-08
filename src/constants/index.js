import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    docker,
    django,
    estate,
    fastapi,
    git,
    github,
    gitlab,
    html,
    javascript,
    linkedin,
    mongodb,
    postgres,
    pricewise,
    python,
    react,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,

} from "../assets/icons";

export const skills = [
    {
        imageUrl: python,
        name: "Python",
        type: "Backend",
    },
    {
        imageUrl: django,
        name: "Django",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: gitlab,
        name: "GitLab",
        type: "Version Control",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: postgres,
        name: "Postgresql",
        type: "Database",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: fastapi,
        name: "FastAPI",
        type: "Backend",
    },
    {
        imageUrl: docker,
        name: "Docker",
        type: "Backend",
    },
];

export const experiences = [
    // {
    //     title: "React.js Developer",
    //     company_name: "Starbucks",
    //     icon: starbucks,
    //     iconBg: "#accbe1",
    //     date: "March 2020 - April 2021",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Lead Treasurer/Head Financial Advisor",
        company_name: "Student Experimental Film Festival",
        icon: tesla,
        iconBg: "#fbc3bc",
        date: "Aug 2022 - Dec 2022",
        points: [
            "Digital Marketing for promotion of the event with the use of online and physical advertising along with distribution of funds to private organizations through checks, direct e-transfer, and other online/ mobile payment services",
            "Managed accounts for over 17 students and faculty including, bookkeeping, expense tracking, and budget analysis.",
            "Participating in weekly standups and providing/recieving constructive feedback to other sectors of production.",
        ],
    },
    // {
    //     title: "Web Developer",
    //     company_name: "Shopify",
    //     icon: shopify,
    //     iconBg: "#b7e4c7",
    //     date: "Jan 2022 - Jan 2023",
    //     points: [
    //         "Developing and maintaining web applications using React.js and other related technologies.",
    //         "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
    //         "Implementing responsive design and ensuring cross-browser compatibility.",
    //         "Participating in code reviews and providing constructive feedback to other developers.",
    //     ],
    // },
    {
        title: "Intern",
        company_name: "Deutsche Bank",
        icon: meta,
        iconBg: "#a2d2ff",
        date: "May 2021 - Aug 2022",
        points: [
            "Performed analysis of bank statements for companies including assessments of liquidity, cash deficits/surpluses, and accounts receivables.",
            "Implementing responsive design and ensuring cross-browser compatibility.",
            "Technical training and research in asset management, investment, and commercial banking conducted.",
        ],
    },
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contact',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: 'https://github.com/YourGitHubUsername',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: 'https://www.linkedin.com/in/YourLinkedInUsername',
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Catalist',
        description: 'Developed a web application that tracks and notifies users of price changes for products on Amazon, helping users find the best deals.',
        link: 'https://gitlab.com/globetrodders/module3-project-gamma',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Conference GO',
        description: 'Created a full-stack replica of the popular discussion platform "Threads," enabling users to post and engage in threaded conversations.',
        link: 'https://gitlab.com/hrahman3/conference-go',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Automersive',
        description: 'Designed and built a mobile app for finding and comparing cars on the market, streamlining the car-buying process.',
        link: 'https://gitlab.com/hrahman3/automersive',
    },
    // {
    //     iconUrl: snapgram,
    //     theme: 'btn-back-pink',
    //     name: 'Full Stack Instagram Clone',
    //     description: 'Built a complete clone of Instagram, allowing users to share photos and connect with friends in a familiar social media environment.',
    //     link: 'https://github.com/adrianhajdin/social_media_app',
    // },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Tracker',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers.',
        link: 'https://gitlab.com/hrahman3/tracker',
    },
    // {
    //     iconUrl: summiz,
    //     theme: 'btn-back-yellow',
    //     name: 'AI Summarizer Application',
    //     description: 'App that leverages AI to automatically generate concise & informative summaries from lengthy text content, or blogs.',
    //     link: 'https://github.com/adrianhajdin/project_ai_summarizer',
    // }
];