const form=document.querySelector('form');
const alltask=document.getElementById('alltask');
const taskinput=document.getElementById('enter');

form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const text=taskinput.value.trim();
    if (text === '') {
        alert('Please enter a task');
        return;
    }
    const main=document.createElement('div');
    main.classList.add('main');


    const task=document.createElement('span');
    task.textContent=text;


    const delete_button=document.createElement('button');
    delete_button.textContent='Remove';
    delete_button.classList.add('delete');

    const done_button=document.createElement('button');
    done_button.textContent='Done';
    done_button.classList.add('done');

    main.append(task,done_button,delete_button);
    alltask.append(main);


    done_button.addEventListener('click',(e)=>{
        task.classList.toggle("completed");
    })

     delete_button.addEventListener('click',(e)=>{
        main.remove();
    })

    


    form.reset();
})