let library = { 
    overview: {
        payload: {
            text: 'I worked at Ameriprise and AXA. Which would like to know about?',
            quick_replies: [
                {
                    title: 'Ameriprise',
                    payload: 'An overview of Ameriprise.'
                }
            ]
        },
        keywords: ['work']
    },
    ameriprise: {

        overview: {
            payload: {
                text: 'I worked as a Associate Financial Advisor for Iron Birch Advisors, part of Ameriprise Financial', 
                quick_replies: [
                {
                    title: 'When did you work there?',
                    payload: 'When did you work at Ameriprise?'
                },
                {
                    title: 'What did you do there',
                    payload: 'What did you do for Ameriprise'
                },
                {
                    title: 'Where did you work?',
                    payload: 'Where did you do for Ameriprise'
                },
            ]
            },
            keywords: ['ameriprise', 'overview']
        },

        where: {
            payload: {
                text: 'here is some text', 
                quick_replies: [
                    {
                        title: 'When did you work there?',
                        payload: 'When did you work at Ameriprise?'
                    },
                    {
                        title: 'What did you do there',
                        payload: 'What did you do for Ameriprise'
                    },
                    {
                        title: 'Where did you work?',
                        payload: 'Where did you do for Ameriprise'
                    },
                ]
            },
            keywords: ['ameriprise', 'where']
        },

        what: {
            payload: {
                text: 'here is some text', 
                quick_replies: [
                    {
                        title: 'When did you work there?',
                        payload: 'When did you work at Ameriprise?'
                    },
                    {
                        title: 'What did you do there',
                        payload: 'What did you do for Ameriprise'
                    },
                    {
                        title: 'Where did you work?',
                        payload: 'Where did you do for Ameriprise'
                    },
                ]
            },
            keywords: ['ameriprise', 'what']
        },

        when: {
            payload: {
                text: 'here is some text', 
                quick_replies: [
                    {
                        title: 'When did you work there?',
                        payload: 'When did you work at Ameriprise?'
                    },
                    {
                        title: 'What did you do there',
                        payload: 'What did you do for Ameriprise'
                    },
                    {
                        title: 'Where did you work?',
                        payload: 'Where did you do for Ameriprise'
                    },
                ]
            },
            keywords: ['ameriprise', 'when']
        }

    }, 
}

let allInMessage = function(message, critereas) {
    return critereas.every((criterea) => message.text.toLowerCase().search(criterea) != -1)
}


module.exports = function (controller) {

    controller.hears(async (message) => allInMessage(message, library.overview.keywords), ['message'], async (bot, message) => {
        await bot.reply(message, { type: 'typing' });
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, library.overview.payload)
        }, 1000);
    })
    
    

    controller.hears(async (message) => allInMessage(message, library.ameriprise.what.keywords), ['message'], async (bot, message) => {
        await bot.reply(message, { type: 'typing' });
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, library.ameriprise.what.payload)
        }, 1000);
    })
    
    
    controller.hears(async (message) => allInMessage(message, library.ameriprise.when.keywords), ['message'], async (bot, message) => {
        await bot.reply(message, { type: 'typing' });
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, library.ameriprise.when.payload)
        }, 1000);
    })

    controller.hears(async (message) => allInMessage(message, library.ameriprise.where.keywords), ['message'], async (bot, message) => {
        await bot.reply(message, { type: 'typing' });
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, library.ameriprise.where.payload)
        }, 1000);
    })

    controller.hears(async (message) => allInMessage(message, library.ameriprise.overview.keywords), ['message'], async (bot, message) => {
        await bot.reply(message, { type: 'typing' });
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, library.ameriprise.overview.payload)
        }, 1000);
    })



}