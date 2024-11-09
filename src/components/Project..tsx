import React from 'react'
import Heading from './Heading';
import Card from './Card';



const data = [
    {
        id: 0,
        title: "Static Interactive Resume",
        desc: "A TypeScript-based interactive resume bulit with HTML ",
        img: '/Pic-RESUME.jpg',
        tags: ['HTM',  'Node',  'CSS', 'TypeSscript'],
    },


];

const Project = () => {
    return (
        <div id='project' className='container pt-32'>
            <Heading title='My Project'/>
            <div className='grid gap-10 xl:gap-0 xl:gap-y-10 md:grid--cols-2 lg:grid-cols-3 place-items-center'>
                {data.map((el) => (<Card 
                key={el.id}
                title={el.title}
                desc={el.desc}
                img={el.img}
                tags={el.tags}

                />))}
                

                 </div> 


        </div>
    )
}

export default Project 

