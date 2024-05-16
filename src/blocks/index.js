import Vue from 'vue';

/*
Названя блоков, состоящих из одного слова должны иметь постфикс Block при регистрации.
Css блоков в итоговой сборке будет иметь такой порядок, в котором блоки импортируются,
соответственно более глубокие блоки должны импортироваться выше чтобы родительские блоки
имели возможность переопределить стили корневого элемента ребёнка без использования !important
*/

import ExampleBlock from './example/example.vue';
import descriptionBlock from './description-block/description-block.vue';
import StartAnimation from './start-animation/start-animation.vue';
import AccordionItem from './accordion-item/accordion-item.vue';

Vue.component('start-animation', StartAnimation);
Vue.component('description-block', descriptionBlock);
Vue.component('example-block', ExampleBlock);
Vue.component('accordion-item', AccordionItem);
