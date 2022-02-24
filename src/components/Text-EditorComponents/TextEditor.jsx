import React, { Component, Fragment } from 'react';
import { Editor } from 'slate-react';
import Icon from 'react-icons-kit';
import {
	bold,
	italic,
	underline
} from 'react-icons-kit/feather';
import {ic_format_list_numbered } from 'react-icons-kit/md';


import initialValue from './constants/initialValue'

import { BoldMark, ItalicMark, FormatToolbar } from './index';

export default class TextEditor extends Component {
	state = {
		value: initialValue,
	};

	// On change, update the app's React state with the new editor value.
	onChange = ({ value }) => {
		this.setState({ value });
	};

	onKeyDown = (e, change) => {
		/*
			All our commands start with the user pressing ctrl,
			if they don't, we cancel the action.
		*/

		if (!e.ctrlKey) {
			return;
		}

		e.preventDefault();

		/* Decide what to do based on the key code... */
		switch (e.key) {
			/* When "b" is pressed, add a "bold" mark to the text. */
			case 'b': {
				change.toggleMark('bold');
				return true;
			}
			/* When "i" is pressed, add a "bold" mark to the text. */
			case 'i': {
				change.toggleMark('italic');
				return true;
			}
			/* When "u" is pressed, add a "bold" mark to the text. */
			case 'u': {
				change.toggleMark('underline');
				return true;
			}
			/* When "l" is pressed, add a "bold" mark to the text. */
			case 'l': {
				change.toggleMark('list');
				return true;
			}
			
			default: {
				return;
			}
		}
	};

	renderMark = (props) => {
		switch (props.mark.type) {
			case 'bold':
				return <BoldMark {...props} />;

			case 'italic':
				return <ItalicMark {...props} />;

			case 'underline':
				return <u {...props.attributes}>{props.children}</u>;

			case 'list':
				return (
					<ol {...props.attributes}>
						<li>{props.children}</li>
					</ol>
				);

			default: {
				return;
			}
		}
	};

	onMarkClick = (e, type) => {
		/* disabling browser default behavior like page refresh, etc */
		e.preventDefault();
		this.editor.toggleMark(type);
	};

	renderMarkIcon = (type, icon) => (
		<button
			onPointerDown={(e) => this.onMarkClick(e, type)}
			className="tooltip-icon-button"
		>
			<Icon icon={icon}/>
		</button>
	);

	ref = editor => {
		this.editor = editor
	}

	render() {
		return (
			<Fragment>
				<FormatToolbar>
					{this.renderMarkIcon('bold', bold)}
					{this.renderMarkIcon('italic', italic)}
					{this.renderMarkIcon('underline', underline)}
					{this.renderMarkIcon('list', ic_format_list_numbered)}
				</FormatToolbar>
				<Editor
					spellCheck
					autoFocus
		  			ref={this.ref}
					value={this.state.value}
					onChange={this.onChange}
					onKeyDown={this.onKeyDown}
					renderMark={this.renderMark}
				/>
			</Fragment>
		);
	}
}
