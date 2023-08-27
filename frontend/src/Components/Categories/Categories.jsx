import './Categories.css'
export function Categories({cat,onPress}) {
    return (
        <div className="MainCategories">
            <div className="category1">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                {cat.map((x,i)=> <div onClick={()=>{
                        x.onPressed()
                }} className="item1" key={i}>
                        <span className="title1">{x.name}</span>
                        <span className="link1">Shop Now</span>
                        <img className="img1" src={x.link} alt="a;skfjl"/>
                    </div>)}
            </div>
        </div>
    )
}