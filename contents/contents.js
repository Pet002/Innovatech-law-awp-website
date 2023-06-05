import contents from "./contents.json"

const translating = (location, language) => {
    

    return contents[language][location];
}

export default translating;