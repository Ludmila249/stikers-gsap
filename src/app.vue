<template>
  <div class="app">
    <header-block class="app__header" />
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <start-animation />
        <div class="app__faq">
          <h3>Отвечаем на&nbsp;вопросы</h3>
          <accordion-item v-for="elem in faq" :key="elem.index" :elem="elem" />
        </div>
        <footer-block />
      </div>
    </div>
    <page-main />
  </div>
</template>

<script>
import lessVars from '@/styles/vars.less';
import PageMain from '@/pages/main/page-main.vue';
import HeaderBlock from '@/layout/header.vue';
import FooterBlock from '@/layout/footer.vue';

export default {
  components: {
    HeaderBlock,
    PageMain,
    FooterBlock,
  },
  data() {
    return {
      faq: [
        {
          question: 'Когда можно будет заказать стикер?',
          answer: 'Вы можете заказать новый платёжный стикер от Сбера с 07 июля 2023 года.',
        },
        {
          question: 'Что такое платёжный стикер?',
          answer:
            'Это дебетовая СберКарта в&nbsp;виде стикера со&nbsp;встроенным чипом. Этот чип позволяет оплачивать покупки бесконтактно&nbsp;&mdash; так&nbsp;же, как с&nbsp;Apple Pay, Google Pay или Samsung Pay. Просто наклейте стикер на&nbsp;телефон и&nbsp;прикладывайте при оплате к&nbsp;терминалу в&nbsp;магазине, кафе или на&nbsp;заправке.',
        },
        {
          question: 'Сколько стоит обслуживание стикера?',
          answer: 'Стикер работает по&nbsp;тарифу',
          link: 'СберКарты',
          src: 'https://www.sberbank.com/ru/person/bank_cards/debit/sberkarta',
        },
        {
          question: 'Стикер безопасен?',
          answer:
            'Да, стикер защищён ПИН-кодом. А&nbsp;для дополнительной безопасности вы&nbsp;можете настроить лимиты на&nbsp;траты и&nbsp;снятия наличных. При необходимости стикер можно заблокировать в&nbsp;приложении СберБанк Онлайн или по&nbsp;звонку на&nbsp;номер 900.',
        },
        {
          question: 'Могу&nbsp;ли я&nbsp;изменить счёт, к&nbsp;которому привязан стикер?',
          answer:
            'Да, у&nbsp;вас есть отдельные платёжные счета. Но&nbsp;привязать стикер к&nbsp;счёту обычной карты Мир, СберКарты Visa или Masterсard не&nbsp;получится.',
        },
        {
          question: 'Где можно платить стикером?',
          answer: 'Везде, где есть терминал с бесконтактной оплатой.',
        },
        {
          question: 'Можно ли снимать наличные с помощью стикера?',
          answer:
            'Да, снимать наличные в банкоматах с NFC не составит труда — просто приложите смартфон со стикером к банкомату.',
          link: 'Найти банкомат',
          src: 'https://www.sberbank.com/ru/oib_atm?tab=atm',
        },
        {
          question: 'Где найти реквизиты стикера?',
          answer:
            'Срок действия и&nbsp;код защиты СберКарты в&nbsp;виде стикера можно посмотреть в&nbsp;мобильном приложении СберБанк Онлайн&nbsp;&mdash; так&nbsp;же, как и&nbsp;у&nbsp;обычной СберКарты. На&nbsp;поверхности стикера реквизиты не&nbsp;печатаются.',
        },
        {
          question: 'Как стикер влияет на&nbsp;работу Apple Wallet?',
          answer:
            'Apple Wallet не&nbsp;мешает работе платёжного стикера, но&nbsp;может открываться на&nbsp;экране телефона рядом с&nbsp;терминалом бесконтактной оплаты. Apple Pay уже не&nbsp;работает в&nbsp;России, удалите банковские карты из&nbsp;AppleWallet, чтобы было удобнее пользоваться стикером.',
        },
        {
          question: 'Как стикер влияет на&nbsp;работу Mir Pay и&nbsp;Samsung Pay?',
          answer:
            'Платёжный стикер от&nbsp;Сбера может конфликтовать с&nbsp;ними. Поэтому для телефонов с&nbsp;Android мы&nbsp;рекомендуем не&nbsp;стикер, а&nbsp;сервис бесконтактной оплаты SberPay NFC.',
        },
        {
          question:
            'Что делать, если при оплате стикером возникает ошибка &laquo;Карта не&nbsp;читается&raquo;?',
          answer:
            'Приложите стикер ещё раз к&nbsp;той части терминала, где есть отметка NFC, и&nbsp;подождите 3&nbsp;секунды. Ошибка может возникать, если телефон далеко от&nbsp;терминала или есть внешние помехи.',
        },
        {
          question: 'Что делать, если я потерял стикер?',
          answer:
            'Как можно скорее заблокируйте его. Зайдите в приложение СберБанк Онлайн → нажмите на иконку «СберКарта Стикер» → «Заблокировать». Также стикер можно заблокировать по звонку на номер 900.',
        },
        {
          question: 'Что делать, если я сменил телефон?',
          answer: 'Переклейте стикер на новый телефон или чехол.',
        },
        {
          question: 'Можно ли переклеивать стикер?',
          answer:
            'Можно, но клейкий слой будет терять свои свойства при каждом следующем отклеивании.',
        },
        {
          question: 'Можно ли носить стикер под чехлом?',
          answer:
            'Да, но чехол может снижать качество передачи сигнала. Мы рекомендуем наклеивать стикер на чехол.',
        },
        {
          question: 'Сколько стоит платёжный стикер от&nbsp;Сбера?',
          answer:
            'Выпуск и&nbsp;перевыпуск стикера стоит 700&nbsp;₽. Но&nbsp;он&nbsp;будет бесплатным, если подключить подписку СберПрайм+ или пакет услуг Премьер, СберПервый или Private Banking.',
        },
        {
          question: 'Как заказать стикер?',
          answer:
            'Зайдите в&nbsp;приложение СберБанк Онлайн &rarr; &laquo;Кошелёк&raquo; &rarr; нажмите на &laquo;+&raquo; &rarr; &laquo;СберКарта Стикер&raquo;. Теперь можно выбрать стандартный или один из&nbsp;лимитированных дизайнов с&nbsp;героями Союзмультфильм.',
        },
        {
          question: 'Куда нужно клеить стикер?',
          answer:
            'Мы&nbsp;рекомендуем наклеивать стикер на&nbsp;нижнюю часть задней панели телефона или на&nbsp;свободное пространство рядом с&nbsp;камерой.',
        },
        {
          question: 'Как прикрепить стикер к&nbsp;телефону?',
          answer:
            'Отломите стикер от&nbsp;платформы, снимите защитную плёнку с&nbsp;обратной стороны и&nbsp;крепко прижмите стикер к&nbsp;задней панели телефона.',
        },
        {
          question: 'Можно&nbsp;ли выпустить дополнительную карту в&nbsp;формате стикера?',
          answer:
            'Нет. Но&nbsp;вы&nbsp;можете выпустить стикер к&nbsp;отдельному платёжному счёту и&nbsp;настроить на&nbsp;нём необходимые лимиты.',
        },
      ],
    };
  },
  created() {
    this.onWindowResize();
    window.addEventListener('resize', this.onWindowResize);
  },
  destroyed() {
    window.removeEventListener('resize', this.onWindowResize);
  },
  methods: {
    onWindowResize() {
      this.$store.commit('setLessVars', lessVars);
    },
  },
};
</script>

<style src="./app.less" lang="less" />
