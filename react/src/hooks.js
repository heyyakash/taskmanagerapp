export const getTaskRQ = async () => {
    const url = `${process.env.REACT_APP_URL}/api/v1/tasks`;
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'token': localStorage.getItem('token')
            }
        })
        const data = await res.json();
        return data;
}
 
