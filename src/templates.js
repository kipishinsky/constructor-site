import {col, row} from './utilites'


function title(block) {
	console.log()
	const {tag, styles} = block.options
	return row (col(
		`<${tag}>${block.value}</${tag}>`), styles)
}

function text(block) {
	const {styles} = block.options
	return row (col(`<p>${block.value}</p>`),styles)
}

function textColumns(block) {
	const { styles} = block.options
	let html = block.value.map(item => col(item))
	return row(html.join(''),styles)
}

export const templates = {
	title,
	text,
	textColumns
}