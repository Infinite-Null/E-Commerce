import Cookies from "js-cookie";

export default function SetCookieUser(token,name,email,id,role){
    Cookies.set('token',token)
    Cookies.set('name',name)
    Cookies.set('email',email)
    Cookies.set('id',id)
    Cookies.set('role',role)
    localStorage.setItem('token',token)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('role',role)
    localStorage.setItem('id',id)
}
export function FristLoadCookie(){
    Cookies.set('token',localStorage.getItem('token'))
    Cookies.set('name',localStorage.getItem('name'))
    Cookies.set('email',localStorage.getItem('email'))
    Cookies.set('id',localStorage.getItem('id'))
    Cookies.set('role',localStorage.getItem('role'))
}
export function LoggedInDetails(){
    function LoggedIn(){
        return !(Cookies.get('token') === undefined || Cookies.get('token') === null || Cookies.get('token') === "");
    }
    return {
        IsLoggedIn:LoggedIn(),
        Token:Cookies.get('token'),
        Name:Cookies.get('name'),
        Email:Cookies.get('email'),
        Id:Cookies.get('id'),
        Role:Cookies.get('role')
    }
}
