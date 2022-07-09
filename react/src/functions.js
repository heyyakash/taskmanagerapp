export const deleteUser = async (id) => {
    try {
        const url = `http://localhost:5500/api/v1/delete/` + id;
        const res = await fetch(url, {
            method: "DELETE"
        });
        const data = await res.json();
        console.log(data);
    }
    catch (err) {
        console.log(err);
    }
}