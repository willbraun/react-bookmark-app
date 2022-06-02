import Tag from './Tag';

const TagList = ({bookmarkData, selection, selectTag}) => {

    const bookmarkTags = bookmarkData.map(bookmark => bookmark.tag)
    const uniqueTags = [...new Set(bookmarkTags)];
    const tagComponents = uniqueTags.map((tag, i) => <Tag key={i+1000} name={tag} selectTag={selectTag}/>)

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