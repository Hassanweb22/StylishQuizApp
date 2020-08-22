var data1;
// fetch('https://jsonplaceholder.typicode.com/todos')
//     .then(res => res.json())
//     .then(res => data = res)

// setTimeout(_ => {

//     data.map((item, i) => document.write(i + " " + item.title + "<br>"))

// }, 500)

function getData() {
    fetch('https://opentdb.com/api.php?amount=10&category=18&difficulty=easy&type=multiple&fbclid=IwAR1KGlDK1m_ViOU0oPnBzIZYgKn5XDYiSLgbqya1yHPsvZJpWgNGVxh676E')
        .then(res => res.json())
        .then(res => data1=res);
}

console.log(data1)
// data.map((item, i) => document.write(`${i} ${item.title}`))
getData()