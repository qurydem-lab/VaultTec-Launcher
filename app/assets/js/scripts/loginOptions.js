const loginOptionsCancelContainer = document.getElementById('loginOptionCancelContainer')
const loginOptionElyBy = document.getElementById('loginOptionElyBy')
const loginOptionsCancelButton = document.getElementById('loginOptionCancelButton')

let loginOptionsCancellable = false

let loginOptionsViewOnLoginSuccess
let loginOptionsViewOnLoginCancel
let loginOptionsViewOnCancel
let loginOptionsViewCancelHandler

function loginOptionsCancelEnabled(val){
    if(val){
        $(loginOptionsCancelContainer).show()
    } else {
        $(loginOptionsCancelContainer).hide()
    }
}

// Ely.by — переходим на стандартную форму логина
loginOptionElyBy.onclick = (e) => {
    switchView(getCurrentView(), VIEWS.login, 500, 500, () => {
        loginViewOnSuccess = loginOptionsViewOnLoginSuccess
        loginViewOnCancel = loginOptionsViewOnLoginCancel
        loginCancelEnabled(true)
        // Установим режим Ely.by
        loginViewElyByMode = true
    })
}

loginOptionsCancelButton.onclick = (e) => {
    switchView(getCurrentView(), loginOptionsViewOnCancel, 500, 500, () => {
        loginUsername.value = ''
        loginPassword.value = ''
        if(loginOptionsViewCancelHandler != null){
            loginOptionsViewCancelHandler()
            loginOptionsViewCancelHandler = null
        }
    })
}