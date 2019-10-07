### Emitting event up the chain

This emits event up to the parent element. Also, default behaviour is disabled.

```javascript
@click.prevent="$emit('showReg')"
```

### Receiving event from child

This receives event from child element, then triggers toggleRegBox method.

```javascript
@showReg="toggleRegBox()"
```

### Emitting function prop

```javascript
props: {
  funcName: function
}
```

```javascript
@click.prevent="$emit('funcName')"
```
