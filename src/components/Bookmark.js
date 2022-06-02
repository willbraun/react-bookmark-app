const Bookmark = ({title, url}) => {

    return (
        <li>
            <a href={url} target="_blank">{title}</a>
        </li>
    )
}

export default Bookmark;