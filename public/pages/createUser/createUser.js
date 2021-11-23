const createUser = async () => {
    const username = document.getElementById("username").value
    const password = document.getElementById("password").value

    try {
        const res = await fetch("/createuser", {
            body: JSON.stringify({
                username,password

            }),
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },

        })
    } catch (error) {
        console.log(error);
    }


    /* console.log(res) */

};