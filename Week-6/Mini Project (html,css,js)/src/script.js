//API endpoint and token:
const API_ENDPOINT = "https://api.openai.com/v1/images/generations";
const ACCESS_TOKEN = "----------------TOKEN------------------------";

//Useful DOM elements:
const submitBtn = document.getElementById("takeInput");
const inputtext = document.querySelector("#promptInput");
const msg = document.querySelector("#oText");
const image = document.querySelector("#generatedImage");

// inputtext.addEventListener("change", onChange);
// function onChange(e) {
//     let query = e.target.value;


//checking click event
submitBtn.addEventListener("click", onClick);

async function onClick(e) {
    //checks if the clicked element is button or not. Also checks if the input field is empty
    if (e.target.id === "btnSubmit" && inputtext.value !== '') {
        e.preventDefault()
        console.log(inputtext.value);

        let topic = inputtext.value;
        let response = await getQuotes(topic);
        displayImage(response);

    }
    else if (e.target.id === "btnSubmit" && inputtext.value === '') {
        msg.innerText = "Enter proper text in the field!";
        // image.style.display = 'none';
        msg.style.display = 'block';
        msg.style.color = 'red';
        msg.style.fontSize = '20px';
        msg.style.fontWeight = '600';
    }

}
// }


// Define function to make API call and get quotes
async function getQuotes(topic) {
    // Construct API request body
    const requestBody = {
        prompt: `${topic}`,
        //max_tokens: 100,
        n: 2,
        //stop: ["\n"],
        size: "300x300"
    };

    // Construct API request options
    const requestOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${ACCESS_TOKEN}`,
        },
        body: JSON.stringify(requestBody),
    };

    // Make API call and parse response

    const response = await fetch(API_ENDPOINT, requestOptions);
    const data = await response.json();

    //const data = data.choices.map((choice) => choice.text.trim());

    return data;
}

//Function to display image/quote :
function displayImage(data) {
    msg.innerText = 'Loading...';

    function show() {
        setTimeout(() => {
            msg.style.display = 'none';
            image.style.display = 'block';
            try {
                //console.log(data[0].url);
                image.src = data[0].url;
            }
            catch (err) {
                console.log("Error in Data: " + err);
            }
            finally {
                console.log("Program ka The End!");
            }
        }, 1000)

    }
    show();


    console.log("Successful Execution of API");
    inputtext.value = '';
}