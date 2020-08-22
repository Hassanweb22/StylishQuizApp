// const { func } = require("prop-types")

// const { func } = require("prop-types")


function useless {
    // var questions = [{
    //         id: 1,
    //         question: "What does CPU stand for?",
    //         options: [
    //             "Central Process Unit",
    //             "Computer Personal Unit",
    //             "Central Processor Unit",
    //             "Central Processing Unit"
    //         ],
    //         right_answer: "Central Processing Unit",
    //     },

    //     {
    //         id: 2,
    //         question: "Which programming language shares its name with an island in Indonesia?",
    //         options: [
    //             "Python",
    //             "C",
    //             "Jakarta",
    //             "Java"
    //         ],
    //         right_answer: "Java",
    //     },

    //     {
    //         id: 3,
    //         question: "What is Your Country Name",
    //         options: [
    //             "United Arab Emirates",
    //             'Saudi Arbia',
    //             'Pakistan',
    //             'Indonesia'
    //         ],
    //         right_answer: "Pakistan",
    //     },
    //     {
    //         id: 4,
    //         question: "According to the International System of Units, how many bytes are in a kilobyte of RAM?",
    //         options: [
    //             "512",
    //             "1024",
    //             "500",
    //             "1000"
    //         ],

    //         right_answer: "1024",
    //     },

    //     {
    //         id: 5,
    //         "difficulty": "easy",
    //         question: "When Gmail first launched, how much storage did it provide for your email",
    //         options: [
    //             "512MB",
    //             "5GB",
    //             "1GB",
    //             "Unlimited"
    //         ],
    //         right_answer: "1GB",
    //     },

    //     {
    //         id: 6,
    //         "difficulty": "easy",
    //         question: "In any programming language, what is the most common way to iterate through an array?",
    //         options: [
    //             "If Statements",
    //             "Do-whileloops",
    //             "While& loops",
    //             "For loops",
    //         ],
    //         right_answer: "For loops",
    //     },

    //     {
    //         "category": "Science: Computers",
    //         id: 7,
    //         "difficulty": "easy",
    //         question: "Which company was established on April 1st, 1976 by Steve Jobs, Steve Wozniak and Ronald Wayne?",
    //         options: [
    //             "Apple",
    //             "Microsoft",
    //             "Atari",
    //             "Commodore"
    //         ],
    //         right_answer: "Apple"
    //     }
    // ]
}
url = 'https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&fbclid=IwAR2IsT1sX6Q1M23z-uRAN7jChTIrUBg91T1ohpoZ4j6PzLdFLO7XOgSCk9I'
// fetch(url).then((response) => {
//         console.log("Inside first then")
//         return response.json();
//         // this then will return promise we use .then again to get it in orignal form
//     })
//     .then((res) => {
//         console.log("Inside second then")
//         console.log(res);
//         show(res)
//     })

// console.log("before running getData... ")
// console.log("After running getData... ")

// function show(data) {
//     data1 = data
//     console.log(data.results)
// }

var i = 0
var score = 0

const first1 = async (event) => {
    event.preventDefault()
    const response = await fetch(url)
    const res = await response.json()
    starting1(res.results)
}

var starting = document.getElementById('startScreen')
var content = document.querySelector(".choices")
var prevent = true

var array = [];

var ans;
let name1 = document.querySelector('#name')
var first = true
// var percent;
// var marks;

function starting1(value) {
    // console.log(name1.value)
    setTimeout(begin(value), 2000)
    console.log(name1.value)
}
var j = 0

function begin(value) {
    option = [0, 1, 2, 3];

    if (j === 0) {
        questions = value.map((val, i) => {
            return {
                question: val.question,
                options: [...val.incorrect_answers, val.correct_answer],
                right_answer: val.correct_answer
            }
        })
        j = 1
    }

    console.log(questions, "from begin")
    // name1 = document.getElementById('name')
    // console.log(name1.value)
    // if (prevent) {
    //     e.preventDefault()
    //     prevent = false
    // }

    // pushing index of questions in array
    // this condition will only run random code at once
    if (i === 0) {
        // array = questions.map((value, index) => index)
        array = [0, 1, 2, 3, 5, 6, 7]
        console.log("Pushed Array: ", array)
        // code for random array and options
        array.sort(() => Math.random() - 0.5);
    }
    console.log("shuffle Array ", array)
    option.sort(() => Math.random() - 0.5);
    console.log(option)

    starting.innerHTML = ''
    console.log(content)
    content.innerHTML = `
    <div class='query'>
    <h3 class="">${questions[array[i]].question}?</h3>
    </div>    
    <ul class="questions">
            <li onclick='check(this)' class="li1 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto ">${questions[array[i]].options[option[0]]}</li>
            <li onclick='check(this)' class="li2 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto ">${questions[array[i]].options[option[1]]}</li>
            <li onclick='check(this)' class="li3 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto ">${questions[array[i]].options[option[2]]}</li>
            <li onclick='check(this)' class="li4 col-lg-6 col-md-8 col-sm-10 col-12 mx-auto ">${questions[array[i]].options[option[3]]}</li>
        </ul>
        <div class="container-fluid">
            <div class="row">
                <button onclick='next(this)' class="col-lg-6 col-md-8 col-sm-10 col-12 mx-auto next">Next</button>
            </div>
        </div>
    `
    console.log("checking i: ", i)
}

function next() {
    console.log("name1.value: ", name1.value)
    if (!ans) {
        swal({
            title: "Error",
            text: "You Didn't Select any Option!",
            icon: "error",
        });
        return;
    }

    // if user clicks the right answer score will be incremented to +1
    if (ans === questions[array[i]].right_answer) {
        score++
    }

    //  asn will empty after every next fucntion
    ans = ''
    //  increment in indexes of i so question will be come random   // 
    i++
    console.log("Score:", score)
    console.log("i: ", i)
    console.log(content)
    // code for result 
    percent = (score / array.length) * 100

    if (percent < 25) {
        remarks = "Try Again! 😭"
    }
    if (percent >= 25) {
        remarks = "You Are Failed Sorry 😢"
    }
    if (percent >= 35) {
        remarks = "Not Good!! 😔"
    }
    if (percent >= 50 && percent < 70) {
        remarks = "You Are Just Pass 😟"
    }
    if (percent >= 70 && percent < 80) {
        remarks = "You Scored Good 😊"
    }
    if (percent >= 80) {
        remarks = "Congratualtions! You Made It 😇"
    }
    // this code will run when all question appeared 
    if (i > array.length - 1) {
        console.log("hassan hero")
        content.innerHTML = ''

        document.getElementById('startScreen').innerHTML = `
            <div class="container text-center last ">
                <div class="row">
                <h3 class="mx-auto hello">Dear! <b>${name1.value},</b></h3>
                </div>
                <div class="row">
                <h3 class="mx-auto hello">${remarks}</h3>
                </div>
                <div class="row">
                    <h3 class='mx-auto'>Score : ${score}</h3>
                    <h3 class='mx-auto'>Percentage : ${percent.toFixed(2)}%</h3>
                </div>
            </div>
        
        <div class="container mt-4">
            <div class="col col-lg-5 col-md-7 col-sm-12 mx-auto row">
                <button class="lastbutton1 end w-100" onclick='again()'>try again</button>
            </div>
            <div class="mt-3 col col-lg-5 col-md-7 col-sm-12 mx-auto row">
                <button class="lastbutton2 end w-100" onclick='location.reload()'>Back to home</button>
            </div>
        </div>
            `
        console.log("checking i: ", i)
        i = 0
        score = 0
    } else {
        begin()
    }
}

function check(e) {
    //     console.log(e.parentNode.childNodes[1])
    for (let j = 1; j < e.parentNode.childNodes.length; j++) {
        console.log(`${j} ${e.parentNode.childNodes[j].innerHTML}`)
        e.parentNode.childNodes[j++].classList.remove("options")
    }
    // j++ means it will perform action on index 1 than 3 than 5 bcz at even places there is text and we cant remove any classes from text
    // e.parentNode.childNodes.map(val => console.log(val))
    e.classList.add("options");
    ans = e.innerHTML

    //  consoling both answers the right one and the one user clciks
    console.log("Ans that user clicks! ", ans)
    console.log("Right Answer! ", questions[array[i]].right_answer)

}

function again() {
    begin()
    // code for random array and options
    option.sort(() => Math.random() - 0.5);
    array.sort(() => Math.random() - 0.5);
    console.log("array in again: ", array)

}

// function home() {
//     console.log("name1.value after home: ", name1.value)
//     name1.value=''
//     // starting.innerHTML = `
//     <form onsubmit="begin()">
//         <div class="form-group col col-lg-5 col-md-7 col-sm-10 mx-auto">
//             <input required autocomplete="on" id="name" type="text" class="name form-control" placeholder="Enter Your Name!">
//         </div>
//         <div id="btndiv" class="col col-lg-5 col-md-7 col-sm-10 mx-auto row">
//             <button type="submit" class="mt-3 btn btn-outline-warning mx-auto btn-first">Start</button>
//         </div>
//     </form>
//     `
//     // code for random array and options
//     array.sort(() => Math.random() - 0.5);
//     option.sort(() => Math.random() - 0.5);

// }