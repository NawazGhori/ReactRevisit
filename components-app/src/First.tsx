import React from "react";

interface IProps { };
interface IState {
    key1: string;
    key2: number;
    key3: boolean;
    key4: any;
    key5: any;
};
class First extends React.Component<IProps, IState>{

    constructor(props: IProps) {
        super(props);
        this.state = {
            key1: "Hello_1",
            key2: 100,
            key3: true,
            key4: { key: "Hello" },
            key5: [
                { "p_id": 111, "p_name": "p_one", "p_cost": 10000 },
                { "p_id": 222, "p_name": "p_two", "p_cost": 20000 },
                { "p_id": 333, "p_name": "p_three", "p_cost": 30000 },
                { "p_id": 444, "p_name": "p_four", "p_cost": 40000 },
                { "p_id": 555, "p_name": "p_five", "p_cost": 50000 }
            ]
        }
    };

    render() {
        return (
            // <h1>Welcome to react JS</h1>
            //<h1>FirstComponent</h1>
            <React.Fragment>
                
            </React.Fragment>
        )
    }

}
export default First;