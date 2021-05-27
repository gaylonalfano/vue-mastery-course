// First App
// NOTE Common to assign to 'vm' (Vue Model)
const vm = Vue.createApp({
  data() {
    return {
      firstName: "First",
      middleName: "",
      lastName: "App",
      url: "https://google.com",
      rawUrl: '<a href="https://google.com" target="_blank">Google</a>',
      age: 20,
    };
  },
  methods: {
    fullName() {
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
    increment() {
      return this.age++;
    },
    decrement() {
      return this.age--;
    },
    updateLastName(message, event) {
      // NOTE Can use @input.prevent instead
      // event.preventDefault()
      console.log(message);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      // NOTE Must pass $event as arg inside template else event is undefined
      console.log(event);
      console.log(this.middleName);
      this.middleName = event.target.value;
    },
  },
}).mount("#app");

// Change the data prop value after two seconds
// setTimeout(() => {
//   // NOTE Vue Proxies allow you to access data directly on vm
//   // With a Proxy: vm.firstName is actually:
//   // get firstName: () => rawData[key]
//   // set firstName: () => { }
//   vm.firstName = "Bob";
//   // Without a Proxy
//   // vm.$data.firstName = "Bob";
// }, 2000);

// Second App - Good for widgets but not common
// Vue.createApp({
//   data() {
//     return {
//       firstName: "Second",
//       lastName: "App",
//     };
//   },
// }).mount("#apptwo");
