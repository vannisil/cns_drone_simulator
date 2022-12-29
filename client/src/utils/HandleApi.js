import axios from 'axios'

const baseUrl = "http://localhost:5000"

const getAllCu = (setCu) => {
    axios
        .get(baseUrl)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setCu(data)
        })
}

const addCu = (text, setText, setCu) => {

    axios
        .post(`${baseUrl}/save`, { text })
        .then((data) => {
            console.log(data);
            setText("")
            getAllCu(setCu)
        })
        .catch((err) => console.log(err))

}

const updateCu = (CuId, text, setCu, setText, setIsUpdating) => {

    axios
        .post(`${baseUrl}/update`, { _id: CuId, text })
        .then((data) => {
            setText("")
            setIsUpdating(false)
            getAllCu(setCu)
        })
        .catch((err) => console.log(err))

}

const deleteCu = (_id, setCu) => {

    axios
        .post(`${baseUrl}/delete`, { _id })
        .then((data) => {
            console.log(data)
            getAllCu(setCu)
        })
        .catch((err) => console.log(err))

}


export { getAllCu, addCu, updateCu, deleteCu }