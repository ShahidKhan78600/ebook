import axios from "axios"

export const getBooks = async (name,author,isbn,chapters)=>{
    let {data} = await axios.post(`${process.env.REACT_APP_BASEURL}/addbook`,
    {name,author,isbn,chapters})

    return console.log(data)
}