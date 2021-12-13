import { ChildAsFC } from './Child'

const Parent = () => {
    return <ChildAsFC color ='red' onClick={()=> console.log('Çlicked')}>
            jhasdjkhasdjha
        </ChildAsFC>;
}

export default Parent;