// Fill in the functions for your Renderer Class



class Renderer {
    _renderUsers(profile) {
        $('.user-container').empty()
        const infoSource = $('.profileInfo-template').html()
        const infoTemplate = Handlebars.compile(infoSource)
        const userInfoHTML = infoTemplate(profile.info)
        $('.user-container').append(userInfoHTML)
        
        $('.profile-pic').empty()
        const picSource = $('.pic-template').html()
        const picTemplate = Handlebars.compile(picSource)
        const userPicHTML = picTemplate(profile)
        $('.profile-pic').append(userPicHTML)
    }
    
    
    _renderFriends(friends) {
        $('.friends-container').empty()
        const source = $('.friends-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template({friends})
        $('.friends-container').append(newHTML)
    }
    
    _renderQuote(quoteInfo) {
        $('.quote-container').empty()
        const source = $('.quote-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(quoteInfo)
        $('.quote-container').append(newHTML)
    }
    
    _renderPokemon(pokemonInfo) {
        $('.pokemon-container').empty()
        const source = $('.pokemon-template').html()
        const template = Handlebars.compile(source)
        const newHTML = template(pokemonInfo)
        $('.pokemon-container').append(newHTML)
    }
    
    _renderAbtMe(abtMeText) {
        $('.abt-me-container').empty()
        const source = $('.abt-me-tepmlate').html()
        const template = Handlebars.compile(source)
        const newHTML = template(abtMeText)
        $('.abt-me-container').append(newHTML)
    }
    
    render(data){
        this._renderUsers(data.profile)
        this._renderFriends(data.friends)
        this._renderQuote(data.quote)
        this._renderPokemon(data.pokemon)
        this._renderAbtMe(data.aboutMe)
    }

    renderButtons(name){
        $('.dropdown-content').empty()
        const source = $('.local-storage-user-tepmlate').html()
        const template = Handlebars.compile(source)
        const newHTML = template(name)
        $('.dropdown-content').append(newHTML)
    }
}