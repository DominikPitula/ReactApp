import { Samochod } from "../types/samochod/samochod"
type SamochodProps = {
    //tu mozna dodac cos jeszcze
    //liczba: number,
    samochod: Samochod
}
export const SamochodItem = (props: SamochodProps) => {
    const { samochod } = props; //z propsa pobieramy sam samochod
    return (<tr>
        <td>{samochod.vin}</td>
        <td>{samochod.numerRejestracyjny}</td>
        <td>{samochod.opis}</td>
        <td>{samochod.cena}</td>
    </tr>)
}