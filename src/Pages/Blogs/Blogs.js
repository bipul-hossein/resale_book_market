import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Blogs = () => {
 
    return (
        <div className='bg-blue-100'>

        <div className='py-9 w-10/12 mx-auto bg-blue-100'>
            <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                <h3 className='text-2xl text-start py-4'>1. Difference between SQL and NoSQL</h3>
                <p className='text-xl text-start'>From analysts and engineers to IT decision makers, many are familiar with Relational Database Management Systems (RDBMS) and the Structured Query Language (SQL) used to interact with them. While these terms refer to a decades-old paradigm which remains a wide standard, today the sheer variety and depth of database systems can be dizzying. What’s more, rising volumes of unstructured data, availability of storage and processing power, and evolving analytic requirements have generated interest in fundamentally different technologies.<br />

                    Collectively known as NoSQL, these popular alternatives to traditional RDBMSs show promise for a variety of modern use cases.<br />

                    To make informed decisions about which to use, practitioners should be aware of the differences between SQL, NoSQL, individual Database Management Systems (DBMS) and languages, as well as the situations each is best-suited for, and how the landscape is changing.<br />
                </p>
            </div>
            <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                <h3 className='text-2xl text-start py-4'>2. What is JWT, and how does it work?</h3>
                <p className='text-xl text-start'>JSON Web Token (JWT) is an open standard (RFC 7519) for securely transmitting information between parties as JSON object.<br />

                    It is compact, readable and digitally signed using a private key/ or a public key pair by the Identity Provider(IdP). So the integrity and authenticity of the token can be verified by other parties involved.<br />

                    The purpose of using JWT is not to hide data but to ensure the authenticity of the data. JWT is signed and encoded, not encrypted.<br />

                    JWT is a token based stateless authentication mechanism. Since it is a client-side based stateless session, server doesn't have to completely rely on a datastore(database) to save session information.<br />
                </p>
            </div>
            <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                <h3 className='text-2xl text-start py-4'>3. What is the difference between javascript and NodeJS?</h3>
                <p className='text-xl text-start'>1. JavaScript is a client-side scripting language that is lightweight, cross-platform, and interpreted. Both Java and HTML include it. Node.js, on the other hand, is a V8-based server-side programming language.<br />

                    As a result, it is used to create network-centric applications. It's a networked system made for data-intensive real-time applications. If we compare node js vs. python, it is clear that node js will always be the preferred option.<br />

                    2. JavaScript is a simple programming language that can be used with any browser that has the JavaScript Engine installed. Node.js, on the other hand, is an interpreter or execution environment for the JavaScript programming language. It requires libraries that can be conveniently accessed from JavaScript programming to be more helpful.<br />

                    3. Any engine may run JavaScript. As a result, writing JavaScript is incredibly easy, and any working environment is similar to a complete browser. Node.js, on the other hand, only enables the V8 engine. Written JavaScript code, on the other hand, can run in any context, regardless of whether the V8 engine is supported.<br />

                    4. A specific non-blocking operation is required to access any operating system. There are a few essential objects in JavaScript, but they are entirely OS-specific.<br />

                    Node.js, on the other hand, can now operate non-blocking software tasks out of any JavaScript programming. It contains no OS-specific constants. Node.js establishes a strong relationship with the system files, allowing companies to read and write to the hard drive.<br />

                    5. The critical benefits of JavaScript include a wide choice of interfaces and interactions and just the proper amount of server contact and direct visitor input.<br />

                    Node.js, on the other hand, offers node package management with over 500 modules and the capacity to handle many requests at the same time. It also offers the unique ability to enable microservice architecture and the Internet of Things. Even when comparing node js vs. react js, node js always wins.<br />

                </p>
            </div>
            <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                <h3 className='text-2xl text-start py-4'>4. How does NodeJS handle multiple requests at the same time?</h3>
                <p className='text-xl text-start'>We know NodeJS application is single-threaded. Say, if processing involves request A that takes 10 seconds, it does not mean that a request which comes after this request needs to wait 10 seconds to start processing because NodeJS event loops are only single-threaded. The entire NodeJS architecture is not single-threaded.<br />

                    How NodeJS handle multiple client requests?<br />

                    NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them. EventLoop is the listener for the EventQueue.<br />

                    If NodeJS can process the request without I/O blocking then the event loop would itself process the request and sends the response back to the client by itself. But, it is possible to process multiple requests parallelly using the NodeJS cluster module or worker_threads module.<br />
                </p>
            </div>
        </div >
    </div>
    );
};

export default Blogs;