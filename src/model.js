import png from './image/filevini.png'

export const model = [
	{
		type: 'title', value: 'TEST TITLE', options: {
			img: png,
			tag: 'h2',
			styles: 'background: green; color: white;text-align: center;'
		}
	},
	{
		type: 'text', value: 'lorem10tab', options: {
			img: png,
			styles: 'background: blue; color: yellow; text-align: center; padding: 5px;'
		}
	},
	{
		type: 'textColumns', value: [
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore voluptatibus! Eveniet, fugiat quaerat. Assumenda at dolore, esse facilis harum id impedit odit praesentium quis rem repellat repellendus voluptate voluptates.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore voluptatibus! Eveniet, fugiat quaerat. Assumenda at dolore, esse facilis harum id impedit odit praesentium quis rem repellat repellendus voluptate voluptates.',
			'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, labore voluptatibus! Eveniet, fugiat quaerat. Assumenda at dolore, esse facilis harum id impedit odit praesentium quis rem repellat repellendus voluptate voluptates.'
		], options: {
			img: png,
			styles: 'padding: 1rem; color: red;'
		}
	}
]

