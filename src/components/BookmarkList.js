import Bookmark from './Bookmark';

const BookmarkList = ({bookmarkData, selection}) => {

    const filteredList = selection !== null ? bookmarkData.filter(bookmark => bookmark.tag === selection) : bookmarkData;
    const bookmarkList = filteredList.map((bookmark, i) => <Bookmark key={i} {...bookmark}/>)

    return (
        <>
            <h1>Bookmarks</h1>
            <ul>
                {bookmarkList}
            </ul>
        </>
    )
}

export default BookmarkList;