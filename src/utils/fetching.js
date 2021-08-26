import axios from "axios";

export const fetching = async (url,message='Что-то пошло не так') => {
    try {
        const response = await axios.get(url)
        if (response.status === 200) {
            return response
        }
    }
    catch {
        alert(message)
    }
}