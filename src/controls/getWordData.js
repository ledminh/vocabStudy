import { DICTIONARY_KEY, THESAURUS_KEY } from "../APIKEY";

const getWordRequest = (word) => `https://www.dictionaryapi.com/api/v3/references/collegiate/json/${word}?key=${DICTIONARY_KEY}`;

const getThesaurusRequest = (word) => `https://www.dictionaryapi.com/api/v3/references/ithesaurus/json/${word}?key=${THESAURUS_KEY}`;

const getSubdirectory = (first3Chars) => {
    if(new RegExp('^[0-9_]$').test(first3Chars[0])) {
        return 'number';
    }

    if(first3Chars == 'bix') {
        return first3Chars;
    } 
    
    if(first3Chars.indexOf('gg') == 0) {
        return 'gg';
    }
    
    return first3Chars[0];


}

const getAudio = (first3Chars, baseFilename) => `https://media.merriam-webster.com/audio/prons/en/us/mp3/${getSubdirectory(first3Chars)}/${baseFilename}.mp3`;


const processDefinitionsJSON = (defsJSON)  => {
    const resultsArr = defsJSON.filter(defObj => defObj.fl)
                                .map(defObj => ({
                                    type: defObj.fl,
                                    defs: defObj.shortdef
                                }));
    
    const baseFilename = defsJSON[0].hwi.prs[0].sound.audio;
    const first3Char = baseFilename.substring(0,3);

    const audioLink = getAudio(first3Char, baseFilename);

    const examples = getExamples(defsJSON);    


    return {
        definitionsArr: resultsArr,
        audioLink: audioLink,
        examples: examples
    }
}

function processSentence(sentence) {
    let resultSentence = sentence;

    let index1 = resultSentence.indexOf('{');

    while(index1 != -1) {
        let index2 = resultSentence.indexOf('}');

        resultSentence = resultSentence.substring(0, index1) + resultSentence.substring(index2 + 1);
        
        index1 = resultSentence.indexOf('{');
    }

    return resultSentence;
}

const getExamples = (definitionsJSON) => {
    
    let arrs = definitionsJSON.filter(defJSON => defJSON.def).map(defJSON => {
        let arr = defJSON.def.map(def => def.sseq);
        arr = [].concat.apply([], arr);
        arr = [].concat.apply([], arr);
        arr = [].concat.apply([], arr);
        arr = arr.filter(elem => elem.dt);
        arr = arr.map(elem => elem.dt);
        arr = [].concat.apply([], arr);
        arr = arr.filter(elem => elem[0] == 'vis');
        arr = arr.map(elem => elem[1]);
        arr = [].concat.apply([], arr);
        arr = arr.map(elem => elem.t);
        
        arr = arr.map(sentence => processSentence(sentence));
        
        return arr;
    
        
    });

    arrs = [].concat.apply([], arrs);
    
    return arrs;
}

function processThesaurusJSON(thesaurusJSON) {
    let result = thesaurusJSON.filter(tObj => tObj.meta).map(tObj => tObj.meta.syns);

    result = [].concat.apply([], result);
    result = [].concat.apply([], result);

    result = result.reduce((arr, elem) => {
        if(!arr.includes(elem))
            arr.push(elem);

        return arr;
    }, [])
    return result;
}


async function getWordData(word) {

    const definitions = await fetch(getWordRequest(word));
    const definitionsJSON = await definitions.json();

    
    const {definitionsArr, audioLink, examples} = processDefinitionsJSON(definitionsJSON);
    
    const thesaurus = await fetch(getThesaurusRequest(word));
    const thesaurusJSON = await thesaurus.json();

    const synonyms = processThesaurusJSON(thesaurusJSON);


    return {
        name: word,
        definitions: definitionsArr,
        examples: examples,
        audioLink: audioLink,
        synonyms: synonyms
    }
}


export default getWordData;