### Importing/creating the Vue event bus

```javascript
// This has to be on top of vue object in
// the main js file, for correct execution.
export const eventBus = new Vue();
```

### Importing the event bus in each component

```javascript
import { eventBus } from 'main.js';
```

### Event emitting

```javascript
eventBus.$emit('ageWasEdited', this.userAge);
```

### Event Listening

```javascript
created() {
  eventBus.$on('ageWasEdited', (data) => {
    this.userAge = data;
  });
}
```

### Event Bus function - creating functions

```javascript
export const eventBus = new Vue({
  methods: {
    changeAge(age) {
      this.$emit('ageWasEdited', age);
    }
  }
})'
```

### Event Bus function - using the functions

```javascript
eventBus.ChangeAge(this.userAge);
```
