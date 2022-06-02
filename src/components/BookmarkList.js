import Bookmark from './Bookmark';

const BookmarkList = ({bookmarkData, selection}) => {

    const bookmarkList = bookmarkData.map((bookmark, i) => <Bookmark key={i} {...bookmark}/>)

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