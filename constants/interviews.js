const interviewExperiences = [
    {
        company: "Goldman Sachs",
        role: "Software Engineer",
        date: "August 2025",
        rounds: [
            {
                name: "CoderPad Round (Coding)",
                // interviewer: "Abhishek",
                // date: "17/8/25",
                questions: [
                    {
                        type: "Coding",
                        content: "Given a 2D string of names and values: `scores[][] = {{\"jerry\",\"65\"}, {\"bob\",\"91\"}, {\"jerry\",\"23\"}, {\"eric\",\"83\"}}`. Find the highest average score (in this case 91)."
                    },
                    {
                        type: "Coding",
                        content: "Packing snowpack: Same as Trapping Rain Water problem."
                    },
                    {
                        type: "Java",
                        content: "int vs Integer"
                    },
                    {
                        type: "Java",
                        content: "Garbage collection in Java and when does it run?"
                    },
                    {
                        type: "Java",
                        content: "Types of memory in Java and where int and Integer are kept."
                    },
                    {
                        type: "General",
                        content: "What is an API? Types of REST API."
                    }
                ],
                notes: "Primitive always in stack memory and objects always in heap memory. Java heap memory is used by Java runtime to allocate memory to objects and JRE classes."
            },
            {
                name: "Technical Round 1",
                // interviewer: "Rachel and Daniel French",
                // date: "18/8/25",
                questions: [
                    {
                        type: "Coding",
                        content: "Packing snow: Same as Trapping Rain Water."
                    },
                    {
                        type: "Coding",
                        content: "Number of islands in a 2D grid."
                    },
                    {
                        type: "System Design",
                        content: "External client sends data, company takes data and processes it, then returns it. Design this flow."
                    }
                ]
            },
            {
                name: "Technical Round 2",
                // interviewer: "Shubhankit and Ainslan Myers",
                questions: [
                    {
                        type: "Resume/Architecture",
                        content: "Architecture of the app you are working on. How to scale it?"
                    },
                    {
                        type: "Java/Spring Boot",
                        content: "Java annotations vs Spring Boot annotations. What is Spring Boot and what is Spring?"
                    },
                    {
                        type: "Coding",
                        content: "Implement a Deque using a doubly linked list. Discussion on avoiding delimiters with -1 values."
                    }
                ]
            },
            {
                name: "Technical Round 3",
                // interviewer: "Kapil Jain",
                // date: "29 September 2025",
                questions: [
                    {
                        type: "System Design",
                        content: "Design a trade booking application. Deep dive into the matching algorithm (hinted on using hash table)."
                    }
                ]
            },
            {
                name: "Hiring Manager Round",
                // interviewer: "Rishav Utkarsh & Piyush Jain",
                questions: [
                    {
                        type: "Java/OS",
                        content: "How Java programs work, compiled or not? What happens when compiled?"
                    },
                    {
                        type: "OS",
                        content: "Types of scheduling in OS, paging, virtual memory, compiler optimizations."
                    },
                    {
                        type: "Java",
                        content: "Java memory management: stack vs heap, how Java handles memory leaks."
                    },
                    {
                        type: "System Design",
                        content: "Design a scalable distributed in-memory cache with TTL values."
                    },
                    {
                        type: "Behavioral",
                        content: "Questions about team interaction, reporting structure, and location."
                    },
                    {
                        type: "Puzzle",
                        content: "Prove that x^2+1 is always divisible by 24 given that x is a prime number greater than or equal to 5."
                    }
                ]
            }
        ]
    },
    {
        company: "Amazon",
        role: "Software Development Engineer 1",
        date: "November 2025",
        rounds: [
            {
                name: "Round 1",
                questions: [
                    {
                        type: "Coding",
                        content: "Find the smallest distance from a target node in a tree to its nearest leaf node."
                    },
                    {
                        type: "Coding",
                        content: "Find max length of substring without repeating characters."
                    },
                    {
                        type: "Behavioral",
                        content: "Tell me about a time when you had a knowledge gap and what you did to cope. How would you improve the chatbot?"
                    }
                ]
            },
            {
                name: "Round 2",
                questions: [
                    {
                        type: "Behavioral",
                        content: "Tell me about a project where you took ownership and delivered from end to end (2 situations)."
                    },
                    {
                        type: "Coding",
                        content: "Given an expression in string form, evaluate the expression (stack-based problem)."
                    }
                ]
            },
            {
                name: "Round 3",
                questions: [
                    {
                        type: "Behavioral",
                        content: "Tell me about a time when you had to do a deep dive into a problem to solve it."
                    },
                    {
                        type: "Technical",
                        content: "Discuss audit logging high risk change (logging twice issue)."
                    },
                    {
                        type: "Behavioral",
                        content: "Tell me about a time when you received critical feedback (Removing users from database mistake and solution)."
                    }
                ]
            }
        ]
    }
];

export default interviewExperiences;
