import axios from 'axios'

export default axios.create({
    baseUrl: "https://api.unsplash.com/", 
    headers: {
        Authorization:"Client-ID MFs_AL_mjy8AYH6KrOkzFLnCTKQlrEMY8y08zOfnxFA"
    }
})