let tasks = [];


function renderingTasks() {
    const taskList = document.getElementById("taskList");
    taskList.innerHTML = ""; 
    
    tasks.forEach((task, index) => {
        const listItem = document.createElement("li");
        listItem.innerHTML = `(${task.time}) <br> ${task.title}: ${task.description}`;
       
        const box = document.createElement('input');
        box.type = 'checkbox';
        box.id = 'checkbox-' + index;
        box.checked = task.completed || false; 
        box.onclick = () => toggleCompletion(index); 

        const label = document.createElement('label');
        label.setAttribute('for', box.id);  
        label.textContent ='Completed';
        
        listItem.appendChild(label);
        listItem.appendChild(box);
        

        const removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.classList.add("btn");
        removeButton.onclick = () => removeTask(index); 
        

        listItem.appendChild(box);
        listItem.appendChild(removeButton);
        
        
        taskList.appendChild(listItem);
    });
}


function createTask() {
    const taskTitle = document.getElementById('title').value.trim();
    const taskDescription = document.getElementById('description').value.trim();
    let currentTime = new Date(); 
    let formattedTime = `Date: ${currentTime.getDate()}- ${currentTime.getMonth() + 1}-${currentTime.getFullYear()} ---- Time: ${currentTime.getHours()}:${currentTime.getMinutes()}:${currentTime.getSeconds()}`;
    
    if (taskTitle !== '' && taskDescription !== '') {
        
        const task = { 
            
            time: formattedTime,
            title: taskTitle, 
            description: taskDescription,
            completed: false 
        };
        tasks.push(task);
        renderingTasks(); 
    } else {
        alert("Please enter both a task title and description.");
    }
}


function removeTask(index) {
    tasks.splice(index, 1); 
    renderingTasks(); 
}


function clearAllTasks() {
    tasks = []; 
    renderingTasks(); 
}


function toggleCompletion(index) {
    tasks[index].completed = !tasks[index].completed; 
    renderingTasks(); 
}








































// let tasks = [];

// /*

// INPUT FOR TITLE---------------
// INPUT FOR DESCRIPTION -----------
// Add task button [[[[[[[[[[]]]]]]]]]]
// TICK BOX FOR COMPLETE ..............

// CLEAR BUTTON FOR INDIVIDUAL TASK .................
// DATE AND TIME STAMP WHEN TO DO IS CREATED AUTOMATICALLY FOR INDIVIDUAL TASK. 
// ARRAY TO STORES ALL TASK 
// CLEAR BUTTO TO CLEAR ALL TO DO.
// */

// function clearTasks() {
//     const taskList = document.getElementById("taskList");
//     taskList.innerHTML = "";
    
//     tasks.forEach((task, index) => {
//         const listItem = document.createElement("li");
//         listItem.textContent = task;

//         // Remove button for each task
//         const removeButton = document.createElement("button");
//         removeButton.textContent = "Remove";
//         removeButton.classList.add("btn");
//         removeButton.onclick = () => removeTask(index); // Set event to remove the specific task
//         listItem.appendChild(removeButton);

//         taskList.appendChild(listItem);
//     });
// }

// function tickBox() {
   
//     const box = document.createElement('input');
//     box.type = 'checkbox'; 

  
//     box.id = 'myCheckbox';  
//     box.classList.add('checkbox-class');  


//     const label = document.createElement('label');
//     label.setAttribute('for', box.id);  
//     label.textContent = 'Completed';

    
//     document.body.appendChild(box);
//     document.body.appendChild(label);
// }


// function createTask() {
//     const taskTitle = document.getElementById('title').value.trim();
//     const taskDescription = document.getElementById('description').value.trim();
//     let currentTime = new Date(); 
    
//     if (taskTitle !== '' && taskDescription !== '') {
//         const task = { time: currentTime.toISOString(), title: taskTitle, description: taskDescription};
//         tasks.push(task);
//     } else {
//         alert("Please enter both a task title and description.");
//     }
// }

// function removeTask(index) {
//     tasks.splice(index, 1); // Remove the task from the array
//     clearTasks();
// }

// function clearAllTasks() {
//     tasks = []; // Empty the array
//     clearTasks(); // Update UI
// }
