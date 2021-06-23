<style lang="scss">
  @keyframes flash {
    from {
      opacity: 1;
    }
    50% {
        opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .homePage {
    &__next-button-wrapper {
      display: block;
      position: fixed;
      bottom: 0;
      right: 0;
      width: 100vw;
      transition: 0.5s opacity;
      animation: flash 0.6s normal forwards ease-in-out;
      animation-iteration-count: 3;
      &.hidden {
        opacity: 0 !important;
        pointer-events: none;
        animation: none;
      }
      &__next-button {
        display: block;
        position: absolute;
        text-align: center;
        font-size: 1.5em;
        line-height: 1.5em;
        width: 2.5em;
        height: 2.5em;
        padding: 0.5em;
        border-radius: 50%;
        background-color: rgba(255, 255, 255, 1);
        right: calc(50vw - 1.5em);
        bottom: 0.5em;
        z-index: 20;
      }
    }
    &__cover {
      height: 100vh;
      background-repeat: no-repeat;
      background-color: #fff;
      min-height: 750px;
      background-size: cover;
      background-attachment: fixed;
      background-position: center 0;
      background-image: url('~assets/images/bg.jpg');
      padding: 0 !important;
      &__inner {
        padding: .75rem;
        background-color: rgba(0,0,0,.7);
        height: 100%;
        text-align: center;
      }

      &__text {
        margin-top: 1rem;
        > .icon {
          vertical-align: middle;
        }
      }
    }

    &__logo {
      text-align: center !important;
      padding-top: 10vh !important;
      &__image {
        display: initial !important;
        position: relative !important;
        width: 35vh !important;
        height: auto !important;
      }
    }

    &__link {
      max-width: 30vh;
      @include media("<=tablet") {
        max-width: 40vh;
      }
      display: inline-flex !important;
      margin: 1rem .5rem 0;
    }

    &__social {
      margin-top: 1rem;
      &__link {
        background-color: rgba(255, 255, 255, .75);
        border-radius: 50%;
        margin: .5em;
        width: 2.5em;
        line-height: 2.5em;
        box-shadow: 1px 1px 10px rgba(0,0,0,.5);
        will-change: color,background-color;
        transition: .5s;
        display: inline-block;
        color: $theme-blue;
        &:hover {
          color: $white;
          background-color: $theme-blue;
        }
      }
    }

    &__content {
      padding-top: 2rem;
      padding-bottom: 2rem;
    }

    &__tickets {
      flex-direction: row;
      justify-content: space-around;
      margin-top: 3rem;

      @include media("<=tablet") {
        flex-basis: 100%;
        flex-shrink: 1;
        flex-wrap: wrap;
      }
    }

    &__ticket {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      flex-basis: 40%;
      @include media("<=tablet") {
        flex-basis: 100%;
      }
      margin: 1rem;

      ul {
        margin-bottom: 1rem;
        > li:before {
          content: "done";
          font-family: 'Material Icons';
          margin-right: .5em;
          color: #0a0;
        }
      }
    }
  }
  .section-venue {
    width: 100vw;
    &__transport {
      min-height: 30vh;
      height: auto;
      padding: 1.5em 0;
      overflow: visible;
      width: 100%;
      &__type {
        margin: 2em auto;
        width: 80vw;
        max-width: 690px;
        h3 {
          font-size: 1.2em;
          border-bottom: solid 1px rgba(0, 0, 0, 0.4);
        }
        ul {
          li.route {
            display: flex;
            .number {
              width: 15em;
              font-weight: bold;
            }
            .via {
              flex: 1;
              color: rgba(0, 0, 0, 0.5);
            }
          }
          li.route-minibus {
            .number {
              width: 24em;
            }
          }
        }
      }
    }
    @media (max-width: 690px) {
      .section-venue__transport__type {
        ul {
          li.route, li.route-minibus {
            display: block;
            margin: 0.5em 0;
            .number {
              display: block;
              width: 100%;
            }
            .via {
              display: block;
              width: 100%;
            }
          }
        }
      }
    }
    &__map {
      height: 70vh;
      width: 100%;
    }
  }
  .cfp {
    &__cover {
      height: 100vh;
      background-repeat: no-repeat;
      background-color: #05a3fa;
      color: rgba(255, 255, 255, 0.8);
      min-height: 750px;
      background-size: cover;
      background-position: center 0;
      padding: 0 !important;
      &__inner {
        padding: .75rem;
        background-color: rgba(0,0,0,.5);
        height: 100%;
        text-align: center;
      }

      &__text {
        margin-top: 0.5rem;
        max-width: 600px;
        margin-left: auto;
        margin-right: auto;
        text-align: justify;
        > .icon {
          vertical-align: middle;
        }
        &.greeting {
          text-align: center;
          margin-bottom: 1rem;
          font-size: 2rem;
          color: rgba(255, 255, 255, 1);
        }
        &.actions {
          text-align: center;
        }
      }
    }

    &__keyvisual {
      text-align: center !important;
      padding-top: 14vh !important;

      &__image {
        display: initial !important;
        position: relative !important;
        width: 45vh !important;
        height: auto !important;

/*
        margin: 20vh auto 0;
        width: 50vh !important;
        height: auto !important;
        */
      }
    }
  }
</style>

<template>
  <main class="homePage">
    <div class="homePage__next-button-wrapper">
      <a
        @click="scrollNext"
        class="homePage__next-button-wrapper__next-button"
      >⇣</a>
    </div>
    <div
      id="home-top"
      class="tile is-parent is-transparent homePage__cover"
    >
      <div class="tile is-child homePage__cover__inner">
        <figure class="image is-square homePage__logo">
          <img
            src="https://hkoscon.org/logo.png"
            class="homePage__logo__image"
          >
        </figure>
        <p class="has-text-primary homePage__cover__text">
          <span class="icon">
            <i class="material-icons">
              calendar_today
            </i>
          </span> 17 Jul, 2021 (Fri)
        </p>
        <p class="has-text-primary homePage__cover__text">
          <span class="icon">
            <i class="material-icons">
              add_location
            </i>
          </span> Virtual
        </p>
        <div class="homePage__social">
          <a
            href="https://info.hkoscon.org/"
            class="homePage__social__link"
            target="_blank"
          >
            <span class="icon">
              <i class="fa fa-info" />
            </span>
          </a>

          <a
            href="https://facebook.com/hkoscon/"
            class="homePage__social__link"
            target="_blank"
          >
            <span class="icon">
              <i class="fa fa-facebook" />
            </span>
          </a>

          <a
            href="https://twitter.com/hkoscon/"
            target="_blank"
            class="homePage__social__link"
          >
            <span class="icon">
              <i class="fa fa-twitter" />
            </span>
          </a>

          <a
            href="https://www.linkedin.com/company/hkoscon"
            target="_blank"
            class="homePage__social__link"
          >
            <span class="icon">
              <i class="fa fa-linkedin" />
            </span>
          </a>

          <a
            href="mailto:conference@opensource.hk"
            class="homePage__social__link"
          >
            <span class="icon">
              <i class="fa fa-envelope" />
            </span>
          </a>
        </div>
      </div>
    </div>
    <!--
    <div
      id="home-cfp"
      class="tile is-parent is-transparent cfp__cover"
    >
      <div class="tile is-child cfp__cover__inner">
        <figure class="image is-square cfp__keyvisual">
          <a
            href="http://bit.ly/hkoscon2021cfp"
            target="_blank"
          >
            <img
              src="~assets/images/cfp-2021.jpg"
              class="cfp__keyvisual__image"
            >
          </a>
        </figure>
        <p class="cfp__cover__text greeting">
          Hello World~~~
        </p>
        <p class="cfp__cover__text">
          Hong Kong Open Source Conference will held on 17 July
          2021 as webinar format. For now, we are calling for proposal to any
          open technology topics. We are looking forward your topics as a
          speaker this year!
        </p>
        <p class="cfp__cover__text">
          OSHK, participating communities and HKOSCon are inviting you to
          submit proposals to HKOSCon 2021. You may propose a talk ( Regular
          25mins / Short 15mins )
        </p>
        <p class="cfp__cover__text actions">
          <a
            class="button"
            href="http://bit.ly/hkoscon2021cfp"
            target="_blank"
          >
            Count me in!
          </a>
        </p>
      </div>
    </div>
    -->
  </main>
</template>

<script>
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  const result = rect.top <= (window.innerHeight || document.documentElement.clientHeight)
    || rect.bottom <= 0;
  return result;
}
function getAfterFirst(check, elements) {
  return elements[elements.findIndex(check) + 1] || false;
}
export default {
  name: 'HomePage',
  data() {
    return {
    };
  },
  mounted() {
    this.toggleNextButtonVisibility();
    window.addEventListener('scroll', this.toggleNextButtonVisibility);
  },
  destroyed() {
    window.removeEventListener('scroll', this.toggleNextButtonVisibility);
  },
  methods: {
    toggleNextButtonVisibility() {
      const buttonWrapper = document.querySelector('.homePage__next-button-wrapper');
      const last = Array.from(document.querySelectorAll('.homePage > div.tile')).pop();
      if (isInViewport(last)) {
        buttonWrapper.classList.add('hidden');
      } else {
        buttonWrapper.classList.remove('hidden');
      }
    },
    scrollNext() {
      const elements = Array.from(document.querySelectorAll('.homePage > div.tile'));
      const next = getAfterFirst(isInViewport, elements);
      if (next !== false) {
        next.scrollIntoView({
          behavior: 'smooth',
        });
      }
    },
  },
};
</script>
