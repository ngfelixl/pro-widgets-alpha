# Angular Pro Widgets

See the [documentation](https://ngfelixl.github.io/pro-widgets)

<img src="../../img/demo.PNG" alt="Widgets" width="400px">

Currently available widgets:

- Gauge
- Digital Gauge
- Analog Stick

more widgets coming soon. Widget ideas welcome.

## Installation 

```
npm install pro-widgets
```

## Import the module and use

```typescript
import { ProModule } from 'pro-widgets';

@NgModule({
  import: [ ProModule ]
})
export class AppModule {}
```

Use the widget in your component template by

```html
<pro-gauge [value]="stream$ | async"></pro-gauge>
<pro-analog-stick></pro-analog-stick>
```

## Get in touch

[![twitter](https://img.shields.io/badge/twitter-%40ngfelixl-blue.svg?logo=twitter)](https://twitter.com/intent/follow?screen_name=ngfelixl)
[![github](https://img.shields.io/badge/github-%40ngfelixl-blue.svg?logo=github)](https://github.com/ngfelixl)

Hi, I am Felix,
Software developer and Angular, NgRX contributor

![avatar](https://avatars2.githubusercontent.com/u/24190530?s=200&v=4)

If you like this library, think about giving it a star or follow me on twitter or github or check out my personal
the [website](https://felixlemke.com).