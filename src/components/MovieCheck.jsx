
export const MovieCheck = ({ isCheck, checked, onChange}) => {
    console.log(checked);
    return (
      
        <div style={{backgroundColor: checked === true ? 'grey' : 'none'}}>
        <label>
            <input type="checkbox" checked={isCheck} onChange={onChange}/>
            
            </label>

        </div>
    )
    
}