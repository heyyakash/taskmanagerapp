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
 
export const getUser =async () => {
    const token = localStorage.getItem('token');
    const url = `${process.env.REACT_APP_URL}/api/v1/getuser`;
      const res = await fetch(url, {
        method: 'GET',
        headers: {
          token
        }
      })
      const data = await res.json();
      return data;
  }