const apiData =() => {
    return fetch('//www.boredapi.com/api/activity')
    

    headers: {
        Accept:"application/json"
    }
}
    then (response =>response.json())
    .then (json => {

        renderApiData(json)
    }).catch(error =>{
        console.log(error)
    
    })
apiData()


const renderApiData =(json => {
    const top10Activities = document.querySelector('#top10Activities')
    

    json.forEach(activity=> {
        
    })
    
})




