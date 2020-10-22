let newTopic = {
        title: 'Change Topics',
        payload: 'I would like to talk about somthing else.'
    }


let topicChange = {
            text: 'What would you like to talk about?',
            quick_replies: [
                {
                    title: 'You',
                    payload: 'Tell me about you.',
                },
                {
                    title: 'Job History',
                    payload: 'Tell me about your work history.',
                },
                {
                    title: 'Education',
                    payload: 'Tell me about your education.',
                },
                {
                    title: 'Projects',
                    payload: 'Tell me about your projects.',
                }
            ]
        }

let main = {
    text: "I'm having a hard time understanding what you are asking. Help me narrow it down. What is the topic?",
    quick_replies: []
}


let you = { 
    text: 'I love the satisfaction of successfully completing a project. I enjoy having an idea or a problem to solve, coming up with a solution and overcoming the challenges that emerge on the road to that solution. That is what I love about software development, every project comes with a unique set of requirements and therefore a unique set of challenges leading to a unique sense of satisfaction when it is completed. My knowledge of React, JavaScript, Redux, HTML, CSS, Ruby on Rails, and the MERN Stack give me the technical ability to find the solution to these challenges.My background as a financial advisor also impressed on me the importance of looking at a project from the user’s perspective.This ensures that I structure the project in a way that will lead to the best possible experience for that user. ',
    quick_replies: [
        {
            title: 'Contact You',
            payload: 'How do I contact you?',
        },
        {
            title: 'Websites',
            payload: 'What websites have you put your work on?',
        }
    ]
}

let contact = {
    text: 'My phone number is 860-287-6464, and my email is andrew.elmore93@gmail.com',
    quick_replies: [
        {
            title: 'Websites',
            payload: 'What websites have you put your work on?',
        }
    ]
}

let sites = {
    text: 'My personal website is https://andrew-elmore.github.io/, my LinkedIn is https://www.linkedin.com/in/akelmore/, and my GitHub is https://github.com/andrew-elmore.',
    quick_replies: [
        {
            title: 'Contact You',
            payload: 'How do I contact you?',
        }
    ]
}

let work = {
    text: 'My first job out of college was as a Financial Advisor at AXA Advisors, in 2018 I moved to Ameriprise Financial. Which would you like to know about?',
    quick_replies: [
        {
            title: 'Ameriprse',
            payload: 'Tell me more about your work at Ameriprise.',
        },
        {
            title: 'AXA',
            payload: 'Tell me more about your work at AXA.',
        }
    ]
}
let workAmeriprise = {
    text: 'I worked as a Financial Advisor for Iron Birch Advisors, a franchise of Ameriprise financial.',
    quick_replies: [
        {
            title: 'AXA',
            payload: 'Tell me more about your work at AXA.',
        }
    ]
}

let workAxa = {
    text: 'I was hired as a Financial Advisor for AXA Advisors (now Equitable Advisors) after interning for them during the summer of 2015.',
    quick_replies: [
        {
            title: 'Ameriprse',
            payload: 'Tell me more about your work at Ameriprise.',
        },
    ]
}

let education = {
    text: 'I graduated Colby College in 2016 for my undergraduate education and completed App Academy in August 2020. Which would you like to know about?',
    quick_replies: [
        {
            title: 'App Academy',
            payload: 'Tell me more about appA.',
        },
        {
            title: 'Colby',
            payload: 'Tell me more about Colby.',
        }
    ]
}

let educationAppA = {
    text: 'I attended App Academy from April, 2020 to August 2020. It is an immersive 16 week software development course with a focus on full-stack web development and an acceptance rate of less than 3%. Entailed 80-100 hours of coding per week.',
    quick_replies: [
        {
            title: 'Colby',
            payload: 'Tell me more about the education you received at Colby.',
        }
    ]
}

let educationColby = {
    text: 'I attended Colby College from 2012-2016 and graduated with a double major in Government and Economics. My coursework and major areas of interest focused on global financial markets, the Middle East and East Asia.',
    quick_replies: [
        {
            title: 'App Academy',
            payload: 'Tell me more about the education you received at appA .',
        }
    ]
}

let projects = {
    text: 'I have created three projects so far, Catan Lite, Couchcorn, and Real Analytics. Which would you like to know about?',
    quick_replies: [
        {
            title: 'Catan',
            payload: 'Tell me more about your Catan projects.',
        },
        {
            title: 'Couchcorn',
            payload: 'Tell me more about your Couchcorn projects.',
        },
        {
            title: 'Real Analytics',
            payload: 'Tell me more about your Real Analytics projects.',
        }
    ]
}

let projectsCatan = {
    text: 'Catan Lite is a turn based, 4 player game. Inspired by the popular board game, built using pure JavaScript, Canvas, HTML5, CSS3.',
    quick_replies: [
        {
            title: 'Couchcorn',
            payload: 'Tell me more about your Couchcorn projects.',
        },
        {
            title: 'Real Analytics',
            payload: 'Tell me more about your Real Analytics projects.',
        }
    ]
}

let projectsCouchcorn = {
    text: 'Couchcorn is a netflix clone for viewing a library of travel focused videos. Created using Rails, ReactJS, AWS, HTML5, and CSS3.',
    quick_replies: [
        {
            title: 'Catan',
            payload: 'Tell me more about your Catan projects.',
        },
        {
            title: 'Real Analytics',
            payload: 'Tell me more about your Real Analytics projects.',
        }
    ]
}

let projectsAnalytics = {
    text: 'Real Analytics is a real estate analysis site that allows users to examine real estate market information from any zip code created using MongoDB, Mongoose, Express.js, React, Node.js, HTML5, CSS3, Google Maps AP, realtorAPI, and AXIOS.',
    quick_replies: [
        {
            title: 'Catan',
            payload: 'Tell me more about your Catan projects.',
        },
        {
            title: 'Couchcorn',
            payload: 'Tell me more about your Couchcorn projects.',
        },
    ]
}

let library = {
    you: {
        payload: you,
        children: {
            contact: {
                payload: contact
            },
            websites: {
                payload: sites
            }
        }
    },
    work: {
        payload: work,
        children: {
            ameriprise: {
                payload: workAmeriprise
            },
            axa: {
                payload: workAxa
            }
        },
    },
    education: {
        payload: education,
        children: {
            appA: {
                payload: educationAppA
            },
            colby: {
                payload: educationColby
            }
        }
    },
    projects: {
        payload: projects,
        children: {
            catan: {
                payload: projectsCatan
            },
            couchcorn: {
                payload: projectsCouchcorn
            },
            analytics: {
                payload: projectsAnalytics
            },
        }
    }
}


function searchKeywords(lib, keywords) {
    let results = []
    let libEntries = Object.entries(lib)
    libEntries.forEach(([key, value]) => {
        if (keywords.includes(key)) {
            results.push(value.payload)
            if (value.children) {
                let childRes = searchKeywords(value.children, keywords)
                if (childRes.length > 0) {
                    results = childRes
                }
            }
        }
    });
    return results
}

module.exports = function (controller) {





    controller.on('message', async(bot, message) => {
        if (message.text === 'I would like to talk about somthing else.') {
            let res = topicChange
            await bot.reply(message, { type: 'typing' });
            setTimeout(async () => {
                await bot.changeContext(message.reference);
                await bot.reply(message, res)
            }, 1000);
        } else {
        let keywords = message.text.toLowerCase().replace('?', "").replace('.', "").split(' ')
        let res = searchKeywords(library, keywords)[0] 
        if (!res) {res = main}
        res.quick_replies.push(newTopic)

        await bot.reply(message, { type: 'typing' }); 
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, res) 
        }, 1000);}
    });

}