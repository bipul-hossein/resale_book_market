import React from 'react';
import { useLoaderData } from 'react-router-dom';
import useTitle from '../../hooks/useTitle';

const Blogs = () => {
useTitle('Blogs')
    return (
        <div className='bg-blue-100'>

            <div className='py-9 w-11/12 mx-auto bg-blue-100'>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>1. What are the different ways to manage a state in a React application?</h3>
                    <p className='text-xl text-start'>When we talk about state in our applications, it’s important to be clear about what types of state actually matter.<br />

                        There are four main types of state you need to properly manage in your React apps:<br />

                        1. Local state<br />
                        2. Global state<br />
                        3. Server state<br />
                        4. URL state<br />

                    </p>
                </div>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>2. How does prototypical inheritance work?</h3>
                    <p className='text-xl text-start'>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.<br />
                    </p>
                </div>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>3.What is a unit test? Why should we write unit tests?
                    </h3>
                    <p className='text-xl text-start'>Unit testing is a software development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. This testing methodology is done during the development process by the software developers and sometimes QA staff. The main objective of unit testing is to isolate written code to test and determine if it works as intended.<br />

                        Unit testing is an important step in the development process, because if done correctly, it can help detect early flaws in code which may be more difficult to find in later testing stages.<br />

                    </p>
                </div>
                <div className='my-8 bg-white p-4 rounded-lg border-solid border-2 '>
                    <h3 className='text-2xl text-start py-4'>4.React vs. Angular vs. Vue?</h3>
                    <p className='text-xl text-start'>This post is a comprehensive guide on which is perhaps the right solution for you: Angular vs React vs Vue.<br/>

                        Just a couple of years ago, developers were mainly debating whether they should be using Angular vs React for their projects. But over the course of the last couple of years, we’ve seen a growth of interest in a third player called Vue.js.<br/>

                        If you are a developer starting out on a project and cannot decide on which JavaScript framework to use, this guide should help you make a decision.<br/>
                    </p>
                </div>
            </div >
        </div>
    );
};

export default Blogs;