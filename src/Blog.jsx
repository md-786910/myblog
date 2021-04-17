import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import './css/blog.css'
const Blog = () => {
    return (
        <>
            <Navbar />
            <div id="Blog">
                <h1>Ours Blog</h1>
            </div>
            <div id="container">
                <div id="blogcontent">

                    <h3>Javascript</h3>

                    <div id="contentColor">

                        <p><strong>JavaScript</strong> (<strong>JS</strong>) is a lightweight, interpreted, or <a href="https://en.wikipedia.org/wiki/Just-in-time_compilation" class="external" rel=" noopener">just-in-time</a> compiled programming language with <a href="/en-US/docs/Glossary/First-class_Function">first-class functions</a>. While it is most well-known as the scripting language for Web pages, <a href="https://en.wikipedia.org/wiki/JavaScript#Other_usage" class="external" rel=" noopener">many non-browser environments</a> also use it, such as <a href="/en-US/docs/Glossary/Node.js">Node.js</a>, <a href="https://couchdb.apache.org/" class="external" rel=" noopener">Apache CouchDB</a> and <a href="http://www.adobe.com/devnet/acrobat/javascript.html" class="external" rel=" noopener">Adobe Acrobat</a>. JavaScript is a <a href="/en-US/docs/Glossary/Prototype-based_programming">prototype-based</a>, multi-paradigm, single-threaded, dynamic language, supporting object-oriented, imperative, and declarative (e.g. functional programming) styles. Read more <a href="/en-US/docs/Web/JavaScript/About_JavaScript">about JavaScript</a>.</p>

                        <p>This section is dedicated to the JavaScript language itself, and not the parts that are specific to Web pages or other host environments. For information about <a href="/en-US/docs/Glossary/API">API</a> specifics to Web pages, please see <a href="/en-US/docs/Web/API">Web APIs</a> and <a href="/en-US/docs/Glossary/DOM">DOM</a>.</p>

                        <p>The standard for JavaScript is <a href="/en-US/docs/Web/JavaScript/Language_Resources">ECMAScript</a>. As of 2012, all <a href="https://kangax.github.io/compat-table/es5/" class="external" rel=" noopener">modern browsers</a> fully support ECMAScript 5.1. Older browsers support at least ECMAScript 3. On June 17, 2015, <a href="https://www.ecma-international.org" class="external" rel=" noopener">ECMA International</a> published the sixth major version of ECMAScript, which is officially called ECMAScript 2015, and was initially referred to as ECMAScript 6 or ES6. Since then, ECMAScript standards are on yearly release cycles. This documentation refers to the latest draft version, which is currently <a href="https://tc39.github.io/ecma262/" class="external" rel=" noopener">ECMAScript 2020</a>.</p>

                        <p>Do not confuse JavaScript with the <a href="https://en.wikipedia.org/wiki/Java_(programming_language)" class="external" rel=" noopener">Java programming language</a>. Both "Java" and "JavaScript" are trademarks or registered trademarks of Oracle in the U.S. and other countries. However, the two programming languages have very different syntax, semantic, and use.</p>

                        <div class="callout">
                            <h4 id="looking_to_become_a_front-end_web_developer">Looking to become a front-end web
                            developer?</h4>

                            <p>We have put together a course that includes all the essential information you need to
                                work towards your goal.</p>

                            <p><a href="/en-US/docs/Learn/Front-end_web_developer"><strong>Get started</strong></a></p>

                        </div>
                    </div>

                    <br />

                    <h3>Java</h3>
                    <p style={{ textAlign: 'justify' }}><a href="https://www.geeksforgeeks.org/java/"><u>Java</u></a> is a class-based, object-oriented programming language and is designed to have as few implementation dependencies as possible. A general-purpose programming language made for developers to <i>write once run anywhere</i> that is compiled Java code can run on all platforms that support Java. Java applications are compiled to byte code that can run on any Java Virtual Machine. The syntax of Java is similar to c/c++.</p>
                    <h3 style={{ textAlign: 'justify' }}>History</h3>

                    <p style={{ textAlign: "justify" }}>Java’s history is very interesting. It is a programming language created in 1991.<strong> </strong>James Gosling, Mike Sheridan, and Patrick Naughton, a team of Sun engineers known as the <strong>Green team </strong>initiated the Java language in 1991. <strong>Sun Microsystems</strong> released its first public implementation in 1996 as <strong>Java 1.0</strong>. It provides no-cost -run-times on popular platforms. Java1.0 compiler was re-written in Java by Arthur Van Hoff to strictly comply with its specifications. With the arrival of Java 2, new versions had multiple configurations built for different types of platforms.</p>

                    <p style={{ textAlign: "justify" }}>In 1997, Sun Microsystems approached the ISO standards body and later formalized Java, but it soon withdrew from the process. At one time, Sun made most of its Java implementations available without charge, despite their proprietary software status. Sun generated revenue from Java through the selling of licenses for specialized products such as the Java Enterprise System.</p>

                    <p style={{ textAlign: "justify" }}>On November 13, 2006, Sun released much of its Java virtual machine as free, open-source software. On May 8, 2007, Sun finished the process, making all of its JVM’s core code available under open-source distribution terms.</p>

                    <h3 style={{ textAlign: "justify" }}>Java programming language is named JAVA. Why?</h3>

                    <p style={{ textAlign: "justify" }}>Java is the name of an <strong>island</strong> in Indonesia where the first coffee(named java coffee) was produced. And this name was chosen by James Gosling while having coffee near his office. Note that Java is just a name, not an acronym.</p>

                    <p style={{ textAlign: "justify" }}>After the name OAK, the team decided to give a new name to it and the suggested words were Silk, Jolt, revolutionary, DNA, dynamic, etc. These all names were easy to spell and fun to say, but they all wanted the name to reflect the essence of technology. In accordance with James Gosling, <strong>Java</strong> the among the top names along with <strong>Silk</strong>, and since java was a unique name so most of them preferred it.</p>
                </div>
            </div>
            <Footer />
        </>
    )
}
export default Blog;