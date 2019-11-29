
const renderData = new Renderer()
const apiCaller = new APIManager()


// Create the loadData and renderData functions - these should use the relevant instance
const getUsersFromLocalStorage = function(){
    let users = JSON.parse(localStorage.getItem('users'))
    return users
}

const setUsersInLocalStorage = function(users){
    localStorage.setItem('users', JSON.stringify(users))
}


$('.buttons').on('click', '.loadData', function(){
    apiCaller.loadData()
})

$('.buttons').on('click', '.displayUser', function(){
    renderData.render(apiCaller.data)
})

$('.buttons').on('click', '.saveUser', function(){
    debugger
    if (!localStorage.getItem('users')){
        let name = apiCaller.data.profile.info.firstName
        let users = new Object()
        users[name] = apiCaller.data
        setUsersInLocalStorage(users)
        renderData.renderButtons(name,users)
    }
    else {
        let users = getUsersFromLocalStorage()
        let name = apiCaller.data.profile.info.firstName
        users[name] = apiCaller.data
        localStorage.clear()
        setUsersInLocalStorage(users)
    }
})

$('.buttons').on('mouseenter', '.loadUser', function(){
    let users = getUsersFromLocalStorage()
    let usersNames = Object.keys(users)
    renderData.renderButtons(usersNames)
})


$('.dropdown-content').on('click', '.local-storage-user', function(){
    debugger
    let name = $(this).html()
    let users = getUsersFromLocalStorage()
    let requestedUser = users[name]
    renderData.render(requestedUser)
})