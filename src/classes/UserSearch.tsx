import { Component } from "react";

interface User {
    name: string;
    age: number;
}

interface UserSearchProps {
    users: User []
}
interface UserSearchState {
    name: string,
    user: User | undefined;
}

class UserSearch extends Component<UserSearchProps> {
    state: UserSearchState= {
        name: '',
        user: undefined
    }

    onClick = () => {
        const findUser = this.props.users.find((user) => {
            return user.name === this.state.name;
        });
        this.setState({user: findUser});
    }
    
    render () {
        const {name , user} = this.state
        return <div>
        User Search
            <input 
            value={name} 
            onChange={(e) => this.setState({name: e.target.value})} />
            <button  onClick={this.onClick}>Find User</button>
            <div>
                {user && user.name}
                {user && user.age}
            </div>
    </div>
    }

}

export default UserSearch;