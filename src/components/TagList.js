import Tag from './Tag';

const TagList = ({bookmarkData, selection}) => {

    const bookmarkTags = bookmarkData.map(bookmark => bookmark.tag)
    const uniqueTags = [...new Set(bookmarkTags)];
    const tagComponents = uniqueTags.map((tag, i) => <Tag key={i} name={tag}/>)

    return (
        <>
            <h2>Tags</h2>
            <ul className='tag-list'>
                {tagComponents}
            </ul>
        </>
    )
}

export default TagList;