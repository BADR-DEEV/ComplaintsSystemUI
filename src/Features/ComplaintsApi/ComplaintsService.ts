import axios from 'axios'


const user: string | null = JSON.parse(localStorage.getItem('user') as string);

const getComplaints = async () => {

    const config = {
        headers: {
            'Content-Type': 'application/json',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PATCH, PUT, DELETE, OPTIONS",
        }
    }
    const response = await axios.get("http://localhost:5018/api/Complaint/GetComplaints", config).then(res => {

        if (res) {

            return res.data


        }



    })
    return response
}

const Complaintservice = {
    getComplaints,
}

export default Complaintservice