const submitData = (name, email) => {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })
    })
    .then(res => res.json())
    .then(data => {
        let id = data.id
        console.log(`The id is: ${id}`)
        let idElement = document.createElement('p')
        idElement.textContent = id
        document.querySelector('body').appendChild(idElement)
    })
    .catch( err => {
        console.log(err.message)
        const errorElement = document.createElement('p')
        errorElement.textContent = err.message
        document.querySelector('body').appendChild(errorElement)
    })
}

submitData('Dominic Mulinda', 'domm@hc.co')