interface Link {
    title: string;
    href: string;
    icon: string;
    classes?: string;
 }
 
 interface Project {
    title: string;
    href: string;
 }
 
 interface PortfolioData {
    name: string;
    alt: string;
    avatar: string;
    links: Link[];
    projects: Project[];
 }
 
 
 const data: PortfolioData = {
    "name": "Seif Mejri",
    "alt": "Seif Mejri headshot image",
    "avatar": "https://avatars.githubusercontent.com/u/21162602?v=4",
    "links": [
       {
          "title": "LinkedIn",
          "href": "https://www.linkedin.com/in/mejri-oregon/",
          "icon": "mdi:linkedin"
       },
       {
          "title": "GitHub",
          "href": "https://www.github.com/seifedd",
          "icon": "mdi:github"
       },
    ],
    "projects": [
       {
          "title": "EcomSync API Integration",
          "href": "https://celadon-beignet.netlify.app/"
       },
    ]
 }
 
 export default data;