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
            <div className='form-row'>
                <label htmlFor="title">Title</label>
                <input type="text" id="title" onChange={(e) => setState({...state, title: e.target.value})}/>
            </div>
            <div className='form-row'>
                <label htmlFor="url">URL</label>
                <input type="text" id="url" onChange={(e) => setState({...state, url: e.target.value})}/>
            </div>

            <div className="form-row">
                <label htmlFor="tag">Tag</label>
                <input type="text" id="tag" onChange={(e) => setState({...state, tag: e.target.value})}/>
            </div>

            <button type="submit">Add Bookmark</button>
        </form>
    )
}

export default BookmarkForm;