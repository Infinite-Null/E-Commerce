import Cookies from "js-cookie";

export default function SetCookieUser(token,name,email,avatar,id,role){
    console.log(token,name,email,avatar,id,role)
    Cookies.set('token',token)
    Cookies.set('name',name)
    Cookies.set('email',email)
    Cookies.set('avatar',avatar)
    Cookies.set('id',id)
    Cookies.set('role',role)
    localStorage.setItem('token',token)
    localStorage.setItem('name',name)
    localStorage.setItem('email',email)
    localStorage.setItem('avatar',avatar)
    localStorage.setItem('role',role)
    localStorage.setItem('id',id)
}
export function FristLoadCookie(){
    Cookies.set('token',localStorage.getItem('token'))
    Cookies.set('name',localStorage.getItem('name'))
    Cookies.set('email',localStorage.getItem('email'))
    Cookies.set('avatar',localStorage.getItem('avatar'))
    Cookies.set('id',localStorage.getItem('id'))
    Cookies.set('role',localStorage.getItem('role'))
}
export function LoggedInDetails(){
    return {
        IsLoggedIn:(!(Cookies.get('token') === undefined || Cookies.get('token') === undefined || Cookies.get(''))),
        Token:Cookies.get('token'),
        Name:Cookies.get('name'),
        Email:Cookies.get('email'),
        Avatar:Cookies.get('avatar'),
        Id:Cookies.get('id'),
        Role:Cookies.get('role')
    }
}