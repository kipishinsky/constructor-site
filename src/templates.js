import {col, row} from './utilites'


function title(block) {
	console.log(block)
	const {tag, styles, img} = block.options
	return row (col(
		`<${tag}>${block.value}</${tag}>`), styles, img)
}

function text(block) {
	const {styles, img} = block.options
	return row (col(`<p>${block.value}</p>`),styles, img)
}

function textColumns(block) {
	const { styles, img } = block.options
	let html = block.value.map(item => col(item))
	return row(html.join(''), styles, img)
}

export const templates = {
	title,
	text,
	textColumns
}