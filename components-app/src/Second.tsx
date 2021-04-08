import React from 'react';

interface IProps {
    records:any;
}
interface IState {};

class Second extends React.Component<IProps, IState>{
    constructor(props: IProps) {
        super(props)
    }

    render() {
        return (
            <React.Fragment>
                <h1>SecondComponent</h1>                
                <h1>Records From Props:</h1>
                <table>                    
                    <tr>
                        <th>Sl.No</th>
                        <th>Name</th>
                        <th>City</th>
                        <th>Country</th>
                    </tr>
                    {this.props.records.map((element:any,index:number)=>(
                        <tr key={index}>
                            <td>{index+1}</td>
                            <td>{element.Name}</td>
                            <td>{element.City}</td>
                            <td>{element.Country}</td>
                        </tr>
                    ))}
                </table>
            </React.Fragment>
        )
    }
}

export default Second;