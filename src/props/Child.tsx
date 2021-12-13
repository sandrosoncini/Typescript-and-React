interface ChildProps {
    color: string;
    //
    onClick: () => void;
}

// Two ways to write typescript w/ react

//1) this does not access build-in react functions
// does not receive children if not at the interface 
export const Child = ({color, onClick}: ChildProps) => {
    return <div>
        {color} 
        <button onClick={onClick}>Click ME </button>
    </div>
}

//2) This does have access react build-in functions
// FC = FunctionComponent
//you can received children without interface
export const ChildAsFC: React.FC<ChildProps> = ({color, onClick, children}) => {
    return <div>
        {color}
        {children}
        <button onClick={onClick}>Click ME </button>
    </div>
}