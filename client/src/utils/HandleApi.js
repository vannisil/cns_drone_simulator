import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllPath = (setPath) => {
    axios
        .get(`${baseUrl}/getPath`)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setPath(data)
        })
}

const getAllCu = (setCu) => {
    axios
        .get(`${baseUrl}/getCu`)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setCu(data)
        })
    
}


const addPath = (text, setText, setPath) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllPath(setPath)
        })
        .catch((err) => console.log(err))

}

const addCu = (text, setText, setCu) => {

    axios
        .post(`${baseUrl}/saveCu`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllCu(setCu)
        })
        .catch((err) => console.log(err))

}

const updateCu = (CuId, text, setCu, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/updateCu`, { _id: CuId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllCu(setCu)
        })
        .catch((err) => console.log(err))

}

const updatePath = (pathId, text, setPath, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: pathId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllPath(setPath)
        })
        .catch((err) => console.log(err))

}

const deleteCu = (_id, setCu) => {

    axios
        .post(`${baseUrl}/deleteCu`, { _id })
        .then((data) => {
            console.log(data)
            getAllCu(setCu)
        })
        .catch((err) => console.log(err))

}

const deletePath = (_id, setPath) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllPath(setPath)
        })
        .catch((err) => console.log(err))

}


export { getAllCu, getAllPath, addCu, addPath, updateCu, updatePath, deleteCu, deletePath }