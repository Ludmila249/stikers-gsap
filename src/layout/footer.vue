<template>
  <footer class="footer">
    <div class="footer__container">
      <div class="footer__block-left">
        <p class="footer__text">
          &copy;&nbsp;1997&ndash;2023&nbsp;ПАО Сбербанк. Генеральная лицензия на&nbsp;осуществление
          банковских операций от&nbsp;11&nbsp;августа 2015&nbsp;года. Регистрационный
          номер&nbsp;&mdash; 1481.
        </p>
        <p class="footer__text">Россия, Москва, 117997, ул. Вавилова, 19</p>
        <a href="#" class="footer__text footer__text-link"
          >Политика обработки персональных данных</a
        >
      </div>
      <div class="footer__block-right">
        <div class="footer__block-call">
          <a href="#" class="footer__text footer__text-tel">+7 (495) 500-55-50</a>
          <p class="footer__text">Для звонков из&nbsp;любой точки мира</p>
        </div>
        <div>
          <a href="#" class="footer__text footer__text-tel">900</a>
          <p class="footer__text">Бесплатно с&nbsp;мобильного по&nbsp;РФ</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'footer-block',
};
</script>

<style lang="less">
@import '../styles/helpers';

.footer {
  width: 100%;
  padding: 50px 0;
  color: #fff;
  background-color: #000;

  &__container {
    display: flex;
    align-items: flex-start;
    margin: 0 auto;
    width: 80%;

    @media @tablet {
      width: 90%;
      flex-direction: column;
    }
  }

  &__block-right {
    max-width: 500px;
    width: 100%;
    display: flex;

    @media @tablet {
      max-width: 100%;
      order: 1;
      margin-bottom: 20px;
    }

    @media @mobile {
      display: block;
    }
  }

  &__block-left {
    padding-right: 20px;

    @media @tablet {
      order: 2;
      padding-right: 0;
    }
  }

  &__text {
    font-weight: 400;
    font-size: 1.0625rem;
    line-height: 120%;
    color: #c2c2c2;
    padding-bottom: 12px;
  }

  &__text-tel {
    display: block;
  }

  &__block-call {
    padding-right: 20px;
  }

  &__text-link {
    text-decoration: underline;
  }
}
</style>
