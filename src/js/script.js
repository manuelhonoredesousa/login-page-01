const $iptPassword = document.querySelector("#password")
const $iptPasswordConfirm = document.querySelector("#password_confirm")

function verificar(){
    if($iptPassword.value !== $iptPasswordConfirm.value){
        $iptPasswordConfirm.style = "border-bottom: 2px solid #e03333;"
    }else{
        $iptPasswordConfirm.style = "border-bottom: 2px solid #0d014d;"
    }
}