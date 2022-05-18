
function getOtherResources(word) {
    

    return [
        {
            title: 'Merriam Webster',
            link: `https://www.merriam-webster.com/dictionary/${word}`
        },

        {
            title: 'Dictionary.com',
            link: `https://www.dictionary.com/browse/${word}`
        },

        {
            title: 'Wikitionary',
            link: `https://en.wiktionary.org/wiki/${word}`
        },

        {
            title: 'Wikipedia',
            link: `https://en.wikipedia.org/wiki/${word}`
        }
    ]
}

export default getOtherResources;