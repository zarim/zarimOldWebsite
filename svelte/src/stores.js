import { writable } from 'svelte/store'

export const WorkStore = writable([
    {
        id: 1,
        title: "Software Engineering Intern",
        subtitle: "WillowTree",
        dates: "May 2021 - August 2021",
        description: "Collaborated on various aspects of a mobile iOS application for a client. Converted features developed In UI Kit to SwiftUI, wrote API models, and wrote unit tests using XCTest.",
        photo: ""
    },
    {
        id: 2,
        title: "Software Engineering Intern",
        subtitle: "Microsoft",
        dates: "May 2019 - August 2019",
        description: "Developed a user context stream on a Business Application Group Product to track customer usage throughout the site and gather actionable insights around how to improve the user experience.",
        photo: ""
    },
    {
        id: 3,
        title: "Explorer Intern",
        subtitle: "Microsoft",
        dates: "May 2018 - August 2018",
        description: "Developed a responsive feature to add to different pages of a business applications product, and tested the feature amongst preview customers and other Microsoft interns.",
        photo: ""
    },
    {
        id: 4,
        title: "Research Assistant",
        subtitle: "University of Florida Gainesville",
        dates: "June 2017 - August 2017",
        description: "Analyzed qualitative data from audio transcripts through affinity diagrams and qualitative coding to find ways to make technology more efficient and accessible for children.",
        photo: ""
    }
])

export const EducationStore = writable([
    {
        id: 1,
        school: "North Carolina State University",
        location: "Raleigh, NC",
        gpa: "3.773",
        major: "Computer Science Ph.D.",
        dates: "August 2020 - TBD",
        photo: "https://i.ibb.co/3fZmQ6g/ncsu.png"
    },
    {
        id: 2,
        school: "Spelman College",
        location: "Atlanta, GA",
        gpa: "3.86",
        major: "Computer Science B.S.",
        dates: "August 2016 - May 2020",
        photo: "https://i.ibb.co/9rhcqbF/spelman.png"
    },
    {
        id: 3,
        school: "Google Tech Exchange",
        location: "Mountain View, CA",
        gpa: "",
        major: "Domestic Exchange",
        dates: "Spring 2019",
        photo: "https://i.ibb.co/h2FMn9Y/google.png"
    },
    {
        id: 4,
        school: "Queen Mary University of London",
        location: "London, England",
        gpa: "",
        major: "Study Abroad",
        dates: "Fall 2018",
        photo: "https://i.ibb.co/60Znr1x/queen-mary.png"
    }
])