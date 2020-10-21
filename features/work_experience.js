let library = {
    work: {
        payload: 'work',
        children: {
            ameriprise: {
                payload: 'work ampf'
            },
            axa: {
                payload: 'work axa'
            }
        },
    },
    education: {
        payload: 'edu',
        children: {
            appA: {
                payload: 'edu aa'
            },
            colby: {
                payload: 'edu colby'
            }
        }
    }
}

// let allInMessage = function(message, critereas) {
//     return critereas.every((criterea) => message.text.toLowerCase().search(criterea) != -1)
// }

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
        let keywords = message.text.toLowerCase().split(' ')
        let res = searchKeywords(library, keywords)[0]
        await bot.reply(message, { type: 'typing' });
        setTimeout(async () => {
            await bot.changeContext(message.reference);
            await bot.reply(message, {text: res})
        }, 1000);
    });


}