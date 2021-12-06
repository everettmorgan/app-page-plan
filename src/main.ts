import { createApp, App as CreateApp } from 'vue';
import App from './App';

let app: CreateApp;

export function init(opts: { container: any, props: any }) {
  app = createApp(App, opts.props);
  app.mount(opts.container);
}

export function clean() {
  app.unmount();
}

if (process.env.NODE_ENV === 'development') {
  createApp(App, {
    name: 'Columbo',
    subtitle: 'Start investigating',
    price: '5',
    term: 'monthly',
    currencySymbol: '$',
    features: '<b>Up to 200</b> indexed pages, <b>Up to 500</b> searches, Results refresh with every republish, <b>Weekly</b> recrawls, And much more!',
  }).mount('#app');
}
