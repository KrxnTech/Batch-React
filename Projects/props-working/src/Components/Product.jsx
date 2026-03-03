export default function Product({ name, age, ABILITYS, OBJECT }) {
    let LIST = ABILITYS.map((ABILITY) => <li>{ABILITY}</li>) 
    let style = {listStyleType : "none" , color : "blue"} 
    let HIGH_AGE = age > 50
    let EQUAL_AGE = age == 15
    let styles = { backgroundColor : EQUAL_AGE  ? "red" : "green" , padding : "20px"} 
    return (
        <>
            {/* <p>{OBJECT.a}</p> */}
            <p>{name} - {age}</p>
            <ul style={styles}>
                {/* {LIST} */}
                {HIGH_AGE ? <p>AGE IS HIGH</p> : <p>AGE IS LOW</p>}
                {/* {HIGH_AGE && <p>AGE IS HIGH</p>} */}
            </ul>
        </>
    )
}