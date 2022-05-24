document.addEventListener( 'DomContentLoaded',() =>{
    console.log(document.querySelector(div))
})
console.log(document.querySelector('div'))

const apiData =() => {
    return fetch('//www.boredapi.com/api/activity')
    

   .then (response =>response.json())
    .then (json => {

        renderApiData(json)
    }).catch(error =>{
        console.log(error)
    
    })
}
apiData()


const renderApiData =(json => {
    const top10Activities = document.querySelector('#top10Activities')
    

    json.forEach(activity=> {
        
    })
    
})


const form = document.getElementById("select-activities")
console.log(form) 
form.addEventListener ("submit",(e) => {
    e.preventDefault()
    console.log(e.target)


})




