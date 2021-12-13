import ReactDOM from 'react-dom'
// import Parent from '../src/props/Parents'
// import GuestList from './state/GuestList';
//import UserSearch from './state/UserSearch';
//import { EventComponent } from './events/EventsComponents';

import UserSearch from './refs/UserSearch';

const users =[
    {name: 'Sarah', age: 20},
    {name: 'Alex', age: 20},
    {name: 'Michel', age: 20},
];
const App = () => {
    return <div>
     <UserSearch/>
    {/* <EventComponent></EventComponent> */}

    </div>
};

ReactDOM.render(
    <App/>, document.querySelector('#root')
)