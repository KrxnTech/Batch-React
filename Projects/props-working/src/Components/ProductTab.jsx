import Product from "./Product";
export default function ProductTab() {
    let ABILITYS = ["FLYING", "FIRE", "ICE", "RUN"]
    // let OBJECT = {
    //     a: "A",
    //     b: "B",
    //     c: "C",
    // }
    return (
        <>
            <div>
                {/* <Product name="PIKACHU" age={10} ABILITYS={ABILITYS} OBJECT={OBJECT} /> */}
                {/* <Product name="BULBASAUR" age={20} ABILITYS={ABILITYS} OBJECT={{ a: "A", b: "B", c: "C" }} /> */}
                {/* <Product name="BINOD" age={30} ABILITYS={["FLYING" , "FIRE" , "ICE" , "RUN"]} /> */}
                <Product name="CHUTAR" age={10} ABILITYS={ABILITYS}/>
            </div>
        </>
    )
}