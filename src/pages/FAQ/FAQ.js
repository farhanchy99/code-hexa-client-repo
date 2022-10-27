import React from 'react';

const FAQ = () => {
    return (
        <div className='container m-auto mb-10'>
            <h1 className='text-2xl text-center font-bold my-10'>This FAQ</h1>
            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-amber-400 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                    What jobs can you get in Web Design?
                </div>
                <div className="collapse-content"> 
                    <p>As our reliance on the internet increases, job growth for Web Designers remains on the rise. According to learn.org, the role earns a median salary of $69,430 per year and is expected to grow by 13 percent through 2028.With a host of transferable skills such as writing code, monitoring web traffic, and coordinating with team members, learners who explore Web Design can explore various opportunities. Some of them include Applications Developer, Game Developer, Multimedia Programmer, Multimedia Specialist, SEO Specialist, UX Designer, UX Researcher, and Web Content Manager.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-amber-400 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                How can online courses help you learn Web Design?
                </div>
                <div className="collapse-content"> 
                    <p>Courses on Web Design offered through Coursera equip learners with knowledge on writing HTML5 and CSS3; creating interactive web experiences with JavaScript; the structure and functionality of the world-wide web; developing a working model for designing for businesses; incorporating text, sound, images, hyperlinks, plug-ins, and social media interactivity; and other topics. Lessons on Web Design are taught by professors from major universities, such as University of Michigan, The State University of New York, Goldsmiths, University of London, and more. Learners can enjoy exploring Web Design with professors specializing in Interactive Media, Computing, Information, and other disciplines. Video lectures, readings, quizzes, hands-on projects, and other types of content delivery help learners build skills through online courses.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-amber-400 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                What skills or experience do I need to already have, before starting to learn about web design?
                </div>
                <div className="collapse-content"> 
                    <p>Before starting to learn about web design, you'll only need to have basic computer skills. Certain experiences, such as taking math classes and courses on logic and algorithms, can make it easier for you to learn web design or progress through the lessons. Learning about graphic design or experimenting with graphic design tools can help prepare you for working with visual elements and creating aesthetically pleasing layouts. Simply spending time online and paying attention to how different websites look and function can also prepare you to study web design.</p>
                </div>
            </div>

            <div tabIndex={0} className="collapse collapse-arrow border border-base-300 bg-amber-400 rounded-box mb-5">
                <div className="collapse-title text-xl font-medium">
                How do I know if learning web design is right for me?
                </div>
                <div className="collapse-content"> 
                    <p>Learning web design might be right for you if you’re interested in carving out a space for yourself on the internet or helping individuals or businesses do so. You might be a business owner who needs to create an online storefront, or perhaps you're an artist who simply wants to create a site that shows off your portfolio. Web design is an ideal hobby or career path for anyone who is passionate about engaging with online communities and doesn't mind spending lots of time in front of the computer screen.</p>
                </div>                                                  
            </div>
        </div>
    );
};

export default FAQ;