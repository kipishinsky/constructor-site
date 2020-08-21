import image from './image/image.png'
import {TextBlock, TitleBlock, ImageBlock, TextColumnsBlock, BorodaBlock} from './classes/blocks'


const text = `
 'Мы изучили десятки рынков, чтобы вы легко нашли красивый и удобный вариант сайта, подходящий именно под ваши бизнес-задачи. Просто добавляйте и перетаскивайте элементы как вам нравится, наблюдая за изменениями в понятном визуальном редакторе, с которым создание впечатляющего сайта становится лёгкой и приятной забавой. Используйте инструменты для привлечения клиентов и продвижения сайта в поисковых системах. Развивайте свой бизнес с помощью чатов, обратных звонков, рассылок, социальных сетей и систем аналитики'
`

export const model = [
	new TitleBlock('Бесплатный конструктор сайтов на чистом JavaScript!', {
		tag: 'h2',
		styles: 'background: linear-gradient(to right, #ff0099, #493240);color: #fff;padding: 1.5rem;text-align: center;'
	}),
	new ImageBlock(image, {
		styles: 'padding: 2rem 0; display: flex; justify-content: center;',
		alt: 'my image',
		imageStyles: 'width: 500px; height: auto;'
	}),
	new TextColumnsBlock([
		'Огромный выбор шаблонов, созданных дизайнерами.',
		'Меняйте, редактируйте и добавляйте все что угодно.',
		'Ваш сайт будет отлично смотреться на любом устройстве.'
	], {
		styles: 'padding: 2rem 0; color: #fff;background: linear-gradient(to bottom, #8e2de2, #4a00e0);font-weight: bold;'
	}),
	new TextBlock(text, {
		styles: 'background: linear-gradient(to left, #f2994a, #f2c94c);font-weight: bold;padding: 1rem; text-align: center;'
	}),

	new BorodaBlock(image, {
		styles: 'padding: 2rem 0; display: flex; justify-content: center;',
		alt: 'my image',
		imageStyles: 'width: 300px; height: auto;'
	})

]