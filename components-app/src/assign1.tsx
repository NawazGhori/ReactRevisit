import React from "react";
import Second from "./Second";
interface Istate {
    records: any;
}
interface Iprops { }

class Assign1 extends React.Component<Iprops, Istate>{
    constructor(iprops: Iprops) {
        super(iprops)
        this.state = {
            "records": [
                { "Name": "Alfreds Futterkiste", "City": "Berlin", "Country": "Germany" },
                { "Name": "Ana Trujillo Emparedados y helados", "City": "México D.F.", "Country": "Mexico" },
                { "Name": "Antonio Moreno Taquería", "City": "México D.F.", "Country": "Mexico" },
                { "Name": "Around the Horn", "City": "London", "Country": "UK" },
                { "Name": "B's Beverages", "City": "London", "Country": "UK" },
                ]
        }
    }

    render() {
        return (
            <React.Fragment>
                <h1>Assignment</h1>
                <h1>Records From State:</h1>
                <table>
                    <tr>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                {this.state.records.map((element:any,index:number)=>(
                    <tr key={index}>
                        <td>{element.Name}</td>
                        <td>{element.City}</td>
                        <td>{element.Country}</td>
                    </tr>
                ))}
                </table>
                <Second records={this.state.records} />
            </React.Fragment>
        )
    }
}

export default Assign1;