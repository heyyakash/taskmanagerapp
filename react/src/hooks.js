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

export const updateUser = async(change) => {
  const {id} = change;
  const url = `${process.env.REACT_APP_URL}/api/v1/update/${id}`;
  try{
    const {payload} = change;
    const res = await fetch(url,{
      method:"PATCH",
      body:JSON.stringify(payload),
      headers:{
        "Content-Type":"application/json"
      }
    })
    await res.json();
    console.log('done');
  }
  catch(err){
    console.log(err);
  }
}

export const deleteUser = async(id) => {
  try{
    const url = `${process.env.REACT_APP_URL}/api/v1/delete/${id}`;
    await fetch(url,{
      method:"DELETE"
    })
    console.log('done')
  }
  catch(err){
    console.log(err)
  }
}