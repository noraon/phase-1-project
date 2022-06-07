document.addEventListener( 'DOMContentLoaded',()=> {


let form =document.querySelector('activityForm')
const activityForm = document.getElementById('activityForm')
console.log(activityForm)
activityForm.addEventListener('submit', (e) =>{
 e.preventDefault()
 document.querySelector('#activityForm')

// })
 
// form.reset();
    // themeBtn.addEventListener=(click,(e)=> {
    // document.querySelector('body')
    // })
    console.log(e.target.value)
    console.log('I am clicked')
})

let card = document.createElement(li)
card.className='card'
card.innerHTML=
"<div class='content'></div>"

fetchData(searchActivity.value)
entersearchActivity=enterSearchactivity;
if(entersearchActivity){
    searchFormContainer.style.display = "block";
 } else {
        searchFormContainer.style.display="none";
    }

const apiData =() => {
    return fetch('http://www.boredapi.com/api/activity')

    
    
    .then (response =>response.json())
    .then (json => {

        console.log(json)
    }).catch(error =>{
        console.log(error)
    
    })
}
apiData()


const renderApiData =(json => {
    const top10Activities = document.querySelector('#activity-list')
    

    json.forEach(activity=> {
        
    })
    
}

//e.prevent default prevents the page from refreshing when a form is submitted
//get the form input from e.target

)

let p=document.createElement('select')
document.querySelector('#activity-list').appendChild(card)

console.log(e.target.querySelector('#mysearch'.value))
activitySearch(e.target.querySelector)('mySearch').value
activitySearch.reset

p.textContent = '$(todo)';
priority.innerHTML =
'<option>Priority</option>'
'<option>Medium</option>'
'<option>Low</option>'

edbtn.textContent = 'Edit';
edbtn.textContent = 'Completed';

edbtn.addEventListener('click,handleEdit');
edbtn.addEventListener('click','handleDelete')


p.appendChild(activity-list)

})