const AddNew = (props) => {
return (
    <div>
        <form onSubmit={props.addNumber}>
            <div>
                name: <input
                value={props.newName}
                onChange={props.handleName}
            />
            </div>
            <div>
                number: <input
                value={props.newNumber}
                onChange={props.handleNumber}
            />
            </div>
            <div>
                <button type="submit">add</button>
            </div>
        </form>
    </div>
)
}

export default AddNew
