import { title } from "process";

export const courses = [
    {
      title: "Artificial Intelligence",
      description:"A One Year AI Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Computing Enabled By The Rise Of AI.",
      id:"ai",
      img_url:"/images/AI.jpg",
      bg_color:"teal.400",
      d_url:"/programs/ai"
    },
    {
      title: "Cloud Native & Mobile Web Computing",
      description:"A One Year Cloud Computing Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Microservices And Multi-Cloud Native Computing.",
      id:"cloud",
      img_url:"/images/cloud.jpg",
      bg_color:"pink.400",
      d_url:"/programs/cloud"
    },
    {
      title: "Block Chain",
      description:"A One Year Blockchain Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Blockchain, Fintech And Smart Contracts.",
      id:"bc",
      img_url:"/images/BC.png",
      bg_color:"yellow.400",
      d_url:"/programs/bc"
    },
    {
      title: "Internet of Things and AI Specialist",
      description:"A Fifteen Months IOT And AI Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Internet Of Things & AI.",
      id:"iot",
      img_url:"/images/IOT.jpg",
      bg_color:"blue.400",
      d_url:"/programs/iot"
    },
    {
      title: "Web 3.0 And Metaverse",
      description:"A One Year Web3 & Metaverse Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era of Web 3.0 And Metaverse.",
      id:"web3",
      img_url:"/images/Web3.jpg",
      bg_color:"green.400",
      d_url:"/programs/web3"
    },
  ]

type programDetailsData = {
    title : string;
    description:string;
    img_url:string;
    technicalQuarters:IQuarter[],
 }

 enum TrackType{
    TechnicalTrack = 0,
    CompulsoryInovationTrack = 10
 }

interface IQuarter{
  title:string;
  description:string;
  type:TrackType;
  color:string;
}

export const CompulsoryInovationTracks = [
  {
    title:"Quarter 1",
    description:"Innovation Methodologies",
    type:TrackType.CompulsoryInovationTrack,
    color:"gray.300"
  },
  {
    title:"Quarter 2",
    description:"Infrastructure As Code And DevOps",
    type:TrackType.CompulsoryInovationTrack,
    color:"gray.400"
  },
  {
    title:"Quarter 3",
    description:"Lean UI/UX and Bot Design",
    type:TrackType.CompulsoryInovationTrack,
    color:"gray.500"
  },
]

// interface ICourseProjectAttributes{
//     title:string,
//     description:string,
//     url:string
// }
  
//   interface IQuarter{
//     title:string;
//     description:string;
//     duration:number;
//     courseOutline:ICourseProjectAttributes[];
//     projects:ICourseProjectAttributes[];
//   }
  
  

  
  const getPrograms = (program : string): programDetailsData => {
    const programs:{[program:string]:programDetailsData} = {
      ai:{
        title:"Artifical Intelligence",
        description:"A One Year AI Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Computing Enabled By The Rise Of AI.",
        img_url:"/images/AI.jpg",
        technicalQuarters:[
          {
            title:"Quarter 1",
            description:"AI Foundations",
            type:TrackType.TechnicalTrack,
            color:"teal.100",
          },
          {
            title:"Quarter 2",
            description:"Introduction to Data Science & Deep Learning",
            type:TrackType.TechnicalTrack,
            color:"teal.200",
          },
          {
            title:"Quarter 3",
            description:"Deploying AI Solutions",
            type:TrackType.TechnicalTrack,
            color:"teal.300",
          },
          {
            title:"Quarter 4",
            description:"AI In Practice",
            type:TrackType.TechnicalTrack,
            color:"teal.400",
          },
        ],
      },
      cloud:{
        title: "Cloud Native & Mobile Web Computing",
        description:"A One Year Cloud Computing Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Microservices And Multi-Cloud Native Computing.",
        img_url:"/images/cloud.jpg",
        technicalQuarters:[
          {
            title:"Quarter 1",
            description:"Cloud Native Computing Foundations",
            type:TrackType.TechnicalTrack,
            color:"blue.100",
          },
          {
            title:"Quarter 2",
            description:"Introduction to Data Science & Deep Learning",
            type:TrackType.TechnicalTrack,
            color:"blue.200",
          },
          {
            title:"Quarter 3",
            description:"Kubernetes in Practice",
            type:TrackType.TechnicalTrack,
            color:"blue.300",
          },
          {
            title:"Quarter 4",
            description:"AWS Application Development",
            type:TrackType.TechnicalTrack,
            color:"blue.400",
          },
        ],
      },
      bc:{
        title: "Block Chain",
        description:"A One Year Blockchain Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Blockchain, Fintech And Smart Contracts.",
        img_url:"/images/BC.png",
        technicalQuarters:[
          {
            title:"Quarter 1",
            description:"Foundations of Blockchain",
            type:TrackType.TechnicalTrack,
            color:"purple.100",
          },
          {
            title:"Quarter 2",
            description:"Smart Contract Development",
            type:TrackType.TechnicalTrack,
            color:"purple.200",
          },
          {
            title:"Quarter 3",
            description:"Dapp Development",
            type:TrackType.TechnicalTrack,
            color:"purple.300",
          },
          {
            title:"Quarter 4",
            description:"Advance Blockchain Topics",
            type:TrackType.TechnicalTrack,
            color:"purple.400",
          },
        ],
      },
      iot:{
        title: "Internet of Things and AI Specialist",
        description:"A Fifteen Months IOT And AI Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era Of Internet Of Things & AI.",
        img_url:"/images/IOT.jpg",
        technicalQuarters:[
          {
            title:"Quarter 1",
            description:"Introduction to IoT Concepts and Rust Programming",
            type:TrackType.TechnicalTrack,
            color:"pink.100",
          },
          {
            title:"Quarter 2",
            description:"Embeded Rust and Real-Time Systems Programming",
            type:TrackType.TechnicalTrack,
            color:"pink.200",
          },
          {
            title:"Quarter 3",
            description:"Microservices  Development for IoT Edge and IoT Cloud using Web Assembly, Node.js, Docker and KubeEdge technologies",
            type:TrackType.TechnicalTrack,
            color:"pink.300",
          },
          {
            title:"Quarter 4",
            description:"Voice Computing for Device Control",
            type:TrackType.TechnicalTrack,
            color:"pink.400",
          },
          {
            title:"Quarter 5",
            description:"Artificial Intelligence for IoT",
            type:TrackType.TechnicalTrack,
            color:"pink.500",
          },
          {
            title:"Quarter 6",
            description:"Blockchain and IOTA Technologies for IoT",
            type:TrackType.TechnicalTrack,
            color:"pink.600",
          },
        ],
      },
      web3:{
        title: "Web 3.0 And Metaverse",
      description:"A One Year Web3 & Metaverse Program Designed For Absolute Beginners. Getting Pakistan Ready For The New Era of Web 3.0 And Metaverse.",
      img_url:"/images/Web3.jpg",
      technicalQuarters:[
          {
            title:"Quarter 1",
            description:"OOP Programming using Typescript",
            type:TrackType.TechnicalTrack,
            color:"green.100",
          },
          {
            title:"Quarter 2",
            description:"Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
            type:TrackType.TechnicalTrack,
            color:"green.200",
          },
          {
            title:"Quarter 3",
            description:"Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
            type:TrackType.TechnicalTrack,
            color:"green.300",
          },
          {
            title:"Quarter 4",
            description:"Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
            type:TrackType.TechnicalTrack,
            color:"green.400",
          },
        ],
      },
     
    };
  
    return programs[program];
  }

  export default getPrograms
  