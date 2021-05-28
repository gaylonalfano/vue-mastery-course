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
      isPurple: false,
      selectedColor: "",
      size: 150,
      rotationDegrees: 30,
      mode: 1,
      showInputs: false,
      showCircle: false,
      showUrls: false,
      birds: ["Pigeons", "Eagles", "Doves", "Parrots"],
      people: [
        { name: "John", age: 20, message: "Hello world!" },
        { name: "Rick", age: 18, message: "I like pie." },
        { name: "Amy", age: 33, message: "Skydiving rocks!" },
      ],
    };
  },
  methods: {
    increment() {
      return this.age++;
    },
    decrement() {
      return this.age--;
    },
    updateLastName(message, event) {
      // NOTE Can use @input.prevent instead
      // event.preventDefault()
      // console.log(message);
      this.lastName = event.target.value;
    },
    updateMiddleName(event) {
      // NOTE Must pass $event as arg inside template else event is undefined
      // console.log(event);
      this.middleName = event.target.value;
    },
    moveToBottom(event) {
      // Move first item in Array to last position
      const first = this.people.shift();
      this.people.push(first);
    },
  },
  computed: {
    fullName() {
      console.log("fullName() COMPUTED PROPERTY was called");
      return `${this.firstName} ${
        this.middleName
      } ${this.lastName.toUpperCase()}`;
    },
    circleCSSClasses() {
      // NOTE Can add inline but turning into a computed prop is better
      // in cases where you have multiple classes to bind via :class
      return { purple: this.isPurple };
    },
    circleStyleObject() {
      return {
        width: this.size + "px",
        height: this.size + "px",
        lineHeight: this.size + "px",
        transform: `rotate(${this.rotationDegrees}deg)`,
      };
    },
  },
  watch: {
    // Watchers can be async (computed is only sync!)
    // This object contains a list of props to watch (data and computed props)
    // NOTE The key name must match the name of prop inside the Vue instance
    age(newVal, oldVal) {
      // We can do whatever we want. Don't have to return a value.
      // Let's revert age to original value after 3 seconds (async!)
      setTimeout(() => {
        this.age = 20;
      }, 3000);
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
