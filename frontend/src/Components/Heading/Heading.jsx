import "./Heading.css"

export default function Heading({title,marginTop}) {
    return (
        <h1 className="EachHeading" style={{
            marginTop:(marginTop===undefined)?"70px":marginTop
        }}> {title} </h1>
    )
}