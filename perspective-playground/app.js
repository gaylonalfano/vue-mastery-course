const vm = Vue.createApp({
  data() {
    return {
      perspective: 100,
      rotateX: 0,
      rotateY: 0,
      rotateZ: 0,
    };
  },
  computed: {
    boxStyleObject() {
      return {
        transform: `perspective(${this.perspective}px) rotateX(${this.rotateX}deg) rotateY(${this.rotateY}deg) rotateZ(${this.rotateZ}deg)`,
      };
    },
  },
  methods: {
    resetBox() {
      this.perspective = 100;
      this.rotateX = 0;
      this.rotateY = 0;
      this.rotateZ = 0;
    },
    copyToClipboard() {
      // Want to auto-copy the properties to the Clipboard without the
      // user having to do anything, simply just click 'copy' button.
      // NOTE Using document.execCommand() allows us perform user actions
      // on the browser (e.g., copy, cut, paste).
      const copiedProperties = {
        perspective: this.perspective,
        rotateX: this.rotateX,
        rotateY: this.rotateY,
        rotateZ: this.rotateX,
      };
      // NOTE Steps to achieve this:
      // 1. Create a new textbox
      const el = document.createElement("textarea");
      // 2. Make the textarea readonly so user cannot modify values
      el.setAttribute("readonly", "");
      // 3. Hide the textarea from view
      el.style.position = "absolute";
      el.style.left = "-9999px";
      // 4. Prefill the textbox with the CSS properties as STRING to copy
      // el.value = `transform: ${copiedProperties}`;
      // NOTE Didn't have to create copiedProperties object!
      el.value = `transform: ${this.boxStyleObject.transform}`;
      // 5. Insert our new textarea element into the document
      document.body.appendChild(el);
      // 6. Force browser to select contents of this new textbox
      el.select();
      // 7. Execute execCommand('copy') action
      document.execCommand("copy");
      // 8. Remove the element now that we've copied its contents
      document.removeChild(el);
    },
  },
}).mount("#app");
