#### [Components](/components.md)

# Emits

Emits are the output of a component. They are used to pass data from the component to the parent. These emits are immutable and can't be changed by the component itself.

For defining emits there are a few best practices to follow.

## Typescript constructor

Use the Typescript constructor to define your emits. This will give you the best intellisense and type checking.

```typescript
const emit = defineEmits<{
  'change': [value: Person],
}>();
```

## Prefix them when they overlap with existing events

When you have a component that emits an event that is already used by the browser, you should prefix it. This will prevent conflicts with the browser.

```typescript
const emit = defineEmits<{
  'component:click': [value: Person],
  'row:click': [value: Person],
}>();
```

## Use verbs

Use verbs to name your emits. This will make it clear what the emit is for.

```typescript
const emit = defineEmits<{
  'change': [value: Person],
  'click': [value: Person],
}>();
```

## Handling emits in the parent

When handling emits in the parent, you should always use the `on` or `handle` prefix.

This will make it clear that you are handling an emit.

```vue
<template>
  <FormSelect @component:change="handleSelectChange" />
  <EmployeeTable @row:click="onEmployeeClick" />
</template>
```
