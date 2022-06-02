import { useState } from 'react';

const BookmarkForm = () => {
    const blank = {
        title: '',
        url: '',
        tag: ''
    }
    
    const [state, setState] = useState(blank);

    const submitForm = (e) => {
        e.preventDefault();
        // addBookmark()
        setState(blank);
        e.target.reset();
    }

    return (
        <form className='bookmark-form' onSubmit={submitForm}>
            <label htmlFor="title">Title</label>
            <input type="text" id="title" onChange={(e) => setState({...state, title: e.target.value})}/>

            <label htmlFor="url">URL</label>
            <input type="text" id="url" onChange={(e) => setState({...state, url: e.target.value})}/>

            <label htmlFor="tag">Tag</label>
            <input type="text" id="tag" onChange={(e) => setState({...state, tag: e.target.value})}/>

            <button type="submit"></button>
        </form>
    )
}

export default BookmarkForm;