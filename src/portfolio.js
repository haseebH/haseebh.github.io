/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Haseebh",
  title: "Hi all, I'm Haseeb",
  subTitle: emoji(
    "A  Passionate Backend and DevOps Engineer with expertise in building scalable microservices architecture using Golang, implementing cloud-native solutions, orchestrating containerized applications with Kubernetes, and integrating AI solutions while maintaining robust CI/CD pipelines for seamless software delivery."
  ),
  resumeLink:
    "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/haseebh",
  linkedin: "https://www.linkedin.com/in/haseeb-humayun-a098a6108/",
  gmail: "haseeb.h002@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "FEARLESS CODE WARRIOR: TURNING IMPOSSIBLE INTO INEVITABLE 🔥  ",
  skills: [
    emoji("⚡ Specialized in microservices architecture, ensuring your applications are modular, maintainable, and resilient."),
    emoji("⚡ Eliminate system bottlenecks with efficient database design and caching strategies"),
    emoji("⚡ Build reliable, self-healing services that ensure 99.9% uptime"),
    emoji("⚡ Future-proof your systems with easy-to-scale microservices and cloud-native patterns"),
    emoji("⚡ Design and implement scalable CI/CD pipelines with advanced monitoring and observability"),
    emoji("⚡ Scale applications seamlessly from 100 to 1M+ users with cloud-native architecture"),
    emoji("⚡ Automate repetitive tasks and enhance decision-making with strategic AI/ML integration"),
    emoji("⚡ Containerization and orchestration using Docker and Kubernetes for seamless deployment"),
    emoji("⚡ Infrastructure as Code (IaC) implementation with Terraform and configuration management"),
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Golang",
      fontAwesomeClassname: "fab fa-golang custom"
    },
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },
    {
      skillName: "azure",
      fontAwesomeClassname: "fab fa-azure custom"
    },
    {
      skillName: "gcp",
      fontAwesomeClassname: "fab fa-gcp custom"
    },
    {
      skillName: "docker",
      fontAwesomeClassname: "fab fa-docker"
    },
    {
      skillName: "kubernetes",
      fontAwesomeClassname: "fab fa-kubernetes custom"
    },

    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "reactjs",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "nodejs",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: false, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Harvard University",
      logo: require("./assets/images/harvardLogo.png"),
      subHeader: "Master of Science in Computer Science",
      duration: "September 2017 - April 2019",
      desc: "Participated in the research of XXX and published 3 papers.",
      descBullets: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      ]
    },
    {
      schoolName: "Stanford University",
      logo: require("./assets/images/stanfordLogo.png"),
      subHeader: "Bachelor of Science in Computer Science",
      duration: "September 2013 - April 2017",
      desc: "Ranked top 10% in the program. Took courses about Software Engineering, Web Security, Operating Systems, ...",
      descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  // experience: [
  //   {
  //     Stack: "Frontend/Design", //Insert stack or technology you have experience in
  //     progressPercentage: "90%" //Insert relative proficiency in percentage
  //   },
  //   {
  //     Stack: "Backend",
  //     progressPercentage: "70%"
  //   },
  //   {
  //     Stack: "Programming",
  //     progressPercentage: "60%"
  //   }
  // ],
  experience: [
    {
      Stack: "Backend Development",
      progressPercentage: "85%"
    },
    {
      Stack: "System Design & Architecture",
      progressPercentage: "82%"
    },
    {
      Stack: "Microservices",
      progressPercentage: "80%"
    },
    {
      Stack: "DevOps Practices",
      progressPercentage: "85%"
    },
    {
      Stack: "Cloud Platforms",
      progressPercentage: "82%"
    },
    {
      Stack: "Serverless Architecture",
      progressPercentage: "75%"
    },
    {
      Stack: "Technical Leadership",
      progressPercentage: "80%"
    },
    {
      Stack: "Solution Architecture",
      progressPercentage: "78%"
    },
    {
      Stack: "Infrastructure as Code",
      progressPercentage: "82%"
    },
    {
      Stack: "Containerization & Orchestration",
      progressPercentage: "80%"
    },
    {
      Stack: "CI/CD & Automation",
      progressPercentage: "85%"
    },
    {
      Stack: "Prompt Engineering",
      progressPercentage: "70%"
    },
    {
      Stack: "LLM Integration",
      progressPercentage: "65%"
    },
    {
      Stack: "AI/ML Integration",
      progressPercentage: "50%"
    },
    {
      Stack: "Vector Databases",
      progressPercentage: "60%"
    },
    {
      Stack: "Database Design & Management",
      progressPercentage: "80%"
    },
    {
      Stack: "Cache & Message Queues",
      progressPercentage: "75%"
    },
    {
      Stack: "Testing & Quality Assurance",
      progressPercentage: "75%"
    },
    {
      Stack: "Monitoring & Observability",
      progressPercentage: "78%"
    },
    {
      Stack: "Performance Optimization",
      progressPercentage: "78%"
    },
    {
      Stack: "Security Best Practices",
      progressPercentage: "75%"
    },
    {
      Stack: "Compliance & Governance",
      progressPercentage: "72%"
    },
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Cloud Infra Engineer",
      company: "Turing",
      companylogo: require("./assets/images/turingcom_logo.jpeg"),
      // date: "May 2024 – Present",
      desc: "Led AWS infrastructure optimization through IaC implementation, enhanced monitoring with CloudWatch and Datadog, and architected secure database replication systems, resulting in 65% faster incident resolution and robust PII data protection.",
      // descBullets: [
      //   "Maintained and managed AWS cloud resources to ensure high availability and performance using IaC",
      //   "Established comprehensive monitoring solutions using AWS CloudWatch and Datadog, reducing MTTR by 65% through predictive alerting and automated incident response",
      //   "Implemented Database replication system with automated data masking for sensitive PII data in non-production environments."
      // ]
    },
    {
      role: "Engineering Lead",
      company: "Microsec",
      companylogo: require("./assets/images/microsec_ai.jpeg"),
      // date: "Aug 2022 – Present",
      // desc: "I joined the company's founder as a co-founding engineer at an early stage to design and implement secure, scalable software solutions. I lead a team of developers and collaborate with cross-functional teams to ensure the successful delivery of projects. I developed a Generative AI solution to provide security-based responses to clients",
      desc: "As a co-founding engineer, I designed and built core products while leading technical teams. I created AI security solutions for customers and worked across teams to deliver successful projects, helping grow the startup from its early stages."
      // descBullets: [
      //   "Develop and maintain the overall architecture of the software system, ensuring scalability, reliability, and performance.",
      //   "Evaluate and select appropriate technologies and frameworks for development, considering factors such as functionality, performance, and security",
      //   "Design and implement cloud-native solutions using technologies such as Kubernetes, Docker, and service mesh."
      // ]
    },
    {
      role: "Engineering Lead",
      company: "Brainarator",
      companylogo: require("./assets/images/brainarator_logo.jpeg"),
      // date: "Jan 2015 – Sep 2015",
      desc: "Led development teams in architecting high-performance microservices platform using Golang and MongoDB with Docker containerization. Drove end-to-end release management while implementing real-time CLI features, scaling to support 10K+ concurrent users with 99.9% uptime and robust security."
    },
    {
      role: "Senior Backend Engineer",
      company: "Toptal",
      companylogo: require("./assets/images/toptal.com.jpg"),
      // date: "May 2024 – Present",
      desc: "Worked on crypto payment solution enabling retail transactions with cryptocurrency. Added polygon implementation with openzeppelin and real-time transaction processing for merchant point-of-sale systems.",
      // descBullets: [
      //   "Maintained and managed AWS cloud resources to ensure high availability and performance using IaC",
      //   "Established comprehensive monitoring solutions using AWS CloudWatch and Datadog, reducing MTTR by 65% through predictive alerting and automated incident response",
      //   "Implemented Database replication system with automated data masking for sensitive PII data in non-production environments."
      // ]
    },
    {
      role: "Senior Software Engineer",
      company: "CloudPlex",
      companylogo: require("./assets/images/cloudplex-logo.png"),
      // date: "Jan 2018 – Jul 2022",
      desc: "I have contributed to the development and deployment of cloud-based software solutions. Designed and implemented scalable and reliable systems using microservices architecture and containerization technologies."
      // descBullets: [
      //   "Designed and developed microservices-based applications, enabling scalability, flexibility, and ease of maintenance.",
      //   "Utilized Docker, Kubernetes, and Istio to containerize and orchestrate applications, ensuring efficient deployment and scalability.",
      //   "Implemented CI/CD pipelines using tools like Jenkins, Git, and Docker, enabling automated builds, testing, and deployments.",
      //   "Implemented security measures and best practices to protect applications and data. Ensured compliance with industry standards and regulations."
      // ]
    },
    {
      role: "Software Engineer",
      company: "Platalytics",
      companylogo: require("./assets/images/platalytics.jpeg"),
      // date: "Jan 2015 – Jan 2018",
      desc: "I implemented infrastructure automation using Chef and Ansible for Hadoop/Spark clusters. Built Docker containerization for Scala backend and automated ML model deployment. Implemented IoT Features in the platform"
    },
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Big Projects",
  subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/saayaHealthLogo.webp"),
      projectName: "Saayahealth",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://saayahealth.com/"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/nextuLogo.webp"),
      projectName: "Nextu",
      projectDesc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      footerLink: [
        {
          name: "Visit Website",
          url: "http://nextu.se/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Google Code-In Finalist",
      subtitle:
        "First Pakistani to be selected as Google Code-in Finalist from 4000 students from 77 different countries.",
      image: require("./assets/images/codeInLogo.webp"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "Certification",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        },
        {
          name: "Award Letter",
          url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        },
        {
          name: "Google Code-in Blog",
          url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        }
      ]
    },
    {
      title: "Google Assistant Action",
      subtitle:
        "Developed a Google Assistant Action JavaScript Guru that is available on 2 Billion devices world wide.",
      image: require("./assets/images/googleAssistantLogo.webp"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Google Assistant Action",
          url: "https://assistant.google.com/services/a/uid/000000100ee688ee?hl=en"
        }
      ]
    },

    {
      title: "PWA Web App Developer",
      subtitle: "Completed Certifcation from SMIT for PWA Web App Development",
      image: require("./assets/images/pwaLogo.webp"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "Certification", url: ""},
        {
          name: "Final Project",
          url: "https://pakistan-olx-1.firebaseapp.com/"
        }
      ]
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  // number: "+92-0000000000",
  email_address: "haseeb.h002@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = false; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
