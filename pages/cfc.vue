<style lang="scss">
  .cfc {
    &__container {
      margin-top: 2rem;
      margin-bottom: 2rem;
    }
    &__list {
      list-style-type: none;
      padding: 0;
      margin: 1.5em 0;
    }
    &__list__item {
      display: block;
      padding: 0.6em 1em;
      background-color: rgba(0, 0, 0, 0.1);
    }
    &__list__item:nth-child(even) {
      background-color: rgba(0, 0, 0, 0.05);
    }
  }
</style>

<template>
  <main class="section">
    <div class="container cfc__container">
      <h1 class="title is-3">
        Call for Communities Result
      </h1>
      <p>
        Thanks for the overwhelming responses from open source communities.
      </p>
      <p>
        The following communities would participate in HKOSCon 2021 (in alphabetic order):
      </p>
      <ul class="cfc__list">
        <li
          v-for="community in communities"
          :key="community.name"
          class="cfc__list__item"
        >
          {{ community.name }}
        </li>
      </ul>
    </div>
  </main>
</template>

<script>
export default {
  name: 'CallForCommunitiesResult',
  head: {
    title: 'Call for Communities Result | Hong Kong Open Source Conference 2021',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Call for Communities Result | Hong Kong Open Source Conference 2021' },
    ],
  },
  data() {
    return {
      communities: [
        { name: 'Agile HK' },
        { name: 'COSCUP' },
        { name: 'GDG (Google Developer Group)' },
        { name: 'FtO (Facing to Ocean)' },
        { name: 'G0Vhk' },
        { name: 'Open Culture Station' },
        { name: 'Cloud Native Taiwan User Group' },
        { name: 'MySQL community' },
      ],
    };
  },
};
</script>
