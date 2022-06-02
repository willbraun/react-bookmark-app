import { useState } from 'react';
import BookmarkForm from './components/BookmarkForm';
import TagList from './components/TagList';
import BookmarkList from './components/BookmarkList';
import './App.css';

function App() {
  	
	const DATA = [
		{title: `World's Best Lasagna`, url: 'https://www.allrecipes.com/recipe/23600/worlds-best-lasagna/', tag: 'Recipe'},
		{title: `Chocolate Chip Cookies`, url: 'https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/', tag: 'Recipe'},
		{title: `How to Change a Lightbulb`, url: 'https://www.wikihow.com/Change-a-Light-Bulb', tag: 'DIY'},
		{title: `25 Things to do in France`, url: 'https://www.thecrazytourist.com/top-25-things-to-do-in-france/', tag: 'Travel'}
	]

	const [state, setState] = useState({
		bookmarkData: DATA,
		selection: null
	})

	// function to create bookmark and add to list

	// function to select tag - deselects other tags?

	// function to deselect tag
	
	return (
    	<div className="App">
   	   		<section className='sidebar'>
				<BookmarkForm />
				<TagList />
			</section>
      		<main>
			  	<BookmarkList {...state} />
			</main>
      		
    	</div>
  	);
}

export default App;
