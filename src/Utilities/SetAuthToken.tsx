

import axios from 'axios';

const setAuthToken = (token : string | null) => {
    if (token) {
        axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;

    } else {
        axios.defaults.headers.common['Authorization'] = ` `;
        delete axios.defaults.headers.common['Authorization'];
    }
};

export default setAuthToken;