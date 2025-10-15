import { v4 as uuidv4 } from 'uuid'

import { authorStore } from './author'
import { IArticle, IArticleWithAuthor } from '@/types'

export const data: IArticle[] = [
    {
        id: '4a3823b2-cf7e-410a-ae16-e4494fa2dba1',
        title: 'Mastering State Management in React with Zustand',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "Zustand offers a minimal and boilerplate-free approach to state management, leveraging hooks for a simple and powerful API. This post explores its core concepts, from creating your first store to handling complex, asynchronous actions without extra middleware like thunks. We'll also dive into performance optimization using selectors to prevent unnecessary re-renders, ensuring your application remains fast and efficient. By the end, you'll see why many developers are choosing Zustand for its unopinionated and scalable nature over more complex solutions.",
    },
    {
        id: 'da1443c9-b2d6-4d6c-bbc9-76a9f1f61c17',
        title: 'Building Scalable APIs with NestJS',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            'A deep dive into the architecture of NestJS and how it leverages TypeScript and modular design to create robust and maintainable backend services. We explore its powerful dependency injection system, which makes testing and decoupling components a breeze. This article covers building controllers for handling requests, providers for business logic, and modules for organizing your application. We also touch on integrating with databases using TypeORM and setting up authentication with Passport.js, giving you a complete picture of a production-ready setup.',
    },
    {
        id: '860cbb41-c59b-4d7a-b8f2-5081dbfda59b',
        title: 'The Rise of Server-Side Rendering with Next.js 14',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "Explore the latest features in Next.js 14, including the App Router, Server Components, and how they revolutionize web development. Server Components allow for a zero-bundle-size footprint for static content, drastically improving initial load times. We'll walk through a practical example of converting a Pages Router application to the App Router, highlighting the benefits of co-locating components, tests, and styles. Furthermore, we'll examine Server Actions for seamless form submissions and data mutations without writing boilerplate API routes.",
    },
    {
        id: '486695f3-cfc4-454a-985c-f5fe74557003',
        title: 'A Practical Guide to Docker and Containerization',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            'From Dockerfiles to Docker Compose, this guide provides a step-by-step tutorial on containerizing your applications for consistent development and deployment. Learn how to craft an efficient Dockerfile for a Node.js application, leveraging multi-stage builds to keep your images small and secure. We then scale up with Docker Compose, orchestrating a multi-container environment with a database and a backend service. This guide demystifies networking, volumes for data persistence, and environment variables, empowering you to create reproducible builds for any project.',
    },
    {
        id: 'a3b8e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b5c',
        title: 'Advanced TypeScript Patterns for Clean Code',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "Take your TypeScript skills to the next level by mastering advanced patterns like conditional types, mapped types, and template literal types. This article moves beyond basic interfaces and explores how to create highly flexible and reusable type utilities. We'll demonstrate how to build a type-safe event emitter and a dynamic form validation schema, showcasing the full power of TypeScript's type system. Understanding these patterns will not only reduce runtime errors but also significantly improve the developer experience for you and your team.",
    },
    {
        id: 'f7c6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b5d',
        title: 'Deep Dive into React Hooks: Beyond useState and useEffect',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "Most React developers are familiar with useState and useEffect, but the true power of hooks lies in mastering the full suite. This post explores useReducer for complex state logic, useContext for avoiding prop drilling, and useCallback/useMemo for performance optimizations. We'll also build our own custom hook from scratch to encapsulate reusable logic, such as fetching data or interacting with browser storage. This deep dive will give you the tools to write cleaner, more declarative, and highly performant React components.",
    },
    {
        id: 'c2a7e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b5e',
        title: 'GraphQL vs. REST: A Modern Comparison',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "The debate between GraphQL and REST is ongoing, but the choice depends heavily on your application's needs. This article provides a balanced comparison, highlighting GraphQL's strengths in preventing over-fetching and under-fetching, and its strongly typed schema. On the other hand, we discuss REST's simplicity, caching advantages, and vast ecosystem. We'll analyze use cases where each shines, helping you make an informed architectural decision for your next project.",
    },
    {
        id: 'e9b6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b5f',
        title: 'Effortless Styling with Tailwind CSS in React',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "Tailwind CSS has transformed the way we write styles, moving from separate CSS files to utility-first classes directly in our markup. This guide shows you how to set up Tailwind CSS in a modern React project and leverage its JIT (Just-In-Time) compiler for blazing-fast performance. We'll cover responsive design with breakpoints, theming with custom configurations, and using directives like @apply to extract reusable component classes. Say goodbye to naming conventions and context switching, and hello to rapid UI development.",
    },
    {
        id: 'd3a8e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b6a',
        title: 'CI/CD Pipelines with GitHub Actions Explained',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "Automating your build, test, and deployment process is crucial for modern software development. GitHub Actions makes this easier than ever by integrating CI/CD directly into your repository. This tutorial walks you through creating a workflow file from scratch to lint, test, and build a Node.js application on every push. We'll also cover more advanced topics like using secrets for API keys, caching dependencies for faster runs, and deploying to a cloud provider like Vercel or AWS.",
    },
    {
        id: 'b7c6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b6b',
        title: 'Web Accessibility (a11y) Best Practices',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            'Building an inclusive web means ensuring everyone, regardless of ability, can use your applications. This article covers the essential principles of web accessibility (a11y), from using semantic HTML to proper ARIA roles and attributes. We provide a practical checklist for developers, including keyboard navigation, focus management, color contrast, and alt text for images. Learn how to use tools like Lighthouse and screen readers to audit your site and make meaningful improvements.',
    },
    {
        id: 'a1a7e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b6c',
        title: 'Optimizing PostgreSQL Queries for Performance',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "A slow database can bring any application to its knees. This guide focuses on diagnosing and optimizing slow queries in PostgreSQL. We start with understanding the EXPLAIN ANALYZE command to read query plans and identify bottlenecks. From there, we explore the importance of proper indexing, covering B-Tree, GIN, and GiST indexes for different data types and query patterns. We'll also discuss common pitfalls like N+1 queries and how to avoid them with efficient joins and subqueries.",
    },
    {
        id: 'f9b6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b6d',
        title: 'Frontend Performance: A Guide to a Faster Web',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "In today's fast-paced world, website performance is not a feature; it's a requirement. This article breaks down the critical path to a faster user experience, focusing on Core Web Vitals (LCP, FID, CLS). We cover practical techniques like code splitting to reduce initial bundle size, lazy loading images and components, and optimizing fonts. We also explore the impact of caching strategies, CDNs, and choosing the right image formats to make your site load instantly.",
    },
    {
        id: 'c3a8e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b6e',
        title: 'Microservices vs. Monolith: An Architectural Showdown',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "Choosing the right architecture is a critical decision with long-term consequences. This article breaks down the pros and cons of both microservices and monolithic architectures. We analyze the monolith's simplicity in development and deployment versus the microservice approach's scalability, resilience, and technological flexibility. Real-world examples from companies like Netflix and Amazon illustrate how to manage the complexities of inter-service communication and data consistency in a distributed system.",
    },
    {
        id: 'e7c6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b6f',
        title: 'Building a Design System with Storybook and React',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "A design system creates a single source of truth for UI components, ensuring consistency and accelerating development. Storybook is the industry-standard tool for building, testing, and documenting these components in isolation. This tutorial guides you through setting up Storybook in a React project, writing stories for your components, and using addons for interactivity and accessibility testing. We'll build a reusable Button component and show how it can be consumed across multiple projects.",
    },
    {
        id: 'd1a7e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b7a',
        title: 'Introduction to gRPC for High-Performance Communication',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "While REST is dominant, gRPC offers a high-performance alternative, especially for internal microservice communication. Built on HTTP/2 and using Protocol Buffers, gRPC provides features like streaming, low-latency communication, and language-agnostic service definitions. This post explains the core concepts, how to define services with .proto files, and how to generate client and server code in Node.js. We'll build a simple service to demonstrate its efficiency compared to a traditional JSON-over-HTTP API.",
    },
    {
        id: 'b9b6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b7b',
        title: 'State of JS 2025: Svelte vs. Solid',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "The JavaScript ecosystem is constantly evolving, with new frameworks challenging the dominance of React. This article compares two of the most exciting contenders: Svelte and SolidJS. We examine Svelte's compiler-based approach that ships no runtime framework code, and Solid's fine-grained reactivity system inspired by KnockoutJS. Through code examples and performance benchmarks, we explore their unique philosophies and help you decide which might be the right fit for your next project.",
    },
    {
        id: 'a3a8e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b7c',
        title: 'Implementing WebSockets for Real-Time Applications',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            "For applications that require instant data updates, like chat apps or live dashboards, HTTP polling isn't efficient. WebSockets provide a persistent, bi-directional communication channel between the client and server. This guide covers implementing a WebSocket server using the 'ws' library in Node.js and connecting to it from a frontend application. We discuss handling connections, broadcasting messages to multiple clients, and managing state on the server for a seamless real-time experience.",
    },
    {
        id: 'f7c6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b7d',
        title: 'Testing React Apps with Jest and Testing Library',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "Writing tests is key to building reliable and maintainable applications. The combination of Jest and React Testing Library has become the standard for testing React components. This tutorial emphasizes testing user behavior over implementation details. We will write unit tests for a simple component, covering how to query the DOM, fire events, and mock API calls with Jest. You'll learn the guiding principles that make your tests more resilient to code refactoring.",
    },
    {
        id: 'c2a7e4f1-3a3d-4e9a-9e6b-1d7c0f8a2b7e',
        title: 'System Design: A Guide to Caching Strategies',
        authorId: '5e6c29c8-95e7-4eaf-a0c7-24865267fdd5',
        content:
            'Caching is one of the most effective ways to improve system performance, but it comes with its own set of challenges. This article explores various caching strategies, including cache-aside, read-through, and write-through patterns. We discuss the tradeoffs of each approach and when to use them. Furthermore, we cover cache invalidation techniques and the classic problem of cache stampedes, providing solutions like Redis for implementing a distributed cache in your architecture.',
    },
    {
        id: 'e9b6d5b9-1e3a-4f9a-8e6b-2d7c0f8a2b7f',
        title: 'Creating Stunning Animations with Framer Motion',
        authorId: 'dd9e7678-4c44-4c2a-be7f-2048509e70bd',
        content:
            "Motion can transform a user interface from static to delightful. Framer Motion is a production-ready animation library for React that makes creating complex animations declarative and easy. This post introduces the core concepts, from simple `motion` components to powerful animation variants and gesture handling. We'll build a series of examples, including an animated page transition, a draggable element, and a staggered list animation, to showcase how you can bring your UI to life.",
    },
]

export const articleStore = {
    getAll: () => data,

    getAllWithAuthor: (): IArticleWithAuthor[] => {
        return data.map((article) => {
            const author = authorStore.get(article.authorId)
            return { ...article, author }
        })
    },

    get: (id: string) => data.find((a) => a.id === id),

    getWithAuthor: (id: string): IArticleWithAuthor | undefined => {
        const article = data.find((a) => a.id === id)
        if (!article) return undefined
        const author = authorStore.get(article.authorId)
        return { ...article, author }
    },

    search: (term: string): IArticleWithAuthor[] => {
        const lowerTerm = term.toLowerCase()
        const filteredArticles = data.filter(
            (a) =>
                a.title.toLowerCase().includes(lowerTerm) || (a.content && a.content.toLowerCase().includes(lowerTerm))
        )
        return filteredArticles.map((article) => {
            const author = authorStore.get(article.authorId)
            return { ...article, author }
        })
    },

    add: (payload: Omit<IArticle, 'id'>) => {
        const newArticle: IArticle = { id: uuidv4(), ...payload }
        data.push(newArticle)
        return newArticle
    },

    update: (id: string, payload: Partial<Omit<IArticle, 'id'>>) => {
        let article = data.find((a) => a.id === id)
        if (!article) return null
        const updArticle = { ...article, ...payload }
        article.title = updArticle.title
        article.content = updArticle.content
        article.authorId = updArticle.authorId
        return article
    },

    delete: (id: string) => {
        const index = data.findIndex((a) => a.id === id)
        if (index !== -1) {
            return data.splice(index, 1)[0]
        }
        return null
    },
}
