const Tag = ({name, selectTag}) => {
    
    return (
        <li>
            <button type="button" onClick={() => selectTag(name)}>{name}</button>
        </li>
    )
}

export default Tag;