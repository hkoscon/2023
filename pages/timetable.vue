<template>
  <main class="timetablePage">
    <page-banner title="Schedule" />
    <div class="container">
      <schedule-table
        v-if="days.length > 0"
        :days="days"
      />
    </div>
  </main>
</template>

<script>
import fetchTopic from '../utils/fetchTopic';

export default {
  name: 'TimetablePage',
  head: {
    title: 'Schedule | Hong Kong Open Source Confernce 2023',
    meta: [
      { hid: 'og:title', property: 'og:title', content: 'Schedule | Hong Kong Open Source Conference 2023' },
      { hid: 'description', name: 'description', content: 'The timetable for the Hong Kong Open Source Conference 2023.' },
    ],
  },
  components: {
    ScheduleTable: () => import('~/components/timetable/ScheduleTable.vue'),
    PageBanner: () => import('~/components/PageBanner.vue'),
  },
  data() {
    return {
      days: [],
    };
  },
  asyncData() {
    return fetchTopic();
  },
};
</script>
