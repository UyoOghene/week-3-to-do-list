const inputBox = document.getElementById('input-box');
const listContainer = document.getElementById('list-container');
const butt = document.getElementById('butt');
console.log(inputBox.value);
console.log(butt);



butt.addEventListener('click',addTask);

function addTask(){
    let todovalue= inputBox.value;

    if(inputBox.value === ''){
    alert('write somehing');
    }
    else {
        console.log(todovalue);
        let li= document.createElement('li');
        li.innerHTML= todovalue;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML ="\u00d7";
        li.appendChild(span);
    }
    inputBox.value ='';
    saveData();


}

// listContainer.addEventListener('click',function(e){
//     if(e.target.tagName === 'LI'){
//         e.target.classList.toggle('checked');

//     }
//     else if(e.target.tagName === "SPAN"){
//         e.target.parentElement.remove();
//     }

// })

// Alternatively

listContainer.addEventListener('click',checkornot);

function checkornot(e){
    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();


    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }

}

function saveData(){
    localStorage.setItem('data',listContainer.innerHTML);

}

function showTask(){
 listContainer.innerHTML =localStorage.getItem('data');  
}

showTask();


