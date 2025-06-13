import { Pracownik } from "../types/pracownik/pracownik"
type PracownikProps = {
    //tu mozna dodac cos jeszcze
    //liczba: number,
    pracownik: Pracownik
}
export const PracownikItem = (props: PracownikProps) => {
    const { pracownik } = props; //z propsa pobieramy sam towar
    return (<tr>
        <td>{pracownik.imie}</td>
        <td>{pracownik.nazwisko}</td>
        <td>{pracownik.stanowisko}</td>
        <td>{pracownik.placaBrutto}</td>
    </tr>)
}