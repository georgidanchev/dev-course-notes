### non-validated props

```javascript
props: ['prop1', 'prop2', 'prop3', 'prop4'];
```

### Validating props

```javascript
props: {
  // Prop has to be a string.
  prop1: String,
  // Can be string or array.
  prop2: [String, Array]
  // Has to be a string and has
  // default value if nothing is
  // passed initially.
  prop3: {
    type: String,
    default: 'Sunny'
  },
  // Has to be string and has
  // to be passed for the comp
  // to be attached.
  prop4: {
    type: String,
    required: true
  }
}
```
