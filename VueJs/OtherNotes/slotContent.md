## non-named slots

### In the parent component

```javascript
<template>
  <div>
    <someComp>
      <h2>Component Title</h2>
      <p>Component Text</p>
    </someComp>
  </div>
</template>
```

### In the child component

```javascript
<template>
  <div>
    <slot />
  </div>
</template>
```

### Result in the child comp

```javascript
<template>
  <div>
    <h2>Component Title</h2>
    <p>Component Text</p>
  </div>
</template>
```

## Named slots

### In the parent component

```javascript
<template>
  <div>
    <someComp>
      <h2 slot='title'>Component Title</h2>
      <p slot='content'>Component Text</p>
    </someComp>
  </div>
</template>
```

### In the child component

```javascript
<template>
  <div>
    <slot name='title' />
  </div>
  <div>
    <slot name='content' />
  </div>
</template>
```

### Result in the child comp

```javascript
<template>
  <div>
    <h2>Component Title</h2>
  </div>
  <div>
    <p>Component Text</p>
  </div>
</template>
```

## named and non-named slots

### In the parent component

```javascript
<template>
  <div>
    <someComp>
      <h2 slot='title'>Component Title</h2>
      <p>Component Text 1</p>
      <p>Component Text 2</p>
    </someComp>
  </div>
</template>
```

### In the child component

```javascript
<template>
  <div>
    <slot name='title' />
  </div>
  <div>
    <slot />
  </div>
</template>
```

### Result in the child comp

```javascript
<template>
  <div>
    <h2>Component Title</h2>
  </div>
  <div>
    <p>Component Text 1</p>
    <p>Component Text 2</p>
  </div>
</template>
```
