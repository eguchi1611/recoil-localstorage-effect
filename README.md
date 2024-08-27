# recoil-localstorage-effect

## Introduction

This is a library that uses Recoil to persist state in LocalStorage.

There is an example of [Local Storage Persistence](https://recoiljs.org/docs/guides/atom-effects#local-storage-persistence) in Recoil’s Docs. However, in SSG environments like Next.js, a Hydration Error may occur. This library can help avoid that. It returns a default value until the component is mounted.

## Installation

```shell
npm install recoil-localstorage-effect
```

```shell
yarn add recoil-localstorage-effect
```

```shell
pnpm add recoil-localstorage-effect
```

## Usage

```tsx
// layout.tsx
import {
  LocalStorageEffectProvider,
  localStorageEffect,
} from "recoil-localstorage-effect";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <LocalStorageEffectProvider>
          <RecoilRoot>{children}</RecoilRoot>
        </LocalStorageEffectProvider>
      </body>
    </html>
  );
}

// atom.ts
export const sampleState = {
  key: "sampleState",
  default: "default value",
  effects: [localStorageEffect("localstorage_key")],
};

// Component.tsx
export default function Component() {
  const [state, setState] = useRecoilState(sampleState);

  const handleChange = (e) => {
    setState(e.target.value);
  };

  return <input type="text" value={state} onChange={handleChange} />;
}
```

## License

recoil-localstorage-effect is licensed under the [MIT License](https://github.com/eguchi1611/recoil-localstorage-effect/blob/main/LICENSE)
