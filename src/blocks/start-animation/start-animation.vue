<template>
  <div ref="start" class="start-animation">
    <div class="start-animation__container">
      <div class="preview">
        <div ref="video" class="start-animation__video-block">
          <video
            class="start-animation__video"
            src="https://sber.cdnvideo.ru/common/files/pay_sticker.mp4"
            muted
            autoplay
            loop
            playsinline
          />
          <video
            class="start-animation__video start-animation__video_mobile"
            src="https://sber.cdnvideo.ru/common/files/pay_sticker_mob.mp4"
            muted
            autoplay
            loop
            playsinline
          />
          <div class="start-animation__video-gradient" />
        </div>
        <div ref="previewText" class="preview__wrap-text">
          <h1 class="preview__title">
            Платёжный
            <p>стикер&nbsp;от&nbsp;Сбера</p>
          </h1>
          <div class="preview__animation-text">
            <div ref="previewText1" class="preview__text">
              &mdash;&nbsp;Таити, Таити... У&nbsp;нас&nbsp;и&nbsp;здесь стикеры неплохо работают!
            </div>
            <div ref="previewText2" class="preview__text">
              &mdash;&nbsp;И&nbsp;того и&nbsp;другого, и&nbsp;можно с&nbsp;оплатой стикером!
            </div>
            <div ref="previewText3" class="preview__text">
              &mdash;&nbsp;Стикер хоть куда. В&nbsp;полном расцвете финансовых сил!
            </div>
          </div>
        </div>
        <p ref="pointerLeaf" class="start-animation__instructions">
          <img src="static//arrow.svg" /> листайте вниз
        </p>
      </div>
      <h2 ref="titleCharacter" class="start-animation__title-character">
        С&nbsp;дорогими сердцу персонажами
      </h2>
      <div
        v-for="(elem, index) in stickers"
        :ref="`stickerBlock${elem.name}`"
        :key="elem.name"
        class="start-animation__sticker"
        :class="`start-animation__sticker_${index + 1}`"
      >
        <img :src="elem.src" :alt="`sticker ${elem.name}`" />
        <div :ref="`stickerContent${elem.name}`" class="start-animation__sticker-content">
          <p class="start-animation__sticker-title" v-html="elem.title" />
          <p class="start-animation__sticker-text" v-html="elem.text" />
        </div>
      </div>

      <div ref="phoneBlock" class="start-animation__phone">
        <img ref="phoneImage" src="../../images/phone.png" alt="phone" />
      </div>

      <h2 ref="titleGlueStickerOnPhone" class="start-animation__phone-glue">
        Куда приклеить этот&nbsp;ваш&nbsp;стикер?
      </h2>
      <div ref="gradient" class="start-animation__gradient" />
      <div ref="offers" class="start-animation__offers-wrap">
        <div class="start-animation__offers start-animation__offers_stick">
          <description-block :data="stick" />
        </div>
      </div>
      <div ref="phoneWithSticker1" class="start-animation__phone-with-sticker-1-wrap">
        <img
          class="start-animation__phone-with-sticker-1"
          src="static//phone-sticker.png"
          alt="Куда наклеить стикер"
        />
      </div>
      <div ref="phoneWithSticker2" class="start-animation__phone-with-sticker-2-wrap">
        <img
          class="start-animation__phone-with-sticker-2"
          src="static//phone-sticker-2.png"
          alt="Куда наклеить стикер"
        />
      </div>
      <h2 ref="titleHowToPay" class="start-animation__how-pay">А&nbsp;как им&nbsp;оплачивать?</h2>
      <div ref="wrapTerminalAndPhone" class="start-animation__wrap-img">
        <img
          ref="paymentTerminal"
          class="start-animation__terminal"
          src="static/terminal.png"
          alt=""
        />
        <img
          ref="paymentPhone"
          class="start-animation__phone-pay"
          src="static/phone-pay.png"
          alt=""
        />
      </div>
      <div ref="paymentInstructions" class="start-animation__offers-wrap">
        <div class="start-animation__offers start-animation__offers_pay">
          <description-block
            :look-video-instructions="'Посмотреть видео инструкцию'"
            :data="howPay"
          />
        </div>
      </div>
      <div ref="dataBlock" class="start-animation__data">
        <h2 ref="dataBlockTitle" class="start-animation__data-title">
          Все данные
          <p>
            большой-большой<br />
            секрет
          </p>
        </h2>
        <div ref="dataCard1" class="start-animation__data-card">
          <div class="start-animation__data-card-img">
            <img src="static/protection.svg" alt="" />
          </div>
          <p>
            <b>Реквизиты не&nbsp;печатаются на&nbsp;стикере.</b> Доступ к&nbsp;деньгам защищен
            пин-кодом как у&nbsp;СберКарты
          </p>
        </div>
        <div ref="dataCard2" class="start-animation__data-card">
          <div class="start-animation__data-card-img">
            <img src="static/settings.svg" alt="" />
          </div>
          <p>
            <b>Можно установить лимит трат </b> и&nbsp;при необходимости заблокировать стикер
            в&nbsp;приложении СБОЛ
          </p>
        </div>
        <div ref="sberPrimeBlock" class="start-animation__sber-prime">
          <div ref="sberPrine" class="start-animation__sber-prime-wrap">
            <div ref="sberPrimeWhite" class="start-animation__white-block" />
            <img src="static/sber-prime.png" alt="Сбер Прайм" />
          </div>
        </div>
        <img
          v-for="icon in iconSber"
          :key="icon.number"
          :ref="`iconSber${icon.number}`"
          class="start-animation__icon-sber"
          :class="`start-animation__icon-sber_${icon.number}`"
          :src="icon.src"
          alt=""
        />
        <div ref="gradientSberPrime" class="start-animation__gradient-subscribe" />
        <div ref="subscribeBlock" class="start-animation__subscribe-wrap">
          <div class="subscribe start-animation__subscribe">
            <p class="subscribe__benefit">С&nbsp;подпиской&nbsp;&mdash; выгоднее</p>
            <h3 class="subscribe__title">Стикер бесплатный со&nbsp;СберПрайм+</h3>
            <div class="subscribe__wrap-link">
              <a class="subscribe__link subscribe__link_sber-prime" href="#"
                >Оформить СберПрайм+ за&nbsp;399₽</a
              >
              <a class="subscribe__link subscribe__link_ordinary" href="#"
                >Оформить стикер за&nbsp;700&nbsp;₽</a
              >
            </div>
          </div>
        </div>
        <p ref="advertising" class="start-animation__advertising">
          Реклама. Рекламодатель АО&nbsp;&laquo;ЦПЛ&raquo;, erid: 2Ranyk7yBck
        </p>
        <div ref="titleSberPrime" class="start-animation__title-sber-prime-wrap">
          <h2 class="start-animation__title-sber-prime">
            Кто подписался на&nbsp;СберПрайм+, тот поступает мудро!
          </h2>
        </div>
        <div
          ref="descriptionOfSubscriptionBonuses"
          class="start-animation__offers-wrap start-animation__offers-wrap_sber-registration"
        >
          <!-- <h2 class="start-animation__title-sber-prime">
            Кто подписался на&nbsp;СберПрайм+, тот поступает мудро!
          </h2> -->
          <div class="start-animation__offers start-animation__offers_subscribe">
            <description-block
              :title="'Оформите СберПрайм+ и&nbsp;получите повышенные бонусы'"
              :data="subscription"
              :check="true"
            />
          </div>
        </div>
        <h2 ref="titleOrder" class="start-animation__title-order">Как заказать стикер</h2>
        <div ref="descriptionOrder" class="start-animation__offers-wrap">
          <div class="start-animation__offers start-animation__offers_order">
            <description-block :order="'order'" :data="orderSticker" />
          </div>
        </div>
        <div ref="qrCode" class="start-animation__qr-wrap">
          <div class="start-animation__qr">
            <p class="start-animation__qr-text">Или просто наведите камеру на&nbsp;этот код</p>
            <img src="static/QR.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ScrollTrigger } from '@/lib/gsap/ScrollTrigger';
import { gsap } from '@/lib/gsap';
import { ScrollSmoother } from '@/lib/gsap/ScrollSmoother';
import { ScrollToPlugin } from '@/lib/gsap/ScrollToPlugin';
import { SplitText } from '@/lib/gsap/SplitText';
import { DrawSVGPlugin } from '@/lib/gsap/DrawSVGPlugin';

export default {
  data() {
    return {
      smoother: null,
      stickerLeft: null,
      stickers: [
        {
          name: 'Black',
          src: 'static/st-1.png',
          title: 'Мой любимый цвет&nbsp;&mdash;&nbsp;графитовый',
          text: 'И размер идеальный для смартфона',
        },
        {
          name: 'Carlson',
          src: 'static/st-2.png',
          title: 'Ведь я же лучше… лучше налички, а?',
          text: 'Можно платить быстро, удобно и симпатично',
        },
        {
          name: 'Winnie',
          src: 'static/st-3.png',
          title: 'Я стикер, я вовсе не медведь!',
          text: 'Для покупок правильных и не очень',
        },
        {
          name: 'Kesha',
          src: 'static/st-4.png',
          title: 'Пусть всегда будет бесконтактная оплата!',
          text: 'И всегда за пару мгновений ',
        },
      ],
      stick: [
        {
          item: 'Приклейте его на обратную сторону смартфона снизу или сверху',
          text: 'Так стикер не будет мешать беспроводной зарядке, а оплата будет проходить быстрее',
        },
        {
          item: 'Не прячьте стикер под чехол — оплата может не пройти',
        },
      ],
      howPay: [
        {
          item: 'Приложите стикер к&nbsp;NFC-модулю терминала на&nbsp;2-3 сек',
        },
        {
          item: 'Дождитесь звука подтверждения операции или&nbsp;изменения на&nbsp;экране терминала',
        },
        {
          item: 'Готово. Дело-то житейское!',
        },
      ],
      subscription: [
        {
          item: 'Выпуск стикера, обслуживание и&nbsp;уведомления об&nbsp;операциях&nbsp;&mdash; бесплатно',
        },
        {
          item: '+10% на&nbsp;АЗС и&nbsp;за&nbsp;оплату проезда на&nbsp;общественном транспорте',
        },
        {
          item: '+5%&nbsp;за&nbsp;кафе и&nbsp;такси',
        },
        {
          item: 'До&nbsp;+10% за&nbsp;покупки в&nbsp;СберМаркете',
        },
      ],
      orderSticker: [
        {
          item: 'Зайдите в&nbsp;приложение СберБанк Онлайн&nbsp;/ СБОЛ',
        },
        {
          item: 'Найдите раздел &laquo;Кошелёк&raquo; &rarr; &laquo;+&raquo; &rarr; &laquo;СберКарта Стикер&raquo;',
        },
        {
          item: 'Проверьте, если&nbsp;ли у&nbsp;вас СберПрайм+',
        },
        {
          item: 'Выберите способ получения стикера',
        },
        {
          item: 'Дождитесь смс или пуш-уведомление о&nbsp;готовности стикера',
        },
        {
          item: 'Получите стикер и&nbsp;наклейте его на&nbsp;смартфон',
        },
      ],
      iconSber: [
        {
          src: 'static/icon-1.png',
          number: 1,
        },
        {
          src: 'static/icon-2.png',
          number: 2,
        },
        {
          src: 'static/icon-3.png',
          number: 3,
        },
        {
          src: 'static/icon-4.png',
          number: 4,
        },
      ],
    };
  },
  mounted() {
    this.smootherSetup();
    gsap.registerPlugin(ScrollTrigger);
    gsap.registerPlugin(ScrollToPlugin);
    gsap.registerPlugin(SplitText);
    gsap.registerPlugin(DrawSVGPlugin);
    const mm = gsap.matchMedia();
    mm.add('(min-width: 1024px)', this.scrollAnimationDesktop);
    mm.add('(max-width: 1023px)', this.scrollAnimationMobile);
  },
  methods: {
    scrollAnimationDesktop() {
      const tlDescription = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      gsap.set(this.$refs.previewText1, {
        width: this.$refs.previewText1.clientWidth,
        x: -this.$refs.previewText1.clientWidth,
      });
      gsap.set(this.$refs.previewText2, {
        width: this.$refs.previewText2.clientWidth,
        x: -this.$refs.previewText2.clientWidth,
      });
      tlDescription.to(
        this.$refs.previewText3,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: this.$refs.previewText2.clientWidth,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.set(this.$refs.previewText3, {
        x: -this.$refs.previewText3.clientWidth,
        opacity: 1,
        filter: 'blur(0)',
      });
      tlDescription.to(
        this.$refs.previewText1,
        {
          x: 0,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText1,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: this.$refs.previewText1.clientWidth,
          duration: 0.6,
          delay: 3,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText2,
        {
          x: 0,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText2,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: this.$refs.previewText2.clientWidth,
          duration: 0.6,
          delay: 3,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText3,
        {
          x: 0,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText3,
        {
          delay: 3,
        },
        '<',
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.start,
          start: 'top top',
          end: '+=20000px',
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      gsap.set(this.$refs.titleCharacter, {
        x: '100vw',
      });
      gsap.set(this.$refs.pointerLeaf, {
        opacity: 1,
      });
      gsap.set(
        [
          this.$refs.stickerBlockKesha,
          this.$refs.stickerBlockWinnie,
          this.$refs.stickerBlockCarlson,
          this.$refs.stickerBlockBlack,
        ],
        {
          x: '-120vw',
          y: '50vh',
          rotate: -9.3,
        },
      );
      gsap.set(
        [
          this.$refs.stickerContentBlack,
          this.$refs.stickerContentCarlson,
          this.$refs.stickerContentWinnie,
          this.$refs.stickerContentKesha,
        ],
        {
          opacity: 0,
        },
      );
      gsap.set(this.$refs.phoneBlock, {
        y: '200vh',
        scale: 0.5,
      });
      gsap.set(this.$refs.titleGlueStickerOnPhone, {
        bottom: 0,
        opacity: 0,
        y: '50vh',
      });
      gsap.set(this.$refs.gradient, {
        y: '100vh',
        x: '100vw',
      });
      gsap.set(this.$refs.offers, {
        bottom: 0,
        left: 0,
        y: '100vh',
        x: '10vw',
      });
      gsap.set(this.$refs.phoneWithSticker1, {
        bottom: 0,
        x: '-14vw',
        y: '100vh',
      });
      gsap.set(this.$refs.phoneWithSticker2, {
        top: 0,
        y: '100vh',
        x: '9vw',
      });
      gsap.set(this.$refs.titleHowToPay, {
        opacity: 0,
        top: 0,
        y: '100vh',
      });
      gsap.set(this.$refs.paymentTerminal, {
        x: '-100vw',
      });
      gsap.set(this.$refs.paymentPhone, {
        x: '100vw',
      });
      gsap.set(this.$refs.paymentInstructions, {
        right: 0,
        x: '-14vw',
        y: '100vh',
      });
      gsap.set(this.$refs.dataBlock, {
        top: 0,
        y: '100vh',
      });
      gsap.set(this.$refs.dataCard1, {
        top: 0,
        y: '100vh',
        x: '-26vw',
      });
      gsap.set(this.$refs.dataCard2, {
        top: 0,
        y: '100vh',
        x: '21vw',
      });
      gsap.set(this.$refs.sberPrine, {
        left: 0,
        x: '100vw',
        y: '-18vh',
      });
      gsap.set(this.$refs.sberPrimeWhite, {
        y: '-19vh,',
        x: '1vw',
      });
      gsap.set(this.$refs.iconSber1, {
        x: '100vw',
        y: '-6vh',
      });
      gsap.set(this.$refs.iconSber2, {
        x: '100vw',
        y: '-7vh',
      });
      gsap.set(this.$refs.iconSber3, {
        x: '100vw',
        y: '9vh',
      });
      gsap.set(this.$refs.iconSber4, {
        x: '100vw',
        y: '7vh',
      });
      gsap.set(this.$refs.gradientSberPrime, {
        bottom: 0,
        left: 0,
        y: '110vh',
      });
      gsap.set(this.$refs.subscribeBlock, {
        bottom: 0,
        right: 0,
        opacity: 0,
        x: '-7vw',
        y: '100vh',
      });
      gsap.set(this.$refs.descriptionOfSubscriptionBonuses, {
        bottom: 0,
        right: 0,
        x: '0',
        y: '100vh',
      });
      gsap.set(this.$refs.advertising, {
        bottom: 0,
        right: 0,
        y: '100vh',
        x: '-3vw',
        // opacity: 1,
      });
      gsap.set(this.$refs.titleSberPrime, {
        bottom: 0,
        left: 0,
        x: '3vw',
        y: '100vh',
      });
      gsap.set(this.$refs.titleOrder, {
        bottom: 0,
        y: '100vh',
      });
      gsap.set(this.$refs.descriptionOrder, {
        y: '100vh',
        x: '19vw',
      });

      gsap.set(this.$refs.qrCode, {
        y: '100vh',
        x: '20vw',
      });
      // начало анимации
      scrollTl.to(this.$refs.previewText, {
        x: '-100vw',
        duration: 5,
      });
      scrollTl.to(
        this.$refs.pointerLeaf,
        {
          display: 'none',
          opacity: 0,
          duration: 3,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.video,
        {
          opacity: 0,
          duration: 3,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleCharacter,
        {
          x: '-1vw',
          opacity: 1,
          duration: 5,
        },
        '<',
      );
      // вылет стикеров
      scrollTl.to(this.$refs.stickerBlockKesha, {
        x: 0,
        y: 0,
        rotate: 0,
        duration: 15,
        delay: 1.5,
      });
      scrollTl.to(
        this.$refs.stickerBlockWinnie,
        {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 15,
          delay: 1.5,
        },
        '< +=0.7',
      );
      scrollTl.to(
        this.$refs.stickerBlockCarlson,
        {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 15,
          delay: 1.5,
        },
        '<+=0.8',
      );
      scrollTl.to(
        this.$refs.stickerBlockBlack,
        {
          x: 0,
          y: 0,
          rotate: 0,
          duration: 15,
          delay: 1.5,
        },
        '<+=0.9',
      );
      // примерка стикеров на телефон
      scrollTl.to(this.$refs.phoneBlock, {
        y: '0',
        duration: 12,
      });
      scrollTl.to(
        this.$refs.phoneBlock,
        {
          scale: 1,
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleCharacter,
        {
          opacity: 0,
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-multfilm',
        {
          opacity: 0,
          duration: 2,
        },
        '<',
      );

      // черный стикер
      scrollTl.to('.header__logo-sber', {
        opacity: 0,
        duration: 2,
      });
      scrollTl.to(
        '.header__logo-sber-white',
        {
          opacity: 1,
          duration: 2,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerBlockBlack,
        {
          x: '-60vw',
          duration: 5,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentBlack,
        {
          opacity: 1,
          duration: 5,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#B0B0B0',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockBlack, {
        x: '-82vw',
        duration: 6,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.stickerContentBlack,
        {
          y: '20vh',
          opacity: 0,
          duration: 6,
        },
        '< += 1',
      );
      scrollTl.set(this.$refs.stickerBlockBlack, {
        zIndex: 9,
      });
      scrollTl.to(this.$refs.stickerBlockBlack, {
        scale: 0.6,
        x: '-72vw',
        duration: 10,
      });
      // карлсон
      scrollTl.to(
        this.$refs.stickerBlockCarlson,
        {
          x: '-59vw',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentCarlson,
        {
          display: 'block',
          opacity: 1,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#A38FC0',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockCarlson, {
        x: '-82vw',
        duration: 6,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.stickerContentCarlson,
        {
          y: '20vh',
          opacity: 0,
          duration: 6,
        },
        '<',
      );
      scrollTl.set(this.$refs.stickerBlockCarlson, {
        zIndex: 9,
      });
      scrollTl.to(this.$refs.stickerBlockCarlson, {
        scale: 0.6,
        x: '-70vw',
        duration: 10,
      });
      // вини пух
      scrollTl.to(
        this.$refs.stickerBlockWinnie,
        {
          x: '-58vw',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentWinnie,
        {
          display: 'block',
          opacity: 1,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#A4BD76',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockWinnie, {
        x: '-82vw',
        duration: 6,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.stickerContentWinnie,
        {
          y: '20vh',
          opacity: 0,
          duration: 6,
        },
        '<',
      );
      scrollTl.set(this.$refs.stickerBlockWinnie, {
        zIndex: 9,
      });
      scrollTl.to(this.$refs.stickerBlockWinnie, {
        scale: 0.6,
        x: '-68vw',
        duration: 10,
      });
      // кеша
      scrollTl.to(
        this.$refs.stickerBlockKesha,
        {
          x: '-57vw',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentKesha,
        {
          display: 'block',
          opacity: 1,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#4CA996',
          duration: 6,
        },
        '<',
      );
      // все стикеры улетают вверх
      scrollTl.to(this.$refs.stickerContentKesha, {
        opacity: 0,
        duration: 6,
      });
      scrollTl.to(
        [
          this.$refs.stickerBlockKesha,
          this.$refs.stickerBlockWinnie,
          this.$refs.stickerBlockCarlson,
          this.$refs.stickerBlockBlack,
        ],
        {
          y: '-100vh',
          duration: 10,
          delay: 2,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneBlock,
        {
          y: '-150vh',
          duration: 16,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#EFF3FE',
          duration: 4,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-sber',
        {
          opacity: 1,
          duration: 2,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-sber-white',
        {
          opacity: 0,
          duration: 2,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradient,
        {
          y: '75vh',
          x: '39vw',
          duration: 6,
        },
        '<',
      );

      // куда приклеить этот ваш стикер
      scrollTl.to(
        this.$refs.titleGlueStickerOnPhone,
        {
          y: '-35vh',
          opacity: 1,
          duration: 8,
        },
        '<',
      );
      scrollTl.to(this.$refs.titleGlueStickerOnPhone, {
        opacity: 0,
        duration: 6,
        display: 'none',
        delay: 3,
      });
      scrollTl.to(
        this.$refs.gradient,
        {
          x: '40vw',
          y: '56vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.offers,
        {
          y: '-27vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker1,
        {
          y: '-23vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker2,
        {
          y: '45vh',
          x: '-16vw',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(this.$refs.offers, {
        y: '-100vh',
        duration: 10,
        opacity: 0,
        delay: 1,
      });
      scrollTl.to(
        this.$refs.phoneWithSticker1,
        {
          x: '50vw',
          y: '-63vh',
          rotate: '-15deg',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker2,
        {
          y: '100vh',
          x: '0',
          duration: 8,
        },
        '<',
      );
      // как оплачивать
      scrollTl.to(
        this.$refs.titleHowToPay,
        {
          y: '33vh',
          duration: 6,
          opacity: 1,
        },
        '<+=5',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker1,
        {
          display: 'none',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradient,
        {
          opacity: 0.5,
          duration: 4,
          x: '10vh',
        },
        '<',
      );
      scrollTl.to(this.$refs.titleHowToPay, {
        opacity: 0,
        duration: 8,
        display: 'none',
        delay: 2,
      });
      scrollTl.to(
        this.$refs.paymentTerminal,
        {
          duration: 8,
          top: '13vh',
          x: 0,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.paymentPhone,
        {
          duration: 8,
          top: '31vh',
          x: '-28vw',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradient,
        {
          opacity: 1,
          x: '-6vw',
          y: '52vh',
          rotate: '20deg',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.paymentInstructions,
        {
          y: '-12vh',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(this.$refs.paymentTerminal, {
        y: '-100vh',
        duration: 10,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.paymentPhone,
        {
          y: '-100vh',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.paymentInstructions,
        {
          y: '-100vh',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.dataBlock,
        {
          y: 0,
          width: '100%',
          borderRadius: '0',
          duration: 6,
          left: 0,
        },
        '<+=2',
      );
      scrollTl.to(this.$refs.dataCard1, {
        y: '33vh',
        duration: 8,
        delay: 2,
      });
      scrollTl.to(
        this.$refs.dataCard2,
        {
          y: '12vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(this.$refs.dataBlockTitle, {
        opacity: 0,
        duration: 10,
        y: '100vh',
        delay: 2,
        display: 'none',
      });
      scrollTl.to(
        this.$refs.dataCard1,
        {
          y: '-100vh',
          duration: 10,
          opacity: 0,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.dataCard2,
        {
          y: '-100vh',
          duration: 6,
          opacity: 0,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber1,
        {
          x: '-83vw',
          duration: 15,
          y: '-20vh',
        },
        '<-=2',
      );
      scrollTl.to(
        this.$refs.iconSber2,
        {
          x: '-64vw',
          duration: 15,
          y: '-27vh',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber3,
        {
          x: '-86vw',
          duration: 15,
          y: '21vh',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber4,
        {
          x: '-68vw',
          duration: 15,
          y: '24vh',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.sberPrine,
        {
          x: '2vw',
          duration: 14,
        },
        '<+=2.5',
      );
      scrollTl.to(
        this.$refs.sberPrimeWhite,
        {
          x: '-100vw',
          duration: 10,
        },
        '<+=5',
      );
      scrollTl.to(
        this.$refs.gradientSberPrime,
        {
          y: '35vh',
          x: '-21vw',
          duration: 10,
        },
        '<+=2.5',
      );
      scrollTl.to(
        this.$refs.subscribeBlock,
        {
          y: '-28vh',
          duration: 8,
          opacity: 1,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.advertising,
        {
          y: '-3vh',
          duration: 4,
          // opacity: 0,
        },
        '<+=2',
      );
      scrollTl.to(this.$refs.sberPrine, {
        x: '-50vw',
        duration: 8,
        delay: 2,
      });
      scrollTl.to(
        this.$refs.iconSber1,
        {
          duration: 10,
          y: '-100vh',
          x: '-100vw',
          filter: 'blur(19px)',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber2,
        {
          duration: 10,
          y: '-100vh',
          filter: 'blur(19px)',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber3,
        {
          duration: 10,
          y: '100vh',
          x: '-92vw',
          filter: 'blur(19px)',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber4,
        {
          duration: 10,
          y: '100vh',
          x: '-70vw',
          filter: 'blur(19px)',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.subscribeBlock,
        {
          y: '-120vh',
          filter: 'blur(10px)',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.descriptionOfSubscriptionBonuses,
        {
          y: '-13vh',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleSberPrime,
        {
          y: '-28vh',
          duration: 8,
        },
        '<+=1',
      );
      scrollTl.to(this.$refs.descriptionOfSubscriptionBonuses, {
        y: '-100vh',
        duration: 8,
        delay: 1,
      });
      scrollTl.to(
        this.$refs.titleSberPrime,
        {
          y: '-110vh',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.advertising,
        {
          y: '10vh',
          duration: 4,
        },
        '<',
      );
      // убираю элементы
      scrollTl.to(
        this.$refs.gradient,
        {
          display: 'none',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker2,
        {
          display: 'none',
        },
        '<',
      );
      scrollTl.to(
        [this.$refs.iconSber1, this.$refs.iconSber2, this.$refs.iconSber3, this.$refs.iconSber4],
        {
          display: 'none',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradientSberPrime,
        {
          y: '100vh',
          x: '54vw',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleOrder,
        {
          y: '-43vh',
          duration: 10,
        },
        '<+=2',
      );
      scrollTl.to(this.$refs.descriptionOrder, {
        y: '-4vh',
        duration: 8,
      });
      scrollTl.to(
        this.$refs.advertising,
        {
          duration: 4,
          opacity: 0,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.qrCode,
        {
          duration: 8,
          y: '0',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleOrder,
        {
          opacity: 0,
          display: 'none',
          duration: 8,
          delay: 2,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradientSberPrime,
        {
          y: '50vh',
          x: '19vw',
          duration: 8,
          width: '90%',
        },
        '<',
      );
      scrollTl.to(this.$refs.gradientSberPrime, {
        opacity: 0,
        duration: 4,
        display: 'none',
        delay: 1,
      });
    },
    scrollAnimationMobile() {
      const tlDescription = gsap.timeline({ repeat: -1, repeatDelay: 0 });
      gsap.set(this.$refs.previewText1, {
        width: this.$refs.previewText1.clientWidth,
        x: -this.$refs.previewText1.clientWidth - 50,
      });
      gsap.set(this.$refs.previewText2, {
        width: this.$refs.previewText2.clientWidth,
        x: -this.$refs.previewText2.clientWidth,
      });
      tlDescription.to(
        this.$refs.previewText3,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: this.$refs.previewText2.clientWidth,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.set(this.$refs.previewText3, {
        x: -this.$refs.previewText3.clientWidth,
        opacity: 1,
        filter: 'blur(0)',
      });
      tlDescription.to(
        this.$refs.previewText1,
        {
          x: 0,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText1,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: this.$refs.previewText1.clientWidth,
          duration: 0.6,
          delay: 3,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText2,
        {
          x: 0,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText2,
        {
          opacity: 0,
          filter: 'blur(12px)',
          x: this.$refs.previewText2.clientWidth,
          duration: 0.6,
          delay: 3,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText3,
        {
          x: 0,
          duration: 0.6,
        },
        '<',
      );
      tlDescription.to(
        this.$refs.previewText3,
        {
          delay: 3,
        },
        '<',
      );

      const scrollTl = gsap.timeline({
        scrollTrigger: {
          trigger: this.$refs.start,
          start: 'top top',
          end: '+=20000px',
          scrub: true,
          pin: true,
          invalidateOnRefresh: true,
        },
      });
      gsap.set(this.$refs.titleCharacter, {
        y: '100vh',
      });
      gsap.set(this.$refs.pointerLeaf, {
        opacity: 1,
      });
      gsap.set(
        [
          this.$refs.stickerBlockKesha,
          this.$refs.stickerBlockWinnie,
          this.$refs.stickerBlockCarlson,
          this.$refs.stickerBlockBlack,
        ],
        {
          opacity: 1,
          x: '-150vw',
          bottom: 0,
          rotate: -9.3,
        },
      );
      gsap.set(
        [
          this.$refs.stickerContentKesha,
          this.$refs.stickerContentWinnie,
          this.$refs.stickerContentCarlson,
          this.$refs.stickerContentBlack,
        ],
        {
          right: 0,
          x: '100wh',
          y: '21vh',
          opacity: 0,
        },
      );
      gsap.set(this.$refs.stickerBlockBlack, {
        y: '46vh',
      });
      gsap.set(this.$refs.stickerBlockCarlson, {
        y: '44vh',
      });
      gsap.set(this.$refs.stickerBlockWinnie, {
        y: '42vh',
      });
      gsap.set(this.$refs.stickerBlockKesha, {
        y: '40vh',
      });
      gsap.set(this.$refs.phoneBlock, {
        y: '200vh',
      });
      gsap.set(this.$refs.titleGlueStickerOnPhone, {
        bottom: 0,
        opacity: 0,
        y: '50vh',
      });
      gsap.set(this.$refs.gradient, {
        y: '100vh',
        x: '100vw',
      });
      gsap.set(this.$refs.offers, {
        bottom: 0,
        left: 0,
        y: '100vh',
        x: '0',
      });
      gsap.set(this.$refs.phoneWithSticker1, {
        bottom: 0,
        left: 0,
        x: '40vw',
        y: '100vh',
      });
      gsap.set(this.$refs.phoneWithSticker2, {
        bottom: 0,
        y: '100vh',
        x: '0',
        left: 0,
      });
      gsap.set(this.$refs.titleHowToPay, {
        opacity: 0,
        top: 0,
        y: '100vh',
      });
      gsap.set(this.$refs.wrapTerminalAndPhone, {
        x: 0,
        y: '100vh',
        left: 0,
        bottom: 0,
      });
      // gsap.set(this.$refs.paymentTerminal, {
      //   x: '0',
      //   y: '100vh',
      //   left: 0,
      //   bottom: 0,
      // });
      // gsap.set(this.$refs.paymentPhone, {
      //   x: '0',
      //   y: '100vh',
      //   right: 0,
      //   bottom: 0,
      // });
      gsap.set(this.$refs.paymentInstructions, {
        right: 0,
        x: '0',
        y: '100vh',
      });
      gsap.set(this.$refs.dataBlock, {
        top: 0,
        y: '100vh',
      });
      gsap.set(this.$refs.dataCard1, {
        top: 0,
        y: '100vh',
        x: '0vw',
      });
      gsap.set(this.$refs.dataCard2, {
        top: 0,
        y: '100vh',
        x: '0vw',
      });
      gsap.set(this.$refs.sberPrine, {
        left: 0,
        x: '100vw',
      });
      gsap.set(this.$refs.sberPrimeWhite, {
        y: '-14vh,',
        x: '1vw',
      });
      gsap.set(this.$refs.iconSber1, {
        x: '30vw',
        y: '-10vh',
      });
      gsap.set(this.$refs.iconSber2, {
        x: '30vw',
        y: '-10vh',
      });
      gsap.set(this.$refs.iconSber3, {
        x: '30vw',
        y: '-10vh',
      });
      gsap.set(this.$refs.iconSber4, {
        x: '30vw',
        y: '-10vh',
      });
      gsap.set(this.$refs.gradientSberPrime, {
        bottom: 0,
        left: 0,
        y: '110vh',
      });
      gsap.set(this.$refs.subscribeBlock, {
        bottom: 0,
        left: 0,
        opacity: 0,
        x: '0',
        y: '100vh',
      });
      gsap.set(this.$refs.descriptionOfSubscriptionBonuses, {
        bottom: 0,
        left: 0,
        x: '0',
        y: '100vh',
      });
      gsap.set(this.$refs.advertising, {
        bottom: 0,
        left: 0,
        y: '100vh',
        x: '3vw',
      });
      gsap.set(this.$refs.titleSberPrime, {
        bottom: 0,
        left: 0,
        x: '0',
        y: '100vh',
      });
      gsap.set(this.$refs.titleOrder, {
        bottom: 0,
        y: '100vh',
      });
      gsap.set(this.$refs.descriptionOrder, {
        y: '100vh',
        x: '0',
      });

      gsap.set(this.$refs.qrCode, {
        y: '100vh',
        x: '0',
      });
      gsap.set('.header__link', {
        display: 'none',
      });
      // начало анимации
      scrollTl.to(this.$refs.previewText, {
        y: '-100vh',
        duration: 6,
      });
      scrollTl.to(
        this.$refs.video,
        {
          opacity: 0,
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.pointerLeaf,
        {
          opacity: 0,
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-multfilm_mobile',
        {
          display: 'none',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleCharacter,
        {
          y: 0,
          opacity: 1,
          duration: 6,
        },
        '<',
      );
      // вылет стикеров
      scrollTl.to(this.$refs.stickerBlockKesha, {
        rotate: '0deg',
        x: '0',
        y: '0',
        duration: 16,
      });
      scrollTl.to(
        this.$refs.stickerBlockWinnie,
        {
          rotate: '0deg',
          x: '0',
          y: '0',
          duration: 16,
        },
        '<+=1.6',
      );
      scrollTl.to(
        this.$refs.stickerBlockCarlson,
        {
          rotate: '0deg',
          x: '0',
          y: '0',
          duration: 16,
        },
        '<+=2',
      );
      scrollTl.to(
        this.$refs.stickerBlockBlack,
        {
          rotate: '0deg',
          x: '0',
          y: '0',

          duration: 16,
        },
        '<+=2.2',
      );

      // вылет телефона для стикеров
      scrollTl.to(this.$refs.phoneBlock, {
        y: '0',
        duration: 10,
      });
      scrollTl.to(
        this.$refs.titleCharacter,
        {
          opacity: 0,
          duration: 6,
        },
        '<',
      );

      if (document.documentElement.clientWidth < 1024) {
        console.log('ok');
        this.stickerLeft = -this.$refs.phoneBlock.offsetLeft - 150;
      }

      if (document.documentElement.clientWidth < 600) {
        console.log('ok < 600');
        this.stickerLeft = -this.$refs.phoneBlock.offsetLeft - 80;
      }

      console.log('this.$refs.phoneBlock', this.$refs.phoneBlock.offsetLeft);
      // примерка стикеров
      // black
      scrollTl.to(this.$refs.stickerBlockBlack, {
        x: this.stickerLeft,
        duration: 18,
      });
      scrollTl.to(
        this.$refs.stickerContentBlack,
        {
          opacity: 1,
          duration: 15,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-sber-white',
        {
          opacity: 1,
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-sber',
        {
          opacity: 0,
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        '.header',
        {
          backgroundColor: '#B0B0B0',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#B0B0B0',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockBlack, {
        x: '-130vw',
        duration: 12,
        delay: 2,
      });
      scrollTl.to(
        this.$refs.stickerContentBlack,
        {
          opacity: 0,
          duration: 15,
        },
        '<',
      );
      // карлсон
      scrollTl.to(
        this.$refs.stickerBlockCarlson,
        {
          x: this.stickerLeft + 10,
          duration: 18,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentCarlson,
        {
          opacity: 1,
          duration: 15,
        },
        '<',
      );
      scrollTl.to(
        '.header',
        {
          backgroundColor: '#A38FC0',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#A38FC0',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockCarlson, {
        x: '-130vw',
        delay: 3,
        duration: 12,
      });
      scrollTl.to(
        this.$refs.stickerContentCarlson,
        {
          opacity: 0,
          duration: 15,
        },
        '<',
      );
      // вини пух
      scrollTl.to(
        this.$refs.stickerBlockWinnie,
        {
          x: this.stickerLeft + 20,
          duration: 18,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentWinnie,
        {
          opacity: 1,
          duration: 15,
        },
        '<',
      );
      scrollTl.to(
        '.header',
        {
          backgroundColor: '#A4BD76',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#A4BD76',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockWinnie, {
        x: '-130vw',
        delay: 3,
        duration: 12,
      });
      scrollTl.to(
        this.$refs.stickerContentWinnie,
        {
          opacity: 0,
          duration: 15,
        },
        '<',
      );
      // кеша
      scrollTl.to(
        this.$refs.stickerBlockKesha,
        {
          x: this.stickerLeft + 30,
          duration: 18,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentKesha,
        {
          opacity: 1,
          duration: 15,
        },
        '<',
      );
      scrollTl.to(
        '.header',
        {
          backgroundColor: '#4CA996',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#4CA996',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(this.$refs.stickerBlockKesha, {
        y: '-100vh',
        delay: 3,
        duration: 9,
      });
      scrollTl.to(
        this.$refs.phoneBlock,
        {
          y: '-120vh',
          duration: 12,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.stickerContentKesha,
        {
          opacity: 0,
          duration: 4,
        },
        '<',
      );
      // смена цвета логотипа
      scrollTl.to(
        '.header__logo-sber-white',
        {
          opacity: 0,
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        '.header__logo-sber',
        {
          opacity: 1,
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        '.header',
        {
          backgroundColor: '#FFF',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.start,
        {
          backgroundColor: '#FFF',
          duration: 10,
        },
        '<',
      );
      // тайтл куда приклеить это ваш стикер
      scrollTl.to(
        this.$refs.titleGlueStickerOnPhone,
        {
          y: '-47vh',
          opacity: 1,
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradient,
        {
          y: '48vh',
          x: '35vw',
          opacity: 1,
          duration: 8,
        },
        '<',
      );
      scrollTl.to(this.$refs.phoneBlock, {
        display: 'none',
      });
      // примеры куда можно приклеить стикер
      scrollTl.to(this.$refs.titleGlueStickerOnPhone, {
        opacity: 0,
        duration: 6,
        delay: 2,
      });
      scrollTl.to(
        [
          this.$refs.stickerBlockKesha,
          this.$refs.stickerBlockWinnie,
          this.$refs.stickerBlockCarlson,
          this.$refs.stickerBlockBlack,
        ],
        {
          opacity: 0,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker1,
        {
          x: 0,
          y: '-36vh',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.phoneWithSticker2,
        {
          x: '50px',
          y: '13vh',
          duration: 10,
        },
        '<',
      );
      scrollTl.to(this.$refs.phoneWithSticker1, {
        y: '-100vh',
        duration: 6,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.phoneWithSticker2,
        {
          y: '-13vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.offers,
        {
          y: '-35vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(this.$refs.phoneWithSticker2, {
        y: '-100vh',
        duration: 6,
        delay: 2,
      });
      scrollTl.to(
        this.$refs.offers,
        {
          y: '-100vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleHowToPay,
        {
          y: '41vh',
          duration: 6,
          opacity: 1,
        },
        '<',
      );
      // как оплачивать
      scrollTl.to(this.$refs.phoneBlock, {
        display: 'none',
      });
      scrollTl.to(
        this.$refs.titleHowToPay,
        {
          y: '-10vh',
          duration: 6,
          opacity: 0,
          delay: 2,
        },
        '<',
      );
      scrollTl.to(this.$refs.wrapTerminalAndPhone, {
        y: '-14vh',
        duration: 12,
      });
      scrollTl.to(
        this.$refs.paymentInstructions,
        {
          y: '-13vh',
          duration: 8,
        },
        '<+=5',
      );
      scrollTl.to(this.$refs.wrapTerminalAndPhone, {
        y: '-100vh',
        duration: 12,
        delay: 2,
      });
      scrollTl.to(
        this.$refs.paymentInstructions,
        {
          y: '-100vh',
          duration: 12,
        },
        '<',
      );
      // данные большой секрет
      scrollTl.to(
        this.$refs.dataBlock,
        {
          y: 0,
          left: 0,
          borderRadius: 0,
          duration: 12,
          width: '100%',
        },
        '<',
      );
      scrollTl.to(this.$refs.dataCard1, {
        duration: 7,
        y: '51vh',
      });
      scrollTl.to(
        this.$refs.dataCard2,
        {
          duration: 7,
          y: '16vh',
        },
        '<',
      );
      scrollTl.to(this.$refs.dataBlockTitle, {
        delay: 1,
        duration: 6,
        opacity: 0,
      });
      scrollTl.to(this.$refs.dataCard1, {
        duration: 9,
        y: '-50vh',
      });
      scrollTl.to(
        this.$refs.dataCard2,
        {
          duration: 9,
          y: '-50vh',
        },
        '<',
      );
      // вылет иконок и сбер прайм
      scrollTl.to(
        this.$refs.iconSber1,
        {
          x: '-67vw',
          y: '-34vh',
          duration: 7,
        },
        '< +=3',
      );
      scrollTl.to(
        this.$refs.iconSber2,
        {
          x: '-10vw',
          y: '-38vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber3,
        {
          x: '-78vw',
          y: '-6vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber4,
        {
          x: '-22vw',
          y: '-4vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.sberPrine,
        {
          x: '0',
          y: '-31vh',
          duration: 7,
        },
        '<+=1',
      );
      scrollTl.to(
        this.$refs.sberPrimeWhite,
        {
          x: '-100vw',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.subscribeBlock,
        {
          y: '-10vh',
          opacity: 1,
          duration: 6,
        },
        '<',
      );
      // сбер прайм и иконки улетают вверх
      scrollTl.to(this.$refs.subscribeBlock, {
        y: '-100vh',
        opacity: 1,
        duration: 6,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.iconSber1,
        {
          y: '-100vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber2,
        {
          y: '-100vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber3,
        {
          y: '-100vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.iconSber4,
        {
          y: '-100vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.sberPrine,
        {
          y: '-100vh',
          duration: 7,
        },
        '< += 1',
      );
      scrollTl.to(
        this.$refs.gradientSberPrime,
        {
          y: '18vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.titleSberPrime,
        {
          duration: 6,
          y: '-70vh',
        },
        '<',
      );
      scrollTl.to(
        this.$refs.descriptionOfSubscriptionBonuses,
        {
          y: '-9vh',
          duration: 8,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.advertising,
        {
          y: '-2vh',
          duration: 4,
        },
        '<',
      );
      scrollTl.to(this.$refs.titleSberPrime, {
        duration: 4,
        y: '-100vh',
        delay: 3,
      });
      scrollTl.to(
        this.$refs.descriptionOfSubscriptionBonuses,
        {
          y: '-100vh',
          duration: 9,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.advertising,
        {
          y: '10vh',
          duration: 4,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradientSberPrime,
        {
          x: '36vw',
          y: '40vh',
          duration: 7,
        },
        '<',
      );
      // как заказать стикер
      scrollTl.to(
        this.$refs.titleOrder,
        {
          y: '-44vh',
          duration: 6,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradient,
        {
          display: 'none',
        },
        '<',
      );
      scrollTl.to(this.$refs.titleOrder, {
        y: '-100vh',
        duration: 8,
        delay: 3,
      });
      scrollTl.to(
        this.$refs.descriptionOrder,
        {
          duration: 7,
          y: '-13vh',
        },
        '<',
      );
      scrollTl.to(this.$refs.descriptionOrder, {
        duration: 10,
        y: '-110vh',
      });
      scrollTl.to(
        this.$refs.qrCode,
        {
          y: '-3vh',
          duration: 7,
        },
        '<',
      );
      scrollTl.to(
        this.$refs.gradientSberPrime,
        {
          x: '110vw',
          y: '100vh',
          duration: 6,
        },
        '<',
      );
    },
    smootherSetup() {
      gsap.registerPlugin(ScrollTrigger);
      gsap.registerPlugin(ScrollSmoother);
      const userAgent = navigator.userAgent.toLowerCase();
      const isAndroid = userAgent.indexOf('android') > -1;
      const isIos = /iphone|ipad|ipod/.test(userAgent);

      if (isAndroid) {
        ScrollTrigger.config({
          ignoreMobileResize: true,
        });
        ScrollTrigger.normalizeScroll(false);
      } else if (isIos) {
        ScrollTrigger.config({
          ignoreMobileResize: false,
        });
        ScrollTrigger.normalizeScroll(false);
      } else {
        this.smoother = ScrollSmoother.create({
          smooth: 2,
          effects: true,
          ignoreMobileResize: true,
          normalizeScroll: false,
        });
      }
    },
  },
};
</script>

<style src="./start-animation.less" lang="less" />
