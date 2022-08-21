import DefaultTheme from 'vitepress/theme'
// @ts-ignore
import DemoList from './components/DemoList.vue'
import './styles.css'

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component('DemoList', DemoList)
  },
}
