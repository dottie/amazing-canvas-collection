import VueRouter from 'vue-router'
import * as scripts from './collection'
import {makeCanvas} from './components/vue-canvas'
import { defaultCanvas } from './collection/utils/Canvas'

export const links: string[] = []
const routes = Object.entries(scripts).map(([scriptName, script]) => {
  let path = `/${scriptName}`
  let component = makeCanvas(script)
  links.push(scriptName)
  return {path, component} 
})
routes.push({
  path: '/',
  component: makeCanvas(defaultCanvas)
})

export const router = new VueRouter({
  routes,
  mode: 'history'
})