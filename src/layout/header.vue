<template>
  <header class="header">
    <div class="header__wrap-logo">
      <div class="header__wrap-sber">
        <img class="header__logo-sber" src="static/logo-sber.svg" alt="Логотип сбера" />
        <img class="header__logo-sber-white" src="static/logo-sber-white.svg" alt="Логотип сбера" />
      </div>
      <img
        class="header__logo-multfilm header__logo-multfilm_desktop"
        src="static/logo-multfilm.svg"
        alt="Логотип сбера"
      />
      <img
        class="header__logo-multfilm header__logo-multfilm_mobile"
        src="static/logo-multfilm-mobile.svg"
        alt="Логотип сбера"
      />
    </div>
    <a class="header__link" href="#">Хочу стикер</a>
  </header>
</template>

<script>
export default {
  name: 'header-block',
};
</script>

<style lang="less">
@import '../../src/styles/helpers.less';

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 96vw;

  @media @tablet {
    background-color: #fff;
    padding: 20px 30px;
    width: 100vw;
    border-bottom: 1px solid #f0f0f0;
  }

  &__wrap-logo {
    display: flex;
    align-items: center;
  }

  &__wrap-sber {
    position: relative;
  }

  &__logo-sber {
    width: 250px;

    @media @tablet {
      width: 200px;
    }
  }

  &__logo-sber-white {
    position: absolute;
    top: 0;
    left: 0;
    width: 250px;
    opacity: 0;

    @media @tablet {
      width: 200px;
    }
  }

  &__logo-multfilm {
    width: 320px;
    margin-left: 15px;

    &_desktop {
      display: block;

      @media @tablet {
        display: none;
        width: 250px;
      }
    }

    &_mobile {
      display: none;

      @media @tablet {
        display: block;
        width: 120px;
      }
    }
  }

  &__link {
    display: block;
    padding: 12px 24px;
    border-radius: 22px;
    background: #353f47;
    backdrop-filter: blur(12px);

    color: #fff;
    text-align: center;
    font-size: 16px;
    font-weight: 600;
    line-height: 125%;
  }
}
</style>
