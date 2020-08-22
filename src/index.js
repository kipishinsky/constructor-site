import {model} from './model'
import { Site } from './classes/site'
import { SideBar } from './classes/sidebar'
import './styles/main.css'

const site = new Site('#site')

const updateCallback = newBlock => {
	model.push(newBlock)
	site.render(model)
}

new SideBar('#panel', updateCallback)

site.render(model)








// \ firebase.google
// npm install -g firebase-tools
// firebase login
// firebase init
// npm run build
// firebase deploy