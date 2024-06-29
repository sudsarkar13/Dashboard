# DASHBOARDLEARN1

This folder contains the frontend and backend folders of the project.

## Ebook Library Frontend

Setting up first learning dashboard with `NextJS`:

```sh
npx create-next-app@latest my-app --typescript --tailwind --eslint
```

After configuring the nextjs app settings these following processes will occur automatically.

```sh
✔ Would you like to use `src/` directory? … No / Yes
✔ Would you like to use App Router? (recommended) … No / Yes
✔ Would you like to customize the default import alias (@/*)? … No / Yes

Creating a new Next.js app in /DIR
Using npm.

Initializing project with template: default-tw 


Installing dependencies:
- react
- react-dom
- next

Installing devDependencies:
- typescript
- @types/node
- @types/react
- @types/react-dom
- postcss
- tailwindcss
- eslint
- eslint-config-next

--Example Data
added 361 packages, and audited 362 packages in 2m

137 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
Success! Created my-app at /DIR
```

Now setting up `Shadcn/UI` with configuration template

```sh
npx shadcn-ui@latest init
```

### Configure components.json

You will be asked a few questions to configure `components.json`:

Follow the given exact methods to sucessfully configure the app

```sh
✔ Which style would you like to use? › Default
✔ Which color would you like to use as base color? › Neutral
✔ Would you like to use CSS variables for colors? … no / yes

✔ Writing components.json...
✔ Initializing project...
✔ Installing dependencies...

Success! Project initialization completed. You may now add components.
```

### Fonts

Now we need to setup out font style inside the project, as I love the `Ubuntu Mono` font style, I will be providing an example to setup `next/font/google` in your `nextjs` app.

1. Create a `types` folder inside `src` or in your `project directory`.

As I am not using `App Router` instead using `src` as directory alias, the folder structure should be like this `src/types`.

2. In `src/types` create afile `font.ts`

And paste the following code:

```ts
import { Ubuntu, Ubuntu_Mono, Ubuntu_Condensed } from "next/font/google";

export const ubuntu = Ubuntu({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  style: ["normal"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "700"],
});

export const ubuntuMono = Ubuntu_Mono({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  style: ["normal"],
  variable: "--font-sans",
  weight: ["400", "700"],
});

export const ubuntuCondensed = Ubuntu_Condensed({
  subsets: [
    "cyrillic",
    "cyrillic-ext",
    "greek",
    "greek-ext",
    "latin",
    "latin-ext",
  ],
  style: ["normal"],
  variable: "--font-sans",
  weight: ["400"],
});

```

3. Import the font inside the project:

In `pages/index.tsx` import these

```tsx
import { ubuntuMono } from "@/types/font/Font";
import Head from "next/head";

export default function Home() {
 return (
  <main className={`min-h-screen ${ubuntuMono.className}`}>
   <Head>
    <title>Home | Dashboard</title>
    <meta name='description' content='Home | Dashboard' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
   </Head>
   <div className={``}>
    <h1 className='text-2xl text-center font-[600]'>
     Welcome to Dashboard
    </h1>
    <div className="flex justify-center">
     <Button>Click Me</Button>
    </div>
   </div>
  </main>
 );
}

```

Then in `_document.tsx` insert the below lines:

```tsx
import { Html, Head, Main, NextScript } from "next/document";
import { ubuntuMono as fontSans } from "@/types/font/Font";
import { cn } from "@/lib/utils";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable,
        )}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}

```

This ensures that we have injected the font inside the project properly.

### That's it

You can now start adding components to your project.

```sh
npx shadcn-ui@latest add button
```

The command above will add the `Button` component to your project. You can then import it like this:

```tsx
import { Button } from "@/components/ui/button";
import { ubuntuMono } from "@/types/font/Font";
import Head from "next/head";

export default function Home() {
 return (
  <main className={`min-h-screen ${ubuntuMono.className}`}>
   <Head>
    <title>Home | Dashboard</title>
    <meta name='description' content='Home | Dashboard' />
    <meta name='viewport' content='width=device-width, initial-scale=1' />
   </Head>
   <div className={``}>
    <h1 className='text-2xl text-center font-[600]'>
     Welcome to Dashboard
    </h1>
    <div className="flex justify-center">
     <Button>Click Me</Button>
    </div>
   </div>
  </main>
 );
}

```

### Prettier code formatter

Formatting command:

```sh
npx prettier . --write
or
prettier . --write  ---use this only if prettier is installed locally inside the
 project or globally inside node environment.
```

Checking command for unformatted files:

```sh
npx prettier . --check
or
prettier . --check  ---use this only if prettier is installed locally inside the
 project or globally inside node environment.
```

### Layout (Pages router method)

Let us understand how to declare custom type layouts in `NextJs`