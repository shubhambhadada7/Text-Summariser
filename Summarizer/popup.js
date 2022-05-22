let Sumbitbtn = document.getElementById("Submit");
let output = document.getElementById('Summary')
Sumbitbtn.addEventListener("click",async() => {
    let data = document.getElementById('text').value;
    const response = await fetch("http://127.0.0.1:5000",{
        method: 'POST',
        headers: {
            'Content-Type':'application/text',
            'Access-Control-Allow-Origin':'*',
        },
        body: data
    });
    output.innerHTML = "<pre>" + await response.text() + "</pre>";
})