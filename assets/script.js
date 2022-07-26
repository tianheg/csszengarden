const { createApp } = Vue;
createApp({
  data() {
    function returnDays(day) {
      let days = [];
      const first30 = './days/first-30-days/';
      for (let i = 1; i <= day; i++) {
        let dayX = {};
        dayX.url = first30 + i;
        dayX.day = i;
        days.push(dayX);
      }
      return days;
    }
    return {
      weeks: ['一', '二', '三', '四', '五', '六', '日'],
      days: returnDays(7),
    };
  },
}).mount('#app');
