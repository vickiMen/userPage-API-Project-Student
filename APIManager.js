//This is the class that will manage all your APIs
const generateId = function(amount){
    let _id = Math.floor(Math.random() * amount)
    if (_id >= 807){
        generateId(amount)
    }
    return _id
}


class APIManager {
    constructor(){
        this.data = {}
    }
    

    loadData(){
        $.ajax({
            url: 'https://randomuser.me/api/?results=7',
            dataType: 'json',
            method: 'GET',
            success: data => {
                let users = data.results
                
                let newProfile = {
                    info: {
                        firstName: users[0].name.first,
                        lastName: users[0].name.last,
                        city: users[0].location.city,
                        country: users[0].location.country
                    },
                    pic: users[0].picture.medium
                }
                users.splice(0,1)
                let friends = users.map( u => new Object({firstName: u.name.first, lastName: u.name.last}))
                
                this.data.profile = newProfile
                this.data.friends = friends
            }
        })

     
        $.ajax({
            url: 'https://api.kanye.rest/',
            method: 'GET',
            dataType: 'json',
            success: data => {
                let newQuote = data.quote
                this.data.quote = newQuote
            }
        })  

        
        $.ajax({
            url: 'https://pokeapi.co/api/v2/pokemon',
            method: 'GET',
            dataType: 'json',
            success: data => {
                
                let amount = data.count
                
                $.ajax({
                    url: `https://pokeapi.co/api/v2/pokemon?limit=${amount}`,
                    dataType: 'json',
                    method: 'GET',
                    success: data => {
                        
                        let id = generateId(amount)
                        let pokemon = {
                            name: data.results[id].name,
                            img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${id+1}.png`
                        }
                        this.data.pokemon = pokemon
                    }
                })
            }
        })
    
    
        $.ajax({
            url: 'https://baconipsum.com/api/?type=meat-and-filler&paras=1',
            method: 'GET',
            dataType: 'json',
            success: data => {
                this.data.aboutMe = data[0]
            }
        })
        console.log(this.data)
    }

}
