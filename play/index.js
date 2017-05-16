import { play } from 'vue-play'
import PeopleList from '../src/app/components/PeopleList/PeopleList.vue'

play('MyButton')
  .add('with text', {
    template: `<button @click="$log('123')">Hello</button>`
  })

play('PeopleList')
  .add('single file', PeopleList)
