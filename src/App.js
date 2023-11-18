// function to render the pages

     
const templateDiv = document.getElementById("content");    
const handlePageNotFound = () => {
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./src/error/404.html", true)
    xhr.onreadystatechange = function () {
    if (xhr.readyState === 4 && xhr.status === 200) {
    document.getElementById("content").innerHTML = xhr.responseText;     
    }
    }
    xhr.send();
}

const renderPage = (page) => {

    const xhr = new XMLHttpRequest();
    xhr.open("GET", "./src/pages/" + page + ".html", true)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.getElementById("content").innerHTML = xhr.responseText;
        } else if (xhr.readyState == 4 && xhr.status === 404) {
            // document.getElementById("content").innerHTML = 
            handlePageNotFound()
        }

    }
    xhr.send();
}

const handleHashChange = ()=>{

    const hash = window.location.href.split("#").pop().split("/").pop()
    renderPage(hash)
    console.log(hash)

}

handleHashChange()

window.addEventListener("hashchange", handleHashChange);
