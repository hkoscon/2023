<style lang="scss">
  .homePage {
    &__cover {
      height: 100vh;
      background-repeat: no-repeat;
      background-color: #fff;
      min-height: 750px;
      background-size: cover;
      background-attachment: fixed;
      background-position: center 0;
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
</style>

<template>
  <main class="homePage">
    <div
      :style="{backgroundImage}"
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
          </span> 12 - 13 Jun, 2020 (Fri - Sat)
        </p>
        <p class="has-text-primary homePage__cover__text">
          <span class="icon">
            <i class="material-icons">
              add_location
            </i>
          </span> Function Room 1-3, Cyberport 3, 100 Cyberport Road, Telegraph Bay
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
    <section class="section-venue">
      <iframe class="section-venue__map" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3692.4869674168895!2d114.1297630154357!3d22.2595360499973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3403fff0012954c9%3A0xaa15512454b339f3!2z5pW456K85rivMyDluqc!5e0!3m2!1szh-TW!2shk!4v1591107534439!5m2!1szh-TW!2shk" width="600" height="450" frameborder="0" style="border:0;" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
      <div class="section-venue__transport">
        <div class="section-venue__transport__type">
          <h3>Bus</h3>
          <ul>
            <li class="route">
              <span class="number">New World First Bus 30X</span>
              <span class="via">via Pok Fu Lam, Wah Fu</span>
            </li>
            <li class="route">
              <span class="number">CityBus 73</span>
              <span class="via">via Repulse Bay, Wong Chuk Hang, Aberdeen, Wah Fu</span>
            </li>
            <li class="route">
              <span class="number">New World First Bus 970</span>
              <span class="via">via Sham Shui Po, Prince Edward, Mong Kok, Yau Ma Tei, Jordan</span>
            </li>
          </ul>
        </div>
        <div class="section-venue__transport__type">
          <h3>Minibus</h3>
          <ul>
            <li class="route route-minibus"><span class="number">10 / 10P / 105 Causeway Bay</span><span class="via">Jaffe Road</span></li>
            <li class="route route-minibus"><span class="number">58 Aberdeen - Cyberport - Kennedy Town</span><span class="via">North Street</span></li>
            <li class="route route-minibus"><span class="number">69 Quarry Bay</span><span class="via">Hoi Chak Street</span></li>
            <li class="route route-minibus"><span class="number">69A Aberdeen Main Road</span><span class="via">outside St. Peter Secondary School</span></li>
            <li class="route route-minibus"><span class="number">69X Causeway Bay</span><span class="via">Lockhart Road</span></li>
          </ul>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'HomePage',
  data() {
    return {
      backgroundImage: `url(${process.env.publicPath}/images/bg.jpg)`,
    };
  },
};
</script>
